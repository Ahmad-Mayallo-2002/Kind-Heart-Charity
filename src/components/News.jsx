import { Col, Container, Row } from "react-bootstrap"
import image_1 from "../assets/images/news/news-1.jpg";
import image_2 from "../assets/images/news/news-2.jpg";
import image_3 from "../assets/images/news/news-3.jpg";
import image_4 from "../assets/images/news/news-4.jpg";
export const News = () => {

    return (
        <section id="news" className="news section-padding">
            <Container>
                <h2 className="fw-bold mb-4">Lastest News</h2>
                <Row>
                    <Col className="col-lg-7 col-12">
                        <figure>
                            <img src={image_1} alt="News 1" />
                            <figcaption>Lifestyle, Clothing Donation</figcaption>
                        </figure>
                        <h4 className="fw-bold fs-2 mt-4">Clothing donation to urban area</h4>
                        <p>Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito Professional charity theme based on Bootstrap</p>
                        <figure>
                            <img src={image_2} alt="News 2" />
                            <figcaption>Food, Donation, Caring</figcaption>
                        </figure>
                        <div className="data d-flex column-gap-4">
                            <span>
                                <i className="me-2 fa-regular fa-calendar"></i>
                                October 20, 2036
                            </span>
                            <span>
                                <i className="me-2 fa-regular fa-user"></i>
                                By Admin
                            </span>
                            <span>
                                <i className="me-2 fa-regular fa-comment"></i>
                                35Comments
                            </span>
                        </div>
                        <h4 className="fw-bold fs-2 mt-4">Food donation area</h4>
                        <p>Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis metus elementum, tempor risus vel, condimentum orci</p>
                    </Col>
                    <Col className="col-lg-5 col-12">
                        <form action="#">
                            <input type="text" placeholder="Search" />
                        </form>
                        <h5 className="mt-5">Recent news</h5>
                        <figure>
                            <img src={image_3} width={150} alt="News 3" />
                            <figcaption>
                                <h6>Food donation area</h6>
                                <p><i className="me-2 fa-regular fa-calendar"></i> October 16, 2036</p>
                            </figcaption>
                        </figure>
                        <figure>
                            <img src={image_4} width={150} alt="News 4" />
                            <figcaption>
                                <h6>Volunteering Clean</h6>
                                <p><i className="me-2 fa-regular fa-calendar"></i> October 24, 2036</p>
                            </figcaption>
                        </figure>
                        <h5>Categories</h5>
                        <p>Drinking water <span>20</span></p>
                        <p>Food Donation <span>30</span></p>
                        <p>Children Education <span>10</span></p>
                        <p>Poverty Development <span>15</span></p>
                        <p>Clothing Donation <span>20</span></p>
                        <h5>Tags</h5>
                        <div className="tags">
                            <p>Donation</p>
                            <p>Clothing</p>
                            <p>Food</p>
                            <p>Children</p>
                            <p>Education</p>
                            <p>Poverty</p>
                            <p>Clean Water</p>
                        </div>
                        <form action="#">
                            <h6>Newsletter Form</h6>
                            <input placeholder="Email" type="email" />
                            <input className="rounded-pill" type="submit" value="Subscribe" />
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}