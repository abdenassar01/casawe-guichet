import {CardContainer, Poster, Title, 
    Text, Price, MatchDiscription, Checkout,
    ListItem, StyledRouteLink
  } from "./SubComponents";

import { RouteLink } from "../../routes/RoutesLinks";
import { FaMapMarkerAlt } from "react-icons/fa";

const Card = (props) => {

    function truncateString(str, num) {
        if (str.length > num) {
          return str.slice(0, num) + "...";
        } else {
          return str;
        }
      }

  return (
    <CardContainer>
        <RouteLink to={`/match/${props.id}`}>
            <Poster 
                src="https://guichet.imgix.net/medias/fxVJtWkKu2BiT3pLSpzukKW47Elw1mYKFk2CGQ1l.jpeg?w=480&h=240&fit=clip&auto=format,compress&q=80" 
                alt="match poster"
            />
        </RouteLink>
        <Title>
            <RouteLink to={`/match/${props.id}`} color="#272630" size="18px">
                WAC vs OCK 
            </RouteLink>
            <Text>
                <FaMapMarkerAlt />
                Casablanca
            </Text>
        </Title>
            <Price>
                <b>700 DH</b>
            </Price>
            <MatchDiscription>
                {truncateString("Le Wydad Athletic Club reçoit le Atlético Petróleos de Luanda pour le Match retour de la Demi Finale de la Ligue des Champions de la CAF 2021-2022, le Vendredi 13 Mai 2022 à 20h00 au Complexe sportif Mohammed V", 90)}
            </MatchDiscription>
        <Checkout>
            <ListItem>
                 {/* //TODO: */}
            </ListItem>
            <ListItem>
                <StyledRouteLink to={`/match/${props.id}`} disabled={props.disabled}>{props.disabled ? "Guichet Fermer" : "Paye Ticket"}</StyledRouteLink>
            </ListItem>
        </Checkout>
  </CardContainer>
  )
}

export default Card