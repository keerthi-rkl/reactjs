import React from "react"
import Two from "./Two"
class One extends React.Component{
    pro_name="Ferrari"
    pro_price="$1.4 million"
    pro_color="black"
render(){
    return<>
      <h1>First component</h1>
      <Two carname={this.pro_name} carprice={this.pro_price} carcolor={this.pro_color}/>
    </>

}
}
export default One;