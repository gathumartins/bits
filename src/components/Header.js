import React, { useState } from 'react';
// import { Helmet } from 'react-helmet';
// import { Container } from 'react-bootstrap'
import * as headerStyles from './Header.module.css';

function Header() {
    const [myHeader, setMyHeader] = useState(false);
    const isBrowser = typeof window !== "undefined"
    if (isBrowser) {
        const changemyHeading = () => {
            if (window.scrollY >= 50) {
                setMyHeader(true)
            } else {
                setMyHeader(false)
            }
        }
        window.addEventListener('scroll', changemyHeading);
    }
    return (
        <section className={`navbar fixed-top ${headerStyles.myHeader}`}>
            <header className="flex">
                <div className={`${headerStyles.navBrand} bg-white absolute shadow-sm z-50`}>
                    <img src="~/imgs/logo.png" alt="Nairobits Top Logo" fluid="true" />
                </div>
                <nav className={`fixed-top z-20 shadow-md p-4 ${myHeader ? `${headerStyles.navi}, ${headerStyles.scroll}` : `${headerStyles.navi}`}`}></nav>
            </header>
        </section>
    )
}

export default Header;
