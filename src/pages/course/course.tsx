import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

export const Course = () => {
  const navigate = useNavigate();
  const handleClickNewCourse = () => navigate("/cursos/novo-curso")
  return (
    <p>
      <Button onClick={handleClickNewCourse}>Novo Curso</Button>
    </p>
  )
}