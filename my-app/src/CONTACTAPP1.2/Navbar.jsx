import React from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
class Navbar extends React.Component{
render(){
    return<>
      <nav className="navbar navbar-dark bg-dark text-primary ">
          <p className="text-white h1">CONTACTAPP</p>
          <ul className="nav justify-content-end">
          
             <li className="nav-item">
                <Link className="nav-link active h3"  to="Get data">Get data</Link>
            </li>


           </ul>
 
         

      </nav>
    </>
}
}
export default Navbar