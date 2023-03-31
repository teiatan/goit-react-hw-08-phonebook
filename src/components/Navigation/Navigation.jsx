import { Link } from "react-router-dom"

export function Navigation() {
    return(
        <nav>
            <ul>
                <li><Link to="/contacts">contacts</Link></li>
                <li><Link to="/login">login</Link></li>
                <li><Link to="/register">register</Link></li>
            </ul>
        </nav>
    )
};