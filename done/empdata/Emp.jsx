
import React from "react"
class Emp  extends React.Component{
   emp_data=[{"id":1,"first_name":"Rasia","last_name":"Houston","email":"rhouston0@slashdot.org"},
    {"id":2,"first_name":"Phil","last_name":"Dowdam","email":"pdowdam1@ftc.gov"},
    {"id":3,"first_name":"Nefen","last_name":"Renshall","email":"nrenshall2@histats.com"},
    {"id":4,"first_name":"Felic","last_name":"Paulat","email":"fpaulat3@google.nl"},
    {"id":5,"first_name":"Ode","last_name":"Le Ball","email":"oleball4@spotify.com"},
    {"id":6,"first_name":"Rowe","last_name":"Naisbet","email":"rnaisbet5@yelp.com"},
    {"id":7,"first_name":"Krissie","last_name":"Wooddisse","email":"kwooddisse6@europa.eu"},
    {"id":8,"first_name":"Sig","last_name":"Braunton","email":"sbraunton7@123-reg.co.uk"},
    {"id":9,"first_name":"Hagan","last_name":"Guidi","email":"hguidi8@deliciousdays.com"},
    {"id":10,"first_name":"Worthy","last_name":"Douce","email":"wdouce9@japanpost.jp"}]
   render(){
     return <>
              <div className="container mt-10">
                  <div className="row">
                      <div className="col-md-8">
                          <table >
                              <thead className="bg-warning  ">
                                  <th>ID</th>
                                  <th>FIRST NAME</th>
                                  <th>LAST NAME</th>
                                  <th>EMAIL</th>
                              </thead>
                              <tbody className="bg-info">
                                {this.emp_data.map((emp)=>{
                                      return   <tr>
                                          <td>{emp.id}</td>
                                          <td>{emp.first_name}</td>
                                          <td>{emp.last_name}</td>
                                          <td>{emp.email}</td>
                                          </tr>
                                })}
                                        
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
     
    
              
            </>
              
 }
}
export default Emp;