import { Col, Container, Row } from "react-bootstrap"
import image_1 from "../assets/images/avatar/avatar-4.jpg";
export const Contact = () => {
    return (
        <section className="contact section-padding" id="contact">
            <Container>
                <Row className="row-gap-5">
                    <Col className="col-lg-6">
                        <h3>Get in Touch</h3>
                        <figure>
                            <img src={image_1} className="rounded-circle" alt="HR & Office Manager" />
                            <figcaption>
                                <p>Clara Barton</p>
                                <b>HR & Office Manager</b>
                            </figcaption>
                        </figure>
                        <h4>Contact Infomation</h4>
                        <p>
                            <i className="fa-solid fa-location-dot"></i>
                            Akershusstranda 20, 0150 Oslo, Norway
                        </p>
                        <p>
                            <i className="fa-solid fa-phone"></i>
                            120-240-9600
                        </p>
                        <p>
                            <i className="fa-regular fa-envelope"></i>
                            donate@charity.org
                        </p>
                        <a href="/" className="rounded-pill text-decoration-none">Get Direction</a>
                    </Col>
                    <Col className="col-lg-6">
                        <div className="box">
                            <h3>Contact form</h3>
                            <p>Or, you can just send an email: <a href="/">info@charity.org</a></p>
                            <form action="#">
                                <input className="rounded" type="text" placeholder="Jack" />
                                <input className="rounded" type="text" placeholder="Doe" />
                                <input className="rounded" type="email" placeholder="JackDoe@gmail.com" />
                                <textarea className="rounded" placeholder="What Can We Help You ?"></textarea>
                                <input className="rounded-pill" type="submit" value="Send Message" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}