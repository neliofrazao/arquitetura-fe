import {  Container, Row } from "react-bootstrap"
import { CardDisciplines, CardStudent } from "../../components"
import { CourseResponse, getCourses, getStudent, StudentResponde } from "../../services"
import { useEffect, useState } from "react"
import { Loading } from "../../shared"


export const Home = () => {
  const [courser, setCourser] = useState<CourseResponse[]>([]);
  const [student, setStudent] = useState<StudentResponde[]>([])
  const [isLoading, setIsLoading ] = useState<boolean>(false)
  const [hasError, setHasError] = useState<boolean>(false)


  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      try {
        const coursesData = await getCourses();
        const studentData = await getStudent()
        setCourser(coursesData);
        setStudent(studentData)
        console.log('studentData', studentData)
      } catch(error){
        console.log('error', error);
        setHasError(true)
      } finally {
        
        setIsLoading(false) 
      }
    }
    getData();
  }, [])

  // const erase = async (id: number) => {
  //   await fetch(`http://localhost:3001/disciplinas/${id}`, {
  //     method: 'DELETE'
  //   })
  //   setCourser(courser.filter((discipline) => discipline.id !== id))
  // } 
  
  console.log('hasError', hasError);  
 
  if (isLoading) {
    return <Loading /> 
  }

  if(hasError) {
    return (
      <Container style={{textAlign: 'center', margin: '30px 0'}}>
        <h3>Houve um problema!!</h3>
        <h4>Por favor tente Novamente mais tarde</h4>
      </Container>
    )
  }

  return (  
    <>
      <Row className="gap-2"> 
      <h3 className='mb-3'>Disciplinas</h3>
      {courser.map((discipline) => 
      <CardDisciplines
        key={discipline.id}
        title={discipline.name}
        description={discipline.description}
        workload={discipline.workload} />
      )}
      </Row>

      <Row className="mt-5"> 
        <h3 className='mb-3'>Alunos</h3>
        {student.map((student)=> (
          <CardStudent
            key={student.id}
            name={student.name} 
            course={student.course} 
            registration={student.registration}  
          />
        ))}
      </Row>
  </>  
    
  )
}