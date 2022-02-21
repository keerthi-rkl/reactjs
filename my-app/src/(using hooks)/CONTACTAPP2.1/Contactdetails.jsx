let Contactdetails=(props)=>{
return<>
 <div className="container">
     <div className="row">
         <div className="col-md-8">
             <div className="card">
                 <div className="card-header bg-danger">
                     <h1>DETAILS</h1>
                 </div>
                 <div className="card-body">
                 {/* <img src={props.singlecontact.picture.large} /> */}
                
                          
                          <ul className="list-group list-group-flush">
                            <li><img src={props.bts.picture.large} alt="ok"/></li>
                            <li className="list-group-item">{props.bts.email}</li>
                            <li className="list-group-item">{props.bts.phone}</li>
                          </ul>
                 </div>
             </div>
         </div>
     </div>
 </div>
</>
}
export default Contactdetails