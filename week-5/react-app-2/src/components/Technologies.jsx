import { NavLink } from "react-router"
import Java from "./Java"
import Nodejs from "./Nodejs"
import Vue from "./Vue"

export default function Technologies() {
  return (
    <div className="">
      <nav className="text-center ">
        <ul className="flex justify-center gap-5 ">
          <li className="w-20 bg-white h-10 mt-10"><NavLink to="/Java">Java</NavLink></li>
          <li className="w-20 bg-white h-10 mt-10"><NavLink to="/Nodejs">Nodejs</NavLink></li>
          <li className="w-20 bg-white h-10 mt-10"><NavLink to="/Vue">Vue</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}
