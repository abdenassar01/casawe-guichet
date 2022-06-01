import styled from "styled-components";

const Error404 = () => {
  return (
    <PageWrapper>
        <CenteredDiv>
          <Tab>
            <hr />
            <Heading>NOT FOUND</Heading>
          </Tab>
            <H2>This is somewhat embarrassing, isn’t it?</H2>
            <P>It looks like nothing was found at this location.</P>
        </CenteredDiv>
    </PageWrapper>
  )
}

export default Error404

const PageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 30px;
`

const CenteredDiv = styled.div`
    width: 85%;
`

const Tab = styled.div`
    color: #626467;
    font-size: 15px;
    font-family: Montserrat,Helvetica,Arial,sans-serif;
`

const Heading = styled.h1`
    text-transform: uppercase;
    border-top: 2px solid #0066b2;
    width: fit-content;
    margin-top: -2px;
    letter-spacing: 2px;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.5;
    color: #272630;
`

const H2 = styled.h2`
    font-family: Montserrat,Helvetica,Arial,sans-serif;
    color: #272630;
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 2.25em;
`

const P = styled.p`
  font-size: 15px;
  color: #626467;
  letter-spacing: .01rem;
  font-weight: 300;
  line-height: 1.5em;
  font-family: Roboto,sans-serif;
`