import { useState } from 'react';
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
  const [showCards, setShowCards] = useState<boolean>(true)

  const onClickShowCards = () => {
    setShowCards(!showCards)
  }

  console.log(showCards)
  return (
    // fragmento do react, React.Fragment
    // <> =  Shortcut  do React.Fragment
    <>
    <button onClick={onClickShowCards}>{showCards ? 'Esconder' : 'Mostrar'} Caixas</button>
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
