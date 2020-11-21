const prompt = require('prompt-sync')();
let pin = prompt('Enter pin: ');
validatePin(pin);
function validatePin(pin)
{
    //UC3
    let pinRegExp = RegExp('^[0-9]{1}[a-zA-Z0-9]{4}[0-9]{1}$');
    if (pinRegExp.test(pin))
        console.log("Valid pin")
    else
        console.log("Invalid pin!")
}