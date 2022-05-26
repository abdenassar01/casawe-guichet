import { AvailableTickets, CardsRaw, Card, 
    CardImage, ButtonBuy, Footer, Title, MatchTitle, H5, 
 } from './SubComponents'

import { RouteLink } from '../../routes/RoutesLinks';

import { MdLocationOn } from 'react-icons/md'

const Tickets = ({ events }) => {

  return (
    <AvailableTickets>
        <CardsRaw>

            { events.map((event) => (
                <Card>
                    <RouteLink  to={`/match/${event.id}`} >
                        <CardImage src={ event.cover } alt="wydad vs far"/>
                    </RouteLink>
                    <Title>
                        <RouteLink to={`/match/${event.id}`}>
                            <MatchTitle hover>{event.title}</MatchTitle>
                        </RouteLink>
                        <H5 color="#c11616">
                        <MdLocationOn size={14} color="#c11616" /> Casablanca
                        </H5>
                    </Title>
                    <Footer>
                        <MatchTitle>{ event.price } DH</MatchTitle>
                    </Footer>
                    <ButtonBuy disabled={event.soldOut && true }>
                        <RouteLink  to={`/match/${event.id}`} >
                            {event.soldOut ? "Guichet fermé" : "J'achète" } 
                        </RouteLink>
                    </ButtonBuy>
                </Card>
            ))}
        </CardsRaw>
    </AvailableTickets>
  )
}

export default Tickets;