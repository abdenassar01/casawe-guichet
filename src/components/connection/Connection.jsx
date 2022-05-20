import { Wrapper, CentredBox } from './SubComponents'

import Login from './login/Login'
import Logout from './signup/Signup'
import ErreurBox from './ErreurBox'

const Connection = () => {
  return (
    <Wrapper>
        <ErreurBox style={{display: 'none'}}/>
        <CentredBox>
            <Login />
            <Logout />
        </CentredBox>
    </Wrapper>
  )
}

export default Connection