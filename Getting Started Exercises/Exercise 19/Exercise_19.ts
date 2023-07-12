// 19.	Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guestList_19: string[] = ["Talha Anjum", "Talhah Younus", "Umair"]; // List Of Guests To Invite For Dinner
const unableToAttend_19: string = guestList_19[2]; // Saving The Name Of The Guest Who Can't Make It

guestList_19.forEach((guest_19: string) => {
console.log(`Hello ${guest_19}, I Would To Invite You To Dinner With Us On Thursday At 7 PM.`); // Invitation Message To Everyone In The List
});

console.log(`${unableToAttend_19} Is Unable To Attend The Dinner.`); // Print The Guest Who Can't Make It

guestList_19[2] = "Jokhay"; // Modify The Guest List By Replacing The Guest Who Can't Make It

console.log("--- Updated Guest List ---");

guestList_19.forEach((guest_19: string) => { // Print A Second Set Of Invitation Messages
  console.log(`Dear ${guest_19}, I Would To Invite You To Dinner With Us On Thursday At 7 PM.`);
});

console.log("Good News! We Found A Bigger Dinner Table."); // Printing About Bigger Table

guestList_19.unshift("Shareh"); // Add One New Guest To The Beginning Of The Array

guestList_19.splice(Math.floor(guestList_19.length / 2), 0, "SAVAGE"); // Add One New Guest To The Middle Of The Array

guestList_19.push("BolJani"); // Add One New Guest To The End Of The Array

console.log("--- Additional Guests ---"); // Making A New Invitation Message To Everyone In The Updated List

guestList_19.forEach((guest_19: string) => { // Print Invitation Messages For The Updated Guest List
  console.log(`Dear ${guest_19}, I Would To Invite You To Dinner With Us On Thursday At 7 PM.`);
});

console.log("Unfortunately, We Can Only Invite Two People For Dinner."); // Print A Message Stating That Only Two People Can Be Invited

while (guestList_19.length > 2) { // Remove Guests From The List One At A Time Until Only Two Names Remain
  const removedGuest_19: string = guestList_19.pop()!;
  console.log(`Sorry, ${removedGuest_19}, We Won't Be Able To Invite You To Dinner.`);
}

console.log("--- Final Guest List ---");

guestList_19.forEach((guest_19: string) => { // Print A Message To The Two Remaining Guests, Letting Them Know They're Still Invited
  console.log(`Dear ${guest_19}, You Are Still Invited To Dinner. Please Join Us On Thursday At 7 PM.`);
});

console.log(`${guestList_19.length} Peoples Are At Dinner.`); // Print A Message Indicating The Number Of People Being Invited To Dinner