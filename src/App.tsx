import { useState } from 'react';
import './App.css'
import { Card } from './components';
import { Wrapper } from './shared'
import { Button, Container, ListGroup } from 'react-bootstrap';

interface Cards {
  title?: string,
  text: string,
  complement?: string
}





// listar essas tarefas com ListGroup do react-bootstrap
// botao de task concluida


const cardMock:Cards[]  = [
  {
    title: 'Título 1',
    text: 'Texto Novo 1',
    complement: 'Complemento 1'
  },
  {
    title: 'Título Novo 2',
    text: 'Texto 2',
  },
  {
    text: 'Texto 3',
    complement: 'Complemento 3'
  }
]

interface Task {
  task: string,
  finished: boolean
  id: number

}

const listaDeAfazeres = [
  {
    id: 1,
    task: 'Lista de afazeres',
    finished: false
  },  
  {
    id: 2,
    task: 'Lista de afazeres2',
    finished: false
  }
]


function App() {
  const [showCards, setShowCards] = useState<boolean>(true)
  const [tasks, setTasks] = useState<Task[]>(listaDeAfazeres);

  const onClickShowCards = () => {
    setShowCards(!showCards)
  }

  const toogleFinished = (index: number) => {
    console.log('index',index)
    const newTasks= [...tasks];	
    console.log('newTasks',newTasks[index])
    newTasks[index].finished = !newTasks[index].finished;
    // console.log('clone',newTasks)
    setTasks(newTasks);
  }


  return (
    // fragmento do react, React.Fragment
    // <> =  Shortcut  do React.Fragment
    <>
    <Container>
      <ListGroup as="ul">
        {listaDeAfazeres.map((list, index) => (
           <ListGroup.Item as="li" key={list.id}>
            {list.task} <Button onClick={() => toogleFinished(index)}>Concluir || Concluido</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>

    <Button onClick={onClickShowCards}>{showCards ? 'Esconder' : 'Mostrar'} Caixas</Button>
      <Wrapper title='Disciplina'>
        
        <div className={showCards ? 'show' : 'hide'}>
          {cardMock.length && cardMock.map((card) => (
            <Card title={card.title} text={card.text} complement={card.complement} />
          ))}
        </div>
      </Wrapper>
    <Wrapper title='Sobre o curso'>  
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto laudantium nisi deleniti.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto laudantium nisi deleniti.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto laudantium nisi deleniti.
        </p>
     
      </Wrapper>
    </>
  )
}

export default App
