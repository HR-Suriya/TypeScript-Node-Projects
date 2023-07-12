// 13.	Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var fvtTrans_13 = ["BMW Motorcycle", "Lamborghini Sports Car", "Rolls Royce Classic Car", "Range Rover SUV"]; // List Of Favorite Mods Of Transportation
fvtTrans_13.forEach(function (mode) {
    console.log("I Would Like To Buy A ".concat(mode, ".")); // Statement To Print With Each Mod Of Transportation In The List
});
