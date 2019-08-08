var http = require('http').createServer(handler); //require http server, and create server with function handler()
var fs = require('fs'); //require filesystem module
var io = require('socket.io')(http) //require socket.io module and pass the http object (server)
var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
const gpio_pins = [9, 11, 22, 5, 6, 13, 19, 26];
var insf = [];

gpio_pins.forEach(function(value){
	insf[gpio_pins.indexOf(value)] = new Gpio(value, 'out');
});


http.listen(8080); //listen to port 8080
console.log('Go to 127.0.0.1:8080 or YourIP:8080');
function handler (req, res) { //create server
  fs.readFile(__dirname + '/index.html', function(err, data) { //read file index.html in public folder
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'}); //display 404 on error
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'}); //write HTML
    res.write(data); //write data from index.html
    return res.end();
  });
}

// make connection with user from server side
io.sockets.on('connection', function (socket) {// WebSocket Connection
  socket.on('relay', function(data) { //get Relay switch status from client
  	console.log(data.button, data.status);
  	if (data.button<9){
  	var pin_status = insf[data.button-1].readSync();
  	if (!pin_status) { //only change Relay if status has changed
    	console.log('Relay', data);
    	// socket.emit('newMessage', 'Message'); 	  
    	insf[data.button-1].writeSync(data.status); //turn Relay on or off
    }else{
    	console.log('Relay', data.button, 'Off');
    	insf[data.button-1].writeSync(0); //turn Relay on or off;
  	}
  }
  });
});

process.on('SIGINT', function () { //on ctrl+c
	insf.forEach(function(value){
		value.writeSync(0); // Turn Relay off
	  	value.unexport(); // Unexport Relay GPIO to free resources		
	});
  process.exit(); //exit completely
});