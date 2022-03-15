import React from "react"
import Navbar from "../components/Navbar/Navbar"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Home from "../components/Home"
class App extends React.Component{
render(){
    return<>
      <Router>
          <Navbar/>
          <Home/>
          <Switch>
             
          </Switch>
      </Router>
    </>
}
}
export default App