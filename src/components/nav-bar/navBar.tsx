import { Navbar as BoostrapNavbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Navbar = () => (
  <BoostrapNavbar expand='lg' className='bg-body-tertiary'>
    <Container>
      <BoostrapNavbar.Brand href='#home'>Gestao de Cursos</BoostrapNavbar.Brand>
      <BoostrapNavbar.Toggle aria-controls='basic-navbar-nav' />
      <BoostrapNavbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto'>
          <Nav.Link>
            <Link to='/'>Principal</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/alunos'>Alunos</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/disciplinas'>Disciplinas</Link>
          </Nav.Link>
        </Nav>
      </BoostrapNavbar.Collapse>
    </Container>
  </BoostrapNavbar>
);
