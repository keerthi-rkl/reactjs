import {Link} from "react-router-dom"
let Navbar=()=>{
return<>
  <nav className="navbar navbar bg-warning">
      <h3>CONTACTAPP (FUNCTIONAL)
      </h3>
      <ul className="nav nav-tabs">
          <li className="nav-item">
               <Link className="nav-link active " to="Data">Data</Link>
          </li>
          </ul>
  </nav>
</>
}
export default Navbar