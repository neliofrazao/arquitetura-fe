import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContainerWrapper } from './shared';

function App() {
  return (
    <>
      <ContainerWrapper title='Alunos'>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </Card.Text>
            <Button variant='primary'>Go somewhere</Button>
          </Card.Body>
        </Card>
      </ContainerWrapper>
    </>
  );
}

export default App;
