import { Container } from 'react-bootstrap';

interface ContainerWrapperProps {
  title: string;
  children: React.ReactNode;
}

// templates com children
export const ContainerWrapper = ({ children, title }: ContainerWrapperProps) => (
  <Container className='pt-5'>
    <h2 className='d-flex pb-2'>{title}</h2>
    <div className='d-flex flex-wrap pb-5'>{children}</div>
  </Container>
);
