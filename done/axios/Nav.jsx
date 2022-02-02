import React from "react"
import {Link} from "react-router-dom"
class Nav extends React.Component{
    render(){
        return <>
              <nav className="navbar navbar-warning bg-warning navbar-expang-lg">
                  <Link className="navbar-brand text-dark h1" to="Home" >AXIOS EXAMPLE</Link>
                  <Link className="navbar-brand d-flex ms-auto order-5" to="Getdata">Getdata</Link>
              </nav>
        </>
    }

}
export default Nav;