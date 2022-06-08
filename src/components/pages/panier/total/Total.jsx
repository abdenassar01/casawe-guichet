import { TotalWrapper, Tab, Heading, Radio, RegularText, 
    Label, Field , Content, Checkout, Validator 
} from "../SubComponents";

const Total = ({ subTotal, total, onCheckout, licence, setLicence, validation }) => {
  return (
    <TotalWrapper>
        <Tab>
            <hr />
            <Heading>TOTAL</Heading>
        </Tab>
        <Content>
            <RegularText>
                Total des articles: { subTotal } MAD
            </RegularText> 
            {
                /* <RegularText>
                    Frais de livraison 0MAD
                </RegularText> */
            }
            <hr />
            <RegularText>
                Total a paye: { total } MAD
            </RegularText>
            <hr />
            <Field>
                <Radio 
                type="radio" id="liecence"
                value={ licence } 
                name="liecence"
                required
                onChange={ e => setLicence(e.target.value) }
                /> 
                <Label htmlFor="liecence" >
                    J'ai lu <a target="_blank" rel="noreferrer" href="https://www.guichet.com/mentions-legales">les conditions générales de vente</a> et j'y adhère sans réserve.
                </Label>
            </Field>
            <Validator> { validation } </Validator>
            <Checkout onClick={ onCheckout }>Passer ma commande</Checkout>
        </Content>
    </TotalWrapper>
  )
}

export default Total