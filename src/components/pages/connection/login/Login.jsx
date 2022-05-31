import { FormLoginWrapper, Tab, Form, Heading, 
  Field, Label, Input, Span, CheckBoxWrapper, 
  CheckBox, Submit, SubmitBox, StyledRouteLink,
  ErrMsg
} from '../SubComponents';
import Alert from '../../../alert/Alert';

import { useUser } from "../../../../models/user"

import { Navigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";
import { useState } from 'react';

const Login = observer(() => {

  const store = useUser();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [ alert, setAlert ] = useState("")
  const [ status, setStatus ] = useState(false)

  const onSubmit = async (data) => {
    const userData = {
      email: data.email_login, 
      password: data.password_login, 
      source: "casawe Sport"
    }

    const response = await store.userLogin(userData)
    if(response){
      setAlert(response.error)
      setStatus(response.success)
    }
  } 

  if(store.isLogin){
    return <Navigate to="/"/>
  }

  return (
    <FormLoginWrapper>
      <Alert message={ alert } status={ status } setMessage={ setAlert } />
      <Tab>
        <hr />
        <Heading>connexion</Heading>
      </Tab>
        <Form onSubmit={ handleSubmit(onSubmit) }>
          <Field>
            <Label htmlFor="email_login">E-mail <Span color="#e02222">*</Span></Label>
            <Input 
              {...register("email_login", {required: true, 
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "email Inccorect"
                  }})}
              error={  errors.email_login }
              id="email_login" 
              type="text"
              placeholder="Votre address e-mail"
            />
            <ErrMsg>{ errors.email_login?.type === 'required' && "Ce champ est obligatoire." || errors.email_login?.message }</ErrMsg>
          </Field>
          <Field>
            <Label htmlFor="password_login">Password <Span color="#e02222">*</Span></Label>
            <Input 
              id="password_login" 
              error={  errors.password_login }
              {...register("password_login", { required: true })}
              type="password"
              placeholder="Mot de passe"
            />
            <ErrMsg>{ errors.password_login?.type === 'required' && "Ce champ est obligatoire." }</ErrMsg>
          </Field>
          <CheckBoxWrapper>
            <CheckBox 
              {...register("remember_me")}
              id="remember-me"
              type="checkbox"  
            />
            <Span>&nbsp; Se souvenir de moi</Span>
          </CheckBoxWrapper>
          <SubmitBox>
            <Submit type="submit" value="CONNEXION" onClick={handleSubmit}/>
            <StyledRouteLink to="mot-passe-oublie" color="#000">
              Mot de Passe Oublie?
            </StyledRouteLink>
          </SubmitBox>
        </Form>
    </FormLoginWrapper>
  )
})

export default Login