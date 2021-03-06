import { FormSignupWrapper, Tab, Heading, Form,
  Field, Label, Raw, Input, Span, Submit, SubmitBox, 
  P, ErrMsg
 } from '../SubComponents';
import Alert from '../../../alert/Alert';

import { useUserStore } from '../../../../models/userStore';

import { observer } from 'mobx-react-lite';

// import { Navigate } from 'react-router-dom';
import { RouteLink } from '../../../routes/RoutesLinks'
import { useForm } from "react-hook-form";
import { useState } from 'react'

const Signup = observer(() => {

  const root = useUserStore();

  const [ message, setMessage ] = useState("")
  const [ status, setStatus ] = useState(false)
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async (data) => {

    const user = {
      email :  data.email_signup,
      first_name : data.nom_signup,
      last_name : data.prenom_signup,
      password : data.password_signup,
      phone : data.tel_signup,
      source : "guichet"
    }

    const response = await root.register(user)
    setMessage(response.error)
    setStatus(response.success) 
  }

  // if(root.isAuthentificated){
  //   return <Navigate to="/"/>
  // }
  // else{
    
    return (
      <FormSignupWrapper>
        <Alert message={ message } status={status} setMessage={ setMessage }  />
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
        <Form onSubmit={ handleSubmit(onSubmit) }>
            <Raw>
              <Field>
                <Label htmlFor="prenom_signup">Prénom <Span color="#e02222">*</Span></Label>
                <Input 
                  id="prenom_signup" 
                  error={ errors.prenom_signup }
                  type="text" 
                  {...register("prenom_signup",{ required: true })} 
                  placeholder="Votre Prénom"
                />
                <ErrMsg>{ errors.prenom_signup?.type === 'required' && "Ce champ est obligatoire."  }</ErrMsg>
  
              </Field>
              <Field>
                <Label htmlFor="nom_signup">Nom <Span color="#e02222">*</Span></Label>
                <Input 
                  error={ errors.nom_signup }
                  id="nom_signup"
                  {...register("nom_signup",{ required: true })} 
                  type="text" 
                  placeholder="Votre Nom"
                />
                <ErrMsg>{ errors.nom_signup?.type === 'required' && "Ce champ est obligatoire." }</ErrMsg>
              </Field>
            </Raw>
            <Raw>
              <Field>
                <Label htmlFor="email_signup">E-mail <Span color="#e02222">*</Span></Label>
                <Input      
                  id="email_signup"
                  {...register("email_signup",{ required: true, 
                    pattern: {
                      value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                      message: "email Inccorect"
                      }})} 
                  type="text"
                  error={ errors.email_signup }
                  placeholder="Votre address e-mail"
                />            
                <ErrMsg>{ ((errors.email_signup?.type === 'required') && "Ce champ est obligatoire.") || (errors.email_signup?.message) }</ErrMsg>
              </Field>
              <Field>
                <Label htmlFor="tel_signup">Téléphone <Span color="#e02222">*</Span></Label>
                <Input 
                  error={ errors.tel_signup }
                  id="tel_signup"
                  {...register("tel_signup",{ required: true })} 
                  type="text"  
                  placeholder="Téléphone"
                />                            
                <ErrMsg>{ errors.tel_signup?.type === 'required' && "Ce champ est obligatoire." }</ErrMsg>
              </Field>
            </Raw>
            <Raw>
              <Field>
                <Label htmlFor="password_signup">Mot de passe <Span color="#e02222">*</Span></Label>
                <Input 
                  error={ errors.password_signup }
                  id="password_signup"
                  {...register("password_signup",{ required: true, minLength : {
                      value: 8,
                      message: "mot de pass doit etre supperieur a 8 caracteres"
                    } 
                  })} 
                  type="password" 
                  placeholder="Votre Mot de pass"
                />
                <ErrMsg>{ 
                    ((errors.password_signup?.type === 'required') && "Ce champ est obligatoire.") 
                      || 
                     ( errors.password_signup?.message )
                      }
                </ErrMsg>
              </Field>
              <Field>
                <Label htmlFor="password_conf_signup">Confirmation de mot de passe <Span color="#e02222">*</Span></Label>
                <Input 
                  error={ errors.password_conf_signup }
                  id="password_conf_signup" 
                  {...register("password_conf_signup",{ required: true })} 
                  type="password"
                  placeholder="Confirmation de Mot de passe"
                />
                <ErrMsg>{ 
                            (( errors.password_conf_signup?.type === 'required' ) && "Ce champ est obligatoire.") 
                              || 
                            ((watch("password_conf_signup") !== watch("password_signup")) && "Les champs password confirmation et Mot de passe doivent être identiques" )
                        }</ErrMsg>
              </Field>
            </Raw>
            <SubmitBox> 
              <Submit type="submit" value="INSCRIPTION" />
            </SubmitBox>
          </Form>
      </FormSignupWrapper>
    )
  }
)

export default Signup