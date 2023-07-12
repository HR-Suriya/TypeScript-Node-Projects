// 18.	Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let placesToVisit_18: string[] = ["Maldives", "Italy", "Turkey", "Japan", "Singapore"];

console.log("Original order:", placesToVisit_18); // Print The Array In Its Original Order

console.log("Alphabetical order:", [...placesToVisit_18].sort()); // Print The Array In Alphabetical Order Without Modifying The Actual List

console.log("Original order:", placesToVisit_18); // Print The Array To Show That The Array Is Still In Its Original Order

console.log("Reverse alphabetical order:", [...placesToVisit_18].sort().reverse()); // Print The Array In Reverse Alphabetical Order Without Changing The Order Of The Original List

console.log("Original order:", placesToVisit_18); // Print The Array To Show That The Array Is Still In Its Original Order

placesToVisit_18.reverse(); // Reverse The Order Of The List

console.log("Reversed order:", placesToVisit_18); // Print The Array To Show That Its Order Has Changed

placesToVisit_18.reverse(); // Reverse The Order Of The List Again So It Could Be Back In It's Original Form

console.log("Original order:", placesToVisit_18); // Print The List To Show It's Back To Its Original Order

placesToVisit_18.sort(); // Sort The Array To Store It In Alphabetical Order

console.log("Alphabetical order:", placesToVisit_18); // Print The Array To Show That Its Order Has Been Changed

placesToVisit_18.sort().reverse(); // Sort The Array To Store It In Reverse Alphabetical Order

console.log("Reverse alphabetical order:", placesToVisit_18); // Print The List To Show That Its Order Has Changed