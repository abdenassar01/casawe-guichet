import { TotalWrapper, Tab, Heading, Radio, RegularText, 
    Label, Field , Content, Checkout 
} from "../SubComponents";

const Total = () => {
  return (
    <TotalWrapper>
        <Tab>
            <hr />
            <Heading>TOTAL</Heading>
        </Tab>
        <Content>
            <RegularText>
                Total des articles 3490 MAD
            </RegularText> 
            {
                /* <RegularText>
                    Frais de livraison 0MAD
                </RegularText> */
            }
            <hr />
            <RegularText>
                Total a paye
            </RegularText>
            <hr />
            <Field>
                <Radio 
                type="radio" id="liecence"
                value={ "method?.id "} 
                name="liecence"
                regular
                onChange={ (e) => {
                    // setPayementMethod(e.target.value)
                } }
                /> 
                <Label htmlFor="liecence" >
                    J'ai lu <a target="_blank" rel="noreferrer" href="https://www.guichet.com/mentions-legales">les conditions générales de vente</a> et j'y adhère sans réserve.
                </Label>
            </Field>
            <Checkout>Passer ma commande</Checkout>
        </Content>
    </TotalWrapper>
  )
}

export default Total