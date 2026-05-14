import { Schema,model } from "mongoose"

//      a.productId (required)
//      b.productName(required)
//      c.price(required, min price 10000 and max price 50000)
//      d.brand(required)



// create user Schema(username,password,email,age)
const ProductSchema = new Schema({
    //structure of Product resourse // very imp 
    

    productname:{
        type:String,                        // string ->js datatype , String-> mongoDB schema object so use String
        required:[true,"Product Name is Required"],
        // minLength:[4,"min length of username is 4 chars"],
        // maxLength:[6,"max length of username is 6 chars"]


    },
        productId:{
        type:Number,
        required:[true,"Product Id is Required"]
    },
    price:{
        type:Number,
        required:[true,"Email id required"],
        min:10000,
        max:50000
        
    },
    brand:{
        type:String,
        required:[true,"Brand Name is required"]
    }
},
{
    versionkey:false,
    timestamps:true
})
// above the the db shema we have to be very carefull for cerating the schema 

    //Generate UserModel
    export const ProductModel =model("product",ProductSchema)//  in this it pruralize the product to products and create the collections in the database we are mentioned in the server.js i.e anuragdb
    

