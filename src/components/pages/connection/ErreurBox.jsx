import { ErreurBoxMsg } from './SubComponents'
import { ImCross } from 'react-icons/im'

import { useState } from 'react';

const ErreurBox = ({resetMsg, state, msg }) => {


  if(!msg){
    return null
  } 

  return (
    <ErreurBoxMsg state={ state } >
      { 
        msg 
      }
      <ImCross onClick={ resetMsg } />
    </ErreurBoxMsg>
  )
}

export default ErreurBox