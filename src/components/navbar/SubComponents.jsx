import styled from 'styled-components'
import { RouteLink } from '../routes/RoutesLinks'

export const Logo = styled.div`
    
`

export const Img = styled.img`
    width: 100px;
    padding: 20px 0 10px 0;
`
 
export const NavbarWrapper = styled.nav`
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px dashed #ccc;
`

export const Nav = styled.nav`
    display: flex;
`

export const Text = styled.span`
    font-size: 12px;
    font-weight: bold;
`

export const NavLink = styled(RouteLink)`
    padding: 25px;

    &:hover{
        color: #0d6eb6;
        background-color: #EDEDED;
    }
`