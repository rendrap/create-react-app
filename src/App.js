import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap/Jumbotron';

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
            <h1>Search App</h1>
            <p>This is a simple search app</p>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
