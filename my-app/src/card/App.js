import Navbar from "./Navbar"
import Home from "./Home"
import Mobiles from "./Mobiles"
import Laptops from "./Laptops"
import Login from "./Login"
import Help from "./Help"
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