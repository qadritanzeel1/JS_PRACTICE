// console.log("hello")
//for in loop 

// let obj = {
//     title :"shirt",
//     price : 1000,
//     color : "White",
//     size : "m",
//     isCotton : true,
// }

// for(let key in obj){
//     console.log(key);
//     console.log(obj[key]) // this is called dynamic key access
// }

// console.log(obj.key) // this is called dot notation or not dynamic

// let a = "title"
// console.log(obj[a])

//method

// let  obj = {
//     bool : true,
//     str : "Hello-World",
//     num :12,
//     nestObj: {
//         a:1,
//         b:2
//     },
//     fun : function(a,b){ //parameter
//         return a-b
//     }

// }

// console.log(obj.fun(5,4)); // argument

//functions are created as values of an object's key , its called methods;


// function mapChar(str){
//   let obj = {}
//     for(let i = 0;i<str.length;i++){
//         obj[i+1]=str[i];
//     }
//     return obj;
// }

// console.log(mapChar("abcdefghijklmnopqrstuvwxyz") ); 

//frequesncy check 

let str = "aaabbbbccccccdddddddeeeffffggghii";
let obj ={}
for(let i= 0;i<str.length;i++){
    if(obj[str[i]]){
        obj[str[i]] = obj[str[i]]+1
        // obj[str[i]]++
    }else{
        obj[str[i]]=1
    }
}

console.log(obj);


// Title: L0 - Determine Senior Citizen Discount Eligibility

// Problem Statement: Write a program that checks if a person is eligible for a senior
// citizen discount based on their age.
// If the age is 60 or more, the output should be "Eligible for Senior Discount".
// Otherwise, the output should be "Not Eligible for Senior Discount". 
// Use the ternary operator for this task.
// Additionally, handle an edge case where the age provided is a negative number or 0. 
// For such cases, output "Invalid Age".

// Example:

// let age = 65;

// Output: "Eligible for Senior Discount"

// let age = -1;

// Output: "Invalid Age"
 
 let age = 59;
 
console.log(
  age <= 0
    ? "Invalid Age"
    : age >= 60
    ? "Eligible for Senior Discount"
    : "Not Eligible for Senior Discount"
);

// Title: L0 - Find Largest of Three Numbers Using Ternary Operator

// Problem Statement: Create a program that takes three numbers as input and determines 
// the largest number using nested ternary operators.
// You must solve this problem using only ternary logic without using the Math.max() function.

// Example: let num1 = 45, num2 = 78, num3 = 33;

// Output: 78 (The largest number

let num1 = 45;
let num2 = 78;
let num3 = 33;



let largest =
  num1 > num2
    ? (num1 > num3 ? num1 : num3)
    : (num2 > num3 ? num2 : num3);

console.log(largest);