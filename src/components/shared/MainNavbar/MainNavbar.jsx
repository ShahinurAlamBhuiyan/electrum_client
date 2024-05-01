import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import './MainNavbar.css'

import { useAuth } from '../../Auth/contexts/authContext'
import { doSignOut } from '../../Auth/firebase/auth'
import logoutIcon from '../../../assets/logout.png'
const MainNavbar = () => {
  const { currentUser } = useAuth()

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
            <Nav.Link href='/competition' className='nav-menu'>
              Competition
            </Nav.Link>
          </Nav>
          <Nav className='navbar-container'>
            {currentUser?.email ? (
              <div
                style={{
                  display: 'flex',
                  background: 'transparent',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Nav.Link href='/dashboard' className='nav-menu'>
                  <Button>Dashboard</Button>
                </Nav.Link>
                <img
                  onClick={() => doSignOut()}
                  style={{
                    width: '30px',
                    height: '30px',
                    background: 'transparent',
                    cursor: 'pointer',
                  }}
                  src={logoutIcon}
                />
              </div>
            ) : (
              <Nav.Link href='/sign-in' className='nav-menu'>
                <Button>Sign In</Button>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MainNavbar
