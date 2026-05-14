// cerate mini express  application(Saperate route )
import exp from "express"
import { ProductModel } from "../models/ProductModel.js"
//import {hash} from "bcryptjs"       // for hashing password 
export const productApp = exp.Router()                             // this is a saperate file in which there are only routes not http reqs 

// define PRODUCT REST API ROUTERS
    
    productApp.post("/products",async(req,res)=>{
        // get new user obj from req
        const newProduct = req.body
    //     // hash the password 
    //    const hashedPassword =  await hash(newProduct.password,10)
    //    // replace plain password to hashed password 
    //    newProduct.password=hashedPassword
    
        // cerate new product document
        const newProductDocument = new ProductModel(newProduct)

        // save
        const result = await newProductDocument.save()
        console.log("result :",result)

        // send res 
        res.status(201).json({message:"Product Added"})
        
    });
    // read all the products 
    productApp.get("/products",async(req,res)=>{
        // read all the users from db
        
        let productList = await ProductModel.find()

        // send res
        res.status(200).json({message:"Products",payload:productList})
    })
    // read the users by object id 
    productApp.get("/products/:id",async(req,res)=>{
        // read object id from req params
        const pid = req.params.id
        // find products by id 
        // const userObj = await UserModel.findOne({_id:uid})                   // Note: use findOne() to read non-onject fields 
                                                                                        //  useBy(id) to read document by object                    
        // we acn use findBy()
        const productObj = await ProductModel.findById(pid)

        // sending res
        res.status(200).json({message:"product ",payload:productObj})
    }) 

    // update a products by id
    productApp.put("/products/:id",async(req,res)=>{
        // get modified user from the req.body
        const modifiedProducts=req.body

        // find user by id & update
        const pid=req.params.id
        // checking if id is equal or not , if not then return 404 error page 
        if(!pid){
            return res.status(404).json({message:"product not found"})
        }

        const updatedProducts= await ProductModel.findByIdAndUpdate(pid,{$set:{ ...modifiedProducts }},{new:true,runValidators:true})

        
        // send res
        res.status(200).json({message:"Products details Modified",payload:updatedProducts})
    })
    // API route for delete
    productApp.delete("/products/:id",async(req,res)=>{
            // getitng the  toproduct delete 
        const productToDelete =req.body
            // find product by id & update
        const pid=req.params.id

        const deletedproduct= await ProductModel.findByIdAndDelete(pid,{$unset:{ ...productToDelete }},{new:true})
        // send res
        if(!deletedproduct){
            return  res.status(404).json({message:"product not Found"})
        }
        res.status(200).json({message:"product deleted",payload:deletedproduct})
        console.log("deleted Product : ",deletedproduct)

        })
