import React from "react";
class Exa extends React.Component{
    render(){
        return <>
                 <div className="container">
                     <div className="row">
                         <div className="col-md-4">
                             <form>
                                 <div className="form-group">
                                     <input type="text" class="form-control" placeholder="Please enter your email id"></input>
                                 </div>
                                 <div className="form-group">
                                     <input type="password" class="form-control" placeholder="Please enter your password"></input>
                                 </div>
                                 <button className="btn btn-warning">LOGIN</button>
                             </form>
                         </div>
                     </div>
                 </div>
               </>
    }
}
export default Exa;