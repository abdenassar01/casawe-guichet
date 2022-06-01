import { Wrapper, Slider, CentredBox, Tab, 
  H2, CardsWrapper
} from "./SubComponents";

import SliedrItem from "../home/SliderItem";
import Card from "./Card";
import { useQuery } from 'react-query'
import { observer } from "mobx-react-lite";
import Loading from "../../loading/Loading";
import { Navigate } from "react-router-dom";
import instance from "../../../axios/axios";
import requests from "../../../axios/requests";

import { Helmet } from "react-helmet";

const Matches = observer(() => {
    
  const { isLoading, error, data } = useQuery("fetchListing", () => 
    instance.get(requests.listingSport)
    .then(response => response)
    .catch(err => err)
  )

  if(isLoading) return <Loading />
  
  if(error) return <Navigate to="/error" />

  return (
    <Wrapper>
      <Helmet>
        <title>Sport - Casawe</title>
        <meta property="og:title" content="Sport - Casawe" />
        <meta name="twitter:title" content="Sport - Casawe" />
        <meta name="keywords" content="Casawe, ticket, billetterie, concerts, casablanca, rabat, marrakech, agadir, tanger, spectacles, festivals, sport, theatre, humour, maroc" />
        <meta name="description" content="Casawe: Tickets &amp; Billetterie concerts, spectacles, cinéma, festivals, sport et théâtre au Maroc" />
        <meta property="og:description" content="Casawe: Tickets &amp; Billetterie concerts, spectacles, cinéma, festivals, sport et théâtre au Maroc" />
      </Helmet>
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