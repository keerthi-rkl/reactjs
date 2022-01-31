import React  from "react";
import {Link}  from "react-router-dom"
class Navbar extends React.Component{
    render(){
        return <>
                 <div className="container">
                   <div className="row">
                     <div className="col-md-4">
                     <ul className="nav nav-tabs">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="Home">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="Contact">Contact</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="About">About</Link>
  </li>
  
</ul>
                     </div>
                   </div>
                 </div>
      
   
               </>
    }
}
export default Navbar;