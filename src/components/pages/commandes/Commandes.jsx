import { PageWrapper, CommandesWrapper, Tab, 
    Heading, Paragraph, Section
} from "./SubComponents"


const Commandes = () => {
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