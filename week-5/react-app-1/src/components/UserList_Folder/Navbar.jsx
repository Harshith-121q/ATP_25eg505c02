function NavBar (){
    
    return(
        <div className="flex justify-between items-center bg-gray-900 text-white p-7 ">
            <h1 className="p-7 text-4xl font-bold">Connect</h1>
            <ul className="flex gap-15  mr-10 font-semibold ">
                <li><a href="#">Home</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </div>
    )
}
export default NavBar
