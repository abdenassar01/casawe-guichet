import { Wrapper, Slider, CentredBox, Tab, 
  H2, CardsWrapper
} from "./SubComponents";

import SliedrItem from "../home/SliderItem";
import Card from "./Card";

import {useEffect} from "react";

import useEvents from '../../../models/events'
import { observer } from "mobx-react-lite";

const Matches = observer(() => {
  
  const store = useEvents()

  useEffect(() => {
    store.fetchEvents();
    document.title = "Sport - Casawe"
  },[store])

  return (
    <Wrapper>
      <CentredBox>
        <Slider>
        {store.events.map(event => 
              <SliedrItem event={event} key={event.id} />
          )}
        </Slider>
        <Tab>
          <hr />
          <H2>LES ÉVÉNEMENTS PASSÉS</H2>
        </Tab>
        <CardsWrapper>
          {store.events.map(event => 
              <Card event={event} key={event.id} />
          )}
        </CardsWrapper>
      </CentredBox>   
    </Wrapper>
  )
})

export default Matches