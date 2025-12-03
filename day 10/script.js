//ES6 features 

//Arrow Functions

let sum = (a, b) => {
   let nstr = ""
   for (let i = 1; i <= b; i++) {
      nstr = nstr + a
   }
   return nstr
}

// console.log(sum("string", 5))


//implicit return

// let add = (a,b) => a*b

// console.log(add(6,9))

// fn greeting => (name,timePeriod) =>"night" =>name + Good night

// m//e//a//n

let greeting = (name, timePeriod) => timePeriod == "m" ? "Good Morning " + name
   : timePeriod == "e" ? "Good Evening " + name
      : timePeriod == "a" ? "Good Afternoon " + name
         : timePeriod == "n" ? "Good Night " + name
            : "invalid input"

// console.log(greeting("Tanzeel" , "t")   )     ;




let obj = {
   name : "Tanzeel",
   greet : ()=>{
      return this.name   //arrow functions doesnt support or bind to this keyword
   }
}

console.log(obj.greet())

//Thumb rule =>if you go with non method function use arrow function ()=>{}
//but if you go with methods use normal function 
//arrow function doesnt bind with this keyword

//Destructuring =>breaking the structure

let movie = {
   title: "Kabhi khushi kabhi gham",
   genre : "drama",
   cast :["Shahrukh","Amitab","Hritik"],
   shootLocation : {
      country : "India",
      city: "Srinagar"
   },
   budget : 100000
   
}

let {title,genre,cast,shootLocation}= movie;
console.log(shootLocation )


//spreading

let arr1= [1,2,3,4,5,6,7,8,9,10];
let arr2 = [11,12,13,14,15,16,17];

let newArr = [...arr1,...arr2];
console.log(newArr)

let obj1={a:1,b:2}
let obj2={c:3,d:4}

let newObj = {...obj1,...obj2}
console.log(newObj)

// rest parameter 

let add  = (...nums)=>{
   // return nums 
   let sum = 0
   for(let i = 0;i<nums.length;i++){
      sum = sum + i
   }
   return sum
} 
console.log(add(1,2,3,4,5,6,7,8,4,5,6,12,22,33,44,55))

//optional chaining => to prevent errors

let user = {
  name: "Tanzeel",
  address: {
    city: "Srinagar"
  }
};

console.log(user.address.city);      // Srinagar
console.log(user.address.pincode);   // undefined
console.log(user.contact.phone);     //  ERROR: cannot read 'phone' of undefined

console.log(user?.contact?.phone);   // undefined (No error)

// ECMAScript 2020
//default parameter  //its not es6 feature

// let greet = (fullName="raju")=>{
//    return fullName
// }

// console.log(greet()) // here raju will be printed until you send the name in it that is called default parameter
// console.log(greet("Rastogi Bhaya"))

