import Navbar from "./navbar/Navbar"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./exa/Home"
import Contact from "./exa/Contact"
import About from "./exa/About"
let App=()=>{
    return <>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/Home" component={Home}/>
                    <Route path="/Contact" component={Contact}/>
                    <Route path="/About" component={About}/>
                </Switch>
            </Router>
            
             </>
}
export default App;

