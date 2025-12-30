//debugging

function One(){
    console.log("one")
    One()
}

function Two(){
    console.log("two")
}

// console.log(One())


// how can you debug == the primary source is to stsrt consoling()
//then there are few things which are called debugging tools


//shadowing

// let a = 10;
// function add(){
//     var a = 20 
//     console.log(a)
// }

// add()


//Closures in js 

//A closure is a function together with its lexical environment, where the function remembers and can access variables from its outer scope even after the outer function has finished execution.

function Greeting(name){    

    return function(greet){

        return greet + " " + name
    }
}

let greet1 = Greeting("tanzeel");
console.log(greet1("night"))


//Encapsulation:Encapsulation means hiding internal data and allowing access only through controlled methods
//In JavaScript, encapsulation is achieved by hiding variables using closures or private class fields
