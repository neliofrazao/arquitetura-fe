import './App.css'
import { Card } from './components';
import { Wrapper } from './shared'

interface Cards {
  title?: string,
  text: string,
  complement?: string
}


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



function App() {
  return (
    // fragmento do react, React.Fragment
    // <> =  Shortcut  do React.Fragment
    <>
      <Wrapper title='Disciplina'>
        <>
          {cardMock.length && cardMock.map((card) => (
            <Card title={card.title} text={card.text} complement={card.complement} />
          ))}
        </>
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
