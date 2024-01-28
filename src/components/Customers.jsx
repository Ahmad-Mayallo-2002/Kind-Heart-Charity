import { Container } from "react-bootstrap"
import { data } from "../assets/data/projectData"
import { useEffect } from "react"
export const Customers = () => {
    useEffect(() => {
        const avatars = document.querySelectorAll(".avatars img");
        const quotes = document.querySelectorAll(".customer");
        let counter = 0;
        quotes[0].classList.add("active");
        avatars[0].classList.add("active");
        const callBack = () => {
            if (counter < avatars.length - 1) {
                avatars[counter].classList.remove("active");
                quotes[counter].classList.remove("active");
                counter++;
                avatars[counter].classList.add("active");
                quotes[counter].classList.add("active");
            } else if (counter === avatars.length - 1) {
                avatars[avatars.length - 1].classList.remove("active");
                quotes[avatars.length - 1].classList.remove("active");
                counter = 0;
                avatars[counter].classList.add("active");
                quotes[counter].classList.add("active");
            }
        }
        setInterval(callBack, 5000);
    }, []);
    return (
        <section className="customers section-padding" id="customers">
            <Container>
                <h2 className="text-center fw-bold">Happy Customers</h2>
                <article className="position-relative">
                    {
                        data.customersData ? data.customersData.map(
                            (value, key) => {
                                const {description, title} = value;
                                return (
                                    <div className="customer my-5 d-flex flex-column align-items-center row-gap-3" key={key}>
                                        <q>{description}</q>
                                        <small className="rounded-pill">{title}</small>
                                    </div>
                                )
                            }
                        ) : <p>...Loading</p>
                    }
                </article>
                <div className="avatars d-flex column-gap-4 justify-content-center mt-5">
                    { data.customersData ? data.customersData.map( (value, key) => <img className="rounded-circle" key={key} src={value.avatar} alt={`avatar ${key + 1}`} /> ) : <p>...Loading</p> }
                </div>
            </Container>
        </section>
    )
}