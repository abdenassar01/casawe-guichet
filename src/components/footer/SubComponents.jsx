import styled from "styled-components";

export const FooterWrapper = styled.footer`
    padding-top: 50px;
    width: 100%;
    overflow: hidden; 
`

export const Newsletter = styled.div`
    background-color: #071D39;
    padding: 50px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 150px;

    @media (max-width: 768px) {
        padding: 20px 0;
        gap: 15px;
    }
`

export const Text = styled.div`
    color: #FFFFFF;


    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`

export const Form = styled.form`
    
`

export const H3 = styled.h3`
    font-size: 1.75em;

    @media (max-width: 768px) {
        font-size: 1.5em;
    }
`

export const P = styled.p`
    margin-top: 5px;
    color: #626467;
    line-height: 1.5em;
    font-size: ${props => props.size ? props.size : "15px" };

    @media (max-width: 768px) {
        font-size: 12px;
        text-align: center;
    }
`

export const Mail = styled.div`
    height: 50px;
    background-color: white;
    border-radius: 2px;
`

export const Input = styled.input`
    height: 75%;
    padding: 5px;
    background-color: transparent;
    border: 1px solid transparent;
    outline: none;
    width: 250px;
    border-radius: 2px;
    
    &:focus{
        border: 1px solid #0166B2;
        box-shadow: 1px 1px 20px #0166B2;
    }
`
export const Submit = styled.input`
    height: 100%;
    background-color: transparent;
    border: none;
    font-weight: bold;
    color: white;
    background-color: #0166B2;
    outline: none;
    padding: 0px 10px;
    border-radius: 2px;
`

export const About = styled.div`
    padding-top: 70px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CasaweProfile = styled.section`
    width: 25%;

    @media (max-width: 768px) {
        width: 70%;
    }
`
export const Image = styled.img`
    width: 120%;
    padding-bottom: 20px;

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const Copyright = styled.div`
    margin-top: 50px;
    border-top: 1px dashed #ccc;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`

export const CopyrightText = styled.p`
    color: black;
    font-weight: 500;
    font-size: 12px;
`

export const Sponsors = styled.div`

`

export const SponsorsImage = styled.img`
   height: 45px;
`