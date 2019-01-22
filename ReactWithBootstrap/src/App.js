import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavBarComponent from './component/navbar/navbar';
import RegisterComponent from './component/register/register';
import {Button} from 'reactstrap';
import Login from './component/Login/login';
import Home from './component/Home/home';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      
      <Container>
       <NavBarComponent/>
       <br/>
      <Router>
        <Switch>
            <Route exact path="/home" component={Home}>
            </Route>
            <Route exact path="/register" component={RegisterComponent}>
            </Route>
            <Route exact path="/Login" component={Login}>
            </Route>
        </Switch>
      </Router>
    
      </Container>
    );
  }
}

export default App;
