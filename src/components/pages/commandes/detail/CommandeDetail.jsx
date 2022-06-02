import { DetailPage, ContentWrapper, Tab, 
  UnorderdList, ListItem, Table, Heading, 
  Header, Raw, Column, TableWrapper
} from '../SubComponents';

import { useQuery } from 'react-query';

import instance from "../../../../axios/axios"
import { Navigate, useParams } from 'react-router-dom';
import Loading from '../../../loading/Loading';

const CommandeDetail = () => {
 
  const commandId = useParams();
  const { isLoading, error, data } = useQuery("comand-details", async () => {
    const result = await instance.get(`/orders/${commandId.id}`, {
      headers: {
        "Authorization" : "Bearer " + sessionStorage.getItem("token")
      }
    })
    return result
  })

  if(isLoading) return <Loading />

  if(error) return <Navigate to="/error" replace /> 


  return (
    <DetailPage>
      <ContentWrapper>
        <Tab>
          <hr />
          <Heading>Détails de la commande</Heading>
        </Tab>
        <UnorderdList>
          <ListItem><strong>Référence: </strong>{ data?.data.order.reference }</ListItem>
          <ListItem><strong>Etat de la commande: </strong>{ data?.data.order.status.name }</ListItem>
          <ListItem><strong>Moyen de paiement: </strong>{ data?.data.order.paymentMethod }</ListItem>
        </UnorderdList>
        <TableWrapper>
          <Table border="1px solid #dee2e6">
            <tbody>
              <Header>
                <Column>Produit</Column>
                <Column>Prix unitaire</Column>
                <Column>Quantité</Column>
                <Column>Total</Column>
              </Header>
              { data?.data.order.lines.map(line => (
                <Raw key={ data?.data.order.id }>
                <Column border="1px solid #dee2e6" >{ line?.productName }</Column>
                <Column border="1px solid #dee2e6" >{ line?.productPrice } MAD</Column>
                <Column border="1px solid #dee2e6" >x { line?.quantity }</Column>
                <Column border="1px solid #dee2e6" >{ line?.totalPrice }MAD</Column>
                </Raw>
              ))}
              
              <Raw>
                <Column border="1px solid #dee2e6" colSpan={3}>Sous-total</Column>
                <Column border="1px solid #dee2e6" >{ data?.data.order.totalProducts }MAD</Column>  
              </Raw>
              <Raw>
                <Column border="1px solid #dee2e6" colSpan={3}>Frais de livraison	</Column>
                <Column border="1px solid #dee2e6" >{ data?.data.order.totalShipping }MAD</Column>  
              </Raw>
              <Raw>
                <Column border="1px solid #dee2e6" colSpan={3}>Montant global	</Column>
                <Column border="1px solid #dee2e6" >{  data?.data.order.totalShipping + data?.data.order.totalProducts }MAD</Column>  
              </Raw>
            </tbody>  
          </Table>
        </TableWrapper>      
      </ContentWrapper>     
    </DetailPage>
  )
}

export default CommandeDetail