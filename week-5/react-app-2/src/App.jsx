import {createBrowserRouter,RouterProvider,Navigate} from "react-router"
import RootLayout from "./components/RootLayout"
import Home from "./components/Home"
import Register from "./components/Register"
import Login from "./components/Login"
import Technologies from "./components/Technologies"
import Java from "./components/Java"
import Nodejs from "./components/Nodejs"
import Vue from "./components/Vue"


export default function App() {

  const routeObj= createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"register",
          element:<Register/>
        },
        {
          path:"Login",
          element:<Login/>
        },
        {
          path:"Technologies",
          element:<Technologies/>,
          children:[
            {
              index:true,
              element:< Navigate to="Java" replace/>   // java is defaultly loaded when technologies id loaded 
            },
            {
              path:"Java",
              element:<Java/>
            },
            {
              path:"Nodejs",
              element:<Nodejs/>
            },
            {
              path:"Vue",
              element:<Vue/>
            }
          ]
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routeObj}/>
  )
}
