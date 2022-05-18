import { Link } from "react-router-dom";
import styled from 'styled-components';
import { PrimaryColors } from '../../utils';

export const RouteLink = styled(Link)`
    display: flex;
    color: ${ props => props.color ? props.color : PrimaryColors[100] };
    text-decoration: none;
`