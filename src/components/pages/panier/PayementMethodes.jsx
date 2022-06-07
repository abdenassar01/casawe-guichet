import { useForm } from "react-hook-form"
import { Form, Radio, Field, Label, Span, 
  PayementWrapper, Text, Title, CheckBox 
} from "./SubComponents"

const PayementMethodes = ({ payemetMethod, setPayementMethod }) => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <PayementWrapper>
      <Title>Mode de paiement</Title>
      <Text>Sélectionez votre moyen de paiement</Text>
      <hr />
      <Form>
        <Field>
          <Radio 
            type="radio" id="id6" value={`id`}
            {...register("payement_method")}
          /> 
          <Label htmlFor="id6">
            <Span>Carte bancaire marocaine et internationale</Span> 
            <CheckBox /> 
          </Label>
        </Field>
        <Field>
          <Radio 
            type="radio" id="id7"
            value={`id`}
            {...register("payement_method")} 
          /> 
          <Label htmlFor="id7">
            <Span>Carte bancaire marocaine et internationale</Span>
            <CheckBox /> 
          </Label>
        </Field>
        <Field>
          <Radio 
            type="radio" id="id8" 
            value={`id`}
            {...register("payement_method")} 
          /> 
          <Label htmlFor="id8">
            <Span>Carte bancaire marocaine et internationale</Span>
            <CheckBox /> 
          </Label>
        </Field>
      </Form>
    </PayementWrapper>
  )
}

export default PayementMethodes