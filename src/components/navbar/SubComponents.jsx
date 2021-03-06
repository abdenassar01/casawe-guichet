import styled from 'styled-components'
import { RouteLink } from '../routes/RoutesLinks'


export const Logo = styled.div`
    
`

export const Img = styled.img`
    width: 100px;
    padding: 20px 0 10px 0;

    @media (max-width: 768px) {
        width: 80px;
        padding: 10px 0 5px 0;
    }
`
 
export const NavbarWrapper = styled.nav`
    background-color: white;
    border-bottom: 1px dashed #ccc;
    padding: 0 7.5%;
    position: sticky;
    top: 0;
    z-index: 1000;
    
    @media (max-width: 768px) {
        justify-content: space-between;
        padding: 0 10px;
    }
`

export const NormalNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Nav = styled.nav`
    display: flex;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const Text = styled.span`
    font-size: 12px;
    font-weight: bold;
`

export const NavLink = styled(RouteLink)`
    padding: ${props => props.padding ? props.padding : "0" }; 
    color: black;
    
    &:hover{
        color: #0d6eb6;
        background-color: #EDEDED;
    }
`

export const BurgerIcon = styled.div`
    display: none;
    font-size: 25px;
    height: fit-content;
    cursor: pointer;
    color: #3C4759;
    padding: 2px 10px;
    border-radius: 3px;
    border: .15px solid #ededed;

    &:hover{
        color: #fff7f7; 
        background-color: #3c4759 !important;
    }

    @media (max-width: 768px) {
        display: grid;
        place-items: center;
    }
`

export const ExtendedMenu = styled.nav`
    display: ${(props) => props.isDisplayed ? "block" : "none" };
    padding: 10px 0;
    @media (min-width: 768px) {
        display: none;
    }
`

export const Hr = styled.hr`
    display: ${(props) => props.isDisplayed ? "block" : "none" };
    color: #3c4759;
    margin: 5px;

    @media (min-width: 768px) {
        display: none;
    }
`
