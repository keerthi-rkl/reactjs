import React from "react";
class Card extends React.Component{
    state={
        product_name:"Asus VivoBook 14 X415EA-EB572TS Laptop Intel Core I5-1135G7 Intel Iris X 8GB 1TB HDD + 256GB SSD Windows 10",
        product_price:"50990",
        img:"https://sp.yimg.com/ib/th?id=OPA.i2jTXstXclndJQ474C474&o=5&pid=21.1&w=174&h=174",
        qty:1,
        total:this.product_price
    }
    incre=()=>{
        this.setState({qty:this.state.qty+1})
    }
    decre=()=>{
        this.setState({qty:this.state.qty-1})
    }
    render(){
        return <>
                 <div className="container">
                     <div className="row">
                         <div  className="col-md-8">
                            <table className="table table-hover bg-info">
                                <thead  className="bg-success" height="50px">
                                 <th>NAME</th>
                                 <th>IMAGE</th>
                                 <th>PRICE</th>
                                 <th>QTY</th>
                                 <th>TOTAL</th>

                                </thead>
                                <tbody>
                                 <tr>
                                     <td>{this.state.product_name}</td>
                                     <td><img src={this.state.img} alt="for sell" /></td>
                                     <td>{this.state.product_price}</td>
                                     <button onClick={this.incre}>incre</button>
                                     <td>{this.state.qty}</td>
                                     <button onClick={this.decre}>decre</button>
                                    <td>{this.state.qty* this.state.product_price}</td>
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