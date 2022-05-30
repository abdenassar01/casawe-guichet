import styled from "styled-components";
import { RouteLink } from '../../routes/RoutesLinks'


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
    width: 85%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 768px){
        width: 95%;
        gap: 20px;
    }
`

export const FormLoginWrapper = styled.div`
    padding: 30px;
    width:40%;
    border-radius: 2px;
    height: fit-content;
    background-color: white;
   
    @media (max-width: 768px){
        width: 90%;
    }
`

export const FormSignupWrapper = styled.div`
    padding: 30px;
    width: 45%;
    border-radius: 2px;
    background-color: white;

    @media (max-width: 768px){
        width: 90%;
    }
`

export const Form = styled.form`
    padding-top: 20px;
    width: 100%;
`

export const Heading = styled.h1`
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

export const Tab = styled.div`
    color: #626467;
    font-size: 15px;
`

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 47%;
    gap: 7px;

    @media (max-width: 768px){
        width: 95%;
    }
`

export const Label = styled.label`
    font-weight: 400;
`

export const Input = styled.input`
    padding: 10px;
    outline: none;
    font-size: 14px;
    padding-right: 20px;
    border: 1px solid ${props => props.error ? "#f8425b" : "#ededed" };

    &:focus{
        border: 1px solid ${props => props.error ? "#f8425b" : "#66afe9" };
        box-shadow: 1px 1px 5px ${props => props.error ? "#f8425b" : "#66afe9" };
    }
`

export const ErrMsg = styled.span`
    color: #dd2947;
    width: 220px;
    font-size: 12px;
    margin-bottom: 10px;
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

export const P = styled.p`
    padding: 20px 0;
    font-size: 12PX;
    color: #626467;
    letter-spacing: .01rem;
    font-weight: 300;
    font-size: 15px;
    line-height: 1.5em;
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

export const Raw = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
`

export const StyledRouteLink = styled(RouteLink)`
    transition: all .15s ease-in-out;
    
    &:hover{
        color: #0066b2;
    }
`

export const ErreurBoxMsg = styled.div`
    padding: 10px;
    margin-bottom: 20px;
    width: 80%;
    background-color: ${ props => props.state === "succes" ? "#00a537" : "#F4556D"  };
    color: #ffffff;
    display: ${props => props.disabled ? 'none' : 'flex'} ;
    justify-content: space-between;
`