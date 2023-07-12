// 12.	Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var frNames_12 = ["Ali", "Tahir", "Ghayyas", "Furqan", "Faisal"]; // An Array With The Name Of Friends Whom You Want To Send Message
frNames_12.forEach(function (frName_12) {
    console.log("Hey ".concat(frName_12, ", How Are You Doing?")); // Message To Be Printed For All Friends In The Array
});
