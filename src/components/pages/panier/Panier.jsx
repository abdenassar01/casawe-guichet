import { PanierWrapper, Tab, Heading, Icon,
    ContentBox, PanieBox, StyledRouteLink,
    Items, Item,  ItemImage, ItemContent,
    OffreName, Title, Pricing, Quantity, 
    Input, PricesWrapper, Price, BoldTotal
} from "./SubComponents";

import { Helmet } from "react-helmet-async";

import { useCart } from "../../../models/cart";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import { RiCloseFill } from "react-icons/ri";

const Panier = observer(() => {

    const cart = useCart();

    useEffect(() => {
        cart.fetch()
        console.log( cart?.items )
    },[cart])

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
            {
                cart?.count > 0 ? 
               ( <Items>
                <Item>
                    <Icon>
                        <RiCloseFill size={25}/>
                    </Icon>
                    <ItemImage img="https://gcdn.imgix.net/events/green-challenge-tghazout-bay.png?w=900&h=600&fit=clip&auto=format,compress&q=80"/>
                    <ItemContent>
                        <Title>Green Challenge Tghazout Bay</Title>
                        <OffreName>Offre: Obstacle race pass</OffreName>
                        <Pricing>
                            <Quantity>
                                Quantité
                                <Input type="number" defaultValue={1} />
                            </Quantity>
                            <PricesWrapper>
                                <Price>PPC: 300MAD</Price>
                                <Price>Sous-total: <BoldTotal>300MAD</BoldTotal></Price>
                            </PricesWrapper>
                        </Pricing>
                    </ItemContent>
                </Item>
               
            </Items> )
            : <div>
                Votre panier est vide. &nbsp;
                <StyledRouteLink to="/mes-commandes" color="#0066b2">
                    Continuer mes achats
                </StyledRouteLink>
            </div>  
            }
                
                
            </PanieBox>
        </ContentBox>
    </PanierWrapper>
  )
})

export default Panier