// 44.	Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function makeSandwich_44(items_44) {

    console.log("Sandwich Summary:");
    console.log("Bread");
  
    for (let i = 0; i < items_44.length; i++) {
      console.log(items_44[i]);
    }
  
    console.log("Sandwich complete! \n"); // Making An Alarm That Sandwich Ingredients Are Completed
  }
  
  
  // Calling The make_sandwich Function With Different Numbers Of Arguments
  
  makeSandwich_44(["Cheese", "Ham"]);
  makeSandwich_44(["Turkey", "Lettuce", "Tomato"]);
  makeSandwich_44(["Peanut Butter", "Jelly", "Banana"]);