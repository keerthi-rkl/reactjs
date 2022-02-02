import React from 'react';
import Axios from "axios";
class Getdata extends React.Component {
    
    state={
        Getdata:[]
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users')
              .then((response)=>{
                  this.setState({Getdata:response.data})
              })
              .catch()
     }
    render(){
        return<>
                 <div className="container ">
                     <div className="row">
                         <div className="col-md-8">
                             <table className="table table-hover mt-5 ">
                                 <thead className="bg-danger">
                                     <th>ID</th>
                                     <th>NAME</th>
                                     <th>EMAIL</th>
                                 </thead>
                                 <tbody className="bg-info">
                                     {this.state.Getdata.map((data)=>{
                                         return<tr>
                                             <td>{data.id}</td>
                                             <td>{data.name}</td>
                                             <td>{data.email}</td>
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

export default Getdata;
