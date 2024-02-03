import { Navbar as BoostrapNavbar, Container, Nav } from 'react-bootstrap';

export const Navbar = () => (
  <BoostrapNavbar expand='lg' className='bg-body-tertiary'>
    <Container>
      <BoostrapNavbar.Brand href='#home'>Gestao de Cursos</BoostrapNavbar.Brand>
      <BoostrapNavbar.Toggle aria-controls='basic-navbar-nav' />
      <BoostrapNavbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto'>
          <Nav.Link href='#home'>Principal</Nav.Link>
          <Nav.Link href='#link'>Alunos</Nav.Link>
          <Nav.Link href='#link'>Disciplinas</Nav.Link>
        </Nav>
      </BoostrapNavbar.Collapse>
    </Container>
  </BoostrapNavbar>
);
