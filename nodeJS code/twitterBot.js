console.log("starting bot");
console.log('\n');
var Twit = require('twit');
var config = require('./config');

//SERIAL SETUP
var SerialPort = require('serialport');
var port = new SerialPort('/dev/cu.usbmodemFD131', {
    baudRate: 9600
});


var T = new Twit(config);

var stream = T.stream('user');

stream.on('tweet', function (eventMsg){
    let replyTo = eventMsg.in_reply_to_screen_name;
    let txt = eventMsg.text;
    let from = eventMsg.user.screen_name;

    if (replyTo == "(put your account here)") {
        console.log(txt);
        tweet("@" + from + " Thank You!");
        port.write(txt);
      
    }

function tweet(tweet){
let toBe = {
    status: tweet
}

T.post('statuses/update', toBe, tweeted);

var tweeted = (err, data, response) => {
    console.log(data);
}
}})
