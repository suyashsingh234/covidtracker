import React from 'react'
import * as ReactBootstrap from 'react-bootstrap'

function Navbar () {
  return (
    <div>
      <ReactBootstrap.Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <ReactBootstrap.Navbar.Brand href='/'>India's_Covi19_Tracker</ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <ReactBootstrap.Navbar.Collapse id='responsive-navbar-nav'>
          <ReactBootstrap.Nav className='mr-auto'>
            <ReactBootstrap.Nav.Link href='/precaution'>Precautions</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href='/symptoms'>Symptoms</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href='/app'>Aarogya Setu</ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
          <ReactBootstrap.Nav>
            <ReactBootstrap.Nav.Link href='/country'>See country wise</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link eventKey={2} href='/news'>
            News
            </ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    </div>
  )
}

export default Navbar
