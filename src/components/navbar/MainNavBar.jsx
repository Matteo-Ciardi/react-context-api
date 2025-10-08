import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { BudgetContext } from "../../context/BudgetContext";

import './MainNavBar.css'

const links = [
    { path: "/", label: "HOME" },
    { path: "/chi-siamo", label: "CHI SIAMO" },
    { path: "/prodotti", label: "PRODOTTI" },
    { path: "/carrello", label: <i className="fa-solid fa-bag-shopping my-bag"></i> }
]

const MainNavBar = () => {
    const { budgetMode, setBudgetMode } = useContext(BudgetContext);

    return (
        <nav>
            <button onClick={() => setBudgetMode(!budgetMode)}>
                {budgetMode ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}
            </button>
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