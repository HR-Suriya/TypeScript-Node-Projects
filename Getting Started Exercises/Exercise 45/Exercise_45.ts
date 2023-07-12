// 45.	Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function create_car(manufacturer, model, ...kwargs) { // Making A Function To Store Information About A Car

    let car_45 = { // Car Minimum Details
        manufacturer: manufacturer,
        model: model
    };

    for (let i = 0; i < kwargs.length; i += 2) { // Making A Loop To Accept Extra Keyword Arguments
        let key = kwargs[i];
        let value = kwargs[i + 1];
        car_45[key] = value;
    }

    return car_45; // Returning The Value Of Car To Get Answer
}

let car_45 = create_car("Honda", "City Aspire", "Color", "Blue Metallic", "year", 2023, "sunroof", true); // Calling The create_car Function With Required Information And Additional Key-Value Pairs

console.log(car_45); // Printing Information About Car