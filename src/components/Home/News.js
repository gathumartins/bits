import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Col, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import NewsComp from '../NewsComp';
import "react-multi-carousel/lib/styles.css"
import * as partnerStyles from './Home.module.css';


function News() {
  const featNews = useStaticQuery(
    graphql`
  {
  homeFeatNews:allWpPost(
    filter: {categories: {nodes: {elemMatch: {id: {eq: "dGVybToxOQ=="}}}}}
    limit: 6
    sort: {order: DESC, fields: date}
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
              name
            }
            altText
          }
        }
      }
    }
  }
}
  `
  )


  const homeNews = featNews.homeFeatNews.edges;
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
          <Col className="my-3">
            <Carousel
              swipeable={true}
              draggable={false}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={5000}
              keyBoardControl={true}
              customTransition="all 2 ease-in-out"
              transitionDuration={2000}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px">

              {homeNews?.map((newsItem, index) => (
                <NewsComp excerpt={newsItem.node.excerpt.substring(0, 140)} newsTitle={newsItem.node.title} newsDate={newsItem.node.date} imgSrc={newsItem.node.featuredImage.node.localFile.childImageSharp.gatsbyImageData} newsLink={`/news${newsItem.node.uri}`} altText={newsItem.node.featuredImage.node.altText} key={index} />
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default News;
