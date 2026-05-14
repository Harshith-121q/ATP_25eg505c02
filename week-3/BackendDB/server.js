// cerate express app 
import exp from "express"
import { connect } from "mongoose"
import { userApp } from "./userapi/ussrApi.js"
import { productApp } from "./userapi/productApi.js"
import cookieParser from "cookie-parser"
import {config} from 'dotenv'

config();//process.env.port;process.env.url   process is an object which is used to call env veariables 
const app = exp()

app.use(exp.json())
app.use(cookieParser()) // cookie parser middleware


const port = process.env.PORT || 9000
// // cerating middleware
// function middleware1(req,res,next){
//     console.log("middleware executed ")
//     next()
// }
// app.use(middleware1)

// forward req tp userAPP if path starts with /user-api
// Forward requests to userApp if path starts with /user-api
app.use("/user-api", userApp);
app.use("/product-api",productApp)



// connect to DB server 
// connect().then().catch()  // this is old method after 2015 async and await are used 

async function connectDB(){             // async is used to perform asyncrinous opferation 
    try{
        // await connect("mongodb://localhost:27017/anuragDB")// database address  //if there is the mongodb selection error then use 127.0.0.0 instead of localhost    // from this promis is returned 
        await connect(process.env.DB_URL)
        console.log("DB connection successfully ")
        
        // start server
        app.listen(process.env.PORT, ()=>console.log("Server on port 9000.."))
        }
        catch(err){
            console.log(err)
        }
}
connectDB()

// error handling middleware                // erorr=>(name,message,callstack)
// app.use((err,req,res,next)=>{
//     // validation error 
//     if(err.name == "ValidationError"){
//         return res.status(400).json({message:"error occured ",err})
//     }
//     // Cast Error
//     if(err.name == "CastError"){
//         return res.status(400).json({message:"error occured ",err})
//     }

//     // server-side error
//     res.status(500).json({message:"error occured",err})
// })

//  all teh db operations is async operations so they return promis 
// to consume the promis async and await are used 