import { Wrapper, Container, Slider } from "./SubComponents";

import Banner from './Banner';
import SliedrItem from "./SliderItem";
import Tickets from "./Tickets";

import instance from '../../../axios/axios';
import InfiniteScroll from "react-infinite-scroller";

import { useInfiniteQuery } from 'react-query'
import Loading from "../../loading/Loading";
import { Navigate } from "react-router-dom";

import { Helmet } from "react-helmet-async"
import { useState } from "react";

const Home = () => {

  const [ lastPage, setLastPage ] = useState(1)

  const fetchEvents = async ({ page }) => {
    const result = instance.get(`/events?page=${ page }`);
  }

  const { isLoading, error, data } = useInfiniteQuery("fetchListing", ({ pageParam = 1 }) => 
    instance.get(`/events?page=${ pageParam }`)
    .then(response => {
      console.log(response);
      setLastPage(response.data.pagination.lastPage)
      console.log(lastPage)
      return response;
    })
  )

  if(isLoading) return <Loading />
  
  if(error) return <Navigate to="/error" />

  return (
    <Wrapper>
      <Helmet>
        <title>Casawe - Ticket et Billetterie au Maroc</title>
        <meta property="og:title" content="Casawe - Ticket et Billetterie au Maroc" />
        <meta name="twitter:title" content="Casawe - Ticket et Billetterie au Maroc" />
        <meta name="keywords" content="Casawe, ticket, billetterie, concerts, casablanca, rabat, marrakech, agadir, tanger, spectacles, festivals, sport, theatre, humour, maroc" />
        <meta name="description" content="Casawe: Tickets &amp; Billetterie concerts, spectacles, cinéma, festivals, sport et théâtre au Maroc" />
        <meta property="og:description" content="Casawe: Tickets &amp; Billetterie concerts, spectacles, cinéma, festivals, sport et théâtre au Maroc" />
      </Helmet>
      <Container>
       <Slider>
          {data.data.events.map(event => 
            <SliedrItem event={event} key={event.id} />
          )}          
        </Slider>
        <Banner />
        <Tickets events={ data.data.events }/>
      </Container>
    </Wrapper>
  )
}

export default Home