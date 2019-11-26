#include <SoftwareSerial.h>
#include<stdlib.h>

SoftwareSerial btSerial(2,3);

void setup()
{
  Serial.begin(9600);
  btSerial.begin(9600);
}

int i = 80;

void loop()
{
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
//  
//    if (btSerial.available()) {
//      char a = btSerial.read();
//      if( a == 'a')
//      {
////        Serial.println('Equal');
//        btSerial.println("Apple");
//      }
////        btSerial.print('Check A');
//    Serial.write(a);
//}
  delay(1000);
}
