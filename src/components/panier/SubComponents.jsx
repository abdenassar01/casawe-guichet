import styled from "styled-components";
import { RouteLink } from "../routes/RoutesLinks"


export const PanierWrapper = styled.div`
    width: 100%;
    padding-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContentBox = styled.div`
    width: 80%;
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
    box-shadow: 0 2px 3px -1px rgb(151 171 187 / 70%);
    background-color: white;
    letter-spacing: .01rem;
    font-weight: 300;
    font-size: 15px;
    font-family: Roboto,sans-serif;
    line-height: 1.5em;
    display:inline-block;
    width: 100%;
`

export const StyledRouteLink = styled(RouteLink)`

    &:hover{
        color: #0a0000;
    }
`