//intro js objects and ES6


//ECMAScript is the official standard (set of rules and guidelines) that defines how JavaScript should work.

//ES6 =>ternary operator

//create a fxn which takes input from prompt the input will be a color and you will write if else condition to check if those color are present or not 

function colorPicker(color) {
    if (color == "Blue") return "Blue color is present here "
    else if (color == "Red") return "Red color is present here";
    else if (color == "Maroon") return "Maroon color is present here";
    else if (color == "Pink") return "Red color is present here";
    else return "invalid input";
}

// let c = colorPicker(prompt("Please Enter a Color"));
// console.log(c);


//ternary operator
// let a = "10";
// let b = 10
// console.log(a===b ? "they are equal" : "they are not equal")

// condition ? expression : another expression 


function colorPicker(color) {
    return color == "Blue" ? "Blue color is present"
        : color == "Red" ? "Red color is present"
            : color == "Yellow" ? "Yellow color is present"
                : color == "Pink" ? "Pink color is present"
                    : "invalid input"
}

// let c = colorPicker(prompt("Please Enter a Color"));
// console.log(c);

// there readability decreases 

//objects ===> An object is a data structure that stores data in the form of key and value pairs.

// let  obj = {
//     name:"Tanzeel",
//     age:26,
//     profession:"Professional Web developer"
// }

// console.log(obj.age) //objects has its own identification that is called keys
// keys are supposed to be unique because they will be used for identification 
// obj.age = 19;
// console.log(obj.age)

let classRoom = [
    {
    name:"Tanzeel",
    age:26,
    profession:"Professional Web developer"
},
{
    name:"Sameer",
    age:25,
    profession:"Professional Web designer"
},
{
    name:"Asim",
    age:24,
    profession:"Marketing Execative"
},
{
    name:"Ahsan",
    age:23,
    profession:"Business Man"
},
]


// console.log(classRoom)

//This is universal way of storing data on internet --->JSON

 //objects has its own identification that is called keys
// keys are supposed to be unique because they will be used for identification 

let obj = {
    name :"Tanzeel",
    age:26,
    profession:"Web Developer",
    isExperinced : true
}

// console.log(obj.profession)
obj.profession = "App Developer"
// console.log(obj.profession)

let classRoomm = [
    {
    name:"Tanzeel",
    age:26,
    profession:"Professional Web developer"
},
{
    name:"Sameer",
    age:25,
    profession:"Professional Web designer"
},
{
    name:"Asim",
    age:24,
    profession:"Marketing Execative"
},
{
    name:"Ahsan",
    age:23,
    profession:"Business Man"
},
]

// here i am going to print each and every objects name

for(let i=0;i<=classRoomm.length-1;i++){
    console.log(classRoomm[i].profession)
}