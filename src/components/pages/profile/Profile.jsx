import { ProfileWrapper, ProfileContentWrapper, Tab,
    Heading, Form, Table, Raw, Column, Label, Input, Span,
    SelectColumn, Submit
} from './SubComponents'

import { useState, useEffect } from 'react'

import Select from 'react-select'

const options = [
  { value: 'MA', label: 'MAROC' },
  { value: 'AL', label: 'ALGERIA' },
  { value: 'FR', label: 'FRANCE' },
  { value: 'UK', label: 'UNITED KINGDOM' }
]

const Profile = (props) => {

    const [ nom, setNom ] = useState("")
    const [ prenom, setPrenom ] = useState("")
    const [ ville, setVille ] = useState("")
    const [ telephone, setTelephone ] = useState("")
    const [ adresse, setAdresse ] = useState("")
    const [ paye, setPaye ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('form submitted with info  \nNom: ' + nom 
            + ' \nPrenom: ' + prenom 
            + ' \nVille: ' + ville 
            + ' \nTelephone: ' + telephone 
            + ' \nAdresse: ' + adresse 
            + ' \nPaye: ' + paye )
    }

    useEffect(() => {
        document.title = "Mon compte - Profil"
    }, [])
  return (
    <ProfileWrapper>
        <ProfileContentWrapper>
            <Tab>
                <hr />
                <Heading>MES INFORMATIONS PERSONNELLES</Heading>
            </Tab>
            <Form>
                <Table>
                    <Raw>
                        <Column>
                            <Label htmlFor="nom">Nom<Span color="red">*</Span></Label>
                            <Input type="text" id='nom' value={nom} onChange={(e) => {setNom(e.target.value)}}/>
                        </Column>
                         <Column>
                            <Label htmlFor="prenom">Prénom<Span color="red">*</Span></Label>
                            <Input type="text" id="prenom" value={prenom} onChange={(e) => {setPrenom(e.target.value)}}/>
                        </Column>
                    </Raw>
                    <Raw>
                        <SelectColumn>
                            <Label htmlFor="paye">Paye<Span color="red">*</Span></Label>
                            <Select
                                options={options} id="paye"
                                placeholder="Sélectionner..."
                                value={paye.value}
                                onChange={(newValue, actionMeta) => {
                                    setPaye(newValue.value)
                                }}
                            />
                        </SelectColumn>
                        <Column>
                            <Label htmlFor="ville">Ville<Span color="red">*</Span></Label>
                            <Input type="text" id="ville" value={ville} onChange={(e) => {setVille(e.target.value)}}/>
                        </Column>
                    </Raw>
                    <br />
                    <Raw>
                        <Column>
                            <Label htmlFor="ville">Téléphone<Span color="red">*</Span></Label>
                            <Input type="text" id="ville" value={telephone} onChange={(e) => {setTelephone(e.target.value)}}/>
                        </Column>
                        <Column>
                            <Label htmlFor="adresse">Adresse<Span color="red">*</Span></Label>
                            <Input type="text" id="adresse" value={adresse} onChange={(e) => {setAdresse(e.target.value)}}/>
                        </Column>
                    </Raw>
                    <Submit type="submit" value="Mettre à jour" onClick={handleSubmit}/>
                </Table>
            </Form>
        </ProfileContentWrapper>
    </ProfileWrapper>
  )
}

export default Profile
