import React, { Component } from 'react'
import {Button, Container, Form, FormControl, Nav, Navbar, NavLink} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import logo from './logo192.png'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contacts from '../Pages/Contacts'
import Blog from '../Pages/Blog'

export class Header extends Component {
  render() {
    return (
      <>
      <header>
        <Navbar collapseOnSelect expand="md" bg="dark" variant='dark'>
          <Container>
              <Navbar.Brand href="/">
                  <img
                      src={logo}
                      height="30"
                      width="30"
                      className="d-inline-block align-top"
                      alt="logo"
                  />
                  Route test
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='responsive-navbar-nav' />
              <Navbar.Collapse id="resposive-navbar-nav" >
                  <Nav className='mr-auto'>
                      <NavLink href='/'>Home</NavLink>
                      <NavLink href="/about">About us</NavLink>
                      <NavLink href="/contacts">Contacts</NavLink>
                      <NavLink href="/blog">Blog</NavLink>
                  </Nav>
                  <Form className='nav-form' inline>
                      <FormControl
                      type='text'
                      placeholder='Search'
                      className='mr-sm-2'
                      />
                  </Form> 
                  <Button className='nav-button' variant='outline-info'>Search</Button> 
              </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/contacts" element={<Contacts/>} />
            <Route exact path="/blog" element={<Blog/>} />
          </Routes>
        </Router>
      </>
    )
  }
}

export default Header