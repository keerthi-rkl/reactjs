import React, { Component } from 'react';
import Navbar from "./Navbar/Navbar"
import Contact from './Contact';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
class App extends Component {
  render() {
    return <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route  path="/Contact" component={Contact}/>
        </Switch>
        </Router>
    </div>;
  }
}

export default App;
