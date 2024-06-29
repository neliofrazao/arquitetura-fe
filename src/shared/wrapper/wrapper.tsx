import { Container } from 'react-bootstrap'
import { Header } from '../../components'
import { Outlet } from 'react-router-dom'
import './wrapper.css'

export const Wrapper = (): JSX.Element => (
  <>
    <Header />
    <Container>
      <Outlet />
    </Container>
  </>
)