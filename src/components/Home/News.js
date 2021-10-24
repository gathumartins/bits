import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import * as partnerStyles from './Home.module.css';

function News() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 2,
            slidesToSlide: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
    return (
        <section className={`${partnerStyles.news}`}>
            <Container className={partnerStyles.partnerCont}>
                <Row className={`d-flex align-items-center`}>
                    <Col xs={12} className={`text-center ${partnerStyles.Headings}`}>
                        <h1>Bits news</h1>
                    </Col>
                    <Col className="my-20">
                        <Carousel
                            swipeable={false}
                            draggable={false}
                            showDots={false}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={10000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={1000}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px">
                            <div className={partnerStyles.singleNews}>
                                <div className={`relative ${partnerStyles.singleNewsInn}`}>
                                    <h6 className="text-right">06 January 2021</h6>
                                    <div className={`relative ${partnerStyles.singleCont}`}>
                                        <div className={partnerStyles.newsexcerpt}>
                                            <h3>A mom, a bit too early…</h3>
                                            <p className="my-5">The first half of 2020 saw about 152,000 adolescents aged 10 - 19 get pregnant. At the release of this report, it immediately became apparent that even COVID-19 that has halted many aspects of our lives, shall not halt the epidemic of social inequity ...</p>
                                            <a href="/">Read more</a>
                                        </div>
                                        <figure className="absolute">
                                            <img src="./imgs/news.png" fluid="true" alt="news mom too early" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className={partnerStyles.singleNews}>
                                <div className={`relative ${partnerStyles.singleNewsInn}`}>
                                    <h6 className="text-right">06 February 2021</h6>
                                    <div className={`relative ${partnerStyles.singleCont}`}>
                                        <div className={partnerStyles.newsexcerpt}>
                                            <h3>A mom, a bit too early…</h3>
                                            <p className="my-5">The first half of 2020 saw about 152,000 adolescents aged 10 - 19 get pregnant. At the release of this report, it immediately became apparent that even COVID-19 that has halted many aspects of our lives, shall not halt the epidemic of social inequity ...</p>
                                            <a href="/">Read more</a>
                                        </div>
                                        <figure className="absolute">
                                            <img src="./imgs/news.png" fluid="true" alt="news mom too early" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className={partnerStyles.singleNews}>
                                <div className={`relative ${partnerStyles.singleNewsInn}`}>
                                    <h6 className="text-right">06 March 2021</h6>
                                    <div className={`relative ${partnerStyles.singleCont}`}>
                                        <div className={partnerStyles.newsexcerpt}>
                                            <h3>A mom, a bit too early…</h3>
                                            <p className="my-5">The first half of 2020 saw about 152,000 adolescents aged 10 - 19 get pregnant. At the release of this report, it immediately became apparent that even COVID-19 that has halted many aspects of our lives, shall not halt the epidemic of social inequity ...</p>
                                            <a href="/">Read more</a>
                                        </div>
                                        <figure className="absolute">
                                            <img src="./imgs/news.png" fluid="true" alt="news mom too early" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className={partnerStyles.singleNews}>
                                <div className={`relative ${partnerStyles.singleNewsInn}`}>
                                    <h6 className="text-right">06 April 2021</h6>
                                    <div className={`relative ${partnerStyles.singleCont}`}>
                                        <div className={partnerStyles.newsexcerpt}>
                                            <h3>A mom, a bit too early…</h3>
                                            <p className="my-5">The first half of 2020 saw about 152,000 adolescents aged 10 - 19 get pregnant. At the release of this report, it immediately became apparent that even COVID-19 that has halted many aspects of our lives, shall not halt the epidemic of social inequity ...</p>
                                            <a href="/">Read more</a>
                                        </div>
                                        <figure className="absolute">
                                            <img src="./imgs/news.png" fluid="true" alt="news mom too early" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </Carousel>;
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default News;
