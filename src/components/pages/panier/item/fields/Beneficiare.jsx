import {    BenificiareField, FieldLabel, FieldInput, Validator } from "../../SubComponents";

const Beneficiare = ({fields , register}) => {
  // console.log(fields)
  return (
    fields?.map(field => (
        <BenificiareField key={ field?.name }>
            <FieldLabel>{field?.label} :</FieldLabel>
            <FieldInput type={ field?.type } {...register(field?.name, { required: field?.validation })} />
            <Validator>{ ( field?.validation.length !== 0 ) && "Ce Champ es Obligatoire" }</Validator>
        </BenificiareField>
    ))
  )
}

export default Beneficiare