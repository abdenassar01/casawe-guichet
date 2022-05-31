import { observer } from 'mobx-react-lite';
import { ImCross } from 'react-icons/im'
import styled from "styled-components"
import { useAlert } from "../../models/message";

const Alert = observer(() => {

    const alert = useAlert();

  if(alert.message === ""){
      return null
  }

  return (
    <AlertWrapper isSuccess={ alert.status } >
        { alert.message }
        {/* <ImCross onClick={ alert.reset() }/> */}
    </AlertWrapper>
  )
})

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