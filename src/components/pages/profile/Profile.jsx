import { ProfileWrapper, ProfileContentWrapper, Tab,
    Heading, Form, Table, Raw, Column, Label, Input, Span,
    SelectColumn, Submit, ErrMsg
} from './SubComponents'

import Alert from "../../alert/Alert"

import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import Select from 'react-select'
import instance from '../../../axios/axios'
import { countries } from '../../../assets/countries'
import { useUserStore } from '../../../models/userStore';

import { Helmet } from "react-helmet-async"
import { observer } from 'mobx-react-lite';

const Profile = observer(() => {

    const root = useUserStore()

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [ message, setMessage ] = useState("")
    const [ status, setStatus ] = useState(false)
    
    const [ paye, setPaye ] = useState("")

    useEffect(() => {
        reset({
            nom: (root.isAuthentificated) &&  root.user?.lastName,
            prenom: (root.isAuthentificated) &&  root.user?.firstName,
            email: (root.isAuthentificated) &&  root.user?.email,
            tel: (root.isAuthentificated) &&  root.user?.phone
          })
    }, [])

    const onSubmit = async (data) => {
        const payload = {
            email: data.email,
            first_name: data.prenom,
            last_name: data.nom,
            phone: data.tel
        }

        try{
            const result = await instance.post("/users/update", payload, {
                headers: {
                    "Authorization": "Bearer " + sessionStorage.getItem("token")
                }
            })
            setMessage(result.data.message)
            setStatus(result.data.success)
        }catch(ex){
            setMessage(ex.response.data.error)
            setStatus(ex.response.data.success)
        }        
    }

    return (
    <ProfileWrapper>
        <Helmet>
            <title>Mon compte - Profil</title>
            <meta property="og:title" content="Mon compte - Profil" />
            <meta name="twitter:title" content="Mon compte - Profil" />
            <meta name="keywords" content="Casawe, ticket, billetterie, concerts, casablanca, rabat, marrakech, agadir, tanger, spectacles, festivals, sport, theatre, humour, maroc" />
            <meta name="description" content="Casawe: Tickets &amp; Billetterie concerts, spectacles, cinéma, festivals, sport et théâtre au Maroc" />
            <meta property="og:description" content="Casawe: Tickets &amp; Billetterie concerts, spectacles, cinéma, festivals, sport et théâtre au Maroc" />
        </Helmet>
        <ProfileContentWrapper>
            <Tab>
                <hr />
                <Heading>MES INFORMATIONS PERSONNELLES</Heading>
            </Tab>
            <Alert message={ message } setMessage={ setMessage } status={ status } />
            <Form onSubmit={ handleSubmit(onSubmit) }>
                <Table>
                    <tbody>
                        <Raw>
                            <Column>
                                <Label htmlFor="nom">Nom<Span color="red">*</Span></Label>
                                <Input type="text" error={ errors.nom } id='nom' {...register("nom", { required: true })} />
                                <ErrMsg>{ errors.nom?.type === 'required' && "Ce champ est obligatoire." }</ErrMsg>
                            </Column>
                            <Column>
                                <Label htmlFor="prenom">Prénom<Span color="red">*</Span></Label>
                                <Input type="text" error={ errors.prenom } id="prenom" {...register("prenom", { required: true })} />
                                <ErrMsg>{ errors.prenom?.type === 'required' && "Ce champ est obligatoire." }</ErrMsg>
                            </Column>
                        </Raw> 
                        <Raw>
                            <SelectColumn>
                                <Label htmlFor="paye">Paye<Span color="red">*</Span></Label>
                                <Select
                                    tabSelectsValue
                                    options={ countries } id="paye"
                                    value={ countries.filter( country => country.label === paye ) } onChange={ (newValue, actionMeta) => { setPaye(newValue.label) } }
                                    placeholder="Sélectionner..."
                                />
                                <ErrMsg>{ paye === "" && "Ce Champ est Obligatoire." }</ErrMsg>
                            </SelectColumn>
                            <Column>
                                <Label htmlFor="ville">Ville<Span color="red">*</Span></Label>
                                <Input type="text" error={ errors.ville } id="ville" 
                                    {...register("ville", { required: true })} 
                                />
                                <ErrMsg>{ errors.ville?.type === 'required' && "Ce champ est obligatoire." }</ErrMsg>
                            </Column>
                        </Raw>
                        <Raw>
                            <Column>
                            <br />
                                <Label htmlFor="tel">Téléphone<Span color="red">*</Span></Label>
                                <Input type="text" error={ errors.tel } id="tel" {...register("tel", {required: true})} />
                                <ErrMsg>{ errors.tel?.type === 'required' && "Ce champ est obligatoire." }</ErrMsg>
                            </Column>
                            <Column>
                                <Label htmlFor="adresse">Adresse<Span color="red">*</Span></Label>
                                <Input type="text" error={ errors.adresse } id="adresse" {...register("adresse", {required: true})} />
                                <ErrMsg>{ errors.adresse?.type === 'required' && "Ce champ est obligatoire." }</ErrMsg>
                            </Column>
                        </Raw>
                        <Raw>
                            <Column>
                                <Label htmlFor="email">E-mail<Span color="red">*</Span></Label>
                                <Input error={ errors.email } type="text" id='email'
                                    {...register("email", {
                                        required: true, 
                                        pattern: {
                                          value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                          message: "email Inccorect"
                                          }})}
                                     />
                                <ErrMsg>{ ((errors.email?.type === 'required') && "Ce champ est obligatoire." )|| ( errors.email?.message ) }</ErrMsg>
                            </Column>
                        </Raw>
                        <Raw>
                            <Column>
                                <Submit type="submit" value="Mettre à jour" />      
                            </Column>
                        </Raw>
                    </tbody>    
                </Table>
            </Form>
        </ProfileContentWrapper>
    </ProfileWrapper>
  )
})

export default Profile
