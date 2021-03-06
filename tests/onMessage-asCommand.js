/* 
 * a Cisco Spark webhook that leverages a simple library (batteries included)
 * 
 * note : this example requires that you've set a SPARK_TOKEN env variable 
 *  
 */

var SparkBot = require("../sparkbot/webhook");

// Starts your Webhook with default configuration where the SPARK API access token is read from the SPARK_TOKEN env variable 
var bot = new SparkBot();

bot.onMessage(function (trigger, message) {

    //
    // ADD YOUR CUSTOM CODE HERE
    //  
    console.log("new message from: " + trigger.data.personEmail + ", text: " + message.text);

    var command = bot.asCommand(message);
    if (command) {
        console.log("detected command: " + command.keyword + ", with args: " + JSON.stringify(command.args));
    }
});

