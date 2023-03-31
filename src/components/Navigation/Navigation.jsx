import { NavTag, StyledNavLink, Ul } from "./Navigation.styled"

export function Navigation() {
    return(
        <NavTag>
            <Ul>
                <li><StyledNavLink to="/contacts">contacts</StyledNavLink></li>
                <li><StyledNavLink to="/login">login</StyledNavLink></li>
                <li><StyledNavLink to="/register">register</StyledNavLink></li>
            </Ul>
        </NavTag>
    )
};