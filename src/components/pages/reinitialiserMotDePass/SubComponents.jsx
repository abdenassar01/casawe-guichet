import styled from "styled-components";

import { RouteLink } from "../../routes/RoutesLinks"

export const PageWrapper = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 30px;
`

export const ContentPanel = styled.div`
    width: 40%;
    background-color: white;
    padding: 20px;
`

export const Tab = styled.div`
    color: #626467;
    font-size: 15px;
`

export const Heading = styled.div`
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

export const Form = styled.form`
    margin-top: 30px;
`

export const P = styled.p`
    margin-top: 20px;
    font-size: 15px;
    color: #626467;
    letter-spacing: .01rem;
    font-weight: 300;
`

export const Label = styled.label`
    
`

export const Input = styled.input`
    /* width: 50%; */
    padding: 10px;
    outline: none;
    border: 1px solid ${props => props.error ? "#f8425b" : "#ededed" };

    &:focus{
        border: 1px solid ${props => props.error ? "#f8425b" : "#66afe9" };
        box-shadow: 1px 1px 5px ${props => props.error ? "#f8425b" : "#66afe9" };
    }
`

export const Field = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 10px;
`

export const Span = styled.span`
    color: #f80029;
`

export const SubmitBox = styled.div`
    display: flex;
    align-items: center;
    text-transform: uppercase;
    margin-top: 20px;
    gap: 20px;
`

export const Submit = styled.input`
    padding: 10px 20px;
    border: none;
    border-radius: 2px;
    background-color: #0066b2;
    color: white;

    &:hover{
        background-color: #071d39;
    }
`

export const StyledRouteLink = styled(RouteLink)`
    transition: all .15s ease-in-out;
    
    &:hover{
        color: #0066b2;
    }
`

export const ErrorMessage = styled.span`
    color: #e6004d;
    font-size: 10px;
`