import React from 'react'
import Navbar from './Navbar'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Contactapp from "./Contactapp"
function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
        <Route path="/Data" component={Contactapp}/>
    </Switch>
    </Router>
    </>
  )
}

export default App