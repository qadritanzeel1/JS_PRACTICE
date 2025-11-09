//Multidimensional Arrays

// let arr = [[1,2,3],[4,5,6],[7,8,9]];

//if you want to access array in array

//but if you want to access last element of last array

//we can simply write a code like this

// console.log(arr[2][2])   // here i will get the last one but if someone pushes some value at last this method is not used 

//for that we use .length-1

// let a = arr[2];
// console.log(a[a.length-1])

// how ro push to arr 2?

// arr[2].push(10);
// console.log(a[a.length-1])



// let arr2 = [[3,4,5],[6,7,8],[10,12,34],[90,54,32]];

// console.log(arr2[3][2])
// let b = arr2[3];
// console.log(b[b.length-1]); // here i will get 32;

// if i dilute this

// console.log(arr2[3][arr2[3].length-1]);


//print all the elements in the array

// let arr = [[1,2,3],[4,5,6],[7,8,9]]; //print this array in 1 2 3 4 5 6 7 8 9 in this manner
// let str= ""
// // let narr = []
// for(let i =0;i<arr.length;i++){
//     // console.log(arr[i])
//     for(let j=0;j<arr[i].length;j++){
//         // console.log(arr[i][j]) // but we want result in different manner  for that we have to define a declare empty string
//     str += arr[i][j] + " "
//     //   narr.push(arr[i][j])
//     }
// }

// // console.log(narr)
// console.log(str );


//column traversing

// let arr = [[1,2,3],
//            [4,5,6],
//            [7,8,9] ];  // print this in column 

// for(let i = 0;i<arr.length;i++){
//     for(let j = 0;j<arr[i].length;j++){
//         console.log(arr[j][i]);
//     }
// }


// printing the borders of a matrix 
// let matrix = [[1,2,3,4] ,
//               [5,6,7,8] ,
//               [9,10,11,12] ,
//               [13,14,15,16] ]

// for(let i =0;i<matrix.length;i++){
//     for(let j = 0;j<matrix[i].length;j++){
//         if(i==0||j==0|| i == matrix.length-1 || j==matrix[i].length-1){
//             console.log(matrix[i][j])
//         }
//     }
// }

// but we did'nt print the borders like top right botom left 
// for that we use combination of while and for loops

let matrix = [[1,2,3,4] ,
              [5,6,7,8] ,
              [9,10,11,12] ,
              [13,14,15,16] ]

let count = 0;
let topE =0;
let left = 0;
let right = matrix.length-1
let bottom = matrix.length-1
let totalEle = matrix.length * matrix[0].length;

while(count<totalEle){
for(let i = topE;i<=right;i++){
  console.log(matrix[topE][i])
  count++;
}
topE++;
for(let i = 1;i<=bottom;i++){
  console.log(matrix[i][right]);
  count++;
}
  right--
  for(let i = right;i>=left;i--){
    console.log(matrix[bottom][i])
    count++;
  }
  bottom--
  for(let i = bottom;i>=topE;i--){
    console.log(matrix[i][left])
    count++
  }
  left++
  break;
  
}



   
   

    









































