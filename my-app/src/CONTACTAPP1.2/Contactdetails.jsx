import React, { Component } from 'react'

 class Contactdetails extends Component {
  render() {
    return (
      <div>
          {/* <pre>{JSON.stringify(this.props)}</pre> */}
          <div className="container">
              <div className="row">
                  <div className="col-md-8">
                      <div className="card">
                          <div className="card-header bg-danger text-dark">
                              <h3>DETAILS</h3>
                              
                          </div>
                          <div className="card-body">
                          
  <ul className="list-group list-group-flush">
    
    <li className="list-group-item">{this.props.selcontact.email}</li>
    <li className="list-group-item">{this.props.selcontact.phone}</li>
  </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
    )
  }
}

export default Contactdetails