import React from 'react';
import Helmet from 'react-helmet';
import { FaLinkedin, FaFacebookSquare, FaTwitter, FaInstagramSquare } from 'react-icons/fa';
import * as footStyles from './Footer.module.css';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';

function Footer() {
    let year = new Date();
    return (
        <footer className={footStyles.footer}>
            <Helmet>
            </Helmet>
            <div className={footStyles.footStrip}></div>
            <div className={footStyles.footerTop}>
                <Container fluid={`md`}>
                    <Row>
                        <Col xs={12} sm={12} md={6}>
                            <h2>Newsletter</h2>
                            <p>Subscribe to our newsletter & stay updated</p>
                            <InputGroup className={`my-5 rounded-full ${footStyles.subscribe}`}>
                                <FormControl
                                    placeholder="your@email.com"
                                    aria-label="your@email.com"
                                    aria-describedby="newssubscribe"
                                    className="bg-transparent border-transparent focus:shadow-none focus:border-transparent px-3 py-2" />
                                <InputGroup.Text id="newssubscribe" className={`rounded-full border-transparent px-5 text-white shadow-sm cursor-pointer ${footStyles.subBtn}`}>Subscribe</InputGroup.Text>
                            </InputGroup>
                        </Col>
                        <Col xs={12} sm={12} md={6}>
                            <h2>Follow us</h2>
                            <p>Always stay in the know</p>
                            <ul className={`${footStyles.socialLinks} flex justify-between`}>
                                <li className="cursor-pointer"><a href="https://www.linkedin.com/company/nairobits" target="_blank" rel="noreferrer"><span className="hidden">Linkedin</span><FaLinkedin className="h-8 w-8" /></a></li>
                                <li className="cursor-pointer"><a href="https://www.facebook.com/NairobitsTrust?_rdc=1&_rdr" target="_blank" rel="noreferrer"><span className="hidden">Facebook</span><FaFacebookSquare className="h-8 w-8" /></a></li>
                                <li className="cursor-pointer"><a href="https://twitter.com/Nairobits" target="_blank" rel="noreferrer"><span className="hidden">Twitter</span><FaTwitter className="h-8 w-8" /></a></li>
                                <li className="cursor-pointer"><a href="https://www.instagram.com/nairobitstrust/?hl=en" target="_blank" rel="noreferrer"><span className="hidden">Instagram</span><FaInstagramSquare className="h-8 w-8" /></a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footerBtm">
                <div className={footStyles.footerTopSpacer}></div>
                <div className={footStyles.footerBtmCont}>
                    <Container fluid={`md`}>
                        <Row className="mb-5">
                            <Col xs={12} sm={12} md={6}>
                                <Row>
                                    <Col xs={6} sm={6} md={12} lg={6} xl={6} className="mb-4">
                                        <h3>Nairobits Trust</h3>
                                        <p>
                                            Ring Road, Kilimani<br />
                                            Opp. Xinhua News Agency<br />
                                            P.O. Box 2778 - 00200<br />
                                            Nairobi
                                        </p>
                                    </Col>
                                    <Col xs={6} sm={6} md={12} lg={6} xl={6} className="mb-4">
                                        <a href="/whoweare"><h3>Who we are</h3></a>
                                        <ul>
                                            <li><a href="/">Our operating model</a></li>
                                            <li><a href="/history">Our History</a></li>
                                            <li><a href="/team">Our Team</a></li>
                                            <li><a href="/partners">Our Partners</a></li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12} sm={12} md={6}>
                                <Row>
                                    <Col xs={12}>
                                        <a href="/whatwedo"><h3>What we do</h3></a>
                                        <ul className={footStyles.widefootMenu}>
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
                        </Row>
                        <Row>
                            <Col xs={6} sm={6} md={3} className="mb-4">
                                <h3>Our community</h3>
                                <ul>
                                    <li><a href="/">Alumni</a></li>
                                    <li><a href="/">Students</a></li>
                                    <li><a href="/">Peer educators</a></li>
                                </ul>
                            </Col>
                            <Col xs={6} sm={6} md={3} className="mb-4">
                                <h3>Join us</h3>
                                <ul>
                                    <li><a href="/partners">Partner</a></li>
                                    <li><a href="/volunteer">Volunteer</a></li>
                                    <li><a href="/careers">Careers</a></li>
                                </ul>
                            </Col>
                            <Col xs={6} sm={6} md={3} className="mb-4">
                                <h3>Quick links</h3>
                                <ul>
                                    <li><a href="/resources">Resources</a></li>
                                    <li><a href="/">Newsletter</a></li>
                                    <li><a href="/">Events/ News</a></li>
                                </ul>
                            </Col>
                            <Col xs={6} sm={6} md={3} className="mb-4">
                                <ul>
                                    <li className={`rounded w-1/2 text-center mb-3 ${footStyles.doniAccess}`}><a href="/" className="p-1">iACCESS</a></li>
                                    <li className={`rounded w-1/2 text-center mb-3 ${footStyles.donBtn}`}><a href="/donate" className="p-1">DONATE</a></li>
                                    <li className={`rounded w-1/2 text-center mb-3 ${footStyles.applyBtn}`}><a href="/apply" className="p-1">APPLY</a></li>
                                </ul>

                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} sm={6} md={3}>
                                <h3>Contact</h3> <ul>
                                    <li><a href="tel:+25420655 7635">+254 (020) 655 7635</a></li>
                                    <li><a href="mailto:info@nairobits.com">info@nairobits.com</a></li>
                                </ul>
                            </Col>
                            <Col xs={6} sm={6} md={3}>
                                <ul className="mt-4">
                                    <li><a href="/">Privacy policy</a></li>
                                    <li><a href="/">Our Cookie policy</a></li>
                                </ul>
                            </Col>
                            <Col xs={12} sm={12} md={6} className="mt-5 sm:text-center md:text-left">
                                <p>&copy; {year.getFullYear()} NairoBits Trust. All rights reserved.</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
