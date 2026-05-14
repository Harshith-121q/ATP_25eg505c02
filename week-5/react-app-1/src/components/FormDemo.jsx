import {useForm} from "react-hook-form"
import { useState } from "react";

function FormDemo (){
    //state
    const [users,setUsers]=useState([])
    const {
        register,    // to register form fields 
        handleSubmit,   // to handle for submission
        formState:{errors} // to handle validation
        } 
        =useForm();
    // form submit function
    const onFormSubmit=(obj)=>{
            setUsers([...users, obj])
    };
    return (
        <div>
            <h1 className="text-4xl text-center text-blue-700 font-extrabold">Form Demo</h1>

            <form className="max-w-md mx-auto mt-10 " onSubmit={handleSubmit(onFormSubmit)}>
                {/* username */}
                <div className="mb-3">
                    <label htmlFor="username">UserName:</label>
                    <input type="text"
                     {...register("username",   
                        {
                            required:"username required",
                            validate:(v)=>v.trim().length!==0 || "White Space is not valid",
                            minLength:4,
                            maxLength:10
                        }
                     )}

                      id="username"
                       className="border w-full p-3" 
                       />
                    {errors.username?.type==="required" && <p className="text-red-400" >* Username Required</p>}
                    {errors.username?.type==="minLength" && <p className="text-red-400" >* Minimum length should be 4</p>}
                    {errors.username?.type==="maxLength" && <p className="text-red-400" >* Maximum length should be 10</p>}
                    {errors.username?.type==="validate" && <p className="text-red-400" >* White Space is invalid</p>}

                    
                </div>
                {/* email */}
                <div className="mb-3">
                    <label htmlFor="email">Email:</label>
                    <input type="text"
                     {...register("email",
                        {
                            required:"email id required"
                        }
                    )} id="email"
                     className="border w-full p-3"/>
                     {errors.email?.type==="required" && <p className="text-red-400" >* Email id Required</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="dob">DOB:</label>
                    <input
                        type="date"
                        {...register("dob", {
                            required: "dob required"
                        })}
                        id="dob"
                        className="border w-full p-3"
                    />
                    {errors.dob?.type==="required" && <p className="text-red-400" >* DOB Required</p>}
                </div>
                <button type="submit" className="p-2 text-center bg-amber-200 block mx-auto ">Submit</button>
            </form>
                    <table className="mx-auto border-2 mt-10 ">
                        <thead className="border-2 ">
                            <tr className="bg-amber-200">
                            <th className="border-2 w-40 h-20">Username</th>
                            <th className="border-2 w-40">Email</th>
                            <th className="border-2 w-40">Dob</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    users.map((UserObj, index)=>{
                                        return (
                                        <tr key={index} className="border text-center">
                                            <td className="border-2 w-40 h-10">{UserObj.username}</td>
                                            <td className="border-2 w-40">{UserObj.email}</td>
                                            <td className="border-2 w-40">{UserObj.dob}</td>
                                        </tr>
                                        )
                                    })
                                }
                        </tbody>
                    </table>
        </div>
    )
}

export default FormDemo;  
