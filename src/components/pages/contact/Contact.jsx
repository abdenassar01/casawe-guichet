import { Container, CentredBox, FormWrapper, Tab, Heading, 
  Raw, Field, Label, Input, P, Form, Span, Textarea, 
  Submit, ContactInfoBox 
} from "./SubComponents"
import ErreurBox from '../connection/ErreurBox'

import { useState } from "react"

import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

import {useEffect} from "react";

import axios from "axios";

const Contact = () => {

  const [ email, setEmail ] = useState("") 
  const [ nom, setNom ] = useState("") 
  const [ prenom, setPrenom ] = useState("") 
  const [ message, setMessage ] = useState("")  
  const [ sujet, setSujet ] = useState("") 
  const [ telephone, setTelephone ] = useState("") 

  useEffect(() => {
    document.title = "Contacter-nous"
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();

    const contactMessage =  {
      email: email,
      first_name: prenom,
      last_name : nom,
      message : message,
      phone : telephone,
      subject : sujet
    }

    axios.post("https://api.preprod.guichet.com/contacts", contactMessage)
    .then(data => alert(data.data.message))
    .catch(err => alert(err))
  }

  return (
    <Container>
        <ErreurBox />
        <CentredBox>
          <FormWrapper>
            <Tab>
              <hr />
              <Heading>CONTACTEZ-NOUS</Heading>
            </Tab>
            <P bold="700" size="1.12rem">Vos données seront en sécurité !</P>
            <P size="15px" color="#626467">
              N'hésitez pas à nous contacter en envoyant un email via le formulaire ci-dessous ou par téléphone sur le 05 22 22 77 45/46/47. Nos conseillers sont à l'écoute !
            </P>
            <Form>
              <Raw>
                <Field>
                  <Label>Nom <Span color="red">*</Span></Label>
                  <Input  type="text" placeholder="Votre nom" value={nom} onChange={(e) => setNom(e.target.value)}/>
                </Field>
                <Field>
                  <Label>Prénom <Span color="red">*</Span></Label>
                  <Input type="text" placeholder="Votre prénom" value={prenom} onChange={(e) => setPrenom(e.target.value)}/>
                </Field>
              </Raw>
              <Raw>
                <Field>
                  <Label>E-mail <Span color="red">*</Span></Label>
                  <Input  type="text" placeholder="Votre adresse e-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Field> 
                <Field>
                  <Label>Téléphone </Label>
                  <Input type="text" placeholder="Votre telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)}/>
                </Field>
              </Raw>
              <Field width="92%">
                  <Label>Sujet <Span color="red">*</Span></Label>
                  <Input type="text" placeholder="Sujet de votre demande" value={sujet} onChange={(e) => setSujet(e.target.value)}/>
              </Field>
              <Field width="92%">
                  <Label>Message <Span color="red">*</Span></Label>
                  <Textarea type="text" placeholder="Votre message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)}/>
              </Field>
              <Submit type="submit" value="envoyer le message" onClick={handleSubmit}/>
            </Form>
          </FormWrapper>
          <ContactInfoBox>
            <Tab>
              <hr />
              <Heading>CONTACT INFOS</Heading>
            </Tab>
            <P color="#626467" size="15px"><FaMapMarkerAlt /> Résidence les Pléiades-3ème étage 105 Bd Abdelmoumen, Casablanca - Maroc</P>
            <P color="#626467" size="15px"><FaPhoneAlt size="15px" /> +212 522 227 745 / +212 522 227 746 </P>
            <P color="#626467" size="15px"><FaEnvelope size="15px" /> contact@casawe.ma </P> 
          </ContactInfoBox> 
        </CentredBox>
    </Container>
  )
}

export default Contact