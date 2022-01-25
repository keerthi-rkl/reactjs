import React from "react";
class Card extends React.Component{
    state={
        product_name:"Asus VivoBook 14 X415EA-EB572TS Laptop Intel Core I5-1135G7 Intel Iris X 8GB 1TB HDD + 256GB SSD Windows 10",
        product_price:"50990",
        img:"https://sp.yimg.com/ib/th?id=OPA.i2jTXstXclndJQ474C474&o=5&pid=21.1&w=174&h=174",
        qty:1
    }
    render(){
        return <>
                 <div className="container">
                     <div className="row">
                         <div  className="col-md-8">
                            <table className="table table-hover">
                                <thead  className="bg-primary" height="50px">
                                 <th>Name</th>
                                 <th>img</th>
                                 <th>price</th>
                                 <th>qty</th>
                                 <th>total</th>

                                </thead>
                                <tbody >
                                 <tr>
                                     <td>{this.state.product_name}</td>
                                     <td><img src={this.state.img} /></td>
                                     <td>{this.state.product_price}</td>
                                     <td>{this.state.qty}</td>
                                     <td>{this.state.product_price* this.state.qty}</td>
                                 </tr>

                                </tbody>
                            </table>
                         </div>
                     </div>
                    
                 </div>
               </>
    }
}
export  default Card;