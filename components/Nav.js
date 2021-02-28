import {Navbar, ButtonGroup , Button, Badge} from 'react-bootstrap';
import BNav from 'react-bootstrap/Nav'
import BContainer from 'react-bootstrap/Container'
import navStyles from '../styles/Nav.module.css'
const Nav = () => {
  return (
  <Navbar expand="sm"  bg="primary" variant="dark">
    <Navbar.Brand >NewsBuzz</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <div className="mr-auto"> </div>
    <BNav>
    <Button className="m-2" variant="outline-white">Login</Button>
    <Button className="m-2" variant="white">Register</Button>
    </BNav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default Nav
