import {   Row } from "react-bootstrap"
import { CardDisciplines, CardStudent } from "../../components"
import { CourseResponse, getCourses } from "../../services"
import { useEffect, useState } from "react"

const students = [
  {
    id:1,
    name: "Pessoa da Silva",
    course: "Sistemas para internet",
    registration: "003",
  },
  {
    id:2,
    name: "Pessoa da Silva",
    course: "Sistemas para internet",
    registration: "003",
  },
  {
    id:3,
    name: "Pessoa da Silva",
    course: "Sistemas para internet",
    registration: "003",
  },
]

export const Home = () => {
  const [courser, setCourser] = useState<CourseResponse[]>([]);


  useEffect(() => {
    const getDisciplines = async () => {
      try {
        const data = await getCourses();
        setCourser(data);
      } catch(error){
        console.log('error', error);
      } finally {
        console.log('finally'); 
      }
    }
    getDisciplines();
  }, [])

  // const erase = async (id: number) => {
  //   await fetch(`http://localhost:3001/disciplinas/${id}`, {
  //     method: 'DELETE'
  //   })
  //   setCourser(courser.filter((discipline) => discipline.id !== id))
  // } 
  
  console.log('courser', courser);  
 


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
        {students.map((student)=> (
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