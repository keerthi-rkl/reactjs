import React, { Component } from 'react';
import {Link} from "react-router-dom"
 class Navbar extends Component {
  render() {
    return <div>
        <nav className='navbar navbar-primary bg-primary navbar-expand-lg'>
            <h1 className=" navbar-brand text-dark ">React contact app</h1>
             <div className='collapse navbar-collapse'>
                 <ul className='navbar-nav'>
                     <li className='nav-item'><Link className='nav-link text-white' to="Contact">Contact</Link></li>
                 </ul>
             </div>
        </nav>
    </div>;
  }
}

export default Navbar;
