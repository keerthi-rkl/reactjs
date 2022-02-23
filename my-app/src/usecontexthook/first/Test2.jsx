import React from 'react';
import { useContext } from 'react';
import Mycontext from './Mycontext';
import Test3 from "./Test3"
function Test2() {
    const [value,setvalue]=useContext(Mycontext)
  return (
    <div>
    <Test3/>
    </div>
  )
}

export default Test2