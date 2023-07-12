// 12.	Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

const frNames_12: string[] = ["Ali", "Tahir", "Ghayyas", "Furqan", "Faisal"]; // An Array With The Name Of Friends Whom You Want To Send Message

frNames_12.forEach((frName_12: string) => {
  console.log(`Hey ${frName_12}, How Are You Doing?`); // Message To Be Printed For All Friends In The Array
});