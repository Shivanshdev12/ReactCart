import React, { Component } from 'react';
import {Button,Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';

class NavBar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">ReactCart</Navbar.Brand>
            </Navbar>
        )
    }
}

export default NavBar;