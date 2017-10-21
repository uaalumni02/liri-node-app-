var keys = require('./keys.js');
var twitter = require("twitter");
// var spotify = require('spotify')
var liriArgument = process.argv[2];
var value = process.argv[3];
var request = require('request');
var fs = require('fs');
switch (liriArgument) {
    case "my-tweets":
        myTweets();
        break;
};

function myTweets() {
    var client = new twitter({
        consumer_key: '9SKtifv0ZLF7OtLvA3ajdezB2',
        consumer_secret: '4UjhVsrxUTF6zp5g31FIo3POolFpAxrJNRXbMXZVKx6dU3Xkso',
        access_token_key: '920075360129241089-8vJV4DaWbrOcSmRErQqpcqgjQzf74nu',
        access_token_secret: 'MddJ44x0aqaRaS7AX149rH5VjtQQgx18ymY8ZOKtHWQey',
    });
    var twitterUsername = process.argv[3];
    if (!twitterUsername) {
        twitterUsername = "HT1911Bell";
    }
    params = { screen_name: twitterUsername };
    client.get("statuses/user_timeline/", params, function(error, data, response) {
        if (!error) {
            for (var i = 0; i < data.length; i++) {
                var twitterResults =
                    "@" + data[i].user.screen_name + ": " +
                    data[i].text + "\r\n" +
                    data[i].created_at + "\r\n" +
                    "------------------------------ " + i + " ------------------------------" + "\r\n";
                console.log(twitterResults);
            }
        } else {
            console.log("Error :" + error);
            return;
        }
    });
}

