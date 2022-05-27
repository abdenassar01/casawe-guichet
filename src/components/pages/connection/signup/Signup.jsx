import { FormSignupWrapper, Tab, Heading, Form,
  Field, Label, Raw, Input, Span, Submit, SubmitBox, P
 } from '../SubComponents';

import { RouteLink } from '../../../routes/RoutesLinks'
import axios from 'axios';
import { useState } from 'react'

const Signup = () => {


  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ passwordConfirm, setPasswordConfirm ] = useState("")
  const [ prenom, setPrenom ] = useState("")
  const [ nom, setNom ] = useState("")
  const [ telephone, setTelephone ] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    if(password !== passwordConfirm){
      alert("Les champs password confirmation et Mot de passe doivent être identiques.")   
    }else{

     
      const registerData = {
        email: email,
        first_name: nom,
        last_name: prenom,
        password: password,
        phone: telephone,
        source: "casawe-guichet"
      }
      axios.post("https://api.preprod.guichet.com/users/register", registerData)
        .then(result => alert(result.data.message))
        .catch(err => alert(err.error))
      }
  }

  return (
    <FormSignupWrapper>
      <Tab>
        <hr />
        <Heading>Nouveau copmte?</Heading>
      </Tab>
      <P>
        Si vous avez des difficultés ou des questions pour vous inscrire,
        <Span>
          &nbsp;
          <RouteLink color="#0066b2" to="/contact" style={{display: 'inline'}}>
            contactez-nous
          </RouteLink>
        </Span> 
      </P>
      <Form>
          <Raw>
            <Field>
              <Label htmlFor="">Prénom <Span color="#e02222">*</Span></Label>
              <Input 
                id="prenom" value={prenom} 
                required
                type="text" name="prenom" 
                placeholder="Votre Prénom"
                onChange={(e) => setPrenom(e.target.value) }
              />
            </Field>
            <Field>
              <Label htmlFor="">Nom <Span color="#e02222">*</Span></Label>
              <Input 
                id="nom" value={nom} 
                required
                type="text" name="nom" 
                placeholder="Votre Nom"
                onChange={(e) => setNom(e.target.value) }
              />
            </Field>
          </Raw>
          <Raw>
            <Field>
              <Label htmlFor="">E-mail <Span color="#e02222">*</Span></Label>
              <Input 
                id="email" value={email} 
                required
                type="email" name="email" 
                placeholder="Votre address e-mail"
                onChange={(e) => setEmail(e.target.value) }
              />
            </Field>
            <Field>
              <Label htmlFor="">Téléphone <Span color="#e02222">*</Span></Label>
              <Input 
                id="tel" value={telephone} 
                required
                type="text" name="tel" 
                placeholder="Téléphone"
                onChange={(e) => setTelephone(e.target.value) }
              />
            </Field>
          </Raw>
          <Raw>
            <Field>
              <Label htmlFor="">Mot de passe <Span color="#e02222">*</Span></Label>
              <Input 
                id="password" value={password} 
                required
                type="password" name="password" 
                placeholder="Votre address e-mail"
                onChange={(e) => setPassword(e.target.value) }
              />
            </Field>
            <Field>
              <Label htmlFor="password_conf">Confirmation de mot de passe <Span color="#e02222">*</Span></Label>
              <Input 
                required
                id="password_conf" value={passwordConfirm} 
                type="password" name="password_conf" 
                placeholder="Confirmation de Mot de passe"
                onChange={(e) => setPasswordConfirm(e.target.value) }
              />
            </Field>
          </Raw>
          <SubmitBox>
            <Submit type="submit" value="INSCRIPTION" onClick={handleSubmit}/>
          </SubmitBox>
        </Form>
    </FormSignupWrapper>
  )
}

export default Signup