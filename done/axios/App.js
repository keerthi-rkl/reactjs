import Nav from "./Nav"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Getdata from "./Getdata"
let App=()=>{
    return<>
    <Router>
       <Nav/>
       <Switch>
           <Route path="/Getdata"  component={Getdata}/>
       </Switch>
    </Router>
          
    </>
}
export default App;