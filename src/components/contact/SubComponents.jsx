import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
`


export const CentredBox = styled.div`
    width: 85%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border-radius: 2px;

    @media (max-width: 820px){
        width: 95%;
        gap: 20px;
    }
`

export const FormWrapper = styled.div`
    width: 60%;
    background-color: white;
    padding: 30px ; 

    @media (max-width: 820px){
        width: 90%;
    }
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
    gap: 5%;
    width: ${props => props.width ? props.width : "45%"};

    @media (max-width: 768px){
        width: 95%;
    }
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

export const Textarea = styled.textarea`
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

export const Submit = styled.input`
    padding: 10px 20px;
    border: none;
    border-radius: 2px;
    background-color: #0066b2;
    color: white;
    text-transform: uppercase;

    &:hover{
        background-color: #071d39;
    }
`

export const P = styled.p`
    color: ${props => props.color ? props.color : 'black'};
    font-weight: ${props => props.bold };
    font-size: ${props => props.size};
    line-height: 1.5;
    letter-spacing: .01rem;
    margin: 15px 0;
`

export const Raw = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`

export const ContactInfoBox = styled.div`
    width: 28%;
    background-color: white;
    padding: 30px ; 
    height: fit-content;

    @media (max-width: 820px){
        width: 90%;
    }
`