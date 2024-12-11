import { Link } from "react-router-dom";

export const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Contacts">Contact</Link>
                </li>

            </ul>
        </nav>
    );
};