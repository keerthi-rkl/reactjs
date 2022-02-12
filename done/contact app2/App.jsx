import React from 'react';
import Navbar from './Navbar';
import ContactApp from './Contactapp';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
function App() {
  return <div>
      <Router>\
        <Navbar/>
        <Switch>
            <Route path="/contact" component={ContactApp}/>
         </Switch>
      </Router>
      
     
  </div>;
}

export default App;
