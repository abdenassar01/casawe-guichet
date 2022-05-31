import { useEffect } from "react" ;
import { PanierWrapper, Tab, Heading, 
    ContentBox, PanieBox, StyledRouteLink 
} from "./SubComponents"


const Panier = () => {

    useEffect(() => {
        document.title = "Mon Panier"
    },[]);

  return (
    <PanierWrapper>
        <ContentBox>
            <Tab>
                <hr />
                <Heading>Mon Panier</Heading>
            </Tab>
            <PanieBox>
                Votre panier est vide. &nbsp;
                <StyledRouteLink to="/mes-commandes" color="#0066b2">
                    Continuer mes achats
                </StyledRouteLink>
                {/* Todo */} 
            </PanieBox>
        </ContentBox>
    </PanierWrapper>
  )
}

export default Panier