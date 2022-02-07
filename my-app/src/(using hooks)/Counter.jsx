import React,{useState} from "react";
let Counter=()=>{
let [num,handler]=useState(0)
let incre=()=>{
 handler(num+1)
}
let decre=()=>{
    handler(num-1)
   }
return<>
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header bg-info">
                        <h2>COUNTER</h2>
                    </div>
                    <div className="card-body">
                        <h3>counter:{num}</h3>
                        <button className="bg-primary" onClick={incre}>+</button>
                        <button className="bg-danger" onClick={decre}>-</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
}
export default Counter