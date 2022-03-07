let Contactlist=(props)=>{
    let selecthandler=(contact)=>{
        console.log(contact)
        props.method(contact)
    }
return<>
 <pre>{JSON.stringify(props.CONTACTS)}</pre>
 <h3>Contact list....</h3>
 <div className="container">
     <div className="row">
         <div className="col-md-8">
             <table className="table table-hover">
                 <thead className="bg-dark text-primary h3">
                     <th>ID</th>
                     <th>NAME</th>
                     <th>AGE</th>
                     <th>LOCATION</th>
                 </thead>
                 <tbody className="fst-italic h5 bg-secondary text-white">
                     {props.CONTACTS.map((contact)=>{
                         return<tr onClick={selecthandler.bind(this,contact)}>
                             <td>{contact.login.salt}</td>
                             <td>{contact.name.last}</td>
                             <td>{contact.dob.age}</td>
                             <td>{contact.location.state}</td>
                         </tr>
                     })}
                 </tbody>
             </table>
         </div>
     </div>
 </div>
</>
}
export default Contactlist