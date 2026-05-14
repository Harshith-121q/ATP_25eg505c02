import exp from "express";
export const StudentApp = exp.Router(); 

let students=[]

// getting students details
StudentApp.get("/students",(req,res)=>{
    res.json({message:"Students Details :",payload:students})
})

// Posting Students details 
StudentApp.post("/students",(req,res)=>{
    // getting students details from req
    const newStudent=req.body;
    // storing the student details in array
    students.push(newStudent)
    // sending response
    res.json({message:"Student details published successfully",payload:students})

})


//updating the Student details
StudentApp.put("/students",(req,res)=>{
    // getting updated student details
    const modifiedStudent = req.body;
    // storing the id of updated student
    const mid=students.findIndex(studObj=>{studObj.id==modifiedStudent.id})
    // commparing id's 
    if(!mid==modifiedStudent.id){
        res.json({message:"Student does'nt exist"})
    }
    // updating the details
    students.splice(mid,1,modifiedStudent)
    // sending the response
    res.json({message:"Student details updated "})
})