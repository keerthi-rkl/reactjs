import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"
function Navbar() {
  return (
    <>
    
        <nav className='navbar bg-info navbar-expand-lg'>
          <div className="nav-item">
              <img src={"https://cdn-icons-png.flaticon.com/128/45/45873.png"} alt="" height="50px"/>
          </div>   
             <h1>TRAVEL</h1>
             <div className="container">
               <div className="row">
                  <div className="col-md-12">
                    <div className='collapse navbar-collapse '>
                      <ul className='navbar-nav'>
                        <li className='nav-item   '>
                          <Link to="Home" className='nav-link h3 bts '>Home</Link>
                        </li>
                        <li className='nav-item   '>
                          <Link to="About" className='nav-link h3 bts '>About</Link>
                        </li>
                        <li className='nav-item   '>
                          <Link to="Create Account/Login" className='nav-link h3 bts '>CreateAccount/Login</Link>
                        </li>
                        <li className='nav-item   '>
                          <Link to="Customer Service" className='nav-link h3 bts '>Customer Service</Link>
                        </li>
                      </ul>
                      <form className="form-inline my-20 my-lg-0  ">
                        <input className="form-control mr-sm-2  " type="search" placeholder="Search" aria-label="Search"/>
                         <button className="btn btn-outline-dark my-2 my-sm-0 ok" type="submit">Search</button>
                      </form> 
                    </div>
                  </div>
                </div>
              </div>
             
                      
              
        </nav>
        
    </>
  )
    
}

export default Navbar