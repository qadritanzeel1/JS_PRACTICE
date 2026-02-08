//basic syntax
let obj = {
    a:1,
    b:2,
    c:3
}

for(let key in obj){
    console.log(key)
    console.log(obj[key])
}

//printing key value

for(let key in obj){
    console.log(key + ":" + obj[key])
    console.log(`${key}:${obj[key]}`)
}

let marks = {
  math: 50,
  english: 60,
  science: 70
};

for(let key in marks){
    console.log(key)
}
//using same object printing values
for(let key in marks){
    console.log(marks[key])
}
// using same obj printing output in key and value pairs
for(let key in marks){
    console.log(`${key} : ${marks[key]}`)
}
