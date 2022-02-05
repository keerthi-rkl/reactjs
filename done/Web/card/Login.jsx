import React from "react";
class Login extends React.Component{
    render(){
        return <>
                           <div className="container mt-4">
                     <div className="row">
                         <div className="col-md-4">
                             <h1>SIGN IN OR SIGN UP</h1>
                             <div className="card bg-info">
                                 <div className="card-text">
                                 <form>
                                 <div className="form-group mt-2">
                                     <input type="text" class="form-control" placeholder="Please enter your name"></input>
                                 </div>
                                 <div className="form-group mt-2">
                                     <input type="text" class="form-control" placeholder="Please enter your mobile number"></input>
                                 </div>
                                 <div className="form-group mt-2">
                                     <input type="text" class="form-control" placeholder="Please enter your email id"></input>
                                 </div>
                                 <div className="form-group mt-2">
                                     <input type="password" class="form-control" placeholder="Please enter your password"></input>
                                 </div><br></br>
                                 <button className="btn btn-success">LOGIN</button>
                             </form>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                </>
    }
}
export default Login;