// for in loop ==> specialised loop for objects only 


// let obj = {
//     title : "Shirt",
//     color : "Blue",
//     price : "2000",
//     isAvailable: true
// }

// for(let key in obj){
    // console.log(key);    
// }

//how will you print the values in obj
// for(let key in obj){
    // console.log(obj[key]);
// }
//printing key and its value both
// for(let key in obj){
    // console.log(key,":",obj[key]);
// }

// console.log(obj.key); // we will not get here a result because dot natation finds the name key in obj there is no name in object as key
// and dot notation are not dynamic
// console.log(obj[key]);  //square bracket enables  dynamic key access

//object methods

// let obj = {
//     bool : true,
//     str : "Tanzeel",
//     num : 123,
//     nestObj :   {
//         a:1,
//         b:2
//     },
//     func: function (a,b){
//         return a * b;   
//     }
// }

// console.log(obj.func(3,9))

//functions are created as values of an object's key, its called methods

//map the entire alphabets to their specific number

function mapChar(str){
    let obj = {};
    for(let i =0 ;i<str.length;i++)(
        // console.log(i+1,str[i])
        obj[i+1] = str[i]
    )
    return obj
}

let result =mapChar("abcdefghijklmnopqrstuvwxyz");
console.log(result)

//finding frequency of stuff

// let str = "aaaabbbcccdddeeefffggghhhiijjkl";
// let obj = {};

// for(let i =0; i<str.length;i++){
//     if(obj[str[i]]){
//         obj[str[i]] = obj[str[i]] + 1
//     }else{
//         obj[str[i]]=1
//     }
// }

// console.log(obj)





//truthy --> true,any number other than 0 is truthy even negative 
//falsy  -->false, null, undefined,0

// let obj = {
//     firstName : "Tanzeel",
//     lastName :" Qadri",
//     fullName: function(){
//      return obj.firstName + obj.lastName
//     }
// }

// console.log(obj.fullName())
//  rather than doing that is given below js gave us this keyword

let obj = {
    firstName : "Tanzeel",
    lastName :" Qadri",
    fullName: function(){
     return this.firstName + this.lastName  //here
    }
}

console.log(obj.fullName())

//by deafault object methods cant actually access other object properties
