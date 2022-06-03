import { Wrapper, CentredBox } from './SubComponents'

import Login from './login/Login'
import Signup from './signup/Signup'
import { Helmet } from "react-helmet-async"

const Connection = () => {

  return (
    <Wrapper>
      <Helmet>
        <title>Connexion / Inscription - Casawe</title>
        <meta property="og:title" content="Connexion / Inscription - Casawe" />
        <meta name="twitter:title" content="Connexion / Inscription - Casawe" />
        <meta name="keywords" content="Casawe, ticket, billetterie, concerts, casablanca, rabat, marrakech, agadir, tanger, spectacles, festivals, sport, theatre, humour, maroc" />
        <meta name="description" content="Casawe: Tickets &amp; Billetterie concerts, spectacles, cinéma, festivals, sport et théâtre au Maroc" />
        <meta property="og:description" content="Casawe: Tickets &amp; Billetterie concerts, spectacles, cinéma, festivals, sport et théâtre au Maroc" />
      </Helmet>
      <CentredBox>
          <Login />
          <Signup />
      </CentredBox>
    </Wrapper>
  )
}

export default Connection