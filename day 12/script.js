//stackoverflow

// function one(){
//     console.log("one");
//     one()
// }
// console.log(one())


function add(a,b){
    return a+b
}

// console.log(add(3,5))
// console.log(add(2,4))

//functions ==> refered to as first class citizens


//shadowing

let a = 10;

function parent(){
    let a = 20 
    function child(){
         a = 30;
        console.log(a)
    }
    child()
        console.log(a);
}

let res =parent()
console.log(res)

//Laxical Scope ==> A function can access variables from its own scope AND the scopes in which it was physically written.

// Child function → can access Parent variables
// Parent function → cannot access Child variables

// Because child is written inside the parent