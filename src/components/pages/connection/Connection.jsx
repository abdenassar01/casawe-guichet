import { Wrapper, CentredBox } from './SubComponents'

import Login from './login/Login'
import Logout from './signup/Signup'
import ErreurBox from './ErreurBox'

import {useEffect} from "react";

const Connection = () => {

  useEffect(() => {
    document.title = "Connexion / Inscription - Casawe"
  },[])

  return (
    <Wrapper>
        <ErreurBox />
        <CentredBox>
            <Login />
            <Logout />
        </CentredBox>
    </Wrapper>
  )
}

export default Connection