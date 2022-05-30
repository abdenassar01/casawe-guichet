import { Container, CentredBox, FormWrapper, Tab, Heading, 
  Raw, Field, Label, Input, P, Form, Span, Textarea, ErrMsg,
  Submit, ContactInfoBox 
} from "./SubComponents"
import ErreurBox from '../connection/ErreurBox'

import { useForm } from "react-hook-form";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

import {useEffect} from "react";

import axios from "axios";

const Contact = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    document.title = "Contacter-nous"
  },[])

  const onSubmit = (data) => {

    const contactMessage =  {
      email: data.email,
      first_name: data.prenom,
      last_name : data.nom,
      message : data.message,
      phone : data.tele,
      subject : data.sujet
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
            <Form onSubmit={ handleSubmit(onSubmit) }>
              <Raw>
                <Field>
                  <Label>Nom <Span color="red">*</Span></Label>
                  <Input  error={ errors.nom } type="text" placeholder="Votre nom" {...register("nom", { required: true })} />
                  <ErrMsg>{ errors.nom?.type === 'required' && "Ce champ est obligatoire." }</ErrMsg>
                </Field>
                <Field>
                  <Label>Prénom <Span color="red">*</Span></Label>
                  <Input type="text" error={ errors.nom } placeholder="Votre prénom" {...register("prenom", { required: true })} />
                  <ErrMsg>{ errors.prenom?.type === 'required' && "Ce champ est obligatoire." }</ErrMsg>
                </Field>
              </Raw>
              <Raw>
                <Field>
                  <Label>E-mail <Span color="red">*</Span></Label>
                  <Input error={ errors.nom } type="text" placeholder="Votre adresse e-mail"  {...register("email", {
                     required: true, 
                     pattern: {
                       value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                       message: "email Inccorect"
                       }})} />
                  <ErrMsg>{ errors.email?.type === 'required' && "Ce champ est obligatoire." || errors.email?.message }</ErrMsg>
                </Field> 
                <Field>
                  <Label>Téléphone </Label>
                  <Input error={ errors.nom } type="text" placeholder="Votre telephone"  {...register("tele")} />
                </Field>
              </Raw>
              <Field width="92%">
                  <Label>Sujet <Span color="red">*</Span></Label>
                  <Input error={ errors.nom } type="text" placeholder="Sujet de votre demande"  {...register("sujet", { required: true })} />
                  <ErrMsg>{ errors.sujet?.type === 'required' && "Ce champ est obligatoire." }</ErrMsg>
              </Field>
              <Field width="92%">
                  <Label>Message <Span color="red">*</Span></Label>
                  <Textarea error={ errors.nom } type="text" placeholder="Votre message" rows="5"  {...register("message", { required: true })} />
                  <ErrMsg>{ errors.message?.type === 'required' && "Ce champ est obligatoire." }</ErrMsg>
              </Field>
              <Submit type="submit" value="envoyer le message" />
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