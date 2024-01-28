import { Col, Container, Row } from "react-bootstrap";
import { data } from "../assets/data/projectData";
export const Causes = () => {

    return (
        <section id="causes" className="causes section-padding">
            <Container>
                <h3 className="text-center fw-bold mb-4">Our Causes</h3>
                <Row className="row-gap-3">
                    {data.causesData ? data.causesData.map(
                        (box, key) => {
                            const {image, title, description, progress, raised, goal} = box;
                            return (
                                <Col key={key}>
                                    <div className="box">
                                        <img src={image} alt="Causes" />
                                        <article>
                                            <h4 className="fw-bold">{title}</h4>
                                            <p>{description}</p>
                                            <progress min={0} value={progress} max={100}></progress>
                                            <div className="rating">
                                                <p>
                                                    <b>Raised: </b>
                                                    {raised}
                                                </p>
                                                <p>
                                                    <b>Goal: </b>
                                                    {goal}
                                                </p>
                                            </div>
                                        </article>
                                    </div>
                                    <button>Donate Now</button>
                                </Col>
                            )
                        }
                    ) : <p>...Loading</p>}
                </Row>
            </Container>
        </section>
    )
}