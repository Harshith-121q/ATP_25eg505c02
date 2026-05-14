// import http server using express
import exp from "express"               //app is the name used to store the exporess appication
const app=exp()    
import {userApp} from "./API/userAPI.js";
import {productApp} from "./API/productApi.js"
import { StudentApp } from "./API/student.js";
                                 // this app contains the http server and many things 
// usng express we can build the entire back-end



// use body parser middleware for 
app.use(exp.json())//this is converting the resopnse to json type sent by the client

// createing custom middleware btw req and res 
// for any http req the middleware will execute 
function middleware1(req,res,next){
    //sending res from moiddleware 
    // res.json({message:"this res form middleware"})
    console.log("middleware1 executed ")

    next()
}


function middleware2(req,res,next){
    //sending res from moiddleware 
    // res.json({message:"this res form middleware"})
    console.log("middleware2 executed ")

    next()
}

app.use(middleware1)
app.use(middleware2)

app.use("/user-api",userApp)
app.use("/product-api",productApp)
app.use("/student-api",StudentApp)

// set a port number 
const port = 3000

app.listen(port, ()=> console.log(`sever listerning port  ${port}...`)) // assign port number to http server

// this 9 lines http server is created                                      // by running this code server is getting on and by clicking ctrl+c the server will stop

// testing the sample data for real time operations because the get is just giving the message req i.e String   and i future we are gonna work on databases 


