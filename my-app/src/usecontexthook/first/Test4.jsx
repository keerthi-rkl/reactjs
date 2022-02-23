import React from 'react';
import { useContext } from 'react';
import Mycontext from './Mycontext';

function Test4() {
    const [value,setvalue]=useContext(Mycontext)
  return (
    <div>{value}
    <button className='bg-danger text-dark' onClick={()=>{setvalue("how can i help you i am bts fan")}}>click</button>
    </div>
  )
}

export default Test4