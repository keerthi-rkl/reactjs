import React, { Component } from 'react';

export class One extends Component {
    state={
        product_name:"APPLE iPad (9th Gen) ",
        product_image:"https://tse4.mm.bing.net/th?id=OIP.UipEbVf6p32KyK68SfsnvAHaFR&pid=Api&P=0&w=239&h=170",
        product_details:" 256 GB ROM 10.2 inch with Wi-Fi Only (Space Grey)",
        product_price:"₹44,900"
    }
  render() {
    return <div>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8">
                    <table className='table table-hover '>
                        <thead className='bg-info text-dark h2'>
                        <tr>
                            <td>NAME</td>
                            <td>IMAGE</td>
                            <td>DETAILS</td>
                            <td>PRICE</td>
                        </tr>
                        </thead>
                        <tbody className='bg-secondary text-white h3gkhvo2wsdc '>
                            <tr>
                                <td>{this.state.product_name}</td>
                                <td><img src={this.state.product_image}/></td>
                                <td>{this.state.product_details}</td>
                                <td>{this.state.product_price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>;
  }
}

export default One;
