function User (props){
    // const UserObj = props
    
    // return 
    return (
        <div className="p-15 bg-gradient-to-b from-red-600  to-blue-800 rounded-4xl  text-center text-white m-7 shadow-2xl shadow-blue-950  ">
            <img className=" p-3   mx-auto rounded-full mb-7" src={props.image} alt="not available" />
            <h3 className="p-2  font-extrabold text-2xl">Name : {props.name}</h3>
            <p className="p-3">email : {props.email}</p>
            
        </div>  
    )
}
export default User