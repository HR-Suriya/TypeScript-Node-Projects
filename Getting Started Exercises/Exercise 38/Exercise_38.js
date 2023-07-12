// 38.	Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city_38, country_38) {
    if (country_38 === void 0) { country_38 = "Pakistan"; }
    console.log(city_38 + " Is In " + country_38 + ".");
}
// Calling The Function For Different Cities
describe_city("Karachi");
describe_city("Lahore");
describe_city("Dehli", "India");
