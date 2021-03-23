import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';




const Navigation = (props: any) => {
    console.log(props);
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">React Button</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/AdminShell">ADMIN</Nav.Link>
                   
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Navigation);
