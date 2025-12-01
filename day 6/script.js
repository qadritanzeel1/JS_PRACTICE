// Arrays and Strings
//Arrays :- we can say arrays are something in which we can store the collection of data ;

let classRoomArray = ["Vansh", "Tanzeel", "Sameer", "Ahsan"]
// indexing          0         1           2          3
// if i print this 
console.log(classRoomArray);

// now if you want to print specfic index of an array like if you want print 2nd index of an array

console.log(classRoomArray[1]); // i will get Tanzeel here 

// but remember one concept indexing always starts from 0

//Array indexing starts at 0 because it makes memory addressing simple, efficient, and aligned with how computers store data
classRoomArray[2]="Asim";
console.log(classRoomArray[2]) // here this will change because arrays are mutable which can be changed or updated 

//Strings:- strings are sequence of characters used to represent text

//In strings even we have indexing for example

let alpha = "abcdefghijklmnopqrstuvwxyz";
//indexing   012345678
//but there is a concept of mutable and immutable eg
console.log(alpha[20])
// if i want to change  i can't becaue strings are immutable
alpha[20]="p"
console.log(alpha[20]) // here the value will remain same cant be changed


//reverse an array 

let arr = ["test1","test2","test3","test4","test5"];
let nArr = []
for(let i=arr.length-1;i>=0;i--){
    // console.log(arr[i])
  nArr.push(arr[i]);
}
console.log(nArr)

// function 

//fn(arr,condition) =>"odd" , "even"

// return new array with all the elements at odd positions for odd
// return new array with all the elements at odd positions for even

let arr1 = [1,2,3,4,5,6,7,8,9];


function evenOddArr(arr,condition){

    let nArr = []
   
    if(condition =="odd"){
        for(let i=0;i<=arr.length-1;i++){
            if(i%2==1){
                nArr.push(arr[i]);
            }
        }
    }else if(condition == "even"){
        for(let i=0;i<=arr.length-1;i++){
            if(i%2==0){
                nArr.push(arr[i]);
            }
        }
    } 
    return nArr
}

let result = evenOddArr(arr1,"even")
console.log(result)

//reverse a string
let str = "TANZEEL"
function strRev(str){

    let rev = "";
    for(let i=str.length-1;i>=0;i--){
        rev = rev + str[i]
    }
  return rev
}

let reverse = strRev(str)
console.log(reverse)

