import { Wrapper, Container, Left, 
  Poster, Date, Discription, TabPanel,
  TabItem, A, Right, Purchase, H1, BuyPanel,
  CheckList, RadioInput, Input, Label, Span, 
  Category, Checkout, CheckoutButton, EmptyDiv,
  InfosVendeur, Title, Hr, ImageLogo, WrapperBox, 
  TextInfoWrapper, P, Form, ErrorMessage
} from "./SubComponents";

import Alert from "../../alert/Alert";

import Loading from "../../loading/Loading";

import { TiCalendarOutline } from 'react-icons/ti'
import { AiOutlineClose } from 'react-icons/ai'

import { Navigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useQuery } from "react-query";
import instance  from "../../../axios/axios"
import { Helmet } from "react-helmet-async";
import { useCart } from "../../../models/cart";

import { useForm } from "react-hook-form";
import { useState } from "react";

const Match = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [ message, setMessage ] = useState("");
  const [ status, setStatus ] = useState(false);

  const matchId = useParams()

  const cart = useCart();

  const onSubmit = async (data) => {
    const payload = {
      offer_id : data.offer,
      quantity : 1
    }
    const result = await cart.addToCart(payload)
    setStatus(result?.success)
    setMessage(result?.message)
  }

  const { isLoading, error, data } = useQuery('matchData', async () => {
    const result = await instance.get(`/events/${matchId.id}`)
    return result
  })

  if (isLoading) return <Loading />

  if (error) return <Navigate to="/error" replace/> 

  return(
  <Wrapper>
    <Helmet>
        <title>{ data?.data.event?.title } - Casawi</title>
        <meta property="og:title" content={ data?.data.event?.title + " - Casawi" } />
        <meta name="twitter:title" content={ data?.data.event?.title + " - Casawi" } />
        <meta name="keywords" content="Casawe, ticket, billetterie, concerts, casablanca, rabat, marrakech, agadir, tanger, spectacles, festivals, sport, theatre, humour, maroc" />
        <meta name="description" content="Casawe: Tickets &amp; Billetterie concerts, spectacles, cinéma, festivals, sport et théâtre au Maroc" />
        <meta property="og:description" content="Casawe: Tickets &amp; Billetterie concerts, spectacles, cinéma, festivals, sport et théâtre au Maroc" />
    </Helmet>
      <Container>
        <Left>
          <Poster 
            src={data?.data.event.cover}
            alt={data?.data.event.title}
            draggable="false" 
          />
          <Date>
          <TiCalendarOutline size={30}/> <b>{ data?.data.event.expiredAt }</b>
          </Date>
          <Discription>
            <TabPanel>
              <TabItem>
                <A href="#tab-description" aria-controls="home" role="tab" data-toggle="tab">
                  Description 
                </A>
              </TabItem>
            </TabPanel>
            <Discription id="tab-description" >
                <p dangerouslySetInnerHTML={{ __html: data?.data.event.description }}></p>
            </Discription>
          </Discription>
        </Left>
        <Right>
          <Purchase>
            <BuyPanel>
              <H1>{data?.data.event.title}</H1>
              <center>
                <Discription  dangerouslySetInnerHTML={{ __html: data?.data.event.description }} />
              </center>
            </BuyPanel>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <CheckList>
              <Alert message={ message } setMessage={ setMessage } status={ status }/>
                { data?.data.event.offers.map(offer => 
                    <RadioInput key={offer.id} >
                      <Input type="radio"  {...register("offer", { required: true })}  value={ offer.id } name="offer" id={ offer.id } disabled={ offer.soldOut }/>
                      <Label htmlFor={offer.id} disabled={ offer.soldOut }>
                        <Category>
                          { offer.soldOut && <AiOutlineClose /> }                            
                          { offer.title }
                        </Category>
                        <Span>{ offer.price }</Span>
                      </Label>
                    </RadioInput>
                ) }   
                <Checkout>
                <CheckoutButton type="submit" value={ !data?.data.event.soldOut ? "Ajouter Panier" : "guichet ferme" }  disabled={ data?.data.event.soldOut } />
              </Checkout>
              <EmptyDiv>
                <ErrorMessage> { (errors.offer?.type === 'required') &&  "Tu doit choisi une offre" }</ErrorMessage>
              </EmptyDiv>
            </CheckList>
            </Form> 
          </Purchase>
          <InfosVendeur>
            <WrapperBox>
              <Hr />
              <Title>INFOS VENDEUR</Title>
            </WrapperBox>
            <ImageLogo
            src="https://guichet.imgix.net/providers/l72rhrgN4QVbMIDAjG6muv1mHRgCkUoOa8BJkihT.png?w=200&h=150&fit=clip&auto=format,compress&q=80" 
            alt="" 
            />
            <TextInfoWrapper>
              <strong>CASAWI</strong>
              <P bold>Tel: <Span bold={false}>0522227745</Span></P>
            </TextInfoWrapper>
          </InfosVendeur>
        </Right>
      </Container>
    </Wrapper>
)
}

export default Match