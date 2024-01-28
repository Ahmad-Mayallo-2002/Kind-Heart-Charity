import { Container, Row, Col } from "react-bootstrap";
import image from "../assets/images/member.jpg";

export const Volunteer = () => {
    return (
        <section id="volunteer" className="volunteer section-padding">
            <Container>
                <Row className="row-gap-3">
                    <Col className="col-lg-6">
                        <h3 className="mb-4 fw-bold">Volunteer</h3>
                        <form action="#">
                            <h4 className="fw-bold fs-3 mb-0">Become a volunteer today</h4>
                            <input type="text" placeholder="Jack Doe" />
                            <input type="email" placeholder="Jackdoe@gmail.com" />
                            <input type="text" placeholder="Subject" />
                            <label htmlFor="field">
                                Upload Your CV
                            </label>
                            <input id="field" type="file" style={{display: "none"}} />
                            <textarea placeholder="Comment (Optional)"></textarea>
                            <input className="rounded-pill" type="submit" value="Submit" />
                        </form>
                    </Col>
                    <Col className="text-center col-lg-6">
                        <figure className="mb-0">
                            <img src={image} width={350} height={350} className="rounded-circle object-fit-cover" alt="About Volunteer" />
                        </figure>
                        <h4 className="my-5 fs-2">About Volunteering</h4>
                        <p className="mx-auto">Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito Professional charity theme based</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}