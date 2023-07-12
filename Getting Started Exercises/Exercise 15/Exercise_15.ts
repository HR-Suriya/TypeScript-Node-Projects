// 15.	Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

let guestList_15: string[] = ["Talha Anjum", "Talhah Younus", "Umair"]; // List Of Guests To Invite For Dinner
const unableToAttend_15: string = guestList_15[2]; // Saving The Name Of The Guest Who Can't Make It

guestList_15.forEach((guest_15: string) => {
console.log(`Hello ${guest_15}, I Would To Invite You To Dinner With Us On Thursday At 7 PM.`); // Invitation Message To Everyone In The List
});

console.log(`${unableToAttend_15} Is Unable To Attend The Dinner.`); // Print The Guest Who Can't Make It

guestList_15[2] = "Jokhay"; // Modify The Guest List By Replacing The Guest Who Can't Make It

console.log("--- Updated Guest List ---");

// Print A Second Set Of Invitation Messages
guestList_15.forEach((guest_15: string) => {
  console.log(`Dear ${guest_15}, I Would To Invite You To Dinner With Us On Thursday At 7 PM.`);
});