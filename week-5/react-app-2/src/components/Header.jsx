import Home from "./Home"
import Register from "./Register"
import Login from "./Login"
import Technologies from "./Technologies"
import { NavLink } from "react-router"

export default function Header() {
  return (
    <div>
        <nav >
          <ul className="flex justify-center gap-5 mt-10">
            <li><NavLink to="">Home</NavLink></li>
            <li><NavLink to="/Register">Register</NavLink></li>
            <li><NavLink to="/Login">Login</NavLink></li>
            <li><NavLink to="/Technologies">Technologies</NavLink></li>
          </ul>
        </nav>
    </div>
  )
}
