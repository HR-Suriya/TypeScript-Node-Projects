// 29.	Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

const favorite_fruits: string[] = ["banana", "apple", "mango"];

if (favorite_fruits.indexOf("banana") !== -1) {
  console.log("Do You Really Like Bananas?");
}

if (favorite_fruits.indexOf("apple") !== -1) {
  console.log("Do You Really Like Apples?");
}

if (favorite_fruits.indexOf("mango") !== -1) {
  console.log("Do You Really Like Mangoes?");
}

if (favorite_fruits.indexOf("strawberry") !== -1) {
  console.log("Do You Really Like Strawberries?");
}

if (favorite_fruits.indexOf("grape") !== -1) {
  console.log("Do You Really Like Grapes?");
}