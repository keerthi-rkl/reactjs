import React,{useState} from "react";
let Product=()=>{
    let [values,setValues]=useState({name:"URBN Thump 550 HD Sound Deep Bass Wireless Bluetooth Headphone with in-Built Mic",image:"https://m.media-amazon.com/images/I/612cvPQ-p5L._SL1500_.jpg",price:999,quantity:1
})
let increhandler=()=>{
    setValues({...values,quantity:values.quantity+1})
}
let decrehandler=()=>{
    setValues({...values,quantity:values.quantity-1})
}
   
return<>
     <div className="container mt-5">
         <div className="row">
             <div className="col-md-12">
                 <table className="table table-hover ">
                     <thead className="bg-dark text-primary">
                         <th>NAME</th>
                         <th>IMAGE</th>
                         <th>PRICE</th>
                         <th >QUANTITY</th>
                         <th className="mr-2">TOTAL PRICE</th>
                     </thead>
                     <tbody>
                         <tr>
                             <td>{values.name}</td>
                             <td><img src={values.image} widht="100px" height="100px"/></td>
                             <td>{values.price}</td>
                             <span><td><button className="btn btn-danger" onClick={increhandler}>+</button></td>
                             <td>{values.quantity}</td>
                             <td><button className="btn btn-success" onClick={decrehandler}>-</button></td></span>
                             <td>{values.price*values.quantity}</td>
                         </tr>

                     </tbody>
                 </table>
             </div>
         </div>
     </div>
</>
}
export default Product