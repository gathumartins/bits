import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import * as partnerStyles from './Home.module.css';

function PartnersList() {

    const allPartners = useStaticQuery(graphql`
    {
        allWpPartners {
            edges {
            node {
                id
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
            }
            }
        }
    }
    
    `)
    const partners = allPartners.allWpPartners.edges;

    return (
        <ul className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 my-20 ${partnerStyles.partnerLogo}`}>
            {
                partners?.map(partner => (
                    <li key={partner.node.id} className="text-center object-cover"><GatsbyImage image={partner.node.featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt={partner.node.featuredImage.node.altText} className="object-contain" /></li>
                ))
            }
        </ul>
    )
}

export default PartnersList;
