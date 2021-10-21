import React, { useState } from 'react';
// import { Helmet } from 'react-helmet';
// import { Container } from 'react-bootstrap'
import * as headerStyles from './Header.module.css';

function Header() {
    const [myHeader, setMyHeader] = useState(false);
    const isBrowser = typeof window !== "undefined"
    if (isBrowser) {
        const changemyHeading = () => {
            if (window.scrollY >= 80) {
                setMyHeader(true)
            } else {
                setMyHeader(false)
            }
        }
        window.addEventListener('scroll', changemyHeading);
    }
    return (
        <section className={`navbar  shadow-md fixed-top ${myHeader ? `${headerStyles.myHeader}, ${headerStyles.scroll}` : `${headerStyles.myHeader}`}`}>
            <header className="flex">
                <div className={`${headerStyles.navBrand} bg-white absolute`}>
                    <img src="./imgs/logo.png" alt="Nairobits Top Logo" fluid="true" />
                </div>
                <nav className={`flex-grow bg-transparent p-4 ${headerStyles.navi}`}></nav>
            </header>
        </section>
    )
}

export default Header;
