import { PanierWrapper, Tab, Heading,
    ContentBox, PanieBox, StyledRouteLink,
    Items, Left, Right, Wrapper, EmptyCart
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
    const [ promocode, setPromoCode ] = useState();
    const [ licence, setLicence ] = useState(false);
    const [ validation, setValidation ] = useState("");

    useEffect(() => {
        
        if(!licence){
            setValidation("Ce Champ est Obligatoire")
        }else{
            setValidation("")
        }

        setItems( cart?.getItems )
        const fetchCart = async () => {
            const res = await cart.fetch() 
            setItems( cart?.getItems )
            if(res.status !== 200){
                setMessage(res?.data?.error)
                setStatus(res?.data?.success)
            }
        }
        fetchCart();
    },[ cart, licence ])

    const checkout = () => {

        const payload = {
            items: items,
            payment_method_id: payemetMethod,
            source: "guichet"
        }
        console.log( payload )
    }   

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
            {
                cart?.count > 0 ? (
                <Wrapper>
                    <Left>
                        <PanieBox>
                            <Alert message={ message } setMessage={ setMessage } status={ status }/>    
                            <Items>
                                {
                                    items.map(item => (
                                        <Item key={item?.itemId} item={item} setAlert={ setMessage } setStatus={ setStatus } />
                                    ))
                                }  
                            </Items> 
                        </PanieBox>
                    { cart?.count > 0 && 
                        <PayementMethodes 
                            setPayementMethod={ setPayementMethod } 
                            items={ cart?.paymentMethods } 
                        />  
                    }
                    </Left>
                    <Right>
                        <CodePromotionnel code={ promocode } setCode={ setPromoCode } />
                        <Total 
                            subTotal={cart?.subTotal} total={cart?.total} 
                            onCheckout={ checkout } licence={ licence } 
                            setLicence={ setLicence } 
                            validation={ validation }
                        />
                    </Right>
                </Wrapper>
                )
                :
                (
                    <EmptyCart>
                        Votre panier est vide. &nbsp;
                        <StyledRouteLink to="/mes-commandes" color="#0066b2">
                            Continuer mes achats
                        </StyledRouteLink>
                    </EmptyCart>   
                )
            } 
        </ContentBox>
    </PanierWrapper>
  )
})

export default Panier