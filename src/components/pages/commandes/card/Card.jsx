import { CardWrapper, Table, Raw, Header, Column, SeeDetails } from "../SubComponents"


const Card = ({ orders }) => {

  return (
    <CardWrapper>
        <Table>
            <tbody>
                <Header>
                    <Column>Reference</Column>
                    <Column>Date</Column>
                    <Column>Etat</Column>
                    <Column>Mode de paiement</Column>
                    <Column>Total</Column>
                    <Column>&nbsp;</Column>
                </Header>
                {
                    orders.map( order => (
                        <Raw key={ order.id }>
                            <Column>{ order.reference }</Column>
                            <Column>{ order.createdAt }</Column>
                            <Column>{ order.status.name }</Column>
                            <Column>{ order.paymentMethod }</Column>
                            <Column>{  order.totalPaid }</Column>
                            <Column>
                                <SeeDetails to={`/mes-commandes/${order.id}`}>Voir détails</SeeDetails>
                            </Column>
                        </Raw>
                    ))
                }
                
            </tbody> 
        </Table>
    </CardWrapper>
  )
}

export default Card