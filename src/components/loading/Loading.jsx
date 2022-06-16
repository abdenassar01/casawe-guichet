import styledComponents from "styled-components"
import BarLoader from "react-spinners/BeatLoader"

const Loading = () => {
  return (
    <Wrapper>
        <BarLoader color={"#003C72"} loading={true} size={50}/>
    </Wrapper>
  )
}

export default Loading

const Wrapper = styledComponents.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
`