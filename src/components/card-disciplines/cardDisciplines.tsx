import { Card, Col, ListGroup } from "react-bootstrap";
import { DisciplineType } from "../../types";
import { Link } from "react-router-dom";

interface CardDisciplinesProps {
  disciplines: DisciplineType[];
  
}

export const CardDisciplines = ({disciplines}: CardDisciplinesProps) => (
  <>
  {disciplines.map((discipline) => 
    <Col md={3}>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title style={{ fontSize: '16px'}}>{discipline.name}</Card.Title>
          <Card.Text>
            {discipline.description}
          </Card.Text>
          <ListGroup className="mb-3">
            <ListGroup.Item>Carga Horária: {discipline.workload}</ListGroup.Item>
          </ListGroup>
          <Card.Link><Link to={`/cursos/${discipline.id}`}>Mais detalhes</Link></Card.Link>
        </Card.Body>
      </Card>
    </Col>
  )}
  
  </>
    
)