// this middleware is used for protectinhg the route , prevents unathenticated access 
import jwt from 'jsonwebtoken'
const {verify} = jwt
export function verifyToken(req,res,next){
    // token verification logic
    const token = req.cookies?.token;
    // if the reques from unauthorized user  
    // 401 is used for unauthorized access
    if (!token){
        return res.status(401).json({message:"please login to the application "})

    }
    // if token is exixted 
    // there is a verify() in jsonwebtoken module which is use to verify the token 
    try{
    const decodedToken = verify(token,process.env.SECRET_KEY)      // jaat token
    console.log(decodedToken)
    // attach decoded user to the req
    req.user=decodedToken
    next();
    }
    catch(err){
        res.status(401).json({message:"session expired. plz Relogin"})
    }// this is not a route it is a saperate middle ware which is not handled by the express 
    // console.log(token)
    // sign() - to encode the token , 
}
// to access cookies of reques objects we need cookie parser middleware .
//  Otherwise req.cookies id undefined
// install coopie-parser module 
// goto hostel and serach about tokens 
// there are two tokens access token and refresh token
// routes dhould be safe and should access by only authorized accesses

