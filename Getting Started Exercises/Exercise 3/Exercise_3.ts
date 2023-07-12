// 3.	Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

const personName_3: string = " Unknown "; // Anyname to change it's Alphabets in various conditions

console.log("Lowercase: " + personName_3.toLowerCase()); // printing the name in lower case letters

console.log("Uppercase: " + personName_3.toUpperCase()); // PRINTING THE NAME IN UPER CASE LETTERS

console.log("Titlecase: " + personName_3.charAt(1).toUpperCase() + personName_3.slice(2).toLowerCase()); // Printing The Name In Title Case Letters