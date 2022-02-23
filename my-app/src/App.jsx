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
import Mycontext from "./usecontexthook/first/Mycontext"
import { useState } from "react"
import Test1 from "./usecontexthook/first/Test1"
let App=()=>{
  const [value,setvalue]=useState("hello good morning")
return<>
     <center>
       <Mycontext.Provider value={[value,setvalue]}>
         <Test1/>
       </Mycontext.Provider>
     </center>
</>
}
export default App