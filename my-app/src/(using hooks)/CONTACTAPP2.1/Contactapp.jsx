import {useEffect,useState} from "react"
import Axios from "axios"
import Contactlist from "./Contactlist"
import Contactdetails from "./Contactdetails"
let Contactapp=()=>{
let [contacts,setC]=useState([])
let [singlecontact,setS]=useState({})
useEffect(()=>{
    Axios.get("https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist")
         .then((result)=>{
            setC(result.data)
         })
})
let getcontact=(k)=>{
    setS(k)
}
  return<>
  <pre>{JSON.stringify(contacts)}</pre>
  <pre>{JSON.stringify(singlecontact)}</pre>
  <h3>contactapp.....</h3>
  <div className="container">
      <div className="row">
          <div className="col-md-8">
              <Contactlist CONTACTS={contacts} method={getcontact}/>
          </div>
          <div className="col-md-4">
              <Contactdetails bts={singlecontact}/>
          </div>
      </div>
  </div>
  </>
}
export default Contactapp