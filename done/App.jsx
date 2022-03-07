// import {Mycontext} from "./usecontexthook/Mycontext"
// import {useState} from "react"
// import Test from "./usecontexthook/Test"

// let App=()=>{
//   const [value,setValue]=useState("this is starting value")
// return<>
   
//    <Mycontext.Provider value={[value,setValue]}>
//        <Test/>
//    </Mycontext.Provider>




// </>
// }
// export default App
import React, { Component } from 'react'
import Form from "./Form"
export class App extends Component {
  render() {
    return (
      <div>
        <Form/>
      </div>
    )
  }
}

export default App