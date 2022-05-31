import { ErreurBoxMsg } from './SubComponents'
import { ImCross } from 'react-icons/im'

import { useMessage } from '../../../models/user';

const ErreurBox = ({ response }) => {

  function reset(){
    // response.error = ""
  }

  if(!"response.error"){
    return null
  } 

  return (
    // <ErreurBoxMsg state={ response.state } >
    //   { 
    //     response.error
    //   }
    //   <ImCross onClick={ reset } />
    // </ErreurBoxMsg>
    <b>hello</b>
  )
}

export default ErreurBox