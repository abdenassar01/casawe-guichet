import { Wrapper, Slider, CentredBox, Tab, 
  H2, CardsWrapper
} from "./SubComponents";

import SliedrItem from "../home/SliderItem";
import Card from "./Card";
import {useEffect} from "react";
import { useQuery } from 'react-query'
import { observer } from "mobx-react-lite";
import Loading from "../../loading/Loading";
import { Navigate } from "react-router-dom";
import instance from "../../../axios/axios";
import requests from "../../../axios/requests";

const Matches = observer(() => {
    
  const { isLoading, error, data } = useQuery("fetchListing", () => 
    instance.get(requests.listingSport)
    .then(response => response)
    .catch(err => err)
  )
  
  useEffect(() => {
    document.title = "Sport - Casawe"
  },[])

  if(isLoading) return <Loading />
  
  if(error) return <Navigate to="/error" />

  return (
    <Wrapper>
      <CentredBox>       
        <Slider>
          { data.data.events.map(event => 
              <SliedrItem event={event} key={event.id} />
          )}
        </Slider>
        <Tab>
          <hr />
          <H2>LES ÉVÉNEMENTS PASSÉS</H2>
        </Tab>
        <CardsWrapper>
          { data.data.events.map(event => 
              <Card event={event} key={event.id} />
          )}
        </CardsWrapper>
      </CentredBox>   
    </Wrapper>
  )
})

export default Matches