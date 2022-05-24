import { Wrapper, CentredBox } from './SubComponents'

import Login from './login/Login'
import Signup from './signup/Signup'
import ErreurBox from './ErreurBox'

import {useEffect} from "react";

const Connection = ({loggin, setLoggin}) => {

  useEffect(() => {
    document.title = "Connexion / Inscription - Casawe"
  },[])

  return (
    <Wrapper>
        <ErreurBox />
        <CentredBox>
            <Login setLoggin={setLoggin} loggin={loggin}/>
            <Signup />
        </CentredBox>
    </Wrapper>
  )
}

export default Connection