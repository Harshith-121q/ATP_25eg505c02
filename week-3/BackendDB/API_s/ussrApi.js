// cerate mini express  application(Saperate route )
import exp from "express"
import { UserModel } from "../models/UserModel.js"
import { hash,compare } from "bcryptjs"       // for hashing password 
import jwt from 'jsonwebtoken'  // it is a old module so it use the default export  
import { verifyToken } from '../middleware/verifytoken.js'


const {sign}=jwt        // here we are doing encoding 
export const userApp = exp.Router()                             // this is a saperate file in which there are only routes not http reqs 

// define USER REST API ROUTERS
    // crete new user
    userApp.post("/users",async(req,res)=>{
        // get new user obj from req
        const newUser = req.body
        // hash the password 
       const hashedPassword =  await hash(newUser.password,10)
       // replace plain password to hashed password 
       newUser.password=hashedPassword
        // cerate new user document
        const newUserDocument = new UserModel(newUser)

        // save
        const result = await newUserDocument.save()
        console.log("result :",result)

        // send res 
        res.status(201).json({message:"User created"})
        
    });

    // user login authentication
    userApp.post ("/auth",async (req,res)=>{
        // get the cred obj from client 
        const {email,password}=req.body
        // verify the email
        let user = await UserModel.findOne({email:email})
        // if email not existed 
        if(user===null){
            return res.status(404).json({message:"Invalid email"})
        }
        // compare the password 
        // convert the plain password to hash code from the client an dcompare them 
        let result =await compare(password,user.password)
            // if password not hashed 
            if (!result){
                return res.status(400).json({message:"Invalid Password"});
            }
            // if password  are matched 
            //create token (jsonwebbtoken  - jwt - jasst)
            const signedToken=sign({email:user.email},process.env.SECRET_KEY,{expiresIn:"1h"})  // expirising valiuse:10d, 10w,100=sec,"100"=> millisec
            console.log("Token :" ,signedToken)
            // sending token res
            // res.status(200).json({message:"login success",token:signedToken})   this is not the proper method to send the response 
            // store token as httpOnly cookie
            res.cookie("token",signedToken,{
                httpOnly:true,
                sameSite:"lax",               // scrict:can send the token to the same origin , none: can send the token to any origin,las:can 
                secure:false        // used for https protocol
            })
            console.log("Cookie :", req.cookie)
            // after th eabove we can send the response 
            // send res
            res.status(200).json({message:"login success",payload:user})
        }
    )


    // it is not applicable because one user cannot see the details of another users 
    // // read all the users 
    // userApp.get("/users",verifyToken,async(req,res)=>{
        

    //     // read all the users from db
        
    //     let userList = await UserModel.find()

    //     // send res
    //     res.status(200).json({message:"users",payload:userList})
    // })



    // read the users by object id 
    userApp.get("/user",verifyToken,async(req,res)=>{                                              // userApp.get(path,verifyToken,req-handler)-syntax for route level middleware 
        // read object id from req params
        // const uid = req.params.id
        // find user by id 
        // const userObj = await UserModel.findOne({_id:uid})                   // Note: use findOne() to read non-onject fields 
                                                                                        //  useBy(id) to read document by object                    
        // we acn use findBy()
        // const userObj = await UserModel.findById(uid)



        // read user email from req 

        const emailOfUser = req.user?.email;

        // find user by email , in this the current user can see only his details not other user's details
        const userObj = await UserModel.findOne({email:emailOfUser}).populate("cart.product")
        if(!userObj){
            return res.status(404).json({message:"user not found"})
        }
        // sending res
        res.status(200).json({message:"user",payload:userObj})
    }) 
    // update a user by id
    userApp.put("/users/:id",async(req,res)=>{
        // get modified user from the req.body
        const modifiedUser=req.body

        // find user by id & update
        const uid=req.params.id
        // checking if id is equal or not , if not then return 404 error page 
        if(!uid){
            return res.status(404).json({message:"user not found"})
        }

        const updatedUser= await UserModel.findByIdAndUpdate(uid,{$set:{ ...modifiedUser }},{new:true,runValidators:true})

        
        // send res
        res.status(200).json({message:"user Modified",payload:updatedUser})
    })

    // adding product to cart 
    userApp. put ("/cart/product-api/:pid",verifyToken,async (req,res)=>{
        // ret product id from url params
        let productId = req.params.pid;
        // get current user details
        const emailOfUser = req.user?.email;

        // if the product is already there it should incremet the count 
        // let exixtedProduct = await UserModel.findOne({cart:{}})
        // if(exixtedProduct){
        //     let newProduct= await UserModel.updateOne({$push:{cart:{product:{productId}}}})
        //     console.log("newProduct added :",newProduct)

        // }
        // if(req.body.contains(cart))
        // {
        //     let newProduct= await UserModel.updateOne({$push:{cart:{product:{productId}}}})
        //     console.log("newProduct added :",newProduct)
        // }
        // add product to cart
        let result = await UserModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:productId}}},{new:true})
        // if user invalid
        if(!emailOfUser)
        {
            return res.status(404).json({message:"user not found "})
    
        }
         res.status(200).json({message:"", payload:{result}})

    })
    userApp.delete("/users/:id",async(req,res)=>{
            // getitng the user to delete 
        const userToDelete =req.body
            // find user by id & update
        const uid=req.params.id

        const deletedUser= await UserModel.findByIdAndDelete(uid,{$unset:{ ...userToDelete }},{new:true})
        // send res
        if(!deletedUser){
            return  res.status(404).json({message:"User not Found"})
        }
        res.status(200).json({message:"User deleted",payload:deletedUser})
        console.log("deleted User : ",deletedUser)

        })
