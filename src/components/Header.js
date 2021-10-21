import React from 'react';
// import { Helmet } from 'react-helmet';
// import { Container } from 'react-bootstrap'
import * as headerStyles from './Header.module.css';

function Header() {
    return (
        <section className="sticky-top">
            <header className="flex shadow-md">
                <div className={`${headerStyles.navBrand} bg-white absolute`}>
                    <img src="./imgs/logo.png" alt="Nairobits Top Logo" fluid="true" />
                </div>
                <nav className={`flex-grow bg-transparent p-4`}></nav>
            </header>
        </section>
    )
}

export default Header;
