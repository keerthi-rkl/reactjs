/*import React, { Component } from 'react'

class Product extends React.Component{
    render(){
        return (<>
        <h3>color:{this.props.color}</h3></>
        )
    }
}
export default Product;*/
import React, { Component } from 'react'
class Product extends Component {
    render() {
        return (
            <div>
                <h1>Cart Component</h1>
                <pre>{JSON.stringify(this.props)}</pre>
                <h2>Product Name:{this.props.Name}</h2>
                <h3>Price:{this.props.color}</h3>
                <h4> Color:{this.props.size[1]}</h4>
            </div>
        )
    }
}

export default Product;