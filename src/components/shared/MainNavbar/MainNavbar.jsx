import { Navbar, Container, Nav, Button } from 'react-bootstrap'
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
          <Nav
            className='navbar-container me-auto'
            style={{ marginLeft: '100px' }}
          >
            <Nav.Link href='/' className='nav-menu'>
              Home
            </Nav.Link>
            <Nav.Link href='/feed' className='nav-menu disabled'>
              Feed
            </Nav.Link>
            <Nav.Link href='/components' className='nav-menu'>
              Components
            </Nav.Link>
            <Nav.Link href='/docs' className='nav-menu'>
              Docs
            </Nav.Link>
            <Nav.Link href='/courses' className='nav-menu'>
              Courses
            </Nav.Link>
            <Nav.Link href='/qna' className='nav-menu'>
              QnA
            </Nav.Link>
            <Nav.Link href='/job-hunting' className='nav-menu'>
              Hunting
            </Nav.Link>

            {/* <NavDropdown
              className='navbar-container'
              title='Components'
              id='collapsible-nav-dropdown'
              href='/docs'
            >
              <NavDropdown.Item className='nav-item' href='#action/3.1'>
                new components
              </NavDropdown.Item>
              <NavDropdown.Item className='nav-item' href='#action/3.2'>
                pre-owned components
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav className='navbar-container'>
            <Nav.Link href='/sign-in' className='nav-menu'>
              <Button>Sign In</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MainNavbar
