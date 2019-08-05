# PiRelay-v2
## Packages for PiRelay v2 hardware

PIRELAY VERSION 2  for RaspberryPi to control Relays.

## Features:

⦁	 It consists of 8 Relays.

⦁	LED’s for indicating status of each relay..

⦁	Standardized shield shape and design

⦁	Raspberry Pi 4, 3, 2, and ZERO compatible 40-Pin Stacking Header.


## Steps for PiRelay-v2 software installation -

⦁	 Open Terminal and download the code by writing:      

`git clone https://github.com/sbcshop/PiRelay-v2.git`
                    

⦁	 Your code will be downloaded to '/home/pi' directory. Use 'ls' command to check the list of   directories.

⦁	 Go to 'PiRelay2' directory using:

`cd PiRelay2`
                         
⦁	You can turn on and off the relays using the GUI. 

Run the GUI using codes.
             
  A.   Run the PiRelay2_GUI.py file from idle.
                               
  OR
         
  B.    Using terminal: 
 
 `sudo python3 PiRelay2_GUI.py`
 
 ## LCD
 
 4.3inch, 800x480, Capacitive Touch Screen LCD, HDMI interface, Supports Multi mini-PCs, Multi Systems

## Steps to interface LCD-

⦁	Open and modify the /boot/config.txt file which is in the root directory(BOOT) of SD card.

 Append following lines to config.txt file.
 
                                                max_usb_current=1
                                                hdmi_group=2
                                                hdmi_mode=87
                                                hdmi_cvt 800 480 60 6 0 0 0
                                                
⦁	 Connect Touch interface of LCD to USB port of Raspberry Pi

⦁	Connect HDMI interface of LCD to HDMI port of Raspberry Pi

                                        
                                                         
