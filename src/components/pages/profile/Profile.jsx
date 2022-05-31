import { ProfileWrapper, ProfileContentWrapper, Tab,
    Heading, Form, Table, Raw, Column, Label, Input, Span,
    SelectColumn, Submit
} from './SubComponents'
import Loading from "../../loading/Loading"

import { useEffect } from 'react'
import { useForm } from "react-hook-form";
import Select from 'react-select'
import { useQuery } from 'react-query'
import instance from '../../../axios/axios'
import { countries } from '../../../assets/countries'
import { Navigate } from 'react-router-dom'

const Profile = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { isLoading, error, data, status } = useQuery("fetchCurrentUser", () => (
        instance.get("/users/me", {
            headers: {
                'Authorization': "Bearer " + sessionStorage.getItem("token")
            }
        })).then((response) => response)
    ) 


    const onSubmit = () => {

    }

    useEffect(() => {
        document.title = "Mon compte - Profil"    
    }, [])

    if(isLoading) return <Loading />

    if(error) return <Navigate to="/error" />          

    // console.log(data.data.user)

    return (
    <ProfileWrapper>
        <ProfileContentWrapper>
            <Tab>
                <hr />
                <Heading>MES INFORMATIONS PERSONNELLES</Heading>
            </Tab>
            <Form onSubmit={handleSubmit(onSubmit)}>
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
                                    {...register("paye", { required: true })}
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
