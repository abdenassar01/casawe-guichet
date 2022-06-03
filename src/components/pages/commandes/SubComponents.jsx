import styled from "styled-components";

import { RouteLink } from "../../routes/RoutesLinks";

export const PageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
`

export const CommandesWrapper = styled.div`
    width: 80%;
    background-color: #fff;
    padding: 30px;
`

export const Tab = styled.div`
    color: #626467;
    font-size: 15px;
`

export const Heading = styled.h1`
    text-transform: uppercase;
    border-top: 2px solid #0066b2;
    width: fit-content;
    margin-top: -2px;
    font-family: Montserrat,Helvetica,Arial,sans-serif;
    letter-spacing: 2px;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.5;
    color: #272630;
`

export const Section = styled.section`
    padding-top: 20px;
`

export const Paragraph = styled.p`
    color: #626467;
    letter-spacing: .01rem;
    font-weight: 300;
    font-size: 15px;
    line-height: 1.5em;
`

export const CardWrapper  = styled.div`
    
`

export const TableWrapper = styled.div`
    padding-top: 50px;
    width: 100%;
`

export const Table = styled.table`
    border-spacing: 0px;
    width: 100%;
    border: ${ props => props.border && props.border };
    border-collapse: collapse;

`

export const Raw = styled.tr`

`

export const Column = styled.td`
    padding : 10px 20px;
    border: ${ props => props.border && props.border };
    border-collapse: collapse;
`

export const Header = styled.tr`
    background-color: #F6F6F6;
    font-weight: bold;
`

export const SeeDetails = styled(RouteLink)`
    padding: 10px 20px;
    background-color: #0166B2;
    text-align: center;
    font-size:  12px;
    white-space: nowrap;
    font-weight: bold;
    color: white;
    border-radius: 3px;
    text-decoration: none;
    transition: all .3s ease;

    &:hover{
        background-color: #003C72;
    }
`

export const DetailPage = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
`   

export const ContentWrapper = styled.div`
    width: 86%;
    padding: 2%;
    background-color: white;
`

export const UnorderdList = styled.ul`
    list-style: none;
    font-size: 14px;
    margin-top: 18px;
`

export const ListItem = styled.li`
    margin: 5px 0;
`