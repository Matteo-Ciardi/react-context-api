import { Outlet, Link } from "react-router-dom";
import MainNavBar from "../components/navbar/MainNavBar";

import './DefaultLayout.css'

export default function DefaultLayout() {
    return (
        <>
            <header>
                <div className="header-container">
                    <figure>
                        <Link to="/"><img src='src/assets/img/logo.png' alt='logo' className="logo-image" /></Link>
                        <figcaption>
                            <Link to="/"><h1>FAKESTORE.</h1></Link>
                        </figcaption>
                    </figure>
                    <MainNavBar />
                </div>
            </header>
            
            <main>
                <div className="main-container">
                    <Outlet />
                </div>
            </main>

            <footer>
                <div className="footer-container">
                    
                </div>
            </footer>
        </>
    )
}