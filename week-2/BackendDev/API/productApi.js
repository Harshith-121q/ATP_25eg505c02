// create mini express applicaion
import exp from 'express';
export const productApp = exp.Router()

// testing the sample data for real time operations because the get is just giving the message req i.e String   and i future we are gonna work on databases 
let product=[]



// this is for getting the product which are created
        productApp.get('/products',(req,res)=>{                                               // firstly giving the response to the user 
            res.json({message:"",payload:product})
        })

        productApp.get('/products/:name',(req,res)=>{
            let brandName=req.params.name
            let findBrand=product.find(productObj=>productObj.name==brandName)
            if (findBrand){
                return res.json({message:"Brands Founded",payload:product})
            }
            return res.json({message:"products not found"})

        })  

        productApp.post('/products',(req,res)=>{
            const newProduct = req.body
            console.log(req.body)
            product.push(newProduct)
            res.json({message:"product Added"})
        })   
        //updating product details
        productApp.put('/products',(req,res)=>{
            let modifiedProduct= req.body
            let FindIndex=product.findIndex(productObj =>productObj.id==modifiedProduct.id)

            if(FindIndex==-1){
                return res.json({message:"Product Not Exist!"})
            }
            product.splice(FindIndex,1,modifiedProduct)
            console.log("updated product:",req.body)
            return res.json({message:"Product updated Successfully"})
        })
        
        // Deleting products 
        productApp.delete('/products/:id',(req,res)=>{
            let index= Number(req.params.id)
            let findProduct = product.findIndex(pindex =>pindex.id == index)
                    if(findProduct==-1){
            return res.json({message:"Product Not Exist!"})
        }
        product.splice(findProduct,1)
        return res.json({message: "Product Deleted Successfully"})
        })