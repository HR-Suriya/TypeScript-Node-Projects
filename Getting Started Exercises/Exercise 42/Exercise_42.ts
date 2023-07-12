// 42.	Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function show_magicians(magicians) {

    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
  
function make_great(magician: string[]) {

    for (let i = 0; i < magician.length; i++) {
        modified[i] = "The Great " + magician[i];
    }

    modified.forEach(modified => { // Printing The Modified List Of Magicians With The Great
        console.log(`${modified}`);
    });
}

const magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"]; // Creating An Array Of Magician's Names

let modified: string[] = []

make_great(magicians); // Modifying The Magician's Array By Calling The make_great Function

console.log("");

show_magicians(magicians);