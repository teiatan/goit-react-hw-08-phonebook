import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavTag = styled.nav`
    
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color:inherit;
    font-weight: 600;
    font-size: 20px;
    text-transform: uppercase;
    &.active {
        color: black;
    }
`;

export const Ul = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
`;