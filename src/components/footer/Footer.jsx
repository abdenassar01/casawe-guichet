import { useForm } from 'react-hook-form'
import { FooterWrapper, Newsletter, Text, 
  Mail, Form, H3, P, 
  Input, Submit, CasaweProfile, Image,
  About, Copyright, CopyrightText, 
  Sponsors, SponsorsImage, Span
} from './SubComponents'

import Alert from "../alert/Alert"

import instance from "../../axios/axios"

import { useState } from 'react';

const Footer = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();


  const [ message, setMessage ] = useState("");
  const [ status, setStatus ] = useState(false);


  const onSubmit = (data) => {

    const payload = {
      email: data.email
    }
    
    instance.post("/newsletters/subscription", payload)
    .then(response => {
      setMessage(response?.data.message);
      setStatus(response?.data.success)
    })
    .catch(errors => {
      setMessage( errors?.response.data.error );
      setStatus( errors?.response.data.success )
    })
  }

  return (
    <FooterWrapper>
        <Newsletter>
          <Text>
            <H3>Inscrivez-vous à la newsletter</H3>
            <P>Vous soyez alertés en amont des meilleurs plans, spectacles, concerts, festivals, etc... </P>
          </Text>
            <Form onSubmit={ handleSubmit(onSubmit) }>
              <Alert message={ message } setMessage={ setMessage } status={ status } />
              <Mail>
                <Input type="email" placeholder="Address email" 
                  {...register("email", {
                     required: true, 
                     pattern: {
                       value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                       message: "Veuillez fournir une adresse électronique valide."
                       }})}/>
                <Submit type="submit" value="S'INSCRIRE"/>
              </Mail>
              <Span>{ (( errors.email?.type === 'required' ) && "Ce champ est obligatoire." ) || ( errors.email?.message ) }</Span>
            </Form>
        </Newsletter>
        <About>
          <CasaweProfile>
            <Image src="https://casawe.guichet.ma/frontend/images/casawe.png" alt="Casawe Profile"/>
            <P size="15px">Casablanca Events et Animation a pour mission la promotion de Casablanca à l’échelle nationale et internationale par le biais d’animations aussi bien économiques, culturelles que sportives.</P>
          </CasaweProfile>
        </About>
        <Copyright>
          <CopyrightText>
            <b>Copyright 2022 &copy; Casawe</b>
             - Tous droits réservés. | By Guichet
          </CopyrightText>
          <Sponsors>
              <SponsorsImage src="https://guichet.imgix.net/frontend/images/payment-logos.png" alt="Guichet sponsors"/>
          </Sponsors>
        </Copyright>
    </FooterWrapper>
  )
}

export default Footer