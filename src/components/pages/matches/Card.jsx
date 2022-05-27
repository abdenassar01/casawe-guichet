import {CardContainer, Poster, Title, 
    Text, Price, MatchDiscription, Checkout,
    ListItem, StyledRouteLink
  } from "./SubComponents";

import { RouteLink } from "../../routes/RoutesLinks";
import { FaMapMarkerAlt } from "react-icons/fa";

const Card = ({ event }) => {

    function truncateString(str, num) {
        if (str.length > num) {
          return str.slice(0, num) + "...";
        } else {
          return str;
        }
      }

  return (
    <CardContainer>
        <RouteLink to={`/match/${event.id}`}>
            <Poster 
                src={event.cover}
                alt="match poster"
            />
        </RouteLink>
        <Title>
            <RouteLink to={`/match/${event.id}`} color="#272630" size="18px">
                {truncateString(event.title, 50)}
            </RouteLink>
            <Text>
                <FaMapMarkerAlt />
                Casablanca
            </Text>
        </Title>
            <Price>
                <b>{event.price} DH</b>
            </Price>
            <MatchDiscription dangerouslySetInnerHTML={{ __html: truncateString(event.description, 250) }} />
        <Checkout>
            <ListItem>
                 {/* //TODO: */}
            </ListItem>
            <ListItem>
                <StyledRouteLink to={`/match/${event.id}`} disabled={event.soldOut}>{event.soldOut ? "Guichet Fermer" : "Paye Ticket"}</StyledRouteLink>
            </ListItem>
        </Checkout>
  </CardContainer>
  )
}

export default Card