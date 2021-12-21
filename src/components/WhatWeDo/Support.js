import React from 'react';
import {StaticImage} from "gatsby-plugin-image";
import { Container, Row, Col } from 'react-bootstrap';
import * as supportStyles from './Programs.module.css';

function Support() {
    return (
        <section className={`mt-10 px-2`}>
            <Container fluid={`md`}>
                <div><StaticImage src="../../images/supportline.svg" alt="Nairobits Support Seperator" /></div>
                <Row className="py-20 relative">
                    <Col xs={12} className={`${supportStyles.supportHeading} absolute z-20`}>
                        <h2>Support</h2>
                    </Col>
                    <figure className={supportStyles.supportCont}>
                        <StaticImage src="../../images/supports.svg" fluid="true" alt="NairoBits Support animation" />
                    </figure>
                    <div className="btnHolders md:absolute h-20 w-ful bottom-20"></div>
                </Row>
            </Container>
        </section>
    )
}

export default Support;
