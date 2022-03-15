import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Fhome from "./components/Fhome"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
let App=()=>{
return<>
<Router>
<Navbar/>

<Switch>
    <Route path="/Login" component={Home}/>
    <Route path="/Home" component={Fhome}/>
</Switch>
</Router>

</>
}
export default App