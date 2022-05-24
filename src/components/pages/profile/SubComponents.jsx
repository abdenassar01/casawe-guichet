import styled from "styled-components";

export const ProfileWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 30px;
`

export const ProfileContentWrapper = styled.div`
    width: 50%;
    background-color: white;
    padding: 30px;

    @media (max-width: 768px) {
        width: 80%;
    }
`

export const Tab = styled.div`
    color: #626467;
    font-size: 15px;
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
    font-family: Montserrat,Helvetica,Arial,sans-serif;
    color: #272630;
`

export const Form = styled.form`
    margin-top: 20px;
    width: 100%;
`

export const Table = styled.table`
    width: 100%;
`

export const Raw = styled.tr`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const Column = styled.td`
    width: 47%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;


    @media (max-width: 768px) {
        width: 100%;
    }
`

export const SelectColumn = styled.td`
    width: 47%;
    display: flex;
    margin-top: -20px;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 768px) {
        width: 100%;
        margin: 0 0 20px 0;
    }
`



export const Label = styled.label`
    font-weight: 400;
    font-size: 15px;
`

export const Span = styled.span`
    color: ${props => props.color ? props.color : 'black'};
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

export const Submit = styled.input`
    background-color: #2aafd2;
    padding: 10px 14px;
    border: none;
    border-radius: 2px;
    font-family: Roboto,'Helvetica Neue, Helvetica, Arial',sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.1;
    text-transform: uppercase;
    letter-spacing: inherit;
    color: rgba(255,255,255,.87);

    &:hover{
        background-color: #4e6cef;
        border-color: #204d74;
    }
`
