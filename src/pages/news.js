import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import NewsComp from '../components/NewsComp';
import * as newStyles from '../components/News.module.css';
import Layout from '../components/Layout';

function News() {

    const allNews = useStaticQuery(graphql`
    {
    featNews:allWpPost(
            limit: 1
            filter: {categories: {nodes: {elemMatch: {id: {eq: "dGVybToyNg=="}}}}}
        ) 
        {
        nodes {
            title
            link
            uri
            excerpt
            id
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
            }
        }
        
        allNewsItems: allWpPost(
    filter: {categories: {nodes: {elemMatch: {id: {eq: "dGVybToxOQ==", ne: "dGVybToyNg=="}}}}}
  ) {
    edges {
      node {
        date(formatString: "DD/MM/YYYY")
        id
        link
        uri
        title
        slug
        excerpt
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
      }
    }
  }


    }
    `)
    const featNew = allNews.featNews.nodes[0];
    const allNewsItem = allNews.allNewsItems.edges;
    return (
        <Layout>
            <Helmet>
                <title>News-NairoBits</title>
            </Helmet>
            <section className={newStyles.topNews}>
                <Container fluid={`md`}>
                    <Row>
                        <Col xs={12}>
                            <h2>Blog</h2>
                        </Col>

                        <Col xs={12} className="p-4">
                            <Row>
                                <Col xs={12} className={`${newStyles.topNewsStory} sm:shadow-md md:shadow-none`}>
                                    <figure className="topStoryImg">
                                        <GatsbyImage image={featNew.featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt={featNew.featuredImage.node.altText} />
                                    </figure>
                                    <div className="topStoryCont">
                                        <h3>{featNew.title}</h3>
                                        <div dangerouslySetInnerHTML={{ __html: featNew.excerpt }}></div>
                                        <Link to={`/news${featNew.link}`}>Read more</Link>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section >
            <section className={newStyles.btmNews}>
                <Container fluid={`md`}>
                    <Row>
                        {allNewsItem.map((newsItem, index) => (
                            <Col xs={12} sm={12} md={12} lg={6} key={index} >
                                <NewsComp excerpt={newsItem.node.excerpt.substring(0, 140)} newsTitle={newsItem.node.title} newsDate={newsItem.node.date} imgSrc={newsItem.node.featuredImage.node.localFile.childImageSharp.gatsbyImageData} altText={newsItem.node.featuredImage.node.altText} newsLink={`/news${newsItem.node.uri}`} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </Layout >
    )
}
export default News;
