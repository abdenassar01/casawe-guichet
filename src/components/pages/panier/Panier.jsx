import { PanierWrapper, Tab, Heading, 
    ContentBox, PanieBox, StyledRouteLink 
} from "./SubComponents"

import { Helmet } from "react-helmet-async"

const Panier = () => {

  return (
    <PanierWrapper>
        <Helmet>
            <title>Mon Panier</title>
            <meta property="og:title" content="Mon Panier" />
            <meta name="twitter:title" content="Mon Panier" />
            <meta name="keywords" content="Casawe, ticket, billetterie, concerts, casablanca, rabat, marrakech, agadir, tanger, spectacles, festivals, sport, theatre, humour, maroc" />
            <meta name="description" content="Casawe: Tickets &amp; Billetterie concerts, spectacles, cinéma, festivals, sport et théâtre au Maroc" />
            <meta property="og:description" content="Casawe: Tickets &amp; Billetterie concerts, spectacles, cinéma, festivals, sport et théâtre au Maroc" />
        </Helmet>
        <ContentBox>
            <Tab>
                <hr />
                <Heading>Mon Panier</Heading>
            </Tab>
            <PanieBox>
                Votre panier est vide. &nbsp;
                <StyledRouteLink to="/" color="#0066b2">
                    Continuer mes achats
                </StyledRouteLink>
                {/* Todo */} 
            </PanieBox>
        </ContentBox>
    </PanierWrapper>
  )
}

export default Panier