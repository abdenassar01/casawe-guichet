import { Container, HeaderWrapper, P, Nav, ConectionLink } from './SubComponents';
import { FaPhoneAlt, FaShoppingCart } from 'react-icons/fa';

import { RouteLink } from '../routes/RoutesLinks';
import Profile from './profile/Profile';
import { useUser } from '../../models/user'
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

const Header = observer(() => {

    const user = useUser();

    useEffect(() => {
       
    }, [ user ])

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
                    ( user.isLogin ) ? <Profile /> : 
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