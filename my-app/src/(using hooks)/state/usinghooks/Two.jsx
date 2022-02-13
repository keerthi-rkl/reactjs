import React from "react";
import { useState } from "react";
let Two=()=>{
    let [counter,setcounter]=useState(0)
    return<>
      <div className="container">
          <div className="row">
              <div className="col-md-8">
                  <div className="card">
                      <div className="card-header">
                          <h3>COUNTER</h3>
                      </div>
                      <div className="card-body">
                          <h2>counter:{counter}</h2>
                          <button className="btn btn-dark text-primary" onClick={()=>{setcounter(counter+1)}}>+</button>
                          <button className="btn btn-dark text-light" onClick={()=>{setcounter(counter-1)}}>-</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
}
export default Two