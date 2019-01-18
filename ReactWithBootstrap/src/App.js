import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavBarComponent from './component/navbar/navbar';
import RegisterComponent from './component/register/register';
class App extends Component {
  render() {
    return (
      <Container>
       <NavBarComponent/>
       <br/>
       <RegisterComponent />
      </Container>
    );
  }
}

export default App;
