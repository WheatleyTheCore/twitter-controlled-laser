var SerialPort = require('serialport');
var port = new SerialPort('/dev/cu.usbmodemFD131', {
    baudRate: 9600
});

        // list serial ports:
    SerialPort.list(function (err, ports) {
    ports.forEach(function(port) {
      console.log(port.comName);
    });
  });