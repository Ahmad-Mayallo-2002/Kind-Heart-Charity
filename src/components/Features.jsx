import { Col, Container, Row } from "react-bootstrap";
import { data } from "../assets/data/projectData";

export const Features = () => {
    return (
        <section className="features section-padding">
            <Container>
                <h3 className="text-center fw-bold">Welcome to Kind Heart Charity</h3>
                <Row>
                    {
                        data.featuresData ? data.featuresData.map(
                            (feature, index) => {
                                const {icon, title} = feature;
                                return (
                                    <Col key={index} className="feature col-12 col-sm-3 text-center">
                                        <img src={icon} alt="Icon" />
                                        <p>{title}</p>
                                    </Col>
                                )
                            }
                        ) : <p>...Loading</p>
                    }
                </Row>
            </Container>
        </section>
    )
}