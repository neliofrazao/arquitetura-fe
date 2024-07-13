import {   Row } from "react-bootstrap"
import { CardDisciplines } from "../../components"
const disciplines = [
  {
    title: "Programação Web com Linguagem de Script",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    workload: "16h",
  },
  {
    title: "Fundamentos e Arquitetura de Sistemas Web",
    description: "Lorem ipsum dolor sit amet consectetur.",
    workload: "26h",
  },
   {
    title: "Fundamentos e Arquitetura de Sistemas Web",
    description: "Lorem ipsum dolor sit amet consectetur.",
    workload: "26h",
  },
]

console.log(disciplines[0].title)


export const Home = () => {
  return (  
    <>   
    <Row> 
      <h3 className='mb-3'>Disciplinas</h3>
      {disciplines.map((discipline) => 
       <CardDisciplines 
        title={discipline.title}
        description={discipline.description}
        workload={discipline.workload} />
      )}
      </Row>

      <Row> 
      <h3 className='mb-3'>Alunos</h3>
      
      </Row>
    </>  
    
  )
}