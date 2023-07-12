// 6.	Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var nameWithWhitespace_6 = "\t   \n   Hassan Raza    \t   \n";
console.log("Name with whitespace: \"".concat(nameWithWhitespace_6, "\"")); // Writing the Name With Whitespace
console.log("Name after stripping whitespace: \"".concat(nameWithWhitespace_6.trim(), "\"")); // Writing the Name After Stripping Whitespace
