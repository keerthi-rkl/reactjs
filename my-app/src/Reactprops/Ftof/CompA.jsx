import React from "react";
let CompA=(props)=>{
    return(
        <div>
            <h5>HEllo we are BTS</h5>
            <pre>{JSON.stringify(props)}</pre>
            <h3>{props.name}</h3>
            <h3>{props.id}</h3>
            
        </div>
    )
}
export default CompA;