import { Col, Container, Row } from "react-bootstrap"
import logo from "../assets/images/logo.png";
export const Information = () => {
    return (
        <section className="information section-padding">
            <Container>
                <Row>
                    <Col className="col-lg-2">
                        <img src={logo} width={80} alt="Logo" />
                    </Col>
                    <Col className="col-lg-3">
                        <h3>Quick Links</h3>
                        <a href="/">Our Story</a>
                        <a href="/">Newsroom</a>
                        <a href="/">Causes</a>
                    </Col>
                    <Col className="col-lg-3">
                        <h3>Content</h3>
                        <a href="/">
                            Become a Volunteer
                        </a>
                        <a href="/">Partner With Us</a>
                    </Col>
                    <Col className="col-lg-4">
                        <h3>Contact Infomation</h3>
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
                        <a href="/" className="direction rounded-pill text-decoration-none">Get Direction</a>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}