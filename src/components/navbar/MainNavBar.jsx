import { NavLink } from "react-router-dom";

import './MainNavBar.css'

const links = [
    { path: "/", label: "HOME" },
    { path: "/chi-siamo", label: "CHI SIAMO" },
    { path: "/prodotti", label: "PRODOTTI" },
    { path: "/carrello", label: <i className="fa-solid fa-bag-shopping my-bag"></i> }
]

const MainNavBar = () => {
    return (
        <nav>
            <ul>
                {links.map(link => (
                    <li key={link.path}>
                        <NavLink to={link.path}>{link.label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default MainNavBar