import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import * as operateStyles from '../Minor.module.css';

function OpsPop() {
    const opsModels = useStaticQuery(graphql`{
        
        allModels:allWpOperatingModels(sort: {fields: date, order: ASC}) {
            edges {
            node {
                title
                slug
                date(formatString: "DD-MM-YYYY")
                databaseId
                featuredImage {
                node {
                    localFile {
                    childImageSharp {
                        gatsbyImageData
                    }
                    }
                    altText
                }
                }
                categories {
                nodes {
                    id
                    name
                }
                }
            }
            }
        }



        }`)

    const models = opsModels.allModels.edges;
    return (
        <div>
            <Helmet>
                <title>NairoBits-Operating Model</title>
            </Helmet>
            <section className="commonbgOuter">
                <div className="commonSmallBg">
                    <header className="commonHeader">
                        <Container fluid={`md`}>
                            <Row className="sm:mb-16">
                                <Col xs={12} className={operateStyles.topOpsHeading}>
                                    <h2 className="text-center">Our operating model</h2>
                                </Col>
                            </Row>
                            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ${operateStyles.opsCont}`}>
                                {
                                    models?.map((model, index) => (
                                        <React.Fragment key={model.node.databaseId}>
                                            <button className="cursor-pointer" data-bs-toggle="modal" data-bs-target={`#${model.node.slug}`}>
                                                {/* <h3>{model.node.categories.nodes[0].name}</h3>*/}
                                                {/*<h4>{model.node.date}</h4>*/}
                                                <div className={operateStyles.opsContInn}>
                                                    <GatsbyImage image={model.node.featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt={model.node.featuredImage.node.altText} />
                                                    <div className={operateStyles.opsContInnBtm}>
                                                        <h1>{model.node.title}</h1>
                                                    </div>
                                                </div>
                                            </button>

                                            <div className="modal fade" id={model.node.slug} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen">
                                                    <div className="modal-content">
                                                        <Container fluid={`md`}>
                                                            <div className="modal-header popUps">
                                                                <h5 className="modal-title" id="staticBackdropLabel">{model.node.title}</h5>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <Row className="mt-3">
                                                                <Col xs={12} className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                                                                    <label className={`btn ${operateStyles.filCont}`}>
                                                                        <span className={`${operateStyles.filterRLabel}`}>Strategic Approach</span>
                                                                        <input type="radio" name="radio" />
                                                                        <span className={`${operateStyles.resRFilter}`}></span>
                                                                    </label>
                                                                    <label className={`btn ${operateStyles.filCont}`}>
                                                                        <span className={`${operateStyles.filterRLabel}`}>Technology Use</span>
                                                                        <input type="radio" name="radio" />
                                                                        <span className={`${operateStyles.resRFilter}`}></span>
                                                                    </label>
                                                                    <label className={`btn ${operateStyles.filCont}`}>
                                                                        <span className={`${operateStyles.filterRLabel}`}>PYD</span>
                                                                        <input type="radio" name="radio" />
                                                                        <span className={`${operateStyles.resRFilter}`}></span>
                                                                    </label>
                                                                    <label className={`btn ${operateStyles.filCont}`}>
                                                                        <span className={`${operateStyles.filterRLabel}`}>All of them</span>
                                                                        <input type="radio" name="radio" />
                                                                        <span className={`${operateStyles.resRFilter}`}></span>
                                                                    </label>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                        <Container className="modal-body">
                                                            <div className="text-center bg-white p-3">
                                                                <GatsbyImage image={model.node.featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt={model.node.featuredImage.node.altText} />
                                                            </div>
                                                        </Container>
                                                        <div className="modal-footer"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </React.Fragment>

                                    ))
                                }
                            </div>
                        </Container>
                    </header>
                </div>
            </section>
        </div>
    )
}

export default OpsPop;
