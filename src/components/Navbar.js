import React from 'react'
import * as ReactBootstrap from 'react-bootstrap'

function Navbar () {
  return (
    <div>
      <ReactBootstrap.Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <ReactBootstrap.Navbar.Brand href='#home'>India's_Covi19_Tracker</ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <ReactBootstrap.Navbar.Collapse id='responsive-navbar-nav'>
          <ReactBootstrap.Nav className='mr-auto'>
            <ReactBootstrap.Nav.Link href='#features'>State wise</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href='#pricing'>Precautions</ReactBootstrap.Nav.Link>
            <ReactBootstrap.NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
              <ReactBootstrap.NavDropdown.Item href='#action/3.1'>option1</ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href='#action/3.2'>option2</ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href='#action/3.3'>option3</ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Divider />
              <ReactBootstrap.NavDropdown.Item href='#action/3.4'>Arogya setu</ReactBootstrap.NavDropdown.Item>
            </ReactBootstrap.NavDropdown>
          </ReactBootstrap.Nav>
          <ReactBootstrap.Nav>
            <ReactBootstrap.Nav.Link href='#deets'>See country wise</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link eventKey={2} href='#memes'>
            News
            </ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    </div>
  )
}

export default Navbar
