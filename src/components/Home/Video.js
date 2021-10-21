import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as vStyles from './Home.module.css';

function Video() {
    return (
        <Container className="py-15">
            <Row className={`d-flex align-items-center ${vStyles.vCont}`}>
                <Col xs={12} sm={12} md={12} lg={6} className="relative">
                    <div className={`${vStyles.leftCont} py-10`}>
                        <div className="block">
                            <h2>NairoBits is</h2>
                            <p>a collective of problem solvers working to create solutions for inequalities for low-income communities.</p>
                            <p> We work to enhance the capacity of underserved youth and create opportunities that enable them to make gainful advantage of the digital age.</p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6}>
                    <div className={`${vStyles.rightCont} relative`}></div>
                </Col>
            </Row>
        </Container>
    )
}

export default Video
