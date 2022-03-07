import React from 'react';
import { useContext } from 'react';
import Mycontext from './Mycontext';
import Test4 from "./Test4"
function Test3() {
    const [value,setvalue]=useContext(Mycontext)
  return (
    <div>
    <Test4/>
    </div>
  )
}

export default Test3