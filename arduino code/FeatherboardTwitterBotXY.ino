#include <Servo.h>

Servo xSer;
Servo ySer;
String serialData;

void setup() {
  Serial.begin(57600);
  ySer.attach(12);
  xSer.attach(13);
  xSer.write(90);
  ySer.write(90);
  Serial.setTimeout(5);
}

void loop() {
  
}

void serialEvent(){
  serialData = Serial.readString();
  Serial.println(serialData);
  xSer.write(parseX(serialData));
  ySer.write(parseY(serialData));
}

int parseX(String data){
  data.remove(data.indexOf("Y"));
  data.remove(data.indexOf("X"), 1);
  return data.toInt();
}

int parseY(String data){
  data.remove(0, data.indexOf("Y") + 1);
  return data.toInt();
}
