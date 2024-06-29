import { Container } from 'react-bootstrap'
import { Header } from '../../components'
import './wrapper.css'

interface WrapperProps {
  
  children: React.ReactNode
}

export const Wrapper = ({ children }: WrapperProps): JSX.Element => (
  <>
    <Header />
    <Container>
      {children}
    </Container>
  </>
)