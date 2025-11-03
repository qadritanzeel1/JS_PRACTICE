// premitive an dnon premitive datatypes what actually means

// Array - array is something in which we can store the collection of data

//for example

//let classRoomArr= ["tanzeel","shivam","manish","kartik","Harsh"]
                     //0        1        2        3        4
//now if i have to access in this array how can i?
// there is a concept indexing

// console.log(classRoomArr[0])

//there will be concept of mutable and immutale 

//classRoomArr[0]="hardik";
//console.log(classRoomArr)  // so here the value of "tanzeel" changed into hardik
// this is called the mutable

//now we try it with strings
//there is also concept of indexing in  strings
// let myName =  "Shubum";
//console.log(myName[2])  // now same in the array we are going to change the value in string
// myName[2]="s"  // i changed the value here 

// console.log(myName) // there value can't chage because strings are immutable

//so premitives are supposed to be immutable where as non  primitives are supposed to be mutable 
//immutable cant be updated 

//methods

// let nums = [1,2,3,4,5,6,7,8,9,10]

//push()
//console.log(nums) //there will be only 1,2,3,4,5,6,7,8,9,10 these values
//nums.push(15);  //but there the elemet will get pushed at the end 
//console.log(nums) // so the value is pushed 
 
//there is one more method like this that is called pop()

//pop()
// console.log(nums) // there will be the same values as it is 
// nums.pop() // but here the one element at the end will be removed which in place at last 
// console.log(nums)


// let studentNames =  ["Tanzeel", "Sameer", "Asim","Ahsan","Farhan"]; // if i want to print the last element of the array we simply print by its index like below

// console.log(studentNames[4]) // so the last element farhan we got 

// but do you the last element of the array everytime
// for example if we push() any thing 
// studentNames.push("Javaid") 
// console.log(studentNames) // the last element got changed 
//so we always write like this for confirming the last element of the array
// console.log(studentNames[studentNames.length-1])

//but if we want to breakdown things

// let length = studentNames.length;
// let lastEle = length-1;
// console.log(studentNames[lastEle])


//printing array using loop 

let arr = ["test1","test2","test3","test4"];
// for(let i =0; i<=arr.length-1;i++){
//     console.log(arr[i])
// }

//now if i want to reverse the array the solution is given below 

// for(let i=arr.length-1;i>=0;i--){
//     console.log(arr[i])
// }

//but if i print this array 
// console.log(arr) // i will not get the result in reverse fashion 
//now for that we have to use another logic like given below 
// let newArr =[]

// for(let i = arr.length-1;i>=0;i--){
//     newArr.push(arr[i]);
// }

// console.log(newArr);

//fn(arr,condition)=>odd , even
//return new array with all the elaments at odd postions for "odd"
//return new array with all the elements at even postions for "even";

// let arr1 = [3,5,7,88,99,9,32];
// let arr2 = [9,5,6,3,2,1,6,7,9];


// function evenOdd(arr,condition){
//     let nArr = [];
//     if(condition==="odd"){
//         for(let i = 0;i<arr.length;i++){
//             if(i % 2 === 1){
//            nArr.push(arr[i]);
//             }
//         }
//     }else if(condition==="even"){
//          for(let i = 0;i<arr.length;i++){
//             if(i%2===0){
//            nArr.push(arr[i]);
//             }
//     }
// }
// return nArr;
// }

// let test1 = evenOdd(arr1,"even");
// console.log(test1);
// let test2 = evenOdd(arr2,"odd");
// console.log(test2)

//reverse a string


// let str = "Helloworld";
// let reversed = ""

// for(let i = str.length-1;i>=0;i--){
//     reversed += str[i]
// }
// console.log(reversed)


// write a function and reverse a string with spaces ,but reversed strings should not have spaces
// example let str = o n e it should be eno without spaces
let str = "he  l     l   o"
function revString(str){
    let nstr = ""
    for(let i = str.length-1;i>=0;i--){
        if(str[i]!==" "){
            nstr = nstr + str[i]
        }
    }
    return nstr
}

let fn = revString(str)
console.log(fn)

let arr1= [1,2,3,3,3,3,4,5,6,6,6,7,7,7] // searchText = 7

function searchEngine(arr,st){
    let count= 0;
    let str = ""
    for(let i = 0; i<=arr.length-1;i++){
        if(arr[i]==st){
            count++
            str +=arr[i] + " "
        }
    }
    return `the count of elements is :${count},and the results are : ${str}`
}

let result = searchEngine(arr1,6);
console.log(result)






