// 26.	Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.


// Program Which Will Print A Message Of 5 Points If Color Is Green OR IF There Is Any Other Color Than Green Then Print A Message Of 10 Points

// First Version In Which Color Will Be Green So It Should Print A Message Of 5 Points
const alienColor_1_26: string = 'green'; // Color # 1

if (alienColor_1_26 === 'green') { // Making Conditional Statement That If Condition Is True Continue This Piece Of Code Orelse Use The "Else" Statement Code
  console.log("Congratulations! You Just Earned 5 Points For Shooting The Alien.");
} else {
  console.log("Congratulations! You Just Earned 10 Points For Shooting The Alien.");
}

// First Version In Which Color Will Be Yellow So It Should Print A Message Of 10 Points
const alienColor_2_26: string = 'yellow'; // Color # 2

if (alienColor_2_26 === 'green') {
  console.log("Congratulations! You Just Earned 5 Points For Shooting The Alien.");
} else {
  console.log("Congratulations! You Just Earned 10 Points For Shooting The Alien.");
}