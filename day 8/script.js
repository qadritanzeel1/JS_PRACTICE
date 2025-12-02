//intro js objects and ES6


//ECMAScript is the official standard (set of rules and guidelines) that defines how JavaScript should work.

//ES6 =>ternary operator

//create a fxn which takes input from prompt the input will be a color and you will write if else condition to check if those color are present or not 

function colorPicker(color) {
    if (color == "Blue") return "Blue color is present here "
    else if (color == "Red") return "Red color is present here";
    else if (color == "Maroon") return "Maroon color is present here";
    else if (color == "Pink") return "Red color is present here"; else return "invalid input";
}

let c = colorPicker(prompt("Please Enter a Color"));
console.log(c)