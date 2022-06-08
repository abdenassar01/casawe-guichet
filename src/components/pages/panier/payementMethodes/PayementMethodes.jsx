import { Form, Radio, Field, Label, Span, 
  PayementWrapper, Text, Title, Description 
} from "../SubComponents"

const PayementMethodes = ({ setPayementMethod, items }) => {

  return (
    <PayementWrapper>
      <Title>Mode de paiement</Title>
      <Text>Sélectionez votre moyen de paiement</Text>
      <hr />
      <Form >
        {
          items.map(method => (
            <Field key={ method?.id }>
              <Radio 
                type="radio" id={ method?.id }
                value={ method?.id } 
                name="payement_method"
                // checked={ method?.id === 6 }
                onChange={ (e) => {
                  setPayementMethod(e.target.value)
                } }
              /> 
              <Label htmlFor={ method?.id }>
                <Span> { method?.title } </Span> 
                <Description dangerouslySetInnerHTML={{ __html: method?.description }}/>
              </Label>
            </Field>
          ))
        }
      </Form>
    </PayementWrapper>
  )
}

export default PayementMethodes