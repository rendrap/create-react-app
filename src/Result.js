import React from 'react';
import { ListGroup, Container } from 'react-bootstrap';

const Result = () => (
  <Container>
  <h2>Result List</h2>
    <ListGroup defaultActiveKey="#link1">
      <ListGroup.Item action href="#link1" >Link 1</ListGroup.Item>
      <ListGroup.Item action href="#link2">Link 2</ListGroup.Item>
      <ListGroup.Item action href="#link3" disabled>Link 3</ListGroup.Item>
      <ListGroup.Item action href="#link4">Link 4</ListGroup.Item>
    </ListGroup>
  </Container>
);

export default Result;