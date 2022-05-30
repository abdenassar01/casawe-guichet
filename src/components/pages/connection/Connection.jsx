import { Wrapper, CentredBox } from './SubComponents'

import Login from './login/Login'
import Signup from './signup/Signup'

import { useEffect, useState } from "react";

const Connection = () => {

  useEffect(() => {
    document.title = "Connexion / Inscription - Casawe"
  },[])



  return (
    <Wrapper>
        <CentredBox>
            <Login />
            <Signup />
        </CentredBox>
    </Wrapper>
  )
}

export default Connection