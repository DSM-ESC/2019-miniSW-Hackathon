#include <SoftwareSerial.h>
#include<stdlib.h>

SoftwareSerial btSerial(2,3);
int button = 5;

void setup()
{
  pinMode(button, INPUT_PULLUP);
  Serial.begin(9600);
  btSerial.begin(9600);
}

int i = 80;

void loop()
{
  int flag = 1;
  if(digitalRead(button)==LOW){
    flag++;
    btSerial.println(flag);
    while(digitalRead(button)==LOW);
  }
  if (flag%2 == 1) {
    int p_m_data = rand() % 4;
    if((rand() % 3) != 0)
    {
      i += p_m_data;  
    }
    else
    {
      i -= p_m_data;
    }
    btSerial.println(i);
  
    delay(1000); 
  }
  else if (flag%2 == 0){
    while(digitalRead(button)==HIGH);
    flag++;
    while(digitalRead(button)==LOW);
  }
}
