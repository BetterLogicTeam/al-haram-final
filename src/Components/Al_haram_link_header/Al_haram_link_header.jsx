import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo_h from "../Assets/logo_h.png"
import "./Al_haram_link_header.css"
import {Link} from "react-router-dom"

function Al_haram_link_header() {
  return (
    <div>
         <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className='p-0'>
        <Navbar.Brand href="#home" className='logo_mar'> <Link to='/'><img src={logo_h} className='logo_main_header'  alt="" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="">
          <NavDropdown title="Packages" className='header_links' id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link to='/Umrah_package' className='drop_nav_links'>Umrah Packages </Link > </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
            <Link to='/hajj_packages' className='drop_nav_links'> Hajj packages</Link>   
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"> <Link to='flight' className='drop_nav_links' >Flight</Link> </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"> <Link to='cabs' className='drop_nav_links' >Buses</Link> </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>

            <Nav.Link href="#features" className='header_links'>Plan my Umrah</Nav.Link>
            <Nav.Link href="#pricing" className='header_links'> <Link to='explore'className='drop_nav_links' >Explore</Link> </Nav.Link>
            <Nav.Link href="#pricing" className='header_links'> <Link to='catering'className='drop_nav_links' >Catering</Link> </Nav.Link>
            <Nav.Link href="#pricing" className='header_links'><Link to=''className='drop_nav_links' >Cabs</Link></Nav.Link>
           
          </Nav>
          <Nav className='header_travel_btn'>
          <NavDropdown title="USD" className='header_drop' id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">PKR</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                INR
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">BDT</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">MYR</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>

            <NavDropdown title="ENG" className='header_drop' id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">URDU</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                MALAY
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">HINDI</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">BANGLA</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Al_haram_link_header
