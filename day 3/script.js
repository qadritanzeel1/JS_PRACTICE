//Multidimensional Arrays

let arr = [[1,2,3],[4,5,6],[7,8,9]];

//if you want to access array in array

//but if you want to access last element of last array

//we can simply write a code like this

console.log(arr[2][2])   // here i will get the last one but if someone pushes some value at last this method is not used 

//for that we use .length-1

let a = arr[2];
console.log(a[a.length-1])

// how ro push to arr 2?

arr[2].push(10);
console.log(a[a.length-1])

// print all the elements in the array

let arr2 = [[3,4,5],[6,7,8],[10,12,34],[90,54,32]];


