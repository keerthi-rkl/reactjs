import React from "react"
import {Link} from "react-router-dom"
let Navbar=()=>{
 return<>
   <nav className="navbar bg-dark ">
       <h1 className="text-white">
         REACT EXAMPLE  </h1>
         <Link className="nav-item h3" to="Login">LOGIN/REGISTER</Link>
         <Link className="nav-item h3" to="Home">Home</Link>
         <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
  </form>
    </nav>
 </>
}
export default Navbar