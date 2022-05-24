import { Wrapper, Container, Slider } from "./SubComponents";

import Banner from './Banner';
import SliedrItem from "./SliderItem";
import Tickets from "./Tickets";

import {useEffect} from "react";

const Home = () => {

  useEffect(() => {
    document.title = "Casawe - Ticket et Billetterie au Maroc"
  },[])

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