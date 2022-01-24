import React from 'react'
import Product from './Product'
class Sell extends React.Component {
    Name = "men`s sweat shirt"
    size={x,m,l}
    color = ['gold', ' blue', 'black']
    render() {
        return <div>
            <h1>Product Component</h1>
            <hr />
            <Cart Name={this.Name}
                size={this.size}
                Color={this.color} />
        </div>
    }
}
export default Sell