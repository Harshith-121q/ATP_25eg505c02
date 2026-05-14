1. GEneraete package.json       //npm init -y
2. cerate express server                //npm install express
3. install mongoose and connect to mongoDB server       //npm install mongoose 


        REST API--mongoDB native driver ->DB server
        REST API--Mongoose ODM                     // after this goto step 5 and then 4                 
4. Build USER REST  API       // here the resourse is User itself (imp) 
                        - create user 
                        -read all users 
                        -read a user by id 
                        - update teh user by id 
                        -Delete the user by id 
5. Create the Schema and model of the resourse(user)                        (Schema Contains the fields of the db)

6. Define the routes and start performing the opperations 


// status 
<!-- 200-success
201-created
400-bad reques
401-unauthorized
404-not found
500-server error -->   very imp (status )


1. npm init -y
2. npm install express
3. npm install mongoose        


handling unavaiable resources 
validators


day8:
XSS-cross side scripting
CSRF - cross side resourse Forgeery


make database file saperate 
never put the database url in the src code bcoz anyone can access it 
keep jaat tokens private