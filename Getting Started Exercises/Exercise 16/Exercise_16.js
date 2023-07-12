// 16.	More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guestList_16 = ["Talha Anjum", "Talhah Younus", "Umair"]; // List Of Guests To Invite For Dinner
var unableToAttend_16 = guestList_16[2]; // Saving The Name Of The Guest Who Can't Make It
guestList_16.forEach(function (guest_16) {
    console.log("Hello ".concat(guest_16, ", I Would To Invite You To Dinner With Us On Thursday At 7 PM.")); // Invitation Message To Everyone In The List
});
console.log("".concat(unableToAttend_16, " Is Unable To Attend The Dinner.")); // Print The Guest Who Can't Make It
guestList_16[2] = "Jokhay"; // Modify The Guest List, Replacing The Guest Who Can't Make It
console.log("--- Updated Guest List ---");
// Print A Second Set Of Invitation Messages
guestList_16.forEach(function (guest_16) {
    console.log("Dear ".concat(guest_16, ", I Would To Invite You To Dinner With Us On Thursday At 7 PM."));
});
console.log("Good news! We found a bigger dinner table."); // Printing About Bigger Table
guestList_16.unshift("Shareh"); // Add One New Guest To The Beginning Of The Array
guestList_16.splice(Math.floor(guestList_16.length / 2), 0, "SAVAGE"); // Add One New Guest To The Middle Of The Array
guestList_16.push("BolJani"); // Add One New Guest To The End Of The Array
console.log("--- Additional Guests ---"); // Making A New Invitation Message To Everyone In The Updated List
guestList_16.forEach(function (guest_16) {
    console.log("Dear ".concat(guest_16, ", I Would To Invite You To Dinner With Us On Thursday At 7 PM."));
});
