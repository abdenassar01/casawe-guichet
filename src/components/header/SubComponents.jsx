import styled from 'styled-components'
import { PrimaryColors } from '../../utils'

export const HeaderWrapper = styled.header`
    background-color: ${PrimaryColors[200]};
    font-size: .8rem;
    display: flex;
    justify-content: space-around;
    padding: 10px 0px 15px 0;
    border-bottom: 5px solid black;
`

export const P = styled.p`
    color: ${PrimaryColors[100]}
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    gap: 30px;
`