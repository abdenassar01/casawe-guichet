import styled from 'styled-components'
import { PrimaryColors } from '../../utils'
import { RouteLink } from '../routes/RoutesLinks'

export const HeaderWrapper = styled.header`
    background-color: ${PrimaryColors[200]};
    font-size: .8rem;
    display: flex;
    justify-content: space-around;
    padding: 10px 0px 15px 0;
    border-bottom: 5px solid black;
`

export const P = styled.p`
    color: ${PrimaryColors[100]};

    @media (max-width: 768px) {
        display: none;
    }
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    gap: 30px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        gap: 10px;
    }

`

export const ConectionLink = styled(RouteLink)`

    &:hover{
        color: #141111;
    }
`
