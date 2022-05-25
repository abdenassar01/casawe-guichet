import styled from 'styled-components'
import { PrimaryColors } from '../../utils'
import { RouteLink } from '../routes/RoutesLinks'

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${PrimaryColors[200]};
    border-bottom: 5px solid black;
`

export const HeaderWrapper = styled.header`
    font-size: .8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
   
    @media (max-width: 768px) {
        justify-content: flex-end;
        padding: 10px 0;
    }
`

export const P = styled.p`
    color: ${PrimaryColors[100]};
    padding: 15px 0;

    @media (max-width: 768px) {
        display: none;
    }
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;
    position: relative;

    @media (max-width: 768px) {
        gap: 15px;
        flex-wrap: nowrap;
        font-size: .6rem;
    }
`

export const ConectionLink = styled(RouteLink)`
    border-bottom: 1px solid;

    &:hover{
        color: #141111;
    }
`

export const ProfileBox = styled.div`
    width: fit-content;
    position: relative;

`

export const DropDownContainer = styled.div`
    width: 100%;
`

export const DropDownHeader = styled.div`
    max-width: 250px;
    white-space: nowrap;
    color: white;
    font-weight: bold;
    text-decoration: none;
    margin-right: 10%;
`

export const DropDownListContainer = styled.div`
    
`

export const DropDownList = styled.ul`
    padding: 5px 0;
    margin: 0;
    position: absolute;
    width: 100%;
    z-index: 10000;
    top: 40px;
    background-color: white;
    border: 1px solid #ededed;
    list-style: none;

    animation: slide .5s forwards ease-in;

    @keyframes slide {
        from { 
            top: 20px; 
        }
        to { 
            top: 40px; 
        }
    }
`

export const DropDownItem = styled.div`

`

export const AccountLink = styled(RouteLink)`
    padding: 5px 10px;
    color: #7d8693;
    transition: all .5 ease-in;

    &:hover {
        background-color: #F5F5F5;
        color: black;
    }
`

export const ProfilePanel = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    &:hover{
        color: #141111;
        cursor: pointer;
    }
`

export const Avatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;

    @media (max-width: 768px) {
        width: 24px;
        height: 24px;
    }
`

export const User = styled.p`
    font-weight: 600;
    font-size: 13px;
    text-transform: uppercase;

    @media (max-width: 768px) {
        font-size: 10px;
    }
`