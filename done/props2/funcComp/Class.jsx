import React, { Component } from 'react';

 class Class extends Component {
  render() {
    return <div>
        <pre>{JSON.stringify(this.props)}</pre>
      <h1 className='text-white'>EMPLOYEE DETAILS</h1>
      <div className="container">
          <div className="row">
              <div className="col-md-8">
                  <table className='table table-hover '>
                      <thead className='bg-danger text-dark'>
                          <tr>
                              <th>ID</th>
                              <th>NAME</th>
                              <th>EMAIL</th>
                          </tr>
                      </thead>
                      <tbody className='bg-light'>
                          {this.props.Employee.map((ok)=>{
                              return<tr>
                                  <td>
                                    {ok.id}
                                  </td>
                                  <td>{ok.first_name}</td>
                                  <td>{ok.email}</td>
                              </tr>
                          })}
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
    </div>;
  }
}

export default Class;
