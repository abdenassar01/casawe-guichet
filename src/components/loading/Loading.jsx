import styledComponents from "styled-components"
import BeatLoader from "react-spinners/BeatLoader"

const Loading = () => {
  return (
    <Wrapper>
        <BeatLoader color={"#003C72"} loading={true} size={50}/>
    </Wrapper>
  )
}

export default Loading

const Wrapper = styledComponents.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 0;
`