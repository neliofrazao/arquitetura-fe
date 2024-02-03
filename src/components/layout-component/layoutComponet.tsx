import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router';
import { Footer } from '../footer';
import { Navbar } from '../nav-bar';

export const LayoutComponent = () => (
  <div>
    <Navbar />
    <Container>
      <Outlet />
    </Container>
    <Footer />
  </div>
);
