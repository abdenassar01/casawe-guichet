import { PageWrapper, CommandesWrapper, Tab, 
    Heading, Paragraph, Section
} from "./SubComponents";
import Loading from "../../loading/Loading";

import instance from "../../../axios/axios";
import { useQuery } from "react-query";

import { Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Card from "./card/Card";

const Commandes = () => {

  const { isLoading, error, data } = useQuery('matchData', async () =>{
    const result = await instance.get("/orders", {
      headers: {
        "Authorization": "Bearer " + sessionStorage.getItem("token")
      }
    })
    return result;
  })

  if (isLoading) return <Loading />

  if (error) return <Navigate to="/error" replace/> 

  return (
    <PageWrapper>
      <Helmet>
        <title>Mon compte - Mes commandes</title>
        <meta property="og:title" content="Mon compte - Mes commandes" />
        <meta name="twitter:title" content="Mon compte - Mes commandes" />
        <meta name="keywords" content="Casawe, ticket, billetterie, concerts, casablanca, rabat, marrakech, agadir, tanger, spectacles, festivals, sport, theatre, humour, maroc" />
        <meta name="description" content="Casawe: Tickets &amp; Billetterie concerts, spectacles, cinéma, festivals, sport et théâtre au Maroc" />
        <meta property="og:description" content="Casawe: Tickets &amp; Billetterie concerts, spectacles, cinéma, festivals, sport et théâtre au Maroc" />
      </Helmet>
      <CommandesWrapper>
          <Tab>
            <hr />
            <Heading>Mes Commandes</Heading>
          </Tab>
          {/* Todo */}
          <Section>
            { 
              data?.data.orders.length > 0 
                                    ? 
              <Card orders={ data.data.orders } /> 
                                  : 
              <Paragraph>Aucune commande n'est disponible actuellement.</Paragraph> 
            }
          </Section>
      </CommandesWrapper>
    </PageWrapper>
  )
}

export default Commandes