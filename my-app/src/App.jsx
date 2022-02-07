import React, { Component } from 'react';
import Greet from './(using hooks)/Greet';
import Counter from './(using hooks)/Counter';
 class App extends Component {
  render() {
    return <div>
        <Greet/><br></br><hr/>
          <Counter/>
    </div>;
  }
}

export default App;
