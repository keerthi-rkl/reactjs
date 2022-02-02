import React from "react";
import {Link} from "react-router-dom"
class Navbar extends React.Component{
    render(){
        return<>
               
                            <nav className="navbar navbar-secondary bg-secondary navbar-expand-lg">
                                
                                <h1><Link className=" navbar-brand text-warning  ">WELCOME TO AMAZON GREAT SALES</Link></h1>
                                
   


                                <Link className="d-flex ms-auto order-5 navbar-brand text-dark text-dark h4" to="Home">HOME</Link>
                                
                                  <Link className="d-flex ms-auto order-5 navbar-brand text-dark text-dark h4" to="MOBILES">MOBILES</Link>
                                 <Link className="d-flex ms-auto order-5 navbar-brand text-dark text-dark h4" to="LAPTOPS">LAPTOPS</Link>
                                 <Link className="d-flex ms-auto order-5 navbar-brand text-dark text-dark h4" to="LOGIN">LOGIN</Link>
                                 <Link className="d-flex ms-auto order-5 navbar-brand text-dark text-dark h4" to="Help">Help</Link>
                                 <form className="d-flex ms-auto order-5 mr-4">
                                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                     <button className="btn btn-outline-success" type="submit">Search</button>
                                 </form>
          
                            

                            </nav>

                       
              </>
    }
}
export default Navbar