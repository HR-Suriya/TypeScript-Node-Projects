// 22.	Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var fruits_22 = ["Apple", "Banana", "Grapes", "Mango", "Orange"];
//    Index In Array :   [   0    ,     1    ,     2    ,    3    ,     4   ]
// Intentional Index Error
console.log(fruits_22[5]); // Trying To Access The Element At Index 5 (Which Does Not Exists)
// Would Result In Undifined
// Corrected Code
console.log(fruits_22[4]); // Accessing The Element At Index 4 (last Element In The Array)
// Would Result As Printing The Fruit Name At Index # 4 (" Orange ")
