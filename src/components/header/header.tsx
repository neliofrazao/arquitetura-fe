import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href="#home">Sistema Acadêmico</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link>
              <Link to='/cursos'>Cursos</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/estudante'>Alunos</Link>  
            </Nav.Link>
          </Nav>
      </Navbar.Collapse>
      </Container>
  </Navbar>
    
  )
}