// Assignment -1
// Shopping cart Summery
// Test Data:
const cart = [  {id : 101, name:"Laptop",price:60000, quantity:1,inStock:true},
                {id : 102, name:"Mouse",price:800, quantity:2,inStock:true}, 
                {id : 103, name:"Keyboard", price:1500,quantity:1,inStock:false},
                {id : 104, name:"Monitor", price:12000,quantity:1,inStock:true}]

// // Tasks:
    // 1. Use filter() to get only inStock products
    // 2. Use map() to create a new array with:  { name, totalPrice }
    // 3. Use reduce() to calculate grand total cart value
    // 4. Use find() to get details of "Mouse"
    // 5. Use findIndex() to find the position of "Keyboard"
let inStockProduct=cart.filter(e=>e.inStock==true)
console.log("In Stock Products:",inStockProduct) ;

let s2 = cart.map(e=>({name:e.name,price:e.price}))
console.log("Product Names:",s2) ;

// grand total cart value using reduce
let grandTotal = cart.reduce((acc,e)=>acc+e.price,0)// here 0 is the initial value of the accumulator 
console.log("Grand Total:",grandTotal) ;

let detailsOfMouse = cart.find(e=>e.name=="Mouse")
console.log("Details of Mouse:",detailsOfMouse) ;


let positionOfKeyboard = cart.findIndex(e=>e.name=="Keyboard")
console.log("Position of Keyboard:",positionOfKeyboard) ;