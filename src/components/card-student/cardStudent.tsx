import { Card, Button, ListGroup, Col } from "react-bootstrap";

interface CardStudentProps {
  name: string;
  course: string;
  registration: string;
}

export const CardStudent = ({ name, course, registration}: CardStudentProps) => (
  <Col md={4}>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <ListGroup className="mb-3">
          <ListGroup.Item>Curso: {course}</ListGroup.Item>
          <ListGroup.Item>Matrícula: {registration}</ListGroup.Item>
        </ListGroup>
        <Button variant="primary">Mais detalhes</Button>
      </Card.Body>
    </Card>
  </Col>
)