import React,{useEffect,useState} from "react";
import Axios from "axios"
import Contable from "./Contable"
let Contactapp=()=>{
    let [a,funct]=useState([])
    let [b,setb]=useState({})
    useEffect(()=>{
        Axios.get("https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist").then((response)=>{
            funct(response.data)
        })
        .catch()
    },[])
    let getcontact=(selecte)=>{
        setb()
    }
    return<>
    <h1>Hello we are bts</h1>
    <pre>{JSON.stringify(a)}</pre>
    <div className="container">
        <div className="row">
            <div className="col-md-8">
                {a.length>0?<><Contable contacts={a}/></>:null}
            </div>

        </div>
    </div>
         
    </>;
}
export default Contactapp;