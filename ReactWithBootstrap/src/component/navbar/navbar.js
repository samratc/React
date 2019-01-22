import React, {Component} from 'react';
import  {Navbar,Nav,NavItem,NavLink,NavbarBrand} from 'reactstrap';
export default class NavBarComponent extends Component {
    constructor() {
        super();
    }
    render(){
        return (
            <Navbar  color='dark'>
             <NavbarBrand href="/">ReactStrap App</NavbarBrand>
             <Nav>
             <NavItem>
                <NavLink href="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/register">Register</NavLink>
              </NavItem>
             </Nav>
            </Navbar>
        );
    }
}
