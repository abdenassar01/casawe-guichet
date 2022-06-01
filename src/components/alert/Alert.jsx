import { ImCross } from 'react-icons/im'
import styled from "styled-components"

const Alert = ({ message, status, setMessage }) => {


  function reset(){
    setMessage("")
  }

  if(message === ""){
      return null
  }

  return (
    <AlertWrapper isSuccess={ status } >
        { message }
        <ImCross onClick={ reset }/>
    </AlertWrapper>
  )
}

export default Alert

const AlertWrapper = styled.div`
  width: 95%;
  padding: 10px;
  display: flex;
  margin-bottom: 10px;
  color: white;
  font-weight: bold;
  justify-content: space-between;
  background-color: ${props => props.isSuccess ? "#01b63d" : "#df0030" };
`