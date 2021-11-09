import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as histStyles from './WhoWeAre/about.module.css';
import CareersBtm from './CareersBtm';

function CareersTop() {
    return (
        <header className={histStyles.careerBanOut}>
            <div className={`${histStyles.historyBan} ${histStyles.careerBan}`}>
                <Container fluid={`md`}>
                    <Row>
                        <Col xs={12}>
                            <h2>Careers</h2>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <p>NairoBits works tirelessly to change the lives of young people who hail from disadvantaged backgrounds. We believe that our passion is the greatest weapon against the inequalities that many communities face. Our dedicated staff work incessantly across roles such as Organizational Management, Program planning & execution, training and mentoring, advocacy and many more. </p>
                            <p>Everyday, each staff member brings their best self, creativity and skills to craft and undertake lasting solutions to the social issues we work with. Despite the challenges that we navigate, we are all proud to be working to make a difference in the lives of many young people.</p>
                            <h4>Meet the Team</h4>
                            <p>We offer careers, not just jobs, and take pride in going the extra mile to serve our people in need. Joining NairoBits means sharing in our mission and living by our core values.</p>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} className={`${histStyles.histImg} ${histStyles.carImg}`}>
                            <img src="./imgs/careers.png" fluid="true" alt="nairobits careers" className="careerImg" />
                        </Col>
                    </Row>
                </Container>
                <CareersBtm />
            </div>
        </header>
    )
}

export default CareersTop
