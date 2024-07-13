import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getDiscipline } from "../../services";
import { DisciplineType } from "../../types";
import { Card, Button, ListGroup } from "react-bootstrap";

export const CourseDetail = () => {
    const { id } = useParams();
    const [discipline, setDisciple] = useState<DisciplineType>()
    

    useEffect(() => {
      const getData = async () =>{ 
        const data = await getDiscipline(id as string)
        setDisciple(data)
      }
     getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    
    return (
       <Card style={{ width: '100%', margin: '20px 0' }}>
        <Card.Body>
            <Card.Title>{discipline?.name}</Card.Title>
            <Card.Text>
                {discipline?.description}
            </Card.Text>
             <ListGroup className="mb-3">
                <ListGroup.Item>Professor: {discipline?.professor}</ListGroup.Item>
                <ListGroup.Item>Status: {discipline?.status}</ListGroup.Item>
                <ListGroup.Item>Carga Horária: {discipline?.workload}</ListGroup.Item>
            </ListGroup>
            <Card.Link>
                <Link to={`/cursos/editar-curso/${discipline?.id}`}>Editar Curso</Link>
            </Card.Link>
        </Card.Body>
        </Card>
    )
}


