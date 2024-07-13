import { Card, Col, ListGroup } from "react-bootstrap";

interface CardDisciplinesProps {
  title: string;
  description: string;
  workload: string;
}

export const CardDisciplines = ({title, description, workload }: CardDisciplinesProps) => (
    <Col md={4} >
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title style={{ fontSize: '16px'}}>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <ListGroup className="mb-3">
            <ListGroup.Item>Carga Horária: {workload}</ListGroup.Item>
          </ListGroup>
          <Card.Link href="#" >Mais detalhes</Card.Link>
        </Card.Body>
      </Card>
    </Col>
)