// create mini express applicaion
import exp from 'express';
export const userApp = exp.Router()



let user=[]


// Creating API         // API contains routes // routes handle the http reqs 

// (rest-api)- representatnol state transfer  -> popular api standard 

            // all this reqa will have 2 parameters         app.get(path,req handler )
        // route to handle GET req      http://localhost:3000/users
        // app.get('/users',(req,res)=>{                                               // firstly giving the response to the user 
        //     res.json({message:"this can read the get user data ,this is a GET reequest to the user  jhgjhgff"})
        // })
        // // route to handle POST req
        //  app.post('/users',(req,res)=>{                                               // firstly giving the response to the user 
        //     res.json({message:"this is a Response for POST   "})
        // })
        // // route to handle PUT req
        //  app.put('/users',(req,res)=>{                                               // firstly giving the response to the user 
        //     res.json({message:"this is the response for update"})
        // })
        // // route to handle DELETE req
        //  app.delete('/users',(req,res)=>{                                               // firstly giving the response to the user 
        //     res.json({message:"this is the response for delete "})
        // })
// just sending the string response 

        // this is for getting the user which are created
        userApp.get('/users',(req,res)=>{                                               // firstly giving the response to the user 
            res.json({message:"",payload:user})
        })

        // findng the user
        userApp.get('/users/:id',(req,res)=>{
             let idUrl=Number(req.params.id)
             let findUser = user.find(userObj=>userObj.id===idUrl)
             if(findUser === undefined){
                return res.json({message:"User Not Found"})
             }
             return res.json({message:"User Found",payload:user})
      })

       
        // route to handle POST req
         userApp.post('/users',(req,res)=>{                        // here in post we are creating the resourse                                            // firstly giving the response to the user 
           
           // get new user from client
           const newuser = req.body
           console.log(req.body)
           //push into array
          user.push(newuser)
          // find response
          res.json({message:"User created"})
           
        })
        // route to handle PUT req
         userApp.put('/users',(req,res)=>{                                               // firstly giving the response to the user 
         
          // get modified user from client
            let modifiedUser = req.body
          //get index of exixting user in user array 
          // get index using findIndex()
          let index=user.findIndex(userObj=>userObj.id == modifiedUser.id)

          // user not found
          if(index==-1){
            return res.json({message:"User Not Found"})
          }

          // update user with index
          user.splice(index,1,modifiedUser)


          // send request
          res.json({message:"User Updated"})



        })
        // route to handle DELETE req
         userApp.delete('/users/:id',(req,res)=>{                                               // firstly giving the response to the user 
           // get id of user from url parameter
        //    console.log(req.params)     just for printing                          // params -> return keys and values
           let idUrl=Number(req.params.id)
            //find index of user 
            let index = user.findIndex(userObj=>userObj.id == idUrl)
            // user not found
          if(index==-1){
            return res.json({message:"User Not Found"})
          }
          // deleting the user
          user.splice(index,1)
          // sending the response
          res.json({message:"User Deleted Successfully"})
        })


// fake clients testing tools  :     postman, (rest client  ) - > very famous client side in vs code 

// every time when you are making some change then restart the server manually \
// there is a tool named                            this is used globally for all the backend app so download is globally 
