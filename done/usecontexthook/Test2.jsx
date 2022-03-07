import React from 'react'
import { useContext } from 'react'
import {Mycontext} from "./Mycontext"

let Test2=()=>{
    const [value,setValue]=useContext(Mycontext)
  return (
    <div>
        
        <button className='bg-success text-dark' onClick={()=>{setValue("final value")}}>change value</button>
    </div>
  )
}

export default Test2