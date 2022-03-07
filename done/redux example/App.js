import React from 'react';
import Navbar from './Message/Navbar';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Message from "./Message/Message"
import {store} from "../Redux/store"
import {Provider} from "react-redux"
function App() {
  return <div>
      <Provider store={store}>
      <Router>
          <Navbar/>
          <Switch>
              <Route path="/Message" component={Message}/>
          </Switch>
      </Router>
      </Provider>
  </div>;
}

export default App;
