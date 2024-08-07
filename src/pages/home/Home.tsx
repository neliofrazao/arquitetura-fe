import {  Container, Row } from "react-bootstrap"
import { CardDisciplines, CardStudent } from "../../components"
import { getStudent, StudentResponde,getAllDisciplines } from "../../services"
import { useEffect, useState } from "react"
import { Loading } from "../../shared"
import { DisciplineType } from "../../types"


export const Home = () => {
  const [courser, setCourser] = useState<DisciplineType[]>([]);
  const [student, setStudent] = useState<StudentResponde[]>([])
  const [isLoading, setIsLoading ] = useState<boolean>(false)
  const [hasError, setHasError] = useState<boolean>(false)


  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      try {
        // const coursesData = await getCourses();
        // const studentData = await getStudent();

        // desestruturação de array
        // coursesData = [0] studentData = [1]
        const [coursesData, studentData]  = await Promise.all([getAllDisciplines(), getStudent()])
        // Espera todas as promessas serem resolvidas
        // a velocidade de execução é a mesma de uma única promessa

        //  const data  = await Promise.all([getCourses(), getStudent()])
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
       
      <CardDisciplines disciplines={courser} />
       
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