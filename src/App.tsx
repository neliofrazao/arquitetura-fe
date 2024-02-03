import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContainerWrapper } from './shared';
import { useEffect, useState } from 'react';
import { DisciplineResponse, getDisciplines } from './services';
import { Link } from 'react-router-dom';

function App() {
  const [disciplines, setDisciplines] = useState<DisciplineResponse[]>([]);

  useEffect(() => {
    const fetchDisciplines = async () => {
      const response = await getDisciplines();
      setDisciplines(response);
    };
    fetchDisciplines();
  }, []);

  console.log(disciplines);

  if (!disciplines) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ContainerWrapper title='Disciplinas'>
        {disciplines.map((discipline) => (
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{discipline.name}</Card.Title>
              <Card.Text>{discipline.description}</Card.Text>
              <Link to={`/disciplinas/${discipline.id}`}>
                <Button variant='primary'>Ver detalhes</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </ContainerWrapper>
    </>
  );
}

export default App;
