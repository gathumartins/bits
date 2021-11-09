import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import * as operateStyles from '../Minor.module.css';

function OpsPop() {
    const [fullscreen] = useState(true);
    const titles = ['Strategic Approach', 'Technology Use', 'Positive Youth Development', 'Partnership Approach', 'Pedagogical Framework', 'Sustainability Approach'];
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    function handleShow() {
        setShow(true);
        setTitle(titles[5])
    }
    return (
        <div>
            <Helmet>
                <title>NairoBits-Operating Model</title>
            </Helmet>
            <section className="commonbgOuter">
                <div className="commonSmallBg">
                    <header className="commonHeader">
                        <Container fluid={`md`}>
                            <Row className="mb-16">
                                <Col xs={12} className={operateStyles.topOpsHeading}>
                                    <h2 className="text-center">Our operating model</h2>
                                </Col>
                            </Row>
                            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ${operateStyles.opsCont}`}>
                                <div className="cursor-pointer">
                                    <h3>INFOGRAPHIC</h3>
                                    <h4>05-20-2021</h4>
                                    <div className={operateStyles.opsContInn}>
                                        <div className={operateStyles.opsContInnBtm}>
                                            <h1>Strategic Approach</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer">
                                    <h3>INFOGRAPHIC</h3>
                                    <h4>05-20-2021</h4>
                                    <div className={operateStyles.opsContInn}>
                                        <div className={operateStyles.opsContInnBtm}>
                                            <h1>Technology Use</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer">
                                    <h3>INFOGRAPHIC</h3>
                                    <h4>05-20-2021</h4>
                                    <div className={operateStyles.opsContInn}>
                                        <div className={operateStyles.opsContInnBtm}>
                                            <h1>Positive Youth Development</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer">
                                    <h3>INFOGRAPHIC</h3>
                                    <h4>05-20-2021</h4>
                                    <div className={operateStyles.opsContInn}>
                                        <div className={operateStyles.opsContInnBtm}>
                                            <h1>Partnership Approach</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer">
                                    <h3>INFOGRAPHIC</h3>
                                    <h4>05-20-2021</h4>
                                    <div className={operateStyles.opsContInn}>
                                        <div className={operateStyles.opsContInnBtm}>
                                            <h1>Pedagogical Framework</h1>
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => handleShow()} className="cursor-pointer">
                                    <h3>INFOGRAPHIC</h3>
                                    <h4>05-20-2021</h4>
                                    <div className={operateStyles.opsContInn}>
                                        <div className={operateStyles.opsContInnBtm}>
                                            <h1>Sustainability Approach</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </header>
                </div>
            </section>
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)} className={operateStyles.modalOuter}>
                <Modal.Header closeButton className={operateStyles.modalHead}>
                    <Modal.Title className={operateStyles.modalTitle}>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className={operateStyles.modalBody}>Modal body content</Modal.Body>
            </Modal>
        </div>
    )
}

export default OpsPop;
