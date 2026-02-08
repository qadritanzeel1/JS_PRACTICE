//adding a new property 
let user = {
  name: "Ali"
};
user.email = "walabaya@example.com"
user.isLoggedIn = true
console.log(user)

//updating property 

let product = {
  name: "Laptop",
  price: 50000
};

product.price=45000
console.log(product)

//delete quantity

let cart = {
    item :"book",
    quantity:2
}

delete cart.quantity
console.log(cart)

