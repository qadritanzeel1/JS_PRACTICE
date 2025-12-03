//ES6 features 

//Arrow Functions

let sum = (a, b) => {
   let nstr = ""
   for (let i = 1; i <= b; i++) {
      nstr = nstr + a
   }
   return nstr
}

console.log(sum("string", 5))


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

console.log(greeting("Tanzeel" , "t")   )     ;



