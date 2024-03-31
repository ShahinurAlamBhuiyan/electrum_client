import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import './MainNavbar.css'
const MainNavbar = () => {
  return (
    <Navbar collapseOnSelect expand='lg' className='navbar'>
      <Container className='navbar-container'>
        <Navbar.Brand href='/' id='brand' className='navbar-container'>
          Electrum
        </Navbar.Brand>
        <Navbar.Toggle
          className='navbar-container'
          aria-controls='responsive-navbar-nav'
        />
        <Navbar.Collapse
          className='navbar-container'
          id='responsive-navbar-nav'
        >
          <Nav className='navbar-container'>
            <Nav.Link href='/posts' className='nav-menu'>
              Posts
            </Nav.Link>
            <Nav.Link href='/docs' className='nav-menu'>
              Docs
            </Nav.Link>
            <NavDropdown
              className='navbar-container'
              title='Dropdown'
              id='collapsible-nav-dropdown'
            >
              <NavDropdown.Item className='nav-item' href='#action/3.1'>
                Action
              </NavDropdown.Item>
              <NavDropdown.Item className='nav-item' href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item className='nav-item' href='#action/3.3'>
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='nav-item' href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className='navbar-container'>
            <Nav.Link className='nav-menu' href='#deets'>
              More deets
            </Nav.Link>
            <Nav.Link className='nav-menu' eventKey={2} href='#memes'>
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MainNavbar
