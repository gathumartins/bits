import React from 'react';
import { Container } from 'react-bootstrap';
import Layout from '../components/Layout';
import { FaLinkedin } from 'react-icons/fa';
import * as teamStyles from '../components/WhoWeAre/about.module.css';

function Team() {
    return (
        <Layout>
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
                                <img src="./imgs/teamavatar.png" fluid="true" alt="Nairobits Board Member Donald Odera" />
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
                                <img src="./imgs/teamavatar.png" fluid="true" alt="Nairobits Board Member Ravinder Paul Singh" />
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
                                <img src="./imgs/teamavatar.png" fluid="true" alt="Nairobits Board Member Caper Pedo" />
                                <figcaption className="my-3">
                                    <h3 className="teamName">Caper Pedo</h3>
                                    <a href="/">
                                        <span className="hidden">NairoBits Team LinkedIn handle</span>
                                        <FaLinkedin className="w-8 h-8 teamLinkedin" /></a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="bitsTeam mb-2">
                            <figure>
                                <img src="./imgs/teamavatar.png" fluid="true" alt="Nairobits Board Member Paul Mwachi" />
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-10">
                        <div className="bitsTeam mb-2">
                            <figure>
                                <img src="./imgs/maggie.png" fluid="true" alt="Nairobits Board Member Magdalene Wanjugu" />
                                <figcaption className="my-3">
                                    <h3 className="teamName">Magdalene Wanjugu</h3>
                                    <h4 className="teamDes mb-2">Vision setting</h4>
                                    <a href="/">
                                        <span className="hidden">NairoBits Team LinkedIn handle</span>
                                        <FaLinkedin className="w-8 h-8 teamLinkedin" /></a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="bitsTeam mb-2">
                            <figure>
                                <img src="./imgs/isika.png" fluid="true" alt="Nairobits Board Member John Isika" />
                                <figcaption className="my-3">
                                    <h3 className="teamName">John Isika</h3>
                                    <h4 className="teamDes mb-2">People & Systems</h4>
                                    <a href="/">
                                        <span className="hidden">NairoBits Team LinkedIn handle</span>
                                        <FaLinkedin className="w-8 h-8 teamLinkedin" /></a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="bitsTeam mb-2">
                            <figure>
                                <img src="./imgs/sam.png" fluid="true" alt="Nairobits Board Member Sam Nyamwange" />
                                <figcaption className="my-3">
                                    <h3 className="teamName">Sam Nyamwange</h3>
                                    <h4 className="teamDes mb-2">Growth & Sustainability</h4>
                                    <a href="/">
                                        <span className="hidden">NairoBits Team LinkedIn handle</span>
                                        <FaLinkedin className="w-8 h-8 teamLinkedin" /></a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="bitsTeam mb-2">
                            <figure>
                                <img src="./imgs/martin.png" fluid="true" alt="Nairobits Board Member Martin Gathu" />
                                <figcaption className="my-3">
                                    <h3 className="teamName">Martin Gathu</h3>
                                    <h4 className="teamDes mb-2">Coding & Guiding</h4>
                                    <a href="/">
                                        <span className="hidden">NairoBits Team LinkedIn handle</span>
                                        <FaLinkedin className="w-8 h-8 teamLinkedin" /></a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="bitsTeam mb-2">
                            <figure>
                                <img src="./imgs/mitchel.png" fluid="true" alt="Nairobits Board Member Michelle Tracy" />
                                <figcaption className="my-3">
                                    <h3 className="teamName">Michelle Tracy</h3>
                                    <h4 className="teamDes mb-2">Acumen</h4>
                                    <a href="/">
                                        <span className="hidden">NairoBits Team LinkedIn handle</span>
                                        <FaLinkedin className="w-8 h-8 teamLinkedin" /></a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="bitsTeam mb-2">
                            <figure>
                                <img src="./imgs/mwendwa.png" fluid="true" alt="Nairobits Board Member John Mwendwa" />
                                <figcaption className="my-3">
                                    <h3 className="teamName">John Mwendwa</h3>
                                    <h4 className="teamDes mb-2">Creativity & Innovation</h4>
                                    <a href="/">
                                        <span className="hidden">NairoBits Team LinkedIn handle</span>
                                        <FaLinkedin className="w-8 h-8 teamLinkedin" /></a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="bitsTeam mb-2">
                            <figure>
                                <img src="./imgs/philbert.png" fluid="true" alt="Nairobits Board Member Philbert Aganyo" />
                                <figcaption className="my-3">
                                    <h3 className="teamName">Philbert Aganyo</h3>
                                    <h4 className="teamDes mb-2">External Ecosystem</h4>
                                    <a href="/">
                                        <span className="hidden">NairoBits Team LinkedIn handle</span>
                                        <FaLinkedin className="w-8 h-8 teamLinkedin" /></a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="bitsTeam mb-2">
                            <figure>
                                <img src="./imgs/osogo.png" fluid="true" alt="Nairobits Board Member Tracey Osogo" />
                                <figcaption className="my-3">
                                    <h3 className="teamName">Tracey Osogo</h3>
                                    <h4 className="teamDes mb-2">Acumen</h4>
                                    <a href="/">
                                        <span className="hidden">NairoBits Team LinkedIn handle</span>
                                        <FaLinkedin className="w-8 h-8 teamLinkedin" /></a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="bitsTeam mb-2">
                            <figure>
                                <img src="./imgs/ken.png" fluid="true" alt="Nairobits Board Member Kennedy Wachira" />
                                <figcaption className="my-3">
                                    <h3 className="teamName">Kennedy Wachira</h3>
                                    <h4 className="teamDes mb-2">Design & Fun</h4>
                                    <a href="/">
                                        <span className="hidden">NairoBits Team LinkedIn handle</span>
                                        <FaLinkedin className="w-8 h-8 teamLinkedin" /></a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="bitsTeam mb-2">
                            <figure>
                                <img src="./imgs/hope.png" fluid="true" alt="Nairobits Board Member Hope Nasali" />
                                <figcaption className="my-3">
                                    <h3 className="teamName">Hope Nasali</h3>
                                    <h4 className="teamDes mb-2">Organizing & Protocol</h4>
                                    <a href="/">
                                        <span className="hidden">NairoBits Team LinkedIn handle</span>
                                        <FaLinkedin className="w-8 h-8 teamLinkedin" /></a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="bitsTeam mb-2">
                            <figure>
                                <img src="./imgs/edwin.png" fluid="true" alt="Nairobits Board Member Edwin Bakker" />
                                <figcaption className="my-3">
                                    <h3 className="teamName">Edwin Bakker</h3>
                                    <h4 className="teamDes mb-2">Associate Faculty</h4>
                                    <a href="/">
                                        <span className="hidden">NairoBits Team LinkedIn handle</span>
                                        <FaLinkedin className="w-8 h-8 teamLinkedin" /></a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="bitsTeam mb-2">
                            <figure>
                                <img src="./imgs/victor.png" fluid="true" alt="Nairobits Board Member Chepkwony kipkoech" />
                                <figcaption className="my-3">
                                    <h3 className="teamName">Chepkwony kipkoech</h3>
                                    <h4 className="teamDes mb-2">Guiding & Inspiration</h4>
                                    <a href="/">
                                        <span className="hidden">NairoBits Team LinkedIn handle</span>
                                        <FaLinkedin className="w-8 h-8 teamLinkedin" /></a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="bitsTeam mb-2">
                            <figure>
                                <img src="./imgs/carol.png" fluid="true" alt="Nairobits Board Member Carol ABinti" />
                                <figcaption className="my-3">
                                    <h3 className="teamName">Carol Abinti</h3>
                                    <h4 className="teamDes mb-2">Guiding & Inspiration</h4>
                                    <a href="/">
                                        <span className="hidden">NairoBits Team LinkedIn handle</span>
                                        <FaLinkedin className="w-8 h-8 teamLinkedin" /></a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="bitsTeam mb-2">
                            <figure>
                                <img src="./imgs/sly.png" fluid="true" alt="Nairobits Board Member sylvester olouch" />
                                <figcaption className="my-3">
                                    <h3 className="teamName">Sylvester Olouch</h3>
                                    <h4 className="teamDes mb-2">Guiding & Inspiration</h4>
                                    <a href="/">
                                        <span className="hidden">NairoBits Team LinkedIn handle</span>
                                        <FaLinkedin className="w-8 h-8 teamLinkedin" /></a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="bitsTeam mb-2">
                            <figure>
                                <img src="./imgs/damaris.png" fluid="true" alt="Nairobits Board Member Damaris Muange" />
                                <figcaption className="my-3">
                                    <h3 className="teamName">Damaris Muange</h3>
                                    <h4 className="teamDes mb-2">Guiding & Inspiration</h4>
                                    <a href="/">
                                        <span className="hidden">NairoBits Team LinkedIn handle</span>
                                        <FaLinkedin className="w-8 h-8 teamLinkedin" /></a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="bitsTeam mb-2">
                            <figure>
                                <img src="./imgs/opon.png" fluid="true" alt="Nairobits Board Member Damaris Muange" />
                                <figcaption className="my-3">
                                    <h3 className="teamName">Tracy Opon</h3>
                                    <h4 className="teamDes mb-2">Communication</h4>
                                    <a href="/">
                                        <span className="hidden">NairoBits Team LinkedIn handle</span>
                                        <FaLinkedin className="w-8 h-8 teamLinkedin" /></a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="bitsTeam mb-2">
                            <figure>
                                <img src="./imgs/duncan.png" fluid="true" alt="Nairobits Board Member Damaris Muange" />
                                <figcaption className="my-3">
                                    <h3 className="teamName">Duncan</h3>
                                    <h4 className="teamDes mb-2">Guiding & Inspiration</h4>
                                    <a href="/">
                                        <span className="hidden">NairoBits Team LinkedIn handle</span>
                                        <FaLinkedin className="w-8 h-8 teamLinkedin" /></a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="bitsTeam mb-2">
                            <figure>
                                <img src="./imgs/natasha.png" fluid="true" alt="Nairobits Board Member Damaris Muange" />
                                <figcaption className="my-3">
                                    <h3 className="teamName">Natasha</h3>
                                    <h4 className="teamDes mb-2">Programs Assistant</h4>
                                    <a href="/">
                                        <span className="hidden">NairoBits Team LinkedIn handle</span>
                                        <FaLinkedin className="w-8 h-8 teamLinkedin" /></a>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </Container>
            </section>
        </Layout>
    )
}

export default Team;
