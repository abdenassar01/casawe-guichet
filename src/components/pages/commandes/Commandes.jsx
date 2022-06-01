import { PageWrapper, CommandesWrapper, Tab, 
    Heading, Paragraph, Section
} from "./SubComponents"

import { Helmet } from "react-helmet-async"

const Commandes = () => {

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
              <Paragraph>Aucune commande n'est disponible actuellement.</Paragraph>
          </Section>
      </CommandesWrapper>
    </PageWrapper>
  )
}

export default Commandes