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


// function counter(){
//     let count = 0;
//     return function(){
//         count++
//         return count
//     }
// }

// let count1 = counter()
// console.log(count1())
// console.log(count1())
// console.log(count1())
// console.log(count1())
// console.log(count1())
// console.log(count1())
// console.log(count1())  // it will increase the count 

// we cant have multiple return statements in fxns (without conditions)
// may be we can assign a data structure to retuen statement and in that data structure return multiple values .


function counter(){
    let count =0;
    return {
        increment : function(){
            count++
            return count
        }, 
        decrement : function(){
            count--;
            return count;
        },
    }
}

let counterSetup = counter();
console.log(counterSetup.increment())
console.log(counterSetup.increment())
console.log(counterSetup.increment())
console.log(counterSetup.increment())
console.log(counterSetup.increment())
console.log(counterSetup.increment())   
console.log(counterSetup.decrement())
console.log(counterSetup.decrement());



function createQuize(q,a){
        let attemp =0;

        return function(userAns){
            attemp++
          if(userAns ==a){
            return true + ` no of attempts done ${attemp}  `
          }else{
            return false  + ` no of attempts done ${attemp}  `
          }
        }
}

let quize1 = createQuize("what is the capital of India","Delhi");
console.log(quize1("Delhip"))
console.log(quize1("Delhip")) //the attempt score will be incresing 