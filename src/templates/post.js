import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import * as postStyles from './post.module.css';

const Page = ({ data }) => {
  const post = data.wpPost;
  return (
    <Layout>
      <Container fluid={`md`} className={postStyles.postContentContOut}>
        <Row className="justify-content-center">
          <Col xs={10} sm={10} md={9} lg={8}>
            <h2>{post.title}</h2>
            <h6>{post.date}</h6>
          </Col>
          <Col xs={12} sm={11} md={10} lg={9} className={postStyles.postImgCont}>
            <GatsbyImage image={post.featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt={post.featuredImage.node.altText} className="object-contain w-full" />
          </Col>
          <Col xs={10} sm={10} md={9} lg={8}>
            <div className="postContentCont" dangerouslySetInnerHTML={{ __html: post.content }}>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
query($databaseId:Int!){
  wpPost(databaseId: {eq:$databaseId}) {
    content
    date(formatString: "MM-DD-YYYY")
    title
    featuredImage {
      node {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    databaseId
  }
}`

export default Page;


