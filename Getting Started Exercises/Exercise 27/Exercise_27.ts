// 27.	Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

// In First Version Of Program You Will Get 5 Points For Color Green
const alienColor_1_27: string = 'green';

// Making A Loop That If Color Is Green Continue As First Piece Of Code Else If Color Is Yellow Continue As Second Piece Of Code Else If Color Is Red Continue As Third Piece Of Code

if (alienColor_1_27 === 'green') { // Condition Is That Color Must Be "green"

  console.log("Congratulations! You Just Earned 5 Points."); // Piece Of Code Should Be Proceeded If Color Is Green OR Else Look In Other Conditional Statements

} else if (alienColor_1_27 === 'yellow') {  // Condition Is That Color Must Be "yellow"

  console.log("Congratulations! You Just Earned 10 Points."); // Piece Of Code Should Be Proceeded If Color Is Yellow OR Else Look In Other Conditional Statements

} else if (alienColor_1_27 === 'red') {  // Condition Is That Color Must Be "red"

  console.log("Congratulations! You Just Earned 15 Points."); // Piece Of Code Should Be Proceeded If Color Is Red OR Else Leave Loop And Continue Code After Loop Statements Because There Is No Else Statement

}

// In Second Version Of Program You Will Get 10 Points For Color Yellow
const alienColor_2_27: string = 'yellow';


if (alienColor_2_27 === 'green') {

  console.log("Congratulations! You Just Earned 5 Points.");

} else if (alienColor_2_27 === 'yellow') {

  console.log("Congratulations! You Just Earned 10 Points.");

} else if (alienColor_2_27 === 'red') {

  console.log("Congratulations! You Just Earned 15 Points.");

}


// In Third Version Of Program You Will Get 15 Points For Color Red
const alienColor_3_27: string = 'red';

if (alienColor_3_27 === 'green') {

  console.log("Congratulations! You Just Earned 5 Points.");

} else if (alienColor_3_27 === 'yellow') {

  console.log("Congratulations! You Just Earned 10 Points.");

} else if (alienColor_3_27 === 'red') {

  console.log("Congratulations! You Just Earned 15 Points.");

}