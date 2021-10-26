import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as proStyles from '../components/WhatWeDo/Programs.module.css';
import Layout from '../components/Layout';

function impact() {
    return (
        <div>
            <Layout>
                <section className="commonbgOuter">
                    <div className="commonSmallBg">
                        <header className="commonHeader">
                            <Container fluid={`md`} className={proStyles.proTop}>
                                <Row>
                                    <Col xs={12}>
                                        <h2 className="text-center">Our Impact</h2>
                                    </Col>
                                    <Col xs={12} className={proStyles.video}>
                                        <figure className="mt-10 md:mt-0 ratio ratio-16x9">
                                            <iframe title="Nairobits Digital Literacy program" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                                        </figure>
                                    </Col>
                                </Row>
                            </Container>
                        </header>
                    </div>
                </section>
                <section className="mt-20">
                    <Container fluid={`md`} className={proStyles.impactCont}>
                        <h2 className={`text-center ${proStyles.impact}`}>Alumni Stories</h2>
                        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ${proStyles.video}`}>

                            <figure className="mt-10 md:mt-0 ratio ratio-4x3">
                                <iframe title="Nairobits Digital Literacy program" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                            </figure>
                            <figure className="mt-10 md:mt-0 ratio ratio-4x3">
                                <iframe title="Nairobits Digital Literacy program" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                            </figure>
                            <figure className="mt-10 md:mt-0 ratio ratio-4x3">
                                <iframe title="Nairobits Digital Literacy program" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                            </figure>
                        </div>
                    </Container>
                </section>
            </Layout>
        </div>
    )
}

export default impact;