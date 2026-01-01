//callbacks and functions 
// console.log("Hey are you there ");


function parent(operation){
    console.log("hello")
    operation()
}


function child(){
    
    console.log("world") 
}

parent(child)     

