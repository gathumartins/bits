import React, { useState } from 'react';
// import { Helmet } from 'react-helmet';
import { HiMenuAlt2 } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';
import { Container, Col, Row, Offcanvas } from 'react-bootstrap';
import * as headerStyles from './Header.module.css';

function Header() {
    const [myHeader, setMyHeader] = useState(false);
    const [show, setShow] = useState(false);
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
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <section className={`navbar fixed-top ${headerStyles.myHeader}`}>
            <header className="flex">
                <div className={`${headerStyles.navBrand} bg-white absolute shadow-sm z-50`}>
                    <div className={headerStyles.logoInn}></div>
                </div>
                <nav className={`fixed-top z-20 shadow-md px-4 ${myHeader ? `${headerStyles.navi}, ${headerStyles.scroll}` : `${headerStyles.navi}`}`}>

                    <Container fluid={`lg ${headerStyles.menuConatiner}`}>
                        <ul className={`${headerStyles.deskNavbar} flex-grow`}>
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
                                                    <li className={headerStyles.megaLinks}><a href="/whoweare">WHO WE ARE</a></li>
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
                        <ul className={`${headerStyles.menuBtns} inline-flex justify-items-end items-center space-x-5 mobileMenu`}>
                            <li className={`px-3 py-1 rounded text-center ${headerStyles.donBtn}`}><a href="/donate" >DONATE</a></li>
                            <li className={`px-3 py-1 rounded text-center ${headerStyles.appHBtn}`}><a href="/apply" >APPLY</a></li>
                            <li className={`px-3 py-1 rounded text-center ${headerStyles.srcBtn} mobileSearch`}><a href="/" ><span className="hidden">Search</span><FiSearch className="w-7 h-7" /></a></li>
                            <li onClick={handleShow} className={`px-3 py-1 rounded text-center ${headerStyles.srcBtn} mobileHam`}><a href="/" ><span className="hidden">Search</span><HiMenuAlt2 className="w-7 h-7" /></a></li>
                        </ul>
                    </Container>
                </nav>
            </header>
            <Offcanvas show={show} onHide={handleClose} placement={`end`} name={`mobilemenu drawer`}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Home</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className={headerStyles.mobileNav}>
                    <Row>
                        <Col xs={6} className="mb-4">
                            <a href="/whoweare"><h3>Who we are</h3></a>
                            <ul>
                                <li><a href="/operatingmodel">Our operating model</a></li>
                                <li><a href="/history">Our History</a></li>
                                <li><a href="/team">Our Team</a></li>
                                <li><a href="/partners">Our Partners</a></li>
                            </ul>
                        </Col>

                        <Col xs={6} className="mb-4">
                            <h3>Our community</h3>
                            <ul>
                                <li><a href="/alumni">Alumni</a></li>
                                <li><a href="/students">Students</a></li>
                                <li><a href="/programs/sbiz">S-Bize</a></li>
                            </ul>
                        </Col>
                        <Col xs={12} className="mb-4">
                            <Row>
                                <Col xs={12}>
                                    <a href="/whatwedo"><h3>What we do</h3></a>
                                    <ul className={headerStyles.widefootMenu}>
                                        <li><a href="/programs/dlp">Digital Literacy Program</a></li>
                                        <li><a href="/programs/yact">YACT</a></li>
                                        <li><a href="/programs/amp">Advanced Multimedia Program</a></li>
                                        <li><a href="/programs/wearebits">#WeAreBits</a></li>
                                        <li><a href="/programs/vit">Video Impact Training</a></li>
                                        <li><a href="/programs/rhrn">RHRN</a></li>
                                        <li><a href="/programs/labourmarket">Labour Market Integration</a></li>
                                        <li><a href="/consultancy">Consulting Services</a></li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={6} className="mb-4">
                            <h3>Join us</h3>
                            <ul>
                                <li><a href="/partners">Partner</a></li>
                                <li><a href="/volunteer">Volunteer</a></li>
                                <li><a href="/careers">Careers</a></li>
                            </ul>
                        </Col>
                        <Col xs={6} className="mb-4">
                            <h3>Quick links</h3>
                            <ul>
                                <li><a href="/resources">Resources</a></li>
                                <li><a href="https://mailchi.mp/nairobits/the-nairobits-way-still-rising?e=[UNIQID]" target="_blank" rel="noreferrer">Newsletter</a></li>
                                <li><a href="/news">Events/ News</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Offcanvas.Body>
            </Offcanvas>
        </section >

    )
}

export default Header;
