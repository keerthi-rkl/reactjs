

let Contable=(props)=> {
  
    let selectedcontacthandler=(singleC)=>{
   props.selectedcontact(singleC)

   }
  return <div>
      <h2>hello good evening</h2>
      <div className="container">
    <pre>{JSON.stringify(props.contacts)}</pre>
          <div className="row">
              <div className="col-md-8">
                  <table className="table table-hover ">
                      <thead className="bg-danger text-dark">
                          <tr>
                              <th>ID</th>
                              <th>NAME</th>
                              <th>EMAIL</th>
                              <th>PHONE</th>
                              <th>CITY</th>
                          </tr>
                      </thead>
                      <tbody>
                          {
                           props.contacts.map((contact)=>{
                              return<tr key={contact.login.salt} onMouseOver={()=>{props.selectedcontact(contact)}}>
                                  <td>{contact.login.salt}</td>
                                  <td>{contact.name.last}</td>
                                  <td>{contact.email}</td>
                                  <td>{contact.phone}</td>
                                  <td>{contact.location.city}</td>
                              </tr>
                          })}
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  </div>;
}

export default Contable;
