import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';


const ENavbar = <Navbar className="color-nav" expand="sm">
                    <Navbar.Brand href="#">
                        <img alt='logo' src='https://www.flaticon.com/svg/static/icons/svg/3439/3439114.svg' style={{width:'4rem',height:'4rem'}}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="/">My Kitchen   </Nav.Link>
                            <Nav.Link href="/Create/Ingredient">Create New Ingredient   </Nav.Link>
                            <Nav.Link href="/Create/Recipe">Create New Recipe</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
               </Navbar>;

export default ENavbar;