import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import { useEffect } from "react";

export const Header = () => {
    useEffect(() => {
        const loadEffect = document.querySelectorAll(".load-effect");
        window.addEventListener("load", () => {
            loadEffect.forEach(
                element => {
                    element.style.opacity = "1";
                    element.style.transform = "translateX(0)";
                }
            )
        })
    }, []);
    const {Brand, Toggle, Collapse} = Navbar;
    return (
        <>
            <header className="p-3">
                <Container className="d-flex flex-wrap justify-content-between">
                    <span>
                        <i className="fa-solid fa-location-dot"></i>
                        Akershusstranda 20, 0150 Oslo, Norway
                    </span>
                    <span className="flex-grow-1">
                        <a href="https://github.com/Ahmad-Mayallo-2002">
                            <i className="fa-regular fa-envelope"></i>
                            ahmadmayallo02@gamil.com
                        </a>
                    </span>
                    <a href="https://github.com/Ahmad-Mayallo-2002">
                        <i className="fa-brands fa-github"></i>
                        GitHub
                    </a>
                </Container>            
            </header>
            <Navbar expand="lg" className="shadow position-sticky overflow-x-hidden">
                <Container>
                    <Brand href="#home" className="d-flex align-items-center me-0 load-effect" style={{opacity: "0", transform: "translateX(-200px)"}}>
                        <img src={logo} width={80} alt="Hands Logo" />
                        <article>
                            <h1 className="mb-0 fw-bold">Kind Heart Charity</h1>
                            <p className="fw-bold text-uppercase mb-0">non-profit organization</p>
                        </article>
                    </Brand>
                    <Toggle aria-controls="basic-navbar-nav" />
                    <Collapse id="basic-navbar-nav" className="justify-content-end load-effect" style={{opacity: "0", transform: "translateX(200px)", transitionDelay: "1s, 1s"}}>
                        <Nav className="align-items-lg-center column-gap-2">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#causes">Causes</Nav.Link>
                            <Nav.Link href="#volunteer">Volunteer</Nav.Link>
                            <Nav.Link href="#news">News</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <button className="rounded-pill">Donate</button>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    )
}