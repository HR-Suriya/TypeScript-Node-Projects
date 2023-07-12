// 13.	Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

const fvtTrans_13: string[] = ["BMW Motorcycle", "Lamborghini Sports Car", "Rolls Royce Classic Car", "Range Rover SUV"]; // List Of Favorite Mods Of Transportation

fvtTrans_13.forEach((mode: string) => {
  console.log(`I Would Like To Buy A ${mode}.`); // Statement To Print With Each Mod Of Transportation In The List
});