import "./App.css"
// import Product from "./components/product/Product.jsx"
import NavBar from "./components/UserList_Folder/Navbar";
import Footer from "./components/UserList_Folder/Footer";
import UserLists from "./components/UserList_Folder/UserList"
import ApiDemo from "./components/ApiDemo"
import FormDemo from "./components/FormDemo";
import TestRefTypes from "./components/TestRefTypes";

function App(){
    //state





    //return react element 
      return (
          <div >
            <NavBar/>
            <div className="min-h-screen m-10 p-10">
              <UserLists/>
              
            </div>
             
            <Footer/>
          {/* <ApiDemo/>    this is for the apiComponent */}
              {/* <FormDemo/> this is for the Form Component   */}
            {/* <TestRefTypes/> */}
          </div>
      )
}
 export default App;