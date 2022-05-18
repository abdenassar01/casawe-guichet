import { RouteLink } from '../routes/RoutesLinks'

import { BiFootball } from 'react-icons/bi'
import { FaHome } from 'react-icons/fa'

import { Logo, Img, NavbarWrapper, Nav, Text, NavLink } from './SubComponents'

const Navbar = () => {
  return (
    <NavbarWrapper>
        <Logo>
            <RouteLink to="/">
                <Img src="https://casawe.guichet.ma/frontend/images/casawe.png" alt="casawe logo" />
            </RouteLink>
        </Logo>
        <Nav>
            <NavLink to="/" color={(props) => (props.isActive  ? "#0d6eb6" : "black")}>
               <FaHome size={16}/> 
               &nbsp;<Text>ACCEUIL</Text>
            </NavLink>
            <NavLink to="/billetterie/sport" color={({ isActive }) => (isActive  ? "#0d6eb6" : "black")}>
               <BiFootball size={16}/> 
               &nbsp;<Text>MATCHES</Text>
            </NavLink> 
        </Nav>
    </NavbarWrapper>
  )
}

export default Navbar