import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';
import logo from '../../assets/logo.png';

function Layout({ children, headerContent }) {
    return (
        <div className="layout">
            <header className="layout-header">
                <Link to="/">
                    <img src={logo} alt="Logo" className="logo"/>
                </Link>
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

