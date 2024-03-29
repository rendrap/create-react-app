import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import SearchForm from './SearchForm';
import Result from './Result';

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Container>
            <h1>Search App</h1>
            <p>This is a simple search app</p>
            <SearchForm />
          </Container>
        </Jumbotron>
        <Result />
      </div>
    );
  }
}

export default App;
