
import { Link } from "react-router-dom/cjs/react-router-dom.min";
let Navbar=()=>{
    
        return<>
                   < div className="container">
                   <div className="row">
                     <div className="col-md-8">
                     <ul className="nav nav-tabs ">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="Home">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="Data">Data</Link>
  </li>
  
</ul>
                     </div>
                   </div>
                 </div>
      
   
                     </>
    

}
export default Navbar; 