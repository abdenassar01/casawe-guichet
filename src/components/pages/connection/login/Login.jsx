import { FormLoginWrapper, Tab, Form, Heading, 
  Field, Label, Input, Span, CheckBoxWrapper, 
  CheckBox, Submit, SubmitBox, StyledRouteLink
} from '../SubComponents'

import { useState } from 'react'


const Login = ({ setLoggin, loggin }) => {

  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email !== "" && password !== ""){
      setLoggin(!loggin);
      !loggin ? alert("You are logged in") : alert("You are logged out");
      return;
    }
    alert("provide messing data")
  }

  return (
    <FormLoginWrapper>
      <Tab>
        <hr />
        <Heading>connexion</Heading>
      </Tab>
        <Form>
          <Field>
            <Label htmlFor="email-login">E-mail <Span color="#e02222">*</Span></Label>
            <Input 
              id="email-login" value={email}
              required 
              type="email" name="email-login" 
              placeholder="Votre address e-mail"
              onChange={(e) => setEmail(e.target.value) }
            />
          </Field>
          <Field>
            <Label htmlFor="password-login">Password <Span color="#e02222">*</Span></Label>
            <Input 
              id="password-login" value={password}
              required 
              type="password" name="password-login" 
              placeholder="Mot de passe"
              onChange={(e) => setPassword(e.target.value) }
            />
          </Field>
          <CheckBoxWrapper>
            <CheckBox 
              id="remember-me"
              type="checkbox" name="remember-me" 
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
}

export default Login