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

import { useState, useEffect } from 'react';

const Match = () => {
  
  useEffect(() => {
    document.title = "Wydad Athletic Club vs Chabab Riadhi Belouizdad"
    serIsAvailable(false)
  },[])

  const [isAvailable, serIsAvailable] = useState(false)

  return (
    <Wrapper>
        <Container>
          <Left>
            <Poster 
            src="https://guichet.imgix.net/medias/fRBTwT1EDiCwWtdzW8EDseHeXe31mEoPrVTrZWrz.jpeg?w=900&h=600&fit=clip&auto=format,compress&q=80" 
            alt="poster match" 
            draggable="false" 
            />
            <Date>
             <TiCalendarOutline size={30}/> <b>Samedi 23 Avril 2022 à 22h00</b>
            </Date>
            <Discription>
              <TabPanel>
                <TabItem>
                  <A href="#tab-description" aria-controls="home" role="tab" data-toggle="tab">
                    Description 
                  </A>
                </TabItem>
              </TabPanel>
              <Discription id="tab-description">
                  <p>Le Wydad Athletic Club reçoit le Chabab Riadhi Belouizdad pour le match retour de la Quart de Finale de la Ligue des Champions de la CAF TotalEnergies 2021-2022, le Samedi 23 Avril 2022 à 22h00 au Complexe sportif Mohammed V</p>
              </Discription>
            </Discription>
          </Left>
          <Right>
            <Purchase>
              <BuyPanel>
                <H1>Wydad Athletic Club vs Chabab Riadhi Belouizdad</H1>
                <center>
                  <Discription>
                    Le Wydad Athletic Club reçoit le Chabab Riadhi Belouizdad pour le match retour de la Quart de Finale de la Ligue des Champions de la CAF TotalEnergies 2021-2022, le Samedi 23 Avril 2022 à 22h00 au Complexe sportif Mohammed V
                  </Discription>
                </center>
              </BuyPanel>
              <CheckList>
                {/* base radio botton */}
                <RadioInput>
                  <Input type="radio" value={`value`} name="zone" id="zone4" disabled/>
                  <Label htmlFor="zone4">
                    <Category>
                      <AiOutlineClose />
                      Zone 04
                    </Category>
                    <Span>50DH</Span>
                  </Label>
                </RadioInput>
                  {/* base radio botton */}
                <RadioInput>
                  <Input type="radio" value={`value`} name="zone" id="zone5"/>
                  <Label htmlFor="zone5">
                    <Category>
                      <AiOutlineClose />
                      Zone 05
                    </Category>
                    <Span>50DH</Span>
                  </Label>
                </RadioInput>
                <RadioInput>
                  <Input type="radio" value={`value`} name="zone" id="zone6" />
                  <Label htmlFor="zone6">
                    <Category>
                      <AiOutlineClose />
                      Zone 06
                    </Category>
                    <Span>50DH</Span>
                  </Label>
                </RadioInput>
                <RadioInput>
                  <Input type="radio" value={`value`} name="zone" id="zone7"/>
                  <Label htmlFor="zone7">
                    <Category>
                      <AiOutlineClose />
                      Zone 07
                    </Category>
                    <Span>50DH</Span>
                  </Label>
                </RadioInput>
                <RadioInput>
                  <Input type="radio" value={`value`} name="zone" id="zone2" />
                  <Label htmlFor="zone2">
                    <Category>
                      <AiOutlineClose />
                      Zone 02
                    </Category>
                    <Span>100DH</Span>
                  </Label>
                </RadioInput>
                <RadioInput>
                  <Input type="radio" value={`value`} name="zone" id="zone3"/>
                  <Label id="zone3">
                    <Category>
                      <AiOutlineClose />
                      Zone 03
                    </Category>
                    <Span>100DH</Span>
                  </Label>
                </RadioInput>
                <RadioInput>
                  <Input type="radio" value={`value`} name="zone" id="zone1" />
                  <Label id="zone1">
                    <Category>
                      <AiOutlineClose />
                      Zone 01
                    </Category>
                    <Span>700DH</Span>
                  </Label>
                </RadioInput>
                <Checkout>
                  <CheckoutButton href="" >
                      {isAvailable ? "Acheter Maintenant" : "guichet ferme" }
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
                <P bold>CASAWI</P>
                <P bold>Tel: <Span bold={false}>0522227745</Span></P>
              </TextInfoWrapper>
            </InfosVendeur>
          </Right>
        </Container>
    </Wrapper>
  )
}

export default Match