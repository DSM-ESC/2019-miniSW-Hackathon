#include<SoftwareSerial.h>
#define USE_ARDUINO_INTERRUPTS true
#include <PulseSensorPlayground.h>
SoftwareSerial btSerial(2,3);
int button = 5;

const int PulseWire = 0;
const int LED13 = 13;
int Threshold = 550;

PulseSensorPlayground pulseSensor;

void setup() {
  
  pinMode(button, INPUT_PULLUP); 
  Serial.begin(9600);
  btSerial.begin(9600);

  pulseSensor.analogInput(PulseWire);
  pulseSensor.blinkOnPulse(LED13);
  pulseSensor.setThreshold(Threshold);

   if (pulseSensor.begin()) {
    Serial.println("We created a pulseSensor Object !");
  }
}

void loop() {

  int flag = 1;
  if(digitalRead(button)==LOW){
    flag++;
    btSerial.println(flag);
    while(digitalRead(button)==LOW);
  }
  if (flag%2 == 1) {
    int myBPM = pulseSensor.getBeatsPerMinute();

 btSerial.println(myBPM);
  delay(20);
  }
  else if (flag%2 == 0){
    while(digitalRead(button)==HIGH);
    flag++;
    while(digitalRead(button)==LOW);
  }
}

  
