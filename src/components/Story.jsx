import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import image from "../assets/images/group.jpg";
import sandy from "../assets/images/organizer.jpg";
import { useState } from "react";
export const Story = () => {
    const [statement, handleStatement] = useState(false);
    return (
        <>
            <section className="story section-padding" id="about">
                <Container>
                    <Row className="row-gap-4">
                        <Col className="col-12 col-sm-6">
                            <img src={image} height="100%" width="100%" alt="The Team" />
                        </Col>
                        <Col className="col-12 col-sm-6">
                            <article>
                                <h3 className="fw-bold">Our Story</h3>
                                <h5 className="fw-bold">Kind Heart Charity, Non-Profit Organization</h5>
                                <p>This is a Bootstrap 5.2.2 CSS template for charity organization websites. You can feel free to use it. Please tell your friends about TemplateMo website. Thank you. HTML CSS files updated on 20 Oct 2022.</p>
                            </article>
                            <article>
                                <h4 className="fw-bold">Our Mission</h4>
                                <p>Sed leo nisl, posuere at molestie ac, suscipit auctor quis metus</p>
                                <p>
                                    <i className="fa-solid me-2 fa-check d-inline-flex justify-content-center align-items-center"></i>
                                    Charity Theme
                                </p>
                                <p>
                                    <i className="fa-solid me-2 fa-check d-inline-flex justify-content-center align-items-center"></i>
                                    Semantic HTML
                                </p>
                            </article>
                            <article>
                                <ScrollTrigger onEnter={() => handleStatement(true)} onExit={() => handleStatement(false)}>
                                    <h3 className="fw-bold">
                                        {statement && <CountUp start={0} end={2009} duration={1.5} />}
                                    </h3>
                                    <p>Founded</p>
                                    <h3 className="fw-bold">
                                        {statement && <CountUp start={0} end={120} duration={1.5} />}B
                                    </h3>
                                </ScrollTrigger>
                                <p>Donations</p>
                            </article>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="sandy section-padding">
                <Container>
                    <Row className="text-sm-center row-gap-4">
                        <Col className="col-lg-6 text-lg-end">
                            <img src={sandy} alt="Sandy Chan" className="shadow-lg" />
                        </Col>
                        <Col className="col-lg-6">
                            <h3 className="fw-bold mb-0">Sandy Chan</h3>
                            <small>Co-Founding Partner</small>
                            <p>Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito Professional charity theme based</p>
                            <p>You are not allowed to redistribute this template ZIP file on any other template collection website. Please contact TemplateMo for more information.</p>
                            <div className="social d-flex column-gap-3">
                                <i className="fa-brands fa-twitter d-flex justify-content-center align-items-center"></i>
                                <i className="fa-brands fa-facebook d-flex justify-content-center align-items-center"></i>
                                <i className="fa-brands fa-instagram d-flex justify-content-center align-items-center"></i>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="impact section-padding position-relative overflow-hidden">
                <Container>
                    <Row className="align-items-center row-gap-3">
                        <Col className="col-12 col-sm-6">
                            <h3>Make an impact  <br />.Save lives.</h3>
                        </Col>
                        <Col className="col-12 col-sm-6">
                            <a href="/">Make a donation</a>
                            <button className="rounded-pill">Become a Volunteer</button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}