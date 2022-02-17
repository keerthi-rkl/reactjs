import React, { Component } from 'react'
 class Contactlist extends Component {
    selecthandler=(contacts)=>{
         
          this.props.selectedContact(contacts)
    }
  render() {
    return (
      <div>
          {/* <pre>{JSON.stringify(this.props)}</pre> */}
          <div className="container">
              <div className="row">
                  <div className="col-md-10">
                      <table className='table table-hover '>
                          <thead className='bg-warning text-white h3'>
                              <th>TITLE</th>
                              <th>NAME</th>
                              <th>EMAIL</th>
                              <th>COUNTRY</th>
                          </thead>
                          <tbody className='fst-italic'>
                              {this.props.CONTACTS.map((ok)=>{
                                  return<tr onClick={this.selecthandler.bind(this,ok)}>
                                      <td>{ok.name.title}</td>
                                      <td>{ok.name.first}</td>
                                      <td>{ok.email}</td>
                                      <td>{ok.location.country}</td>
                                  </tr>
                              })}
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default Contactlist