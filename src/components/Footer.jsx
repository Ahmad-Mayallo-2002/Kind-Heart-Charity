import { Container } from "react-bootstrap"

export const Footer = () => {
    return (
        <footer>
            <Container className="d-flex justify-content-between align-items-center">
                <p className="mb-0">
                    Copyright &copy; 2036 Kind Heart Charity Org. Design: Ahmad Mayallo
                </p>
                <a href="https://github.com/Ahmad-Mayallo-2002">
                    <i className="fa-brands fa-github me-2"></i>
                    GitHub
                </a>
            </Container>
        </footer>
    )
}