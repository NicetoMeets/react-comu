import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Heading() {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Pocket</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/' style={{color:'white', textDecoration:'none', marginRight:'10px'}}>home</Link>
                            <Link to='/upload' style={{color:'white', textDecoration:'none', marginRight:'10px'}}>upload</Link>
                            <Link to='/' style={{color:'white', textDecoration:'none', marginRight:'10px'}}>list</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Heading;