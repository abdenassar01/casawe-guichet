import styled from "styled-components";

export const Wrapper = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
`

export const Container = styled.section`
    width: 85%;
    display: flex;
    justify-content: space-between;  
    gap: 10px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-width: 65%;
`

export const Poster = styled.img`
    width: 100%;
`

export const Date = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    font-size: 20px;
    color: #000;
    font-weight: 700;
    background-color: white;
`

export const Discription = styled.div`
    padding: 20px 5px;
    background-color: white;
    color: #626467;
    font-size: 15px;
`

export const TabPanel = styled.ul`
    list-style: none;
    padding: 10px;
    border-top: 1px solid #ededed;
    margin-top: 20px;
`

export const TabItem = styled.li`

`

export const A = styled.a`
    text-decoration: none;
    padding: 13px;
    border-top: 1px solid #0066b2;
    background-color: #f1f5f8;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    font-size: 12px;
    color: black;
`

export const Right = styled.div`
    min-width: 30%;
`
export const Purchase = styled.div`
    width: 100%;
    padding-top: 40px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const H1 = styled.h1`
    margin-top: 0;
    font-size: 23px;
    line-height: 1.25;
    text-align: center;
`

export const BuyPanel = styled.div`
    width: 90%;
`

export const CheckList = styled.div`
    width: 80%;
    padding-bottom: 20px;
`

export const RadioInput = styled.span`
    display: flex;
    justify-content: center;
    margin: 7px;
    height: 30px;
    position: relative;
`

export const Label = styled.label`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
    background-color: #f70;
    color: white;
    border-radius: 3px;
    pointer-events: none;
`


export const Input = styled.input`
    display: block;
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    opacity: 0;
    position: absolute;

    &:checked + ${Label}{
        background-color: #2DAAE1;
    }

    &:disabled + ${Label}{
        background-color: #FFD6B3;
    }
`


export const Span = styled.span`
    font-weight: ${props => props.bold ? "bold" : "normal"};
`
export const P = styled.p`
    font-weight: ${props => props.bold && "bold"};
    margin: 20px 0px;
`

export const Category = styled.div`
    display: flex;
    align-items: center;
`

export const Checkout = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CheckoutButton = styled.a`
    text-decoration: none;
    background-color: #037ccc;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-radius: 3px;
    font-weight: 300;
    color: #ffffff;
    width: 95%;
    text-align: center;
    padding: 10px 0;

    &:hover{
        background-color: #071D39;
    }

    &:disabled{
        background-color: #e4e7e9;
        color: #626467;
    }
`

export const EmptyDiv = styled.div`
    height: 50px;
`

export const InfosVendeur = styled.div`
    width: 100%;
    padding-top: 40px;
    margin-top:30px;
    background-color: #fff;
`

export const Title = styled.strong`
    width: 50%;
    outline: 0;
    border-top: 2px solid #0c9eca;
    display: inline-block;
    letter-spacing: 2px;
    font-weight: 700;
    font-size: 15px;
    text-transform: uppercase;
    padding: 5px 0;
`

export const Hr = styled.hr`   
    outline: 0;
    border-top: 1px solid #ededed;
`

export const ImageLogo = styled.img`
    padding: 20px 0;
`

export const WrapperBox = styled.div`
    margin: 0 20px;
    margin-top: 30px;
`

export const TextInfoWrapper = styled.div`
    font-size: 15px;
    padding: 20px;
`