import { RouteLink } from '../routes/RoutesLinks'

import { BiFootball } from 'react-icons/bi'
import { FaHome } from 'react-icons/fa'

import { Logo, Img, NavbarWrapper, Nav, 
  Text, NavLink, BurgerIcon, ExtendedMenu,
  NormalNav, Hr
} from './SubComponents'

import { useState } from 'react'

const Navbar = () => {

  const [isExtebded, setIsExtebded] = useState(false);

  const toggleMenu = () => {
    setIsExtebded(!isExtebded)
  }

  return (
    <NavbarWrapper>
      <NormalNav>
        <Logo>
            <RouteLink to="/">
                <Img 
                  src="https://casawe.guichet.ma/frontend/images/casawe.png" 
                  alt="casawe logo" 
                />
            </RouteLink>
        </Logo>
        <Nav>
          <NavLink to="/" color="black" padding="25px">
              <FaHome size={16}/> 
              &nbsp;<Text>ACCEUIL</Text>
          </NavLink>
          <NavLink to="/billetterie/sport" padding="25px" color={(props) => (props.isActive  ? "#0d6eb6" : "black")}>
              <BiFootball size={16}/> 
              &nbsp;<Text>MATCHES</Text>
          </NavLink>  
        </Nav>
        <BurgerIcon onClick={toggleMenu}>
           &#9776;
        </BurgerIcon>       
      </NormalNav> 
      <Hr display={isExtebded}/>
      <ExtendedMenu display={isExtebded}>
        <NavLink to="/" color="black" padding="20px 0 10px 20px" >
              <FaHome size={16}/> 
              &nbsp;<Text>ACCEUIL</Text>
          </NavLink>
          <NavLink to="/billetterie/sport" padding="10px 0 5px 10px" color={(props) => (props.isActive  ? "#0d6eb6" : "black")}>
              <BiFootball size={16}/> 
              &nbsp;<Text>MATCHES</Text>
          </NavLink>  
      </ExtendedMenu>
    </NavbarWrapper>
  )
}

export default Navbar