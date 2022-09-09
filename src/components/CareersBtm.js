import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as histStyles from './WhoWeAre/about.module.css';

function CareersBtm() {
    return (
        <section className={histStyles.careersBtm}>
            <Container>
                <Row>
                    <Col xs={12} className="text-center">
                        <h2>Our career opportunities</h2>
                        <ul><li>Passionate | Willing | Inner Genius | Results-oriented | Fun</li></ul>
                        <p>If this is you, check out our career opportunities below:</p>
                    </Col>
                    <Col xs={12} className={histStyles.careersInn}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/*  <a href="https://drive.google.com/file/d/1CbRFumDVgXrOrWoiWaq20j-P4JkilXKR/view" target="_blank" rel="noreferrer" className={histStyles.career}>
                                <div className={histStyles.careerIcons}></div>
                                <div>
                                    <h5>Customer Experience Trainer</h5>
                                    <p>Deadline : 24.August.2022</p>
                                    <h6>Contract</h6>
                                </div>
    </a>*/}
                        </div>
                    </Col>
                    <Col xs={12} className={`text-center ${histStyles.careersFoot}`}>
                        <p>*Please note that NairoBits does not charge a fee at any stage of its recruitment process (application, interview, meeting, travelling, processing or training).</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CareersBtm;
