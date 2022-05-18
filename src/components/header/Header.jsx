import { HeaderWrapper, P, Nav } from './SubComponents'
import { FaPhoneAlt, FaShoppingCart } from 'react-icons/fa'

import { RouteLink } from '../routes/RoutesLinks'

const Header = () => {
  return (
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
            <u>
                <RouteLink to="/connection">
                    &nbsp; <b>Connexion / Inscription</b>
                </RouteLink>
            </u>   
        </Nav>
    </HeaderWrapper>
  )
}

export default Header