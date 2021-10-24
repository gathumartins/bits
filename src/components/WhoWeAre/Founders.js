import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GoQuote } from 'react-icons/go';
import * as foundStyles from './about.module.css';


function Founders() {
    return (
        <section className={foundStyles.founderCont}>
            <Container fluid={`md`}>
                <Row>
                    <Col xs={12}>
                        <h2>In their words</h2>
                    </Col>
                    <Col xs={12} className={`my-10 grid grid-cols-1 md:grid-cols-2`}>
                        <div className="mb-5">
                            <Row className={`${foundStyles.founder}`}>
                                <Col xs={12} sm={12} md={5}>
                                    <img src="./imgs/emer.png" fluid="true" alt="founder Emer Beamer" className="mt-10" />
                                    <div className={foundStyles.founderCapt}>
                                        <h5>Emer Beamer</h5>
                                        <h1>Co-founder NairoBits Trust.</h1>
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={7} className="flex-column align-items-center">
                                    <h6><GoQuote className="h-10 w-10 mt-10" /></h6>
                                    <p className="mx-3 mt-3">As a co-founder of Nairobits, I wanted to share my abilities in order give others a chance to make a better life for themselves. To date I am so proud of all that has been achieved, the thousands of lives touched, the opportunities created and the spirit of giving back I see in the alumni community.</p>
                                </Col>
                            </Row>
                        </div>
                        <div className="mb-5">
                            <Row className={`${foundStyles.founder}`}>
                                <Col xs={12} sm={12} md={5}>
                                    <img src="./imgs/ineke.png" fluid="true" alt="founder Ineke Aquarius" className="mt-10" />
                                    <div className={foundStyles.founderCapt}>
                                        <h5>Ineke Aquarius</h5>
                                        <h1>Co-founder NairoBits Trust.</h1>
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={7} className="flex-column align-items-center">
                                    <h6><GoQuote className="h-10 w-10 mt-10" /></h6>
                                    <p className="mx-3 mt-3">When we started it was never the plan to develop it into a school, but was more of a project. But because of their enthusiasm and creativity it developed into a permanent school. There is something about NairoBits that works. That survives every storm and changes with the tides. The success of NairoBits and the new Bits schools that came after is truly a group effort. I am proud to be part of that group, that has provided a great learning environment for so many youths. A lot of what I do today I have learnt at NairoBits!”</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Founders;
