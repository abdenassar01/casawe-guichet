import { Wrapper, Container, Slider } from "./SubComponents";

import Banner from './Banner';
import SliedrItem from "./SliderItem";
import Tickets from "./Tickets";

import useEvents from '../../../models/events'
import { observer } from "mobx-react-lite";

import { useEffect } from "react";

const Home = observer(() => {

  const store = useEvents()

  useEffect(() => {
    store.fetchEvents();
    document.title = "Casawe - Ticket et Billetterie au Maroc"
  },[store])

  return (
    <Wrapper>
      <Container>
        <Slider>
          {store.events.map(event => 
            <SliedrItem event={event} key={event.id} />
          )}          
        </Slider>
        <Banner />
        <Tickets events={store.events}/>
      </Container>
    </Wrapper>
  )
})

export default Home