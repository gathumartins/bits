import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as histStyles from './about.module.css';

function HistoryTop() {
    return (
        <header className={histStyles.historyBanOut}>
            <div className={histStyles.historyBan}>
                <Container fluid={`md`}>
                    <Row>
                        <Col xs={12}>
                            <h2>Our history</h2>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <p>NairoBits started in 1999, when Emer Beamer, Ineke Aquarius and Hester Ezra discussed their aspirations to start up a web design institute in Nairobi for disadvantaged young people, motivated to share their skills as multimedia designers and offer chances to the youth in a time where the ICT space in Africa was evolving and largely untapped on the education front. Their mission was to change the lives of the youth by building their skills and changing their mindset, from vulnerable to empowered people who could earn a living and uplift their communities as a result.</p>
                            <p>Our first graduating class consisted of 20 students, who by the end of two months had made their own websites with self made photos of their city,stories, self portraits and had taken part in an online exchange with Dutch students. The works made were exhibited in the National Museum of Kenya, the first digital exhibition to ever take place at the museum. This resulted in a number of media articles and appearances.</p>
                            <p>To ground and launch the project, we institutionalized a new organizational approach and educational method based on creativity leading to employability and success in the ICT sector, supported by our mandate to unlock the potential of the targeted youth to improve their socio-economic well-being by building and enhancing relevant inter-personal and professional skills through entrepreneurship, life-skills and sexual and reproductive health rights (SRHR), by effectively educating and empowering them.</p>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} className="py-20">
                            <img src="./imgs/historyimg.png" fluid="true" alt="about nairobits" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </header>
    )
}

export default HistoryTop
