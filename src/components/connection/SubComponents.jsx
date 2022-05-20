import styled from "styled-components";
import { RouteLink } from '../routes/RoutesLinks'


export const Wrapper = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;   
    align-items: center;
    padding: 20px 0px 40px 0px;
    flex-direction: column;
    gap: 20px;
`

export const CentredBox = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 768px){
        width: 95%;
    }
`

export const FormLoginWrapper = styled.div`
    padding: 30px;
    width:40%;
    border-radius: 2px;
    background-color: white;

`

export const Form = styled.form`
    padding-top: 20px;
`

export const Heading = styled.h1`
    text-transform: uppercase;
    border-top: 2px solid #0066b2;
    width: fit-content;
    margin-top: -2px;
    letter-spacing: 2px;
    font-weight: 700;
    font-size: 15px;
    line-height: 1.5;
    color: #272630;
`

export const Tab = styled.div`
    color: #626467;
    font-size: 15px;
`

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
`

export const Label = styled.label`
    font-weight: 400;
`

export const Input = styled.input`
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ededed;
    outline: none;
    font-size: 14px;

    &:focus{
        border: 1px solid #66afe9;
        box-shadow: 1px 1px 5px #66afe9;
    }
`

export const Span = styled.span`
    color: ${props => props.color ? props.color : 'black'};
`

export const CheckBoxWrapper = styled.div`
    
` 

export const CheckBox = styled.input`
    
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