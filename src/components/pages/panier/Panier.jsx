import { PanierWrapper, Tab, Heading,
    ContentBox, PanieBox, StyledRouteLink,
    Items
} from "./SubComponents";

import Alert from "../../alert/Alert";

import Item from "./Item";

import { Helmet } from "react-helmet-async";

import { useCart } from "../../../models/cart";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";


const Panier = observer(() => {

    const cart = useCart();

    const [ message, setMessage ] = useState("")
    const [ status, setStatus ] = useState(false)
    const [ items, setItems ] = useState([]);


    useEffect(() => {
        const fetchCart = async () => {
            const res = await cart.fetch() 
            setItems( cart?.getItems )
            if(res.status !== 200){
                setMessage(res?.data?.error)
                setStatus(res?.data?.success)
            }
        }
        fetchCart();
        
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
            <Alert message={ message } setMessage={ setMessage } status={ status }/>

            {
                cart?.count > 0 ? 
            ( 
               <Items>
                   {
                       items.map(item => (
                                <Item key={item?.itemId} item={item} />
                       ))
                   }  
                </Items> 
            )
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