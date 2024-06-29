import { Navbar, Container, Nav } from "react-bootstrap"

export const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Navbar.Brand href="#home">Sistema Acadêmico</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Alunos</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    
  )
}