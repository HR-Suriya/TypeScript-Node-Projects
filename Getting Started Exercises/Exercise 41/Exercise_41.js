// 41.	Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"]; // Creating An Array Of Magician's Names
show_magicians(magicians); // Calling the show_magicians function with the magician's array
