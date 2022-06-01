import { Container, HeaderWrapper, P, Nav, ConectionLink } from './SubComponents';
import { FaPhoneAlt, FaShoppingCart } from 'react-icons/fa';

import Profile from './profile/Profile';

import { RouteLink } from '../routes/RoutesLinks';

import { observer } from 'mobx-react-lite';

import { useUserStore } from '../../models/userStore';

const Header = observer(() => {

    const user = useUserStore();

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
                    ( user.isAuthentificated ) ? <Profile /> : 
                    <ConectionLink to="/connexion">
                        <b>Connexion / Inscription</b>
                    </ConectionLink>
                }             
            </Nav>
        </HeaderWrapper>
      </Container>  
  )
})

export default Header