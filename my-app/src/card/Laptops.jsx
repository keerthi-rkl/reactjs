import React from "react"
class Laptops extends React.Component{
    state={
        name:"LG Gram 14 Intel Evo 11th Gen Core i7",
        img:"https://m.media-amazon.com/images/I/51mkGvGjK1L._SL1500_.jpg",
        details:" 14 inches Ultralight Laptop (16 GB RAM, 512 GB SSD, Windows 10, Iris Xe Graphics Thunderbolt 4, USC -Cx2 (with Power), 0.999kg, 14Z90P, Black)",
       
        price:"RS.34000",
        pname:"Lenovo Tab Yoga Duet 7",
        image:"https://m.media-amazon.com/images/I/61uu4j6oP-S._SL1500_.jpg",
        pdetails:"(13-inch/33.02 cm, 8 GB, 512 GB, Wi-Fi) with Bluetooth Keyboard and E-Colour Pen, Slate Grey",
        p_price:"₹79,999.00"
    }
    incre=()=>{
        this.setState({quality:this.state.quality+1})
    }
    decre=()=>{
        this.setState({quality:this.state.quality-1})
    }
    render(){
        return<>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-8">
                            <table className="table table-hover">
                                <thead className="bg-dark text-white" width="50%">
                                    <th>PRODUCT NAME</th>
                                    <th>IMAGE</th>
                                    <th>DETAILS</th>
                                    
                                    <th>PRICE</th>
                                </thead>
                                <tbody className="bg-secondary">
                                    <tr>
                                     <td>{this.state.name}</td>
                                     <td><img src={this.state.img} width="70%" height="70%" /></td>
                                     <td>{this.state.details}</td>
                                     <td>{this.state.price}</td>
                                     </tr>
                                     
                                       
                                
                                </tbody>
                            </table>
                            <table className="table table-hover">
                                <thead className="bg-dark text-white" width="50%">
                                    <th>PRODUCT NAME</th>
                                    <th>IMAGE</th>
                                    <th>DETAILS</th>
                                    
                                    <th>PRICE</th>
                                </thead>
                                <tbody className="bg-secondary">
                                    <tr>
                                     <td>{this.state.pname}</td>
                                     <td><img src={this.state.image} width="70%" height="70%" /></td>
                                     <td>{this.state.pdetails}</td>
                                     <td>{this.state.p_price}</td>
                                     </tr>
                                     
                                       
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
              </>
    }
}
export default Laptops