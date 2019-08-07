/****************************************************

				13 ----> BOARD 21 ----> Relay_1
				14 ----> BOARD 23 ----> Relay_2
				3 ----> BOARD 15 ----> Relay_3 
				21 ----> BOARD 29 ----> Relay_4
				22 ----> BOARD 31 ----> Relay_5
				23 ----> BOARD 33 ----> Relay_6
				24 ----> BOARD 35 ----> Relay_7
				25 ----> BOARD 37 ----> Relay_8

*****************************************************/
#include <wiringPi.h>
#include <stdio.h>

void relay_on(int relay_num)
{
	digitalWrite(relay_num, HIGH);
	printf("Relay %d On\n", relay_num);
	return;
}

void relay_off(int relay_num)
{
	digitalWrite(relay_num, LOW);
	printf("Relay %d Off\n", relay_num);
	return;
}

int main(void)
{
	const int relay_pins[] = {13, 14, 3, 21, 22, 23, 24, 25};
	int i = 0;

	if(wiringPiSetup() == -1)return 0;

    for (i = 0; i < 8; i++) {
        printf("Relay %d at PIN %d\n", i, relay_pins[i]);
        pinMode(relay_pins[i], OUTPUT);
    }

	while(1)
	{
		for(i=0; i < 8; i++){
		relay_on(relay_pins[i]);

		delayMicroseconds(1000000);//delay 10ms

		relay_off(relay_pins[i]);

		delayMicroseconds(1000000);//delay 10ms

		}
	}
}
