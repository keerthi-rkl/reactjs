import React from 'react';
import Navbar from '../counter/Navbar';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Message from '../Message/Message'
import Counter from '../counter/Counter';
import {store} from "./store"
import {Provider} from "react-redux"
function App() {
  return <div>
      <Provider store={store}>
      <Router>
          <Navbar/>
          <Switch>
              <Route path="/Message" component={Message}/>
              <Route path='/Counter' component={Counter}/>
          </Switch>
      </Router>
      </Provider>
  </div>;
}

export default App;
