import Navbar from "./Navbar"
import Home from "./card/Home"
import Mobiles from "./card/Mobiles"
import Laptops from "./card/Laptops"
import Login from "./card/Login"
import Help from "./card/Help"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
let App=()=>{
    return<>
          <Router>
              <Navbar/>
              <Switch>
                  <Route path="/Home" component={Home}/>
                  <Route path="/Mobiles" component={Mobiles}/>
                  <Route path="/Laptops" component={Laptops}/>
                  <Route path="/Login" component={Login}/>
                  <Route path="/Help" component={Help}/>
              </Switch>
          </Router>
        </>
}
export default App;