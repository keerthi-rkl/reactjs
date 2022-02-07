import React,{useState} from "react";
let Greet=()=>{
    let [greet,change]=useState("welcome")
    return<>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <h2 className="bg-dark text-white">GREETING</h2>
                        </div>
                       <div className="card-body bg-secondary">
                           <img src={"https://farm2.staticflickr.com/1759/41727331265_41381323d7_o.jpg"}  width="100%" alt="ok"/>
                           <h1>BTS::{greet}</h1>
                           <button onClick={()=>{change("hello we are BTS")}} className="bg-warning">English</button>
                           <button onClick={()=>{change("anneyogaseyo bangtan sonyeondan")}} className="bg-info ">Korean</button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Greet