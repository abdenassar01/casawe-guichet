import { ProfileWrapper, ProfileContentWrapper, Tab,
    Heading, Form, Table, Raw, Column, Label, Input, Span,
    SelectColumn, Submit
} from './SubComponents'

import Loading from "../../loading/Loading"
import Alert from "../../alert/Alert"

import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import Select from 'react-select'
import { useQuery } from 'react-query'
import instance from '../../../axios/axios'
import { countries } from '../../../assets/countries'
import { Navigate } from 'react-router-dom'

const Profile = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [ message, setMessage ] = useState("")
    const [ status, setStatus ] = useState(false)

    const { isLoading, error, data } = useQuery("fetchCurrentUser", () => (
        instance.get("/users/me", {
            headers: {
                'Authorization': "Bearer " + sessionStorage.getItem("token")
            }
        })).then((response) => response)
    ) 


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
                    'Authorization': "Bearer " + sessionStorage.getItem("token")
                }
            })
            setMessage(result.data.message)
            setStatus(result.data.success)
        }catch(ex){
            setMessage(ex.response.data.error)
            setStatus(ex.response.data.success)
        }        
    }

    useEffect(() => {
        document.title = "Mon compte - Profil"    
    }, [])

    if(isLoading) return <Loading />

    if(error) return <Navigate to="/error" />          

    return (
    <ProfileWrapper>
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
                                <Input type="text" id='nom' {...register("nom", { required: true })} defaultValue={data.data.user.lastName} />
                            </Column>
                            <Column>
                                <Label htmlFor="prenom">Prénom<Span color="red">*</Span></Label>
                                <Input type="text" id="prenom" {...register("prenom", { required: true })} defaultValue={data.data.user.firstName} />
                            </Column>
                        </Raw> 
                        <Raw>
                            <SelectColumn>
                                <Label htmlFor="paye">Paye<Span color="red">*</Span></Label>
                                <Select
                                    options={ countries } id="paye"
                                    {...register("paye")}
                                    placeholder="Sélectionner..."
                                />
                            </SelectColumn>
                            <Column>
                                <Label htmlFor="ville">Ville<Span color="red">*</Span></Label>
                                <Input type="text" id="ville" {...register("ville", { required: true })} />
                            </Column>
                        </Raw>
                        <Raw>
                            <Column>
                            <br />
                                <Label htmlFor="tel">Téléphone<Span color="red">*</Span></Label>
                                <Input type="text" id="tel" {...register("tel", {required: true})} defaultValue={data.data.user.phone}/>
                            </Column>
                            <Column>
                                <Label htmlFor="adresse">Adresse<Span color="red">*</Span></Label>
                                <Input type="text" id="adresse" {...register("adresse", {required: true})} />
                            </Column>
                        </Raw>
                        <Raw>
                            <Column>
                                <Label htmlFor="email">E-mail<Span color="red">*</Span></Label>
                                <Input type="text" id='email' {...register("email", { required: true })} defaultValue={data.data.user.email} />
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
}

export default Profile
