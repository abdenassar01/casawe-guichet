import { PageWrapper, CommandesWrapper, Tab, 
    Heading, Paragraph, Section
} from "./SubComponents"
import { useEffect } from "react";

const Commandes = () => {

  useEffect(() =>{
    document.title = "Mon compte - Mes commandes"
  }, [])

  return (
    <PageWrapper>
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