import React, { useState } from 'react';
// import { Helmet } from 'react-helmet';
import { HiMenuAlt2 } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';
import { Container } from 'react-bootstrap';
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
                    <img src="./imgs/logo.png" alt="Nairobits Top Logo" fluid="true" />
                </div>
                <nav className={`fixed-top z-20 shadow-md px-4 ${myHeader ? `${headerStyles.navi}, ${headerStyles.scroll}` : `${headerStyles.navi}`}`}>

                    <Container fluid={`lg ${headerStyles.menuConatiner}`}>
                        <ul className={`${headerStyles.deskNavbar} d-none d-sm-none d-md-none d-lg-block flex-grow`}>
                            <li>
                                <a href="/" className="py-4">HOME</a>
                            </li>
                            <li className={`${headerStyles.deskDropdown}`}>
                                <button className={`${headerStyles.dropbtn} py-4`}>WHO WE ARE
                                </button>
                                <div className={`${headerStyles.dropdownContent} px-4`}>
                                    <Container fluid={`md`}>
                                        <ul className={headerStyles.megaOuterList}>
                                            <li className="w-screen">
                                                <ul className={`${headerStyles.menuHeads}`}>
                                                    <li className={headerStyles.megaLinks}><a href="/">HOME</a></li>
                                                    <li className={headerStyles.megaLinks}><a href="/">WHO WE ARE</a></li>
                                                    <li className={headerStyles.megaLinks}><a href="/">WHAT WE DO</a></li>
                                                    <li className={headerStyles.megaLinks}><a href="/">JOIN US</a></li>
                                                    <li className={headerStyles.megaLinks}><a href="/">OUR COMMUNITY</a></li>
                                                    <li className={headerStyles.megaLinks}><a href="/">QUICK LINKS</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </Container>
                                </div>
                            </li>
                            <li className={`${headerStyles.deskDropdown}`}>
                                <button className={`${headerStyles.dropbtn} py-4`}>WHAT WE DO
                                </button>
                                <div className={`${headerStyles.dropdownContent} px-4`}>
                                    <Container fluid={`md`}>
                                    </Container>
                                </div>
                            </li>
                            <li className={`${headerStyles.deskDropdown}`}>
                                <button className={`${headerStyles.dropbtn} py-4`}>JOIN US
                                </button>
                                <div className={`${headerStyles.dropdownContent} px-4`}>
                                    <Container fluid={`md`}>
                                    </Container>
                                </div>
                            </li>
                            <li className={`${headerStyles.deskDropdown}`}>
                                <button className={`${headerStyles.dropbtn} py-4`}>OUR COMMUNITY
                                </button>
                                <div className={`${headerStyles.dropdownContent} px-4`}>
                                    <Container fluid={`md`}>
                                    </Container>
                                </div>
                            </li>
                            <li className={`${headerStyles.deskDropdown}`}>
                                <button className={`${headerStyles.dropbtn} py-4`}><HiMenuAlt2 className="w-7 h-7" />
                                </button>
                                <div className={`${headerStyles.dropdownContent} px-4`}>
                                    <Container fluid={`md`}>
                                    </Container>
                                </div>
                            </li>
                        </ul>
                        <ul className={`${headerStyles.menuBtns} inline-flex items-center space-x-5`}>
                            <li className={`px-3 py-1 rounded text-center ${headerStyles.donBtn}`}><a href="/" >DONATE</a></li>
                            <li className={`px-3 py-1 rounded text-center ${headerStyles.appHBtn}`}><a href="/" >APPLY</a></li>
                            <li className={`px-3 py-1 rounded text-center ${headerStyles.srcBtn}`}><a href="/" ><span className="hidden">Search</span><FiSearch className="w-7 h-7" /></a></li>
                        </ul>
                    </Container>
                </nav>
            </header>
        </section>
    )
}

export default Header;
