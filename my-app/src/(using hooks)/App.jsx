import React, { Component } from 'react';
import Greet from './Greet';
import Counter from './Counter';
 class App extends Component {
  render() {
    return <div>
        <Greet/><br></br><hr/>
          <Counter/>
    </div>;
  }
}

export default App;
