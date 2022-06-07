import styled from "styled-components";
import { RouteLink } from "../../routes/RoutesLinks";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
`

export const CentredBox = styled.div`
    width: 85%;
`

export const Slider = styled.ul`
    list-style: none;
    display: flex;
    overflow-x: scroll;
    scroll-behavior: smooth;
    -ms-overflow-style: none;  
    scrollbar-width: none;  
    width: 100%;

    &::-webkit-scrollbar{
        display: none;
    }
`

export const Tab = styled.div`
    margin-top: 30px;
    position: relative; 
    margin-bottom: 25px;
`

export const H2 = styled.h2`
    color: #272630;
    font-family: Montserrat,Helvetica,Arial,sans-serif;
    letter-spacing: 2px;
    font-weight: 700;
    width: fit-content;
    font-size: 18px;
    border-top: 1px solid #071d39;
    position: absolute;
    top: 0;
    left: 0;
`

export const CardsWrapper = styled.div`
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
   
    @media (max-width: 768px) {
        justify-content: center;
    }
`

export const CardContainer = styled.div`
    /* flex: 2 1 30%; */
    position: relative;
    border-radius: 3px;
    width: 30%;
    box-shadow: 0 2px 3px -1px rgb(151 171 187 / 70%);
    transition: all .3s;
    background-color: white;

    &:hover{
        box-shadow: 0 5px 10px -1px rgb(151 171 187 / 70%);
    }

    @media (max-width: 768px) {
        width: 90%;
    }
`

export const Poster = styled.img`
    width: 100%;
`

export const Title = styled.div`
    padding: 20px 15px 20px 15px;
    margin: 0;
    color: #272630;
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    text-shadow: 0 1px 0 #fff;
    overflow: hidden;
    border-left: 5px solid #272630;
`

export const Text = styled.h5`
    margin-top: 10px;
    margin-bottom: 10px;
    color: #071d39;
`

export const Price = styled.div`
    padding: 10px;
    padding-right: 20px;
    font-size: 19px;
    text-align: end;
`

export const MatchDiscription = styled.div`
    padding: 15px;
    color: #626467;
    letter-spacing: .01rem;
    font-weight: 300;
    font-size: 15px;
    font-family: Roboto,sans-serif;
    line-height: 1.5em;
    margin-bottom: 50px;
`

export const Checkout = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    object-fit: contain;
    width: 100%;
    border-top: 1px solid #ededed;
    position: absolute;
    bottom: 0;
`

export const ListItem = styled.div`
    padding: 0px 10px;
`

export const StyledRouteLink = styled(RouteLink)`
   background-color: ${props => props.disabled ? "#CBCBCC" : "#5A9CCD" };
   padding: 5px 10px; 
   font-size: 15px;
   margin-right: 10px;
   
   border-radius: 3px;

   &:hover{
    background-color: ${props => !props.disabled && "#054ccf" };
    color: #fff;
   }

   &:disabled{
       background-color: #CBCBCC;
       color: #626467;
       pointer-events: none;
       cursor: not-allowed;
   }
`