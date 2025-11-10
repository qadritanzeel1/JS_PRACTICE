//objects and ES6

//EcmaScript : set of rules =>based on which js is used or updated

//ES6 => ternary operators

//write a function  which takes input from prompt the input will be  a color and you will write if else if condition to check if those color are present or not 


// function checkColor(c) {
//     if(c=="green"){
//       console.log("Green is Present")
//     }else if(c=="Yellow"){
//         console.log("Yellow is Present")
//     }else if(c=="Red"){
//         console.log("Red is Present")
//     }else if(c=="Blue"){
//         console.log("Blue is Present")
//     }else if(c=="Purple"){
//         console.log("Purple is Present")
//     }else  {
//         console.log("not present")
//     }
// }

// checkColor(prompt("Plese Enter a Color"));


// function checkColor(c) {
//  console.log(c == "Blue" ? "Blue detected":"Another Color Detected")
// }

// checkColor(prompt("Plese Enter a Color"));



// how will you write else if else condition using ternary operator
// let a = "10"
// let b = 10;
// console.log(a === b ?  "They are equal in value and type both":
//             a==b ? "They are equal in value ":
//             "they are not equal"
// )


// checkColor(prompt("Plese Enter a Color"));


function checkColor() {
    let color = prompt("Plese Enter a Color")
    return color == "Blue" ? "Blue detected" :
        color == "Red" ? "Red Detected" :
            "Another Color Detected";
}

// console.log(checkColor());


//Objects =>Everything in JS at the fundamental level turns to be an object
//collection of key and value pairs
//key are supposed to be unique because they will be used for identification 

let obj = {
    name: "Tanzeel",
    age: 25,
    gender: "male",
}
obj.name = "Sameer";
console.log(obj.name) //so objects are mutable non-premitive

//object methods
obj.bloodType = "A-"
delete obj.gender; //here we can delete the specific key
console.log(obj.bloodType) // we get here undefined because in js objects creats a key bloodType behind the scene thats why we got undefined
console.log(obj.gender);

// there are two way of access the objects 
//two notation 
console.log(obj.name) //1. obj.key => dot notation
console.log(obj["name"])  // 2. obj["key"] => square notation 

// console.log(obj)


let animal = {
    name:"cat",
    fur:"brown",
    legs:4,
    nightVision:true

}

let nV = "nightVision"
console.log(animal.nightVision); //true
console.log(animal[nV]); //true
