import { Wrapper, Container, Left, 
  Poster, Date, Discription, TabPanel,
  TabItem, A, Right, Purchase, H1, BuyPanel,
  CheckList, RadioInput, Input, Label, Span, 
  Category, Checkout, CheckoutButton, EmptyDiv,
  InfosVendeur, Title, Hr, ImageLogo, WrapperBox, 
  TextInfoWrapper, P
} from "./SubComponents"

import { TiCalendarOutline } from 'react-icons/ti'
import { AiOutlineClose } from 'react-icons/ai'

import { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

const Match = () => {

  
  const matchId = useParams()

  useEffect(() => {
    document.title = "title"
  },[])


  return (
    <QueryClientProvider client={queryClient}>
        <EventWrapper matchId={matchId}/>
    </QueryClientProvider>
  )
}

export default Match

const EventWrapper = ({matchId}) => {

  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch(`https://api.preprod.guichet.com/events/${matchId.id}`).then(res =>
        res.json()
    )
  )

  if (isLoading) return 'Loading...😉';

  if (error) return '👨🏻‍💻 An error has occurred: ' + error.message

  return(
    <Wrapper>
          <Container>
            <Left>
              <Poster 
                src={data.event.cover}
                alt={data.event.title}
                draggable="false" 
              />
              <Date>
              <TiCalendarOutline size={30}/> <b>{data.event.expiredAt}</b>
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
                    <p dangerouslySetInnerHTML={{ __html: data.event.description }}></p>
                </Discription>
              </Discription>
            </Left>
            <Right>
              <Purchase>
                <BuyPanel>
                  <H1>{data.event.title}</H1>
                  <center>
                    <Discription  dangerouslySetInnerHTML={{ __html: data.event.description }} />
                  </center>
                </BuyPanel>
                <CheckList>
                  { data.event.offers.map(offer => 
                      <RadioInput>
                        <Input type="radio" value={offer.id} name="offer" id={offer.id} disabled={ offer.status !== "enable" && !offer.soldOut }/>
                        <Label htmlFor={offer.id}>
                          <Category>
                            <AiOutlineClose />
                            {offer.title}
                          </Category>
                          <Span>{offer.price}</Span>
                        </Label>
                     </RadioInput>
                  ) }
                  
                    {/* base radio botton */}
                  <Checkout>
                    <CheckoutButton href="" >
                        { !data.event.soldOut ? "Acheter Maintenant" : "guichet ferme" }
                    </CheckoutButton>
                  </Checkout>
                  <EmptyDiv></EmptyDiv>
                </CheckList>
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