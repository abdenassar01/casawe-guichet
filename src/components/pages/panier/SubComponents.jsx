import styled from "styled-components";
import { RouteLink } from "../../routes/RoutesLinks"


export const PanierWrapper = styled.div`
    width: 100%;
    padding-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContentBox = styled.div`
    width: 85%;
`

export const Tab = styled.div`
    position: relative;
`
export const Heading = styled.h1`
    border-top: 1px solid blue;
    width: fit-content;
    margin-top: 1px;
    margin-bottom: 25px;
    display: inline-block;
    letter-spacing: 2px;
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
    padding: 5px 0;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
`

export const PanieBox = styled.div`
    margin-top: 50px;
    padding: 60px 30px;
    color: #626467;
    background-color: white;
    font-weight: 300;
    font-size: 15px;
    letter-spacing: .01rem;
    line-height: 1.5em;
    width: 100%;

    @media ( max-width: 760px ) {
        width: 90%;
    }
`

export const StyledRouteLink = styled(RouteLink)`
    display: inline-block;

    &:hover{
        color: #0a0000;
    }
`

export const Items = styled.div`

`

export const ItemWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 20px; 
    padding-bottom: 20px;
    border-bottom: 1px solid grey;
    position: relative;
`


export const Icon = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
`

export const ItemImage = styled.div`
    background-image: url(${props => props.img });
    background-size: cover;
    background-position: 50%;
    border-radius: 3px;
    background-repeat: no-repeat;
    height: 120px;
    width: 120px;

    @media ( max-width: 760px ) {
        width: 200px;
        height: 120px;
    }
`

export const ItemContent = styled.div`
    width: 100%;
`

export const OffreName = styled.div`
    padding-top: 10px;
    color: grey;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
    line-height: 1.2;
`

export const Title = styled.h3`
    font-size: 23px;
    color: black;
    font-weight: 500;
    font-size: 28px;
`

export const Pricing = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
` 

export const Quantity = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-weight: 500;
    color: black;
` 

export const Input = styled.input`
    width: 40px;
    padding: 10px;
    border: 2px solid #003C72;
    border-radius: 5px;

    &:focus{
        outline: none;
        border: 2px solid #003C72;
    }
`

export const PricesWrapper = styled.div`
    color: black;
` 

export const Price = styled.p`

`

export const BoldTotal = styled.span`
    font-weight: bold;
`

export const PayementWrapper = styled.div`
    padding: 20px;
    margin-top: 20px;
    background-color: white;
`

export const Text = styled.p`
    padding: 10px 0;
    font-size: 16px;
    font-weight: 400;
    margin: 3px 0 0;
`

export const CheckBox = styled.span`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    height: 20px;
    width: 20px;
    border: 1px solid #57a8dc;
    border-radius: 3px;

    &::after{
        content: "";
        position: absolute;
        width: 56%;
        height: 56%;
        background: #57a8dc;
        border-radius: 2px;
        left: 4px;
        top: 4px;
        transform: scale(0);
        opacity: 0;
        transition: all .1s ease-in-out;
    }
`

export const Form = styled.form`

`

export const Field = styled.div`
    margin: 10px 0;
    display: flex;
    gap: 10px;
`

export const Label = styled.label`
    position: relative;
`

export const Radio = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
`

export const Span = styled.span`
    margin-left: 30px;
    cursor: pointer;
    font-size: 14px;
    margin-bottom: 1rem;
    font-weight: 500;
`