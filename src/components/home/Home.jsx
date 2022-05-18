import { Wrapper, Container, Slider } from "./SubComponents";

import Banner from './Banner';
import SliedrItem from "./SliderItem";
import Tickets from "./Tickets";

const Home = () => {

  return (
    <Wrapper>
      <Container>
        <Slider>
          <SliedrItem />
          <SliedrItem />
          <SliedrItem />
        </Slider>
        <Banner />
        <Tickets />
      </Container>
    </Wrapper>
  )
}

export default Home