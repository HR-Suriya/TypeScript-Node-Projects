// 39.	City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city_39: string, country_39: string): string {

    return `" ${city_39}, ${country_39} "`;
    }
    
    // Calling the function with different city-country pairs
    const result1 = city_country("Ankara", "Turkey");
    console.log(result1);
    
    const result2 = city_country("Beijing", "China");
    console.log(result2);
    
    const result3 = city_country("Tokyo", "Japan");
    console.log(result3);