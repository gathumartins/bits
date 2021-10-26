import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as conStyles from '../components/Minor.module.css';
import Layout from '../components/Layout';

function consultancy() {
    return (
        <div>
            <Layout>
                <section className={conStyles.conTop}>
                    <div className="grid grid-cols-3">
                        <img src="./imgs/probtmone.png" fluid="true" alt="Nairobits programs bottom" />
                        <img src="./imgs/probtmtwo.png" fluid="true" alt="Nairobits programs bottom" />
                        <img src="./imgs/probtmthree.png" fluid="true" alt="Nairobits programs bottom" />
                    </div>
                </section>
                <section className="mt-20">
                    <Container fluid={`md`} className={conStyles.conCont}>
                        <Row>
                            <Col></Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        </div>
    )
}

export default consultancy;
