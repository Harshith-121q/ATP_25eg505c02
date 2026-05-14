// // product API program
// Create Product REST API with below features
// Product document structure
//      a.productId (required)
//      b.productName(required)
//      c.price(required, min price 10000 and max price 50000)
//      d.brand(required)
// REST API with below operations
//      a. Create product
//      b. Read all products
//      c. Read a product by productId
//      d. Update a product by productId
//      e. Delete a product by productId

// cerate express app 
import exp from "express"
import { connect } from "mongoose"
import { productApp } from "./userapi/productApi.js"
const app = exp()

app.use(exp.json())

// forward req tp userAPP if path starts with /user-api
// Forward requests to userApp if path starts with /user-api
app.use("/product-api", productApp);


// connect to DB server 
// connect().then().catch()  // this is old method after 2015 async and await are used 

async function connectDB(){             // async is used to perform asyncrinous opferation 
    try{
        await connect("mongodb://localhost:27017/anuragDB")// database address  //if there is the mongodb selection error then use 127.0.0.0 instead of localhost    // from this promis is returned 

        console.log("DB connection successfully ")
        
        // start server
        app.listen(9000, ()=>console.log("Server on port 9000.."))
        }
        catch(err){
            console.log(err)
        }
}
connectDB()

// error handling middleware                // erorr=>(name,message,callstack)
app.use((err,req,res,next)=>{
    // validation error 
    if(err.name == "ValidationError"){
        return res.status(400).json({message:"error occured ",err})
    }
    // Cast Error
    if(err.name == "CastError"){
        return res.status(400).json({message:"error occured ",err})
    }

    // server-side error
    res.status(500).json({message:"error occured",err})
})

//  all teh db operations is async operations so they return promis 
// to consume the promis async and await are used 