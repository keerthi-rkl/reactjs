import React from "react";
import Navbar from "./Navbar/Navbar"
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Data from "./GETDATA/Data";
class App extends React.Component{
    render(){
        return<>
               <Router>
                   <Navbar/>
                   <Switch>
                       <Route path="/Data" component={Data}></Route>
                   </Switch>
               </Router>
              </>
    }
}
export default App;