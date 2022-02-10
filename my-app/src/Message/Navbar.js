import React from 'react';
import {Link} from "react-router-dom"
function Navbar() {
  return <div>
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
           <Link to="home" className='navbar-brand text-white mr-4'>React redux example</Link>
           <Link to="Message" className='navbar-brand text-primary'>Message</Link>
      </nav>
  </div>;
}

export default Navbar;


