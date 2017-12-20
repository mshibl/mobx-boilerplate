const asciify = require("asciify")

function printWelcomeMessage(welcomeMessage) {
    // Welcome message that gets printed whenyou start the app
    asciify(welcomeMessage, { font: "univers", color: "green" }, function(
        err,
        res
    ) {
        if (err) {
            console.log(err);
        } else {
            console.log(res);
        }
    });
}

module.exports = printWelcomeMessage;
