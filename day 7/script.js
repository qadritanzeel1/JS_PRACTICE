// for of loop 

// for iterating in normal loop 
// let arr = [1,2,3,4,5,6,7,8,9];

// for(let i =0;i<=arr.length-1;i++){
//     console.log(arr[i])
// }

//but in for of loop its simple

// for(let i of arr){
//     console.log(i);
// }

// print all the elements in the array 

// let arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[27,18,19,20]];

// let nArr = []

// for(let i=0;i<=arr.length-1;i++){
//     for(j=0;j<=arr[i].length-1;j++){
//         nArr.push(arr[i][j]);
//     }
// }

// console.log(nArr)

//column traversal
let arr = [[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
[13, 14, 15, 16],
[27, 18, 19, 20],];

let nArr = []

for (let i = 0; i <= arr[0].length - 1; i++) {
    for (j = 0; j <= arr.length - 1; j++) {
        nArr.push(arr[j][i]);
    }
}

// console.log(nArr);



let matrix = [[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
[13, 14, 15, 16],];

let copyMatrix = []


for (let i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
        if (i == 0) {
            copyMatrix.push(matrix[0][j])
        }
    }

    for (let k = 0; k < matrix[i].length; k++) {
        if (i !== 0 && k === matrix[i].length - 1) {
            copyMatrix.push(matrix[i][k])
        }
    }
    for (j = matrix[i].length - 2; j >= 0; j--) {
        if (i === matrix.length - 1) {
            copyMatrix.push(matrix[i][j])
        }
    }
}
for (let i = matrix.length - 2; i > 0; i--) {
    copyMatrix.push(matrix[i][0]);
}


console.log(copyMatrix)