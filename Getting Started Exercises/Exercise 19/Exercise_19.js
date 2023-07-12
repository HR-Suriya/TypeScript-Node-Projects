// 19.	Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var guestList_19 = ["Talha Anjum", "Talhah Younus", "Umair"]; // List Of Guests To Invite For Dinner
var unableToAttend_19 = guestList_19[2]; // Saving The Name Of The Guest Who Can't Make It
guestList_19.forEach(function (guest_19) {
    console.log("Hello ".concat(guest_19, ", I Would To Invite You To Dinner With Us On Thursday At 7 PM.")); // Invitation Message To Everyone In The List
});
console.log("".concat(unableToAttend_19, " Is Unable To Attend The Dinner.")); // Print The Guest Who Can't Make It
guestList_19[2] = "Jokhay"; // Modify The Guest List By Replacing The Guest Who Can't Make It
console.log("--- Updated Guest List ---");
guestList_19.forEach(function (guest_19) {
    console.log("Dear ".concat(guest_19, ", I Would To Invite You To Dinner With Us On Thursday At 7 PM."));
});
console.log("Good News! We Found A Bigger Dinner Table."); // Printing About Bigger Table
guestList_19.unshift("Shareh"); // Add One New Guest To The Beginning Of The Array
guestList_19.splice(Math.floor(guestList_19.length / 2), 0, "SAVAGE"); // Add One New Guest To The Middle Of The Array
guestList_19.push("BolJani"); // Add One New Guest To The End Of The Array
console.log("--- Additional Guests ---"); // Making A New Invitation Message To Everyone In The Updated List
guestList_19.forEach(function (guest_19) {
    console.log("Dear ".concat(guest_19, ", I Would To Invite You To Dinner With Us On Thursday At 7 PM."));
});
console.log("Unfortunately, We Can Only Invite Two People For Dinner."); // Print A Message Stating That Only Two People Can Be Invited
while (guestList_19.length > 2) { // Remove Guests From The List One At A Time Until Only Two Names Remain
    var removedGuest_19 = guestList_19.pop();
    console.log("Sorry, ".concat(removedGuest_19, ", We Won't Be Able To Invite You To Dinner."));
}
console.log("--- Final Guest List ---");
guestList_19.forEach(function (guest_19) {
    console.log("Dear ".concat(guest_19, ", You Are Still Invited To Dinner. Please Join Us On Thursday At 7 PM."));
});
console.log("".concat(guestList_19.length, " Peoples Are At Dinner.")); // Print A Message Indicating The Number Of People Being Invited To Dinner
