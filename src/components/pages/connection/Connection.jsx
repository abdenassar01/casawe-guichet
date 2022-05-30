import { Wrapper, CentredBox } from './SubComponents'

import Login from './login/Login'
import Signup from './signup/Signup'
import ErreurBox from './ErreurBox'

import { useEffect, useState } from "react";

const Connection = ({loggin, setLoggin}) => {

  useEffect(() => {
    document.title = "Connexion / Inscription - Casawe"
  },[])

  const [ isDisabled, setDisabled ] = useState(true)
  const [ msg, setMsg] = useState("")


  return (
    <Wrapper>
        <ErreurBox disabled={isDisabled} msg={msg}/>
        <CentredBox>
            <Login setLoggin={setLoggin} loggin={loggin} setDisabled={setDisabled} setMsg={setMsg}/>
            {/* <Signup /> */}
        </CentredBox>
    </Wrapper>
  )
}

export default Connection