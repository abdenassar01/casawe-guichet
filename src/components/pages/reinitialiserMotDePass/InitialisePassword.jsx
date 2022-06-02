import { PageWrapper, ContentPanel, Tab, Heading, P, 
  Label, Input, Form, Span, Field, SubmitBox, Submit,
  StyledRouteLink, ErrorMessage
 } from "./SubComponents";

import { useForm } from "react-hook-form";

const InitialisePassword = () => {
 
  const { register, handleSubmit, formState: { errors } } = useForm(); 

  const onSubmit = (data) => {
    console.log(data)

    // end point => /users/recover
    // headers => Authentification
    // payload => { email: "abdenassaramimi@gmail.com" }
  }

  return (
    <PageWrapper>
      <ContentPanel>
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
            <StyledRouteLink to="/connection" color="#000">
              Connexion
            </StyledRouteLink>
          </SubmitBox>
          </Form>
      </ContentPanel>
    </PageWrapper>
  )
}

export default InitialisePassword