// 37.	Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size_37: string = "Large", message_37: string = "I Love TypeScript") {

    console.log("You Have Ordered A " + size_37 + " T-Shirt With The Message: '" + message_37 + "'.");

}

make_shirt(); // Creating A Large Shirt With The Default Message

make_shirt("Medium"); // Creating A Medium Shirt With The Default Message

make_shirt("Small", "Java Script Was Not That Bad"); // Creating A Small Shirt With A Custom Message