import { PanierWrapper, Tab, Heading,
    ContentBox, PanieBox, StyledRouteLink,
    Items, Left, Right, Wrapper
} from "./SubComponents";

import Alert from "../../alert/Alert";
import PayementMethodes from "./payementMethodes/PayementMethodes"
import Item from "./item/Item";
import CodePromotionnel from "./promoCode/CodePromotionnel"

import { Helmet } from "react-helmet-async";

import { useCart } from "../../../models/cart";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import Total from "./total/Total";


const Panier = observer(() => {

    const cart = useCart();

    const [ message, setMessage ] = useState("")
    const [ status, setStatus ] = useState(false)
    const [ items, setItems ] = useState([]);
    const [ payemetMethod, setPayementMethod ] = useState(6);


    useEffect(() => {
        setItems( cart?.getItems )
        const fetchCart = async () => {
            const res = await cart.fetch() 
            setItems( cart?.getItems )
            if(res.status !== 200){
                setMessage(res?.data?.error)
                setStatus(res?.data?.success)
            }
        }
        // fetchCart();
    },[ cart ])

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
           <Wrapper>
                <Left>
                    <PanieBox>
                        <Alert message={ message } setMessage={ setMessage } status={ status }/>
                        {
                            cart?.count > 0 ? 
                        ( 
                        <Items>
                            {
                                items.map(item => (
                                    <Item key={item?.itemId} item={item} setAlert={ setMessage } setStatus={ setStatus } />
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
                    { cart?.count > 0 && 
                        <PayementMethodes 
                            setPayementMethod={ setPayementMethod } 
                            payemetMethod={ payemetMethod }   
                            items={ cart?.paymentMethods } 
                        />  
                    }
                </Left>
                <Right>
                 <CodePromotionnel />
                 <Total />
                </Right>
           </Wrapper>
        </ContentBox>
    </PanierWrapper>
  )
})

export default Panier