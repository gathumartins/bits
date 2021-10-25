import React from 'react';
import Sidebar from './Sidebar';
import { Helmet } from 'react-helmet';
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import * as sliderStyles from './Home.module.css';
function Slider() {
    return (
        <React.Fragment>
            <div className={`flex top-0 slider`}>
                <Helmet>
                </Helmet>
                <Sidebar />
                <Carousel id="slider" className="px-2 sm:px-5 md:p-20 w-screen relative" controls={false}>
                    <Carousel.Item>
                        <Container className={`flex align-items-center ${sliderStyles.mySlides}`}>
                            <Row className="flex-row-reverse flex-grow">
                                <Col xs={12} sm={12} md={12} lg={6} className="flex text-center items-center mb-5">
                                    <img
                                        src="./imgs/educate.svg"
                                        alt="First slide" fluid="true" className={sliderStyles.slideImages} />
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={6} className={`flex items-center`}>
                                    <div className={sliderStyles.caption}>
                                        <h1>EDUCATE</h1>
                                        <ul className={`flex space-x-12 w-100 ${sliderStyles.indicators}`}>
                                            <li type="button" data-bs-target="Slide 1" aria-label="Slide 1" className={sliderStyles.active}>EDUCATE</li>
                                            <li type="button" data-bs-target="Slide 2" aria-label="Slide 2">INNOVATE</li>
                                            <li type="button" data-bs-target="Slide 3" aria-label="Slide 3">TRANSFORM</li>
                                        </ul>
                                        <p>Quality education is the single greatest pathway to awesome futures. We offer top notch alternative higher education to those who need it.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container className={`d-flex align-items-center ${sliderStyles.mySlides}`}>
                            <Row className="flex-row-reverse flex-grow">
                                <Col xs={12} sm={12} md={12} lg={6} className="flex text-center items-center mb-5">
                                    <img
                                        src="./imgs/innovate.svg"
                                        alt="First slide"
                                        fluid="true" className={sliderStyles.slideImages} />
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={6} className={`flex items-center`}>
                                    <div className={sliderStyles.caption}>
                                        <h1>INNOVATE</h1>
                                        <ul className={`flex space-x-12 w-100 ${sliderStyles.indicators}`}>
                                            <li type="button" data-bs-target="Slide 1" aria-label="Slide 1">EDUCATE</li>
                                            <li type="button" data-bs-target="Slide 2" aria-label="Slide 2" className={sliderStyles.active}>INNOVATE</li>
                                            <li type="button" data-bs-target="Slide 3" aria-label="Slide 3">TRANSFORM</li>
                                        </ul>
                                        <p>We believe in using everyone’s creative genius to disrupt the status quo. We work with our community to create and build solutions for challenges around us.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container className={`d-flex align-items-center ${sliderStyles.mySlides}`}>
                            <Row className="flex-row-reverse flex-grow">
                                <Col xs={12} sm={12} md={12} lg={6} className="flex text-center items-center mb-5">
                                    <img
                                        src="./imgs/transform.svg"
                                        alt="First slide"
                                        fluid="true" className={sliderStyles.slideImages} />
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={6} className={`flex items-center`}>
                                    <div className={sliderStyles.caption}>
                                        <h1>TRANSFORM</h1>
                                        <ul className={`flex space-x-12 w-100 ${sliderStyles.indicators}`}>
                                            <li type="button" data-bs-target="Slide 1" aria-label="Slide 1">EDUCATE</li>
                                            <li type="button" data-bs-target="Slide 2" aria-label="Slide 2">INNOVATE</li>
                                            <li type="button" data-bs-target="Slide 3" aria-label="Slide 3" className={sliderStyles.active}>TRANSFORM</li>
                                        </ul>
                                        <p>Everyone deserves a great future! We enable holistic transformation through impactful programs that create jobs, change lives and grow responsible citizens.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Item>
                </Carousel>
                <div className="d-none d-xs-none d-sm-none d-md-none d-lg-block customIndicators">
                </div>
            </div>
            <div className={`${sliderStyles.footerStrip} clear-both`}></div>
        </React.Fragment>
    )
}

export default Slider;
