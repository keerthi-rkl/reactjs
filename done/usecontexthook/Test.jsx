import React from 'react'
import { useContext } from 'react'
import {Mycontext} from "./Mycontext"
import Test2 from './Test2'
function Test() {
    const [value,setValue]=useContext(Mycontext)
  return (
    <div>
        <h3>first context</h3>
       {value}
        
      <Test2/>
      
    </div>
  )
}

export default Test