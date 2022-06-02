import { DetailPage, ContentWrapper, Tab, Heading, UnorderdList, ListItem } from '../SubComponents'

const CommandeDetail = () => {
  return (
    <DetailPage>
      <ContentWrapper>
        <Tab>
          <hr />
          <Heading>Détails de la commande</Heading>
        </Tab>
        <UnorderdList>
          <ListItem><strong>Référence: </strong>{"Hello"}</ListItem>
          <ListItem><strong>Etat de la commande: </strong>{"World"}</ListItem>
          <ListItem><strong>Moyen de paiement: </strong>{"Heho"}</ListItem>
        </UnorderdList>
      </ContentWrapper>     
    </DetailPage>
  )
}

export default CommandeDetail