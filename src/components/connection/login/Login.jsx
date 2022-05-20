import { FormLoginWrapper, Tab, Form, Heading, 
  Field, Label, Input, Span, CheckBoxWrapper, 
  CheckBox, Submit, SubmitBox, StyledRouteLink
} from '../SubComponents'

import { useState } from 'react'


const Login = () => {

  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
  }

  return (
    <FormLoginWrapper>
      <Tab>
        <hr />
        <Heading>connexion</Heading>
      </Tab>
        <Form>
          <Field>
            <Label htmlFor="">E-mail <Span color="#e02222">*</Span></Label>
            <Input 
              id="login" value={email} 
              type="email" name="email" 
              placeholder="Votre address e-mail"
              onChange={(e) => setEmail(e.target.value) }
            />
          </Field>
          <Field>
            <Label htmlFor="">Password <Span color="#e02222">*</Span></Label>
            <Input 
              id="password" value={password} 
              type="password" name="password" 
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
            <Submit type="submit" value="connexion" onClick={handleSubmit}/>
            <StyledRouteLink to="mot-passe-oublie" color="black">
              Mot de Passe Oublie?
            </StyledRouteLink>
          </SubmitBox>
        </Form>
    </FormLoginWrapper>
  )
}

export default Login