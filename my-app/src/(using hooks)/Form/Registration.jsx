import React,{useState} from "react";
let Registration=()=>{
    let [a,seta]=useState("NAME")
    let [b]=useState("PHONE")
    let updatehandler=(event)=>{
        seta(event.target.value)
    }
    return <>
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header bg-dark text-primary">
                        <h2>Registration form</h2>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                            <label>{a}:<input type="text" className="form-control" onChange={this.updatehandler}/></label>
                            <label>{b}:<input type="number" className="form-control"/></label>    
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}
export default Registration