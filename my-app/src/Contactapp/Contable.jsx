import React, { Component } from 'react';

 class Contable extends Component {
    selecthandler=(a)=>{
        console.log(a);
        this.props.selectedC(a)
    }
  render() {
    return <div>
        <div className="container">
    <pre>{JSON.stringify(this.props)}</pre>
          <div className="row">
              <div className="col-md-8">
                  <table className='table table-hover'>
                      <thead className='bg-info text-dark'>
                          <tr>
                              <th>ID</th>
                              <th>NAME</th>
                              <th>EMAIL</th>
                              <th>PHONE</th>
                          </tr>
                      </thead>
                      <tbody className='bg-secondary text-light'>
                          {this.props.bts.map((k)=>{
                              return<tr key={k.login.salt} onClick={this.selecthandler.bind(this,k)}>
                                  <td>{k.login.salt}</td>
                                  <td>{k.name.first}</td>
                                  <td>{k.email}</td>
                                  <td>{k.phone}</td>
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

export default Contable;
