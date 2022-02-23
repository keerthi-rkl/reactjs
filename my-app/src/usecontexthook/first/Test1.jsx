import React from 'react';
import { useContext } from 'react';
import Mycontext from './Mycontext';
import Test2 from './Test2';
function Test1() {
    const [value,setvalue]=useContext(Mycontext)
  return (
    <div>
    <Test2/></div>
  )
}

export default Test1