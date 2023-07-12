// 31.	No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var usernames_31 = ["admin", "HRS", "Ali", "Tahir", "Ghayyas"];
if (usernames_31.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var i = 0; i < usernames_31.length; i++) {
        if (usernames_31[i] === "admin") {
            console.log("Hello Admin, Would You Like To See A Status Report?");
        }
        else {
            console.log("Hello " + usernames_31[i] + ", Thank You For Logging In Again.");
        }
    }
}
// Removing all usernames from the array
usernames_31 = [];
if (usernames_31.length === 0) {
    console.log("We Need To Find Some Users!");
}
