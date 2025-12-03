// for in loop ==> specialised loop for objects only 


let obj = {
    title : "Shirt",
    color : "Blue",
    price : "2000",
    isAvailable: true
}

for(let key in obj){
    // console.log(key);    
}

//how will you print the values in obj
for(let key in obj){
    console.log(obj[key]);
}
//printing key and its value both
for(let key in obj){
    console.log(key,":",obj[key]);
}

// console.log(obj.key); // we will not get here a result because dot natation finds the name key in obj there is no name in object as key
// and dot notation are not dynamic
// console.log(obj[key]);  //square bracket enables  dynamic key access