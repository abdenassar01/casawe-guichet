import { Wrapper, Container, Slider } from "./SubComponents";

import Banner from './Banner';
import SliedrItem from "./SliderItem";
import Tickets from "./Tickets";

import instance from '../../../axios/axios';

import { useInfiniteQuery } from 'react-query'
import Loading from "../../loading/Loading";
import { Navigate } from "react-router-dom";

import { Helmet } from "react-helmet-async"

import InfiniteScroll from "react-infinite-scroller";
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    window.scrollX = 0
  },[])

  const fetchEvents = async ({ pageParam = 1 }) => {
    const results = await instance.get(`/events?page=${ pageParam }`);
    return { 
      results, 
      nextPage: pageParam + 1, 
      totalPages: Math.ceil(results.data.pagination.total /12) };
  }


  const { data, isError, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery("data", 
    fetchEvents,
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.nextPage < lastPage.totalPages) return lastPage.nextPage;
        return undefined;
      },
    }
  )

  if(isError) return <Navigate to="/error" />

  if(isLoading) return <Loading />
 
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
          { data?.pages[0]?.results.data.events.map(event => 
            <SliedrItem event={event} key={event.id} />
          )}          
        </Slider>
        <InfiniteScroll 
          hasMore={ hasNextPage } 
          loadMore={ fetchNextPage } 
          loader={ <Loading /> } 
        >
          { 
            data?.pages.map((page) => <Tickets events={ page?.results.data.events }/> )
          }
        </InfiniteScroll>
        <Banner />
      </Container>
    </Wrapper>
  )
}

export default Home