// 24.	More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Tests For Equality And Inequality With Strings
var city_24 = 'Karachi';
console.log("Is City Equal To 'Karachi'? I Predict True.");
console.log(city_24 == 'Karachi');
console.log("Is City Not Equal To 'Lahore'? I Predict True.");
console.log(city_24 != 'Lahore');
console.log("Is City Equal To 'Islamabad'? I Predict False.");
console.log(city_24 == 'Islamabad');
console.log("Is City Not Equal To 'Karachi'? I Predict False.");
console.log(city_24 != 'Karachi');
// Tests Using The Lowercase Function
var name_24 = 'HRS';
console.log("Is Name Lowercase Equal To 'hrs'? I Predict True.");
console.log(name_24.toLowerCase() == 'hrs');
console.log("Is Name Lowercase Not Equal To 'hsr'? I Predict True.");
console.log(name_24.toLowerCase() != 'hsr');
console.log("Is Name Lowercase Equal To 'rhs'? I Predict False.");
console.log(name_24.toLowerCase() == 'rhs');
console.log("Is Name Lowercase Not Equal To 'hrs'? I Predict False.");
console.log(name_24.toLowerCase() != 'hrs');
// Numerical Tests
var age_24 = 19;
console.log("Is Age Equal To 19? I Predict True.");
console.log(age_24 == 19);
console.log("Is Age Not Equal To 30? I Predict True.");
console.log(age_24 != 30);
console.log("Is Age Greater Than 18? I Predict True.");
console.log(age_24 > 18);
console.log("Is Age Less Than OR Equal To 25? I Predict True.");
console.log(age_24 <= 25);
console.log("Is Age Greater Than 30? I Predict false.");
console.log(age_24 > 30);
console.log("Is Age Less Than 18? I Predict False.");
console.log(age_24 < 18);
// Tests Using "AND" And "OR" Operators
var x_24 = 4;
var y_24 = 11;
console.log("Is X Greater Than 3 And Y Less Than 15? I Predict True.");
console.log(x_24 > 3 && y_24 < 15);
console.log("Is X Greater Than 7 And Y Less Than 5? I Predict false.");
console.log(x_24 > 7 && y_24 < 5);
console.log("Is X Greater Than 3 OR Y Less Than 5? I Predict True.");
console.log(x_24 > 3 || y_24 < 5);
console.log("Is X Less Than 3 OR Y Greater Than 15? I Predict False.");
console.log(x_24 < 3 || y_24 > 15);
// Test Whether An Item Is In An Array
var fruits_24 = ['apple', 'banana', 'orange'];
console.log("Is 'Apple' In The Fruits Array? I Predict True.");
console.log(fruits_24.indexOf('apple') !== -1);
console.log("Is 'Grape' In The Fruits Array? I Predict False.");
console.log(fruits_24.indexOf('grape') !== -1);
console.log("Is 'Mango' Not In The Fruits Array? I Predict True.");
console.log(fruits_24.indexOf('mango') === -1);
console.log("Is 'Banana' Not In The Fruits Array? I Predict False.");
console.log(fruits_24.indexOf('banana') === -1);
