import { Wrapper, Slider, CentredBox, Tab, 
  H2, CardsWrapper
} from "./SubComponents";

import SliedrItem from "../home/SliderItem";
import Card from "./Card";

const Matches = (props) => {

  

  return (
    <Wrapper>
      <CentredBox>
        <Slider>
          <SliedrItem />
          <SliedrItem />
          <SliedrItem />
        </Slider>
        <Tab>
          <hr />
          <H2>LES ÉVÉNEMENTS PASSÉS</H2>
        </Tab>
        <CardsWrapper>
          <Card />
          <Card disabled/>
          <Card disabled/>
          <Card disabled/>
          <Card />
        </CardsWrapper>
      </CentredBox>   
    </Wrapper>
  )
}

export default Matches