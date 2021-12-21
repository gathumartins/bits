import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import Layout from '../components/Layout';
import { FaLinkedin } from 'react-icons/fa';
import * as teamStyles from '../components/WhoWeAre/about.module.css';

function Team() {
    const allTeams = useStaticQuery(graphql`
    
        {
        allWpTeams(sort: {fields: date, order: ASC}) {
            edges {
            node {
                databaseId
                title
                teams {
                designation
                linkedinProfile
                }
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
    const teams = allTeams.allWpTeams.edges;
    return (
        <Layout>
            <Helmet>
                <title>NairoBits-Team</title>
            </Helmet>
            <section className="commonbgOuter">
                <div className="commonMidBg">
                    <header className="commonHeader">
                        <Container fluid={`md`} className={`text-center ${teamStyles.teamTop}`}>
                            <h2>Contributors</h2>
                            <p className={teamStyles.teamTopPar}>Meet our amazing staff who selflessly give their time and hard work to reduce inequalities for low income youth in Kenya. Our collective experience ranges from public and private sector, technology, nonprofits, and NGOs.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-10 mt-20">

                                {
                                    teams?.map((team) => (
                                        <div div className="bitsTeam mb-2" key={team.node.databaseId} >
                                            <figure>
                                                <GatsbyImage image={team.node.featuredImage.node.localFile.childImageSharp.gatsbyImageData} fluid="true" alt={team.node.featuredImage.node.altText} />
                                                <figcaption className="my-3">
                                                    <h3 className="teamName">{team.node.title}</h3>
                                                    <h4 className="teamDes mb-2">{team.node.teams.designation}</h4>
                                                    <a href={team.node.teams.linkedinProfile} target="_blank" rel="noreferrer">
                                                        <span className="hidden">NairoBits Team LinkedIn handle</span>
                                                        <FaLinkedin className="w-8 h-8 teamLinkedin" /></a>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    ))
                                }
                            </div>
                        </Container>
                    </header>
                </div>
            </section>
            {/*
            <section className="commonbgOuter">
                <div className="commonMidBg">
                    <header className="commonHeader">
                        <Container fluid={`md`} className={`text-center ${teamStyles.teamTop}`}>
                            <h2>The Board of Trustees</h2>
                            <p className={teamStyles.teamTopPar}>NairoBits is governed by a Board of Trustees mandated to with ensuring the organization’s strategic guidance and operational goodwill for all the difference we want to make in the world</p>
                        </Container>
                    </header>
                </div>
            </section>
            <section className="my-3">
                <Container fluid={`md`}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-10">
                        <div className="bitsTeam mb-2">
                            <figure>
                                <StaticImage src="../images/teamavatar.png" fluid="true" alt="Nairobits Board Member Donald Odera" />
                                <figcaption className="my-3">
                                    <h3 className="teamName">Donald Odera</h3>
                                    <a href="/">
                                        <span className="hidden">NairoBits Team LinkedIn handle</span>
                                        <FaLinkedin className="w-8 h-8 teamLinkedin" /></a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="bitsTeam mb-2">
                            <figure>
                                <StaticImage src="../images/teamavatar.png" fluid="true" alt="Nairobits Board Member Ravinder Paul Singh" />
                                <figcaption className="my-3">
                                    <h3 className="teamName">Ravinder Paul Singh</h3>
                                    <a href="/">
                                        <span className="hidden">NairoBits Team LinkedIn handle</span>
                                        <FaLinkedin className="w-8 h-8 teamLinkedin" /></a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="bitsTeam mb-2">
                            <figure>
                                <StaticImage src="../images/teamavatar.png" fluid="true" alt="Nairobits Board Member Casper Pedo" />
                                <figcaption className="my-3">
                                    <h3 className="teamName">Casper Pedo</h3>
                                    <a href="/">
                                        <span className="hidden">NairoBits Team LinkedIn handle</span>
                                        <FaLinkedin className="w-8 h-8 teamLinkedin" /></a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="bitsTeam mb-2">
                            <figure>
                                <StaticImage src="../images/teamavatar.png" fluid="true" alt="Nairobits Board Member Paul Mwachi" />
                                <figcaption className="my-3">
                                    <h3 className="teamName">Paul Mwachi</h3>
                                    <a href="/">
                                        <span className="hidden">NairoBits Team LinkedIn handle</span>
                                        <FaLinkedin className="w-8 h-8 teamLinkedin" /></a>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </Container>
            </section>
                       <section className={teamStyles.contributorsOut}>
                <Container fluid={`md`}>

                    <header className={`commonHeader text-center ${teamStyles.contributors}`}>
                        <h2>Contributors</h2>
                        <p className={teamStyles.teamTopPar}>Meet our amazing staff who selflessly give their time and hard work to reduce inequalities for low income youth in Kenya. Our collective experience ranges from public and private sector, technology, nonprofits, and NGOs.</p>
                    </header>

                </Container>
            </section>
*/}

        </Layout>
    )
}

export default Team;
