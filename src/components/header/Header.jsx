import { Container, HeaderWrapper, P, Nav, ConectionLink } from './SubComponents';
import { FaPhoneAlt, FaShoppingCart } from 'react-icons/fa';

import { RouteLink } from '../routes/RoutesLinks';
import Profile from './profile/Profile';

const Header = ( { loggin } ) => {
  return (
      <Container>
        <HeaderWrapper>
            <P>Avez-vous des questions ? <b>05 22 22 77 45/46/47</b></P>
            <Nav>
                <RouteLink to="/contact">
                    <FaPhoneAlt size={13} />
                    &nbsp;Contact
                </RouteLink>
                <RouteLink to="/panier">
                    <FaShoppingCart size={13} />
                    &nbsp;{0} Mon panier
                </RouteLink>
                {
                    loggin ? <Profile /> : 
                    <ConectionLink to="/connexion">
                        &nbsp; <b>Connexion / Inscription</b>
                    </ConectionLink>
                }             
            </Nav>
        </HeaderWrapper>
      </Container>  
  )
}

export default Header