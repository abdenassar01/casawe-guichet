import { ErreurBoxMsg } from './SubComponents'
import { ImCross } from 'react-icons/im'

import { useState } from 'react';

const ErreurBox = () => {

  const [ disabled, setDisabled ] = useState(true)

  return (
    <ErreurBoxMsg disabled={disabled}>
      Ces informations d'identification ne correspondent à aucun utilisateur.
      <ImCross onClick={ () => setDisabled(!disabled)} />
    </ErreurBoxMsg>
  )
}

export default ErreurBox