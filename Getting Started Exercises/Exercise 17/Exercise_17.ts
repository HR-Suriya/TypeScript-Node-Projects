// 17.	Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guestList_17: string[] = ["Talha Anjum", "Talhah Younus", "Umair"]; // List Of Guests To Invite For Dinner
const unableToAttend_17: string = guestList_17[2]; // Saving The Name Of The Guest Who Can't Make It

guestList_17.forEach((guest_17: string) => {
console.log(`Hello ${guest_17}, I Would To Invite You To Dinner With Us On Thursday At 7 PM.`); // Invitation Message To Everyone In The List
});

console.log(`${unableToAttend_17} Is Unable To Attend The Dinner.`); // Print The Guest Who Can't Make It

guestList_17[2] = "Jokhay"; // Modify The Guest List, Replacing The Guest Who Can't Make It

console.log("--- Updated Guest List ---");

// Print A Second Set Of Invitation Messages
guestList_17.forEach((guest_17: string) => {
  console.log(`Dear ${guest_17}, I Would To Invite You To Dinner With Us On Thursday At 7 PM.`);
});

console.log("Good News! We Found A Bigger Dinner Table."); // Printing About Bigger Table

guestList_17.unshift("Shareh"); // Add One New Guest To The Beginning Of The Array

guestList_17.splice(Math.floor(guestList_17.length / 2), 0, "SAVAGE"); // Add One New Guest To The Middle Of The Array

guestList_17.push("BolJani"); // Add One New Guest To The End Of The Array

console.log("--- Additional Guests ---"); // Making A New Invitation Message To Everyone In The Updated List

guestList_17.forEach((guest_17: string) => { // Print Invitation Messages For The Updated Guest List
  console.log(`Dear ${guest_17}, I Would To Invite You To Dinner With Us On Thursday At 7 PM.`);
});

console.log("Unfortunately, We Can Only Invite Two People For Dinner."); // Add A New Line To Print A Message Stating That Only Two People Can Be Invited

while (guestList_17.length > 2) { // Remove Guests From The List One At A Time Until Only Two Names Remain
  const removedGuest_17: string = guestList_17.pop()!;
  console.log(`Sorry, ${removedGuest_17}, We Won't Be Able To Invite You To Dinner.`);
}

console.log("--- Final Guest List ---");

guestList_17.forEach((guest_17: string) => { // Print A Message To The Two Remaining Guests, Letting Them Know They're Still Invited
  console.log(`Dear ${guest_17}, You Are Still Invited To Dinner. Please Join Us On Thursday At 7 PM.`);
});

// Remove The Last Two Names From The List
guestList_17.pop();
guestList_17.pop();

console.log("--- Updated Guest List ---");

console.log(guestList_17); // Print The Guest List To Verify It Is Empty