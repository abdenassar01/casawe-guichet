import { Wrapper, Container, Left, 
  Poster, Date, Discription, TabPanel,
  TabItem, A, Right, Purchase, H1, BuyPanel,
  CheckList, RadioInput, Input, Label, Span, 
  Category, Checkout, CheckoutButton, EmptyDiv,
  InfosVendeur, Title, Hr, ImageLogo, RelativeBox
} from "./SubComponents"

import { TiCalendarOutline } from 'react-icons/ti'
import { AiOutlineClose } from 'react-icons/ai'

const Match = () => {
  return (
    <Wrapper>
        <Container>
          <Left>
            <Poster src="https://guichet.imgix.net/medias/fRBTwT1EDiCwWtdzW8EDseHeXe31mEoPrVTrZWrz.jpeg?w=900&h=600&fit=clip&auto=format,compress&q=80" alt="poster match" draggable="false" />
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
                  <Label>
                    <Category>
                      <AiOutlineClose />
                      Zone 04
                    </Category>
                    <Span>50DH</Span>
                  </Label>
                  <Input type="radio" value={`value`} />
                </RadioInput>
                  {/* base radio botton */}
                <RadioInput>
                  <Label>
                    <Category>
                      <AiOutlineClose />
                      Zone 05
                    </Category>
                    <Span>50DH</Span>
                  </Label>
                  <Input type="radio" value={`value`} />
                </RadioInput>
                <RadioInput>
                  <Label>
                    <Category>
                      <AiOutlineClose />
                      Zone 06
                    </Category>
                    <Span>50DH</Span>
                  </Label>
                  <Input type="radio" value={`value`} />
                </RadioInput>
                <RadioInput>
                  <Label>
                    <Category>
                      <AiOutlineClose />
                      Zone 07
                    </Category>
                    <Span>50DH</Span>
                  </Label>
                  <Input type="radio" value={`value`} />
                </RadioInput>
                <RadioInput>
                  <Label>
                    <Category>
                      <AiOutlineClose />
                      Zone 02
                    </Category>
                    <Span>100DH</Span>
                  </Label>
                  <Input type="radio" value={`value`} />
                </RadioInput>
                <RadioInput>
                  <Label>
                    <Category>
                      <AiOutlineClose />
                      Zone 03
                    </Category>
                    <Span>100DH</Span>
                  </Label>
                  <Input type="radio" value={`value`} />
                </RadioInput>
                <RadioInput>
                  <Label>
                    <Category>
                      <AiOutlineClose />
                      Zone 01
                    </Category>
                    <Span>700DH</Span>
                  </Label>
                  <Input type="radio" value={`value`} />
                </RadioInput>
                <Checkout>
                  <CheckoutButton href="">
                      GUICHET FERME
                  </CheckoutButton>
                </Checkout>
                <EmptyDiv></EmptyDiv>
              </CheckList>
            </Purchase>
            <InfosVendeur>
              <RelativeBox>
                <Hr />
                <Title>INFOS VENDEUR</Title>
              </RelativeBox>
              <ImageLogo src="https://guichet.imgix.net/providers/l72rhrgN4QVbMIDAjG6muv1mHRgCkUoOa8BJkihT.png?w=200&h=150&fit=clip&auto=format,compress&q=80" alt="" />
              <p>CASAWI</p>
              <p>Tel: <Tel>0522227745</Tel></p>
            </InfosVendeur>
          </Right>
        </Container>
    </Wrapper>
  )
}

export default Match