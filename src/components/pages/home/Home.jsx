import { Wrapper, Container, Slider } from "./SubComponents";

import Banner from './Banner';
import SliedrItem from "./SliderItem";
import Tickets from "./Tickets";

import { observer } from "mobx-react-lite";

import { useEffect } from "react";

import instance from '../../../axios/axios';
import requests from '../../../axios/requests';
import { useQuery } from 'react-query'
import Loading from "../../loading/Loading";
import { Navigate } from "react-router-dom";



const Home = observer(() => {

  const { isLoading, error, data } = useQuery("fetchListing", () => 
    instance.get(requests.listingSport)
    .then(response => response)
  )

  useEffect(() => {
    document.title = "Casawe - Ticket et Billetterie au Maroc"
  },[])

  if(isLoading) return <Loading />
  
  if(error) return <Navigate to="/error" />

  return (
    <Wrapper>
      <Container>
       <Slider>
          {data.data.events.map(event => 
            <SliedrItem event={event} key={event.id} />
          )}          
        </Slider>
        <Banner />
        <Tickets events={data.data.events}/>
      </Container>
    </Wrapper>
  )
})

export default Home