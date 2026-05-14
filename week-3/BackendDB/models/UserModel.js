import { Schema,model,Types } from "mongoose"

    
const cartSchema = new Schema({
    product:{
        type:Types.ObjectId,
        ref:"product"//name of product model
    },
    count:{
        type:Number,
        default:1
    }
})
// create user Schema(username,password,email,age)
const userSchema = new Schema({
    //structure of user resourse // very imp 
    username:{
        type:String,                        // string ->js datatype , String-> mongoDB schema object so use String
        required:[true,"username is required"],
        minLength:[4,"min length of username is 4 chars"],
        maxLength:[6,"max length of username is 6 chars"]

    },
    password:{
        type:String ,
        required:[true,"password required"]
    },
    email:{
        type:String,
        required:[true,"Email id required"],
        unique:[true,"Email already Exixted"]   // unique : its is not a validators, it is a options which provides one more index to the objects
        
    },
    age:{
        type:Number,
        //required:[true,"age is required"]
    },
   cart:[cartSchema]
},
{
    versionKey:false,
    timestamps:true
})
// above the the db shema we have to be very carefull for cerating the schema 

    //Generate UserModel
    export const UserModel =model("user",userSchema)//  in this it pruralize the user to users and create the collections in the database we are mentioned in the server.js i.e anuragdb
    

