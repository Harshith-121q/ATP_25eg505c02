import {useEffect, useState} from "react"

function ApiDemo (){
    //state
    // let [count,setCount]=useState(100)
    // const changeCount=()=>{
    //     setCount(count+=1);
        
    // }

    console.log("Api demo considered")
    let [users,setUsers]=useState([])
    let [loading,setLoading]=useState(false)
    let [error,setError]=useState(null)

    useEffect(()=>{
        console.log("Use Effect executed")
        // functions to make api call
        
        async function getData(){
            // set loading to true
            setLoading(true);
            try{
            let res= await fetch ("https://jsonplaceholder.typicode.com/comments")
            let userList = await res.json()

            // update state
            setUsers(userList);
        } 
        catch(err){
            console.log("error is :",err)
            setError(err.message)
        }
        finally{
            setLoading(false)
        }
    }
       getData() 
           
    },[])

    // console.log("Api demo executed")

    // deal with loading state
    if(loading){
        return <p className="text-3xl text-center text-green-300">Loading...</p>
    }
    if(error!=null){
        return <p className="text-3xl text-center text-red-500"> Failed To fetch</p>
    }
    return(
        <div className="text-center">
                {/* <p className="text-3xl ">Count :{count}</p> */}
                {/* <button className="bg-amber-100 " onClick={changeCount}>click to change</button> */}
                <h1 className="text-green-400 text-4xl">List Of Users </h1>
                <div className="grid sm:grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-7">
                        {
                            users.map((userObj)=>(
                                <div className="text-2xl text-blue-400" key={userObj.id}>
                                    <p>Name: {userObj.name}</p>
                                    <p>Email: {userObj.email}</p>
                                </div>
                            ))
                        }
                </div>
        </div>
    )
}

export default ApiDemo;