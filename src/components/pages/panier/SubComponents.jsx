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

    @media (max-width: 768px) {
        width: 95%;
    }
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
    color: #626467;
    width: 97%;
    background-color: white;
    padding: 60px 20px;
    font-weight: 300;
    font-size: 15px;
    letter-spacing: .01rem;
    line-height: 1.5em;
    border-radius: 3px;
`

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media ( max-width: 760px ) {
        width: 100%;
    }
`

export const StyledRouteLink = styled(RouteLink)`
    display: inline-block;

    &:hover{
        color: #0a0000;
    }
`

export const Items = styled.div`
    width: 100%;
`

export const ItemWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 20px; 
    padding: 20px 0;
    border-bottom: 1px solid grey;
    position: relative;
    width: 100%;
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
        width: 100px;
        height: 100px;
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

    @media ( max-width: 760px ) {
        font-size: .9rem;
    }
`

export const Title = styled.h3`
    color: black;
    font-weight: 700;
    font-size: 22px;

    @media ( max-width: 760px ) {
        font-size: 18px;
    }
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
    padding: 10px 20px;
    margin-top: 20px;
    width: 97%;
    background-color: white;
    border-radius: 3px;
`

export const Text = styled.p`
    padding: 10px 0;
    font-size: 16px;
    font-weight: 400;
    margin: 3px 0 0;
`

export const Form = styled.form`
    width: 100%;
`

export const Field = styled.div`
    margin: 10px 0;
    display: flex;
    gap: 10px;
`

export const Label = styled.label`
    position: relative;
`

export const Description = styled.div`
    background-color: #f5f5f5;
    padding: 12px 38px;
    border-radius: 5px;
    font-size: 13px;
    max-width: 72%;
    width: 500px;
    margin-bottom: 14px;
    margin-top: 7px;
    font-weight: 300;
    line-height: 19px;
    display: none;

    @media (max-width: 670px) {
        width: 250px;
    }
`

export const Radio = styled.input`
    width: 20px;
    height: 20px;
    cursor: pointer;

    &:checked + ${Label} {
        font-weight: ${props => !props.regular && "bold" };

        ${Description}{
            display: block;
        }
    }
`

export const Span = styled.span`
    cursor: pointer;
    font-size: 1rem;
    margin-bottom: 1rem;
`

export const Validator = styled.span`
    font-size: 13px;
    color: #dc3545;
`

export const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    padding: 0;

    @media (max-width: 760px) {
        width: 97%;
    }
`

export const Right = styled.div`
    min-width: 35%;
    width: 37%;
    margin-top: 50px;

    @media (max-width: 760px) {
        width: 100%;
    }
`

export const CodePromotionnelWrapper = styled.div`
    padding: 20px;
    border-radius: 3px;
    background-color: white;
    font-size: 21px;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: flex-start; 
`

export const InputField = styled.div`
    padding: 30px 0;

    @media (max-width: 760px) {
        display: flex;
        align-items: center ;
    }
` 

export const PromoBox = styled.input`
    padding: 10px;
    border: 2px solid #B8B8B8;
    border-radius: 5px 0 0 5px;
    font-size: 14px;
    font-weight: bold;

    &:focus{
        outline: none;
    }
`

export const OkButton = styled.button`
    background-color: #b8b8b8;
    border: 2px solid #b8b8b8;
    border-radius: 0 5px 5px 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    font-size: 14px;
    width: 100px;
    font-weight: 400;
    padding: 10px 0;
`

export const TotalWrapper = styled.div`
    padding: 20px;
    background-color: white;
`

export const RegularText = styled.p`
    padding: 20px 0;
`

export const Content = styled.div`
    padding-top: 50px;
`

export const Checkout = styled.button`
    padding: 10px 0;
    margin: 20px 0;
    color: #ffffff;
    background-color: #071D39;
    border: none;
    border-radius: 2px;
    font-size: 1rem;
    width: 100%;
`

export const EmptyCart = styled.div`
    margin-top: 50px;
    padding: 50px 20px;
    background-color: white;
    border-radius: 2px;
`

export const Fields = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const BeneficiareItem = styled.div`
    display: flex;
    flex-direction: column;
`

export const FlexFields = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`

export const FieldInput = styled.input`
    padding: 10px;
    outline: none;
    font-size: 14px;
    border: 1px solid ${props => props.error ? "#f8425b" : "#ededed" };

    &:focus{
        border: 1px solid ${props => props.error ? "#f8425b" : "#66afe9" };
        box-shadow: 1px 1px 5px ${props => props.error ? "#f8425b" : "#66afe9" };
    }
`

export const FieldLabel = styled.label`
  font-weight: 400;
`

export const BenificiareField = styled.div`
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    gap: 5%;
    width: ${props => props.width ? props.width : "45%"};

    @media (max-width: 768px){
        width: 95%;
    }
`

export const BenificaireTitle = styled.p`
    font-size: 18px;
    margin-top: 20px;
    color: black;
    font-weight: 700;
`