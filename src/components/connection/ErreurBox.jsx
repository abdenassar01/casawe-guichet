import { ErreurBoxMsg } from './SubComponents'
import { ImCross } from 'react-icons/im'

import { useState } from 'react';

const ErreurBox = (props) => {

  const [ disabled, setDisabled ] = useState(true)

  return (
    <ErreurBoxMsg disabled={disabled}>
      { 
        props.msg ? props.msg : "Ces informations d'identification ne correspondent à aucun utilisateur."
      }
      <ImCross onClick={ () => setDisabled(!disabled)} />
    </ErreurBoxMsg>
  )
}

export default ErreurBox