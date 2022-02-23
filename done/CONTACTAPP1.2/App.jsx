import React, { Component } from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom/cjs/react-router-dom.min'
import Navbar from './Navbar'
import Contactapp from './Contactapp'
class App extends Component {
  render() {
    return (
      <div>
          <Router>
              <Navbar/>
              <Switch>
                <Route path="/Get data" component={Contactapp}/>
              </Switch>
          </Router>
      </div>
    )
  }
}

export default App