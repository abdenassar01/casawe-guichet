import { ErreurBoxMsg } from './SubComponents'
import { ImCross } from 'react-icons/im'

import { useState } from 'react';

const ErreurBox = ({ disabled, state, msg }) => {

  const [ isdisabled, setDisabled ] = useState(disabled)

  return (
    <ErreurBoxMsg disabled={ isdisabled } state={ state } >
      { 
        msg ? msg : "Ces informations d'identification ne correspondent à aucun utilisateur."
      }
      <ImCross onClick={ () => setDisabled(true)} />
    </ErreurBoxMsg>
  )
}

export default ErreurBox