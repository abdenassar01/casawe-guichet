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
          <SliedrItem price={20}/>
          <SliedrItem price={20}/>
          <SliedrItem price={20}/>
          <SliedrItem price={20}/>
          <SliedrItem price={20}/>
        </Slider>
        <Banner />
        <Tickets />
      </Container>
    </Wrapper>
  )
}

export default Home