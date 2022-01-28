import React from "react";
class Exa extends React.Component{
    super={
        message:"login using your email id"

    }
        
    
    
    change(){
        return(<>
                 <div className="comtainer">
                     <div className="row">
                         <div className="col-md-4">
                         <form> 
                              <h3><label>enter your email id:<input type="text"></input></label></h3> 
                               <h3><label>enter your password:<input type="password"></input></label></h3>
                         </form>
                         </div>
                     </div>
                 </div>
        
                  
                </>
        ) 
    }
    render(){
        return <React.Fragment>
                    <h3>{this.state.message}</h3>
                    <button className="btn btn-warning" onClick={this.change}>login</button>
               </React.Fragment>
    }
}
export default Exa;