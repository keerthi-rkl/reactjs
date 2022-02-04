import React from "react";
class Smsapp extends React.Component{
    state={
        maxlimit:10,
        count:10
    }
    update=(event)=>{
        this.setState({count:this.state.maxlimit-event.target.value.length})
    }
    render(){
        return <>
                 <div className="container mt-8">
                     <div className="row">
                         <div className="col-md-6">
                             <div className="card">
                                 <div className="card-header">
                                    
                                    <p className="h2 bg-info">SMS Application</p>
                                 </div>
                                 <div className="card-body">
                                       <form>
                                           <div className="form-group">
                                               <textarea cols="66" rows="4" onChange={this.update} maxlength={this.state.maxlimit}  className="from-control" placeholder="Enter your message"/>
                                           </div>
                                       </form>
                                 </div>
                                 <div className="card-footer">
                                 <p className="h2 bg-danger">Remaining characters:
                                 <span className="font-weight-bold">{this.state.count}</span></p>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </>
    }

}
export default Smsapp