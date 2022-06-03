import { PageWrapper, ContentPanel, Tab, Heading, P, 
  Label, Input, Form, Span, Field, SubmitBox, Submit,
  StyledRouteLink, ErrorMessage
 } from "./SubComponents";

import Alert from "../../alert/Alert";

import { useForm } from "react-hook-form";

import instance from "../../../axios/axios";
import { useState } from "react";

const InitialisePassword = () => {
 
  const { register, handleSubmit, formState: { errors } } = useForm(); 

  const [ message, setMessage ] = useState("");
  const [ status, setStatus ] = useState("");

  const onSubmit = async (data) => {

    const payload = {
      email: data.email_login
    }

    let response;
      try{
        response = await instance.post("/users/recover", payload);
        setMessage( response?.data.message );
        setStatus( response?.data.success );
      }catch(ex){
        setMessage( "Aucun utilisateur n'a été trouvé avec cette adresse email." )
        setStatus( false )
      }
  }

  return (
    <PageWrapper>
      <ContentPanel>
        <Alert message={ message } status={ status } setMessage={ setMessage } />
          <Tab>
            <hr />
            <Heading>
              RÉINITIALISER VOTRE MOT DE PASSE
            </Heading>
          </Tab>
          <P>Saisissez votre adresse e-mail pour que nous puissions vous envoyer un lien permettant de réinitialiser votre mot de passe.</P>
          <Form onSubmit={ handleSubmit(onSubmit) }>
            <Field>
              <Label htmlFor="email_login">
                Email <Span>*</Span>
              </Label>
              <Input 
                {...register("email_login", {required: true, 
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Email Inccorect"
                    }})}
                error={  errors.email_login }
                id="email_login" 
                type="text"
                placeholder="Votre address e-mail"
              />
              <ErrorMessage>{ ((errors.email_login?.type === 'required') && "Ce champ est obligatoire.") || (errors.email_login?.message)  }</ErrorMessage>
            </Field>
            <SubmitBox>
            <Submit type="submit" value="Envoyer le lien de réinitialisation" />
            <StyledRouteLink to="/connexion" color="#000">
              Connexion
            </StyledRouteLink>
          </SubmitBox>
          </Form>
      </ContentPanel>
    </PageWrapper>
  )
}

export default InitialisePassword