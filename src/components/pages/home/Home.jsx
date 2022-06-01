import { Wrapper, Container, Slider } from "./SubComponents";

import Banner from './Banner';
import SliedrItem from "./SliderItem";
import Tickets from "./Tickets";

import { observer } from "mobx-react-lite";

import instance from '../../../axios/axios';
import requests from '../../../axios/requests';
import { useQuery } from 'react-query'
import Loading from "../../loading/Loading";
import { Navigate } from "react-router-dom";

import { Helmet } from "react-helmet"

const Home = observer(() => {

  const { isLoading, error, data } = useQuery("fetchListing", () => 
    instance.get(requests.listingSport)
    .then(response => response)
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
        <Tickets events={data.data.events}/>
      </Container>
    </Wrapper>
  )
})

export default Home