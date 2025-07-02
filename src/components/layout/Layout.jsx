import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Layout.css';
import logo from '../../assets/logo.png';

function Layout({ children, headerContent }) {
    const [isLoggedIn] = useState(true);

    return (
        <div className="layout">
            <header className="layout-header">
                <Link to="/">
                    <img src={logo} alt="Logo" className="logo"/>
                </Link>

                {/* Alleen navigatie tonen als je bent ingelogd */}
                {isLoggedIn ? (
                    <nav className="navigation">
                        <ul>
                            <li>
                                <NavLink
                                    to="/app/DinerMatch"
                                    className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                >
                                    DinerMatch
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/app/Search"
                                    className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                >
                                    Zoeken
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/app/MyRecipes"
                                    className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                >
                                    Mijn Recepten
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/app/MyRecipes"
                                    className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                                >
                                    {/*Hier komt een uitloggen actie achter zoals bij Banana Security*/}

                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                ) : <nav>
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            >
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Login"
                                className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            >
                                Inloggen
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Register"
                                className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                            >
                                Registren
                            </NavLink>
                        </li>
                    </ul>
                </nav>}

                {headerContent}

            </header>

            <main className="layout-main">
                {children}
            </main>

            <footer className="layout-footer">
                <div className="footer-left"><a>2025©DJGROOTENDORST</a></div>
                <div className="footer-center"><Link to="/terms">Terms of use</Link></div>
                <div className="footer-right"><Link to="/privacy">Privacy policy</Link></div>
            </footer>
        </div>
    );
}

export default Layout;