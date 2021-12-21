import React, { useState } from 'react';
// import { Helmet } from 'react-helmet';
import { Link } from 'gatsby'
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
                <div className={`${headerStyles.navBrand} absolute shadow-sm z-50`}>
                    <div className={headerStyles.logoInn}></div>
                </div>
                <nav className={`fixed-top z-20 shadow-md px-4 ${myHeader ? `${headerStyles.navi}, ${headerStyles.scroll}` : `${headerStyles.navi}`}`}>

                    <Container fluid={`lg ${headerStyles.menuConatiner}`}>
                        <ul className={`d-flex ${headerStyles.deskNavbar} flex-grow justify-content-between`}>
                            <li>
                                <a href="/" className="py-4">HOME</a>
                            </li>
                            <li className={`${headerStyles.deskDropdown}`}>
                                <button className={`${headerStyles.dropbtn} py-4`}>WHO WE ARE
                                </button>
                                <div className={`${headerStyles.dropdownContent} px-4`}>
                                    <Container fluid={`md`} className={`${headerStyles.dropdownContentInn} ${headerStyles.dropdownContOne}`}>
                                        <div className="grid grid-cols-1">
                                            <a href="/whoweare">WHO WE ARE</a>
                                            <a href="/operatingmodel">Our operating model</a>
                                            <a href="/history">Our History</a>
                                            <a href="/team">Our Team</a>
                                            <a href="/partners">Our Partners</a>
                                        </div>
                                    </Container>
                                </div>
                            </li>
                            <li className={`${headerStyles.deskDropdown}`}>
                                <button className={`${headerStyles.dropbtn} py-4`}>WHAT WE DO
                                </button>
                                <div className={`${headerStyles.dropdownContent} px-4`}>
                                    <Container fluid={`md`} className={`${headerStyles.dropdownContentInn} ${headerStyles.dropdownContTwo}`}>
                                        <div>
                                            <Link to="/whatwedo"><h3>What we do</h3></Link>
                                            <Link to="/programs/dlp">Digital Literacy Program</Link>
                                            <Link to="/programs/yact">YACT</Link>
                                            <Link to="/programs/amp">Advanced Multimedia Program</Link>
                                            <Link to="/programs/wearebits">#WeAreBits</Link>
                                            <Link to="/programs/vit">Video Impact Training</Link>
                                            <Link to="/programs/rhrn">RHRN</Link>
                                            <Link to="/programs/labourmarket">Labour Market Integration</Link>
                                            <Link to="/consultancy">Consulting Services</Link>
                                        </div>
                                    </Container>
                                </div>
                            </li>
                            <li className={`${headerStyles.deskDropdown}`}>
                                <button className={`${headerStyles.dropbtn} py-4`}>JOIN US
                                </button>
                                <div className={`${headerStyles.dropdownContent} px-4`}>
                                    <Container fluid={`md`} className={`${headerStyles.dropdownContentInn} ${headerStyles.dropdownContThree}`}>
                                        <div className="grid grid-cols-1">
                                            <Link to="/partners">Partner</Link>
                                            <Link to="/volunteer">Volunteer</Link>
                                            <Link to="/careers">Careers</Link>
                                        </div>
                                    </Container>
                                </div>
                            </li>
                            <li className={`${headerStyles.deskDropdown}`}>
                                <button className={`${headerStyles.dropbtn} py-4`}>OUR COMMUNITY
                                </button>
                                <div className={`${headerStyles.dropdownContent} px-4`}>
                                    <Container fluid={`md`} className={`${headerStyles.dropdownContentInn} ${headerStyles.dropdownContFour}`}>
                                        <div>
                                            <Link to="/alumni">Alumni</Link>
                                            <Link to="/students">Students</Link>
                                            <Link to="/programs/sbiz">S-Bize</Link>
                                            <Link to="/impact">Our Impact</Link>
                                        </div>
                                    </Container>
                                </div>
                            </li>
                            <li className={`${headerStyles.deskDropdown}`}>
                                <button className={`${headerStyles.dropbtn} py-4`}><HiMenuAlt2 className="w-7 h-7" />
                                </button>
                                <div className={`${headerStyles.dropdownContent} px-4`}>
                                    <Container fluid={`md`} className={`${headerStyles.dropdownContentInn} ${headerStyles.dropdownContFive}`}>
                                        <div>
                                            <Link to="/resources">Resources</Link>
                                            <a href="https://mailchi.mp/nairobits/the-nairobits-way-still-rising?e=[UNIQID]" target="_blank" rel="noreferrer">Newsletter</a>
                                            <Link to="/news">Events/ News</Link>
                                        </div>
                                    </Container>
                                </div>
                            </li>
                        </ul>
                        <ul className={`${headerStyles.menuBtns} inline-flex justify-items-end items-center space-x-5 mobileMenu`}>
                            <li className={`px-3 py-1 rounded text-center ${headerStyles.donBtn}`}><Link to="/donate" >DONATE</Link></li>
                            <li className={`px-3 py-1 rounded text-center ${headerStyles.appHBtn}`}><Link to="/apply" >APPLY</Link></li>
                            <li className={`px-3 py-1 rounded text-center ${headerStyles.srcBtn} mobileSearch`}><button><span className="hidden">Search</span><FiSearch className="w-7 h-7" /></button></li>
                            <li className={`px-3 py-1 rounded text-center ${headerStyles.srcBtn} mobileHam`}><button onClick={handleShow}><span className="hidden">Search</span><HiMenuAlt2 className="w-7 h-7" /></button></li>
                        </ul>
                    </Container>
                </nav>
            </header>
            <Offcanvas show={show} onHide={handleClose} placement={`end`} name={`mobilemenu drawer`}>
                <Offcanvas.Header closeButton>
                    <Link to="/"><Offcanvas.Title><h3>Home</h3></Offcanvas.Title></Link>
                </Offcanvas.Header>
                <Offcanvas.Body className={headerStyles.mobileNav}>
                    <Row>
                        <Col xs={6} className="mb-4">
                            <Link to="/whoweare"><h3>Who we are</h3></Link>
                            <ul>
                                <li><Link to="/operatingmodel">Our operating model</Link></li>
                                <li><Link to="/history">Our History</Link></li>
                                <li><Link to="/team">Our Team</Link></li>
                                <li><Link to="/partners">Our Partners</Link></li>
                            </ul>
                        </Col>

                        <Col xs={6} className="mb-4">
                            <h3>Our community</h3>
                            <ul>
                                <li><Link to="/alumni">Alumni</Link></li>
                                <li><Link to="/students">Students</Link></li>
                                <li><Link to="/programs/sbiz">S-Bize</Link></li>
                                <li><Link to="/impact">Our Impact</Link></li>
                            </ul>
                        </Col>
                        <Col xs={12} className="mb-4">
                            <Row>
                                <Col xs={12}>
                                    <Link to="/whatwedo"><h3>What we do</h3></Link>
                                    <ul className={headerStyles.widefootMenu}>
                                        <li><Link to="/programs/dlp">Digital Literacy Program</Link></li>
                                        <li><Link to="/programs/yact">YACT</Link></li>
                                        <li><Link to="/programs/amp">Advanced Multimedia Program</Link></li>
                                        <li><Link to="/programs/wearebits">#WeAreBits</Link></li>
                                        <li><Link to="/programs/vit">Video Impact Training</Link></li>
                                        <li><Link to="/programs/rhrn">RHRN</Link></li>
                                        <li><Link to="/programs/labourmarket">Labour Market Integration</Link></li>
                                        <li><Link to="/consultancy">Consulting Services</Link></li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={6} className="mb-4">
                            <h3>Join us</h3>
                            <ul>
                                <li><Link to="/partners">Partner</Link></li>
                                <li><Link to="/volunteer">Volunteer</Link></li>
                                <li><Link to="/careers">Careers</Link></li>
                            </ul>
                        </Col>
                        <Col xs={6} className="mb-4">
                            <h3>Quick links</h3>
                            <ul>
                                <li><Link to="/resources">Resources</Link></li>
                                <li><a href="https://mailchi.mp/nairobits/the-nairobits-way-still-rising?e=[UNIQID]" target="_blank" rel="noreferrer">Newsletter</a></li>
                                <li><Link to="/news">Events/ News</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Offcanvas.Body>
            </Offcanvas>
        </section>

    )
}

export default Header;
