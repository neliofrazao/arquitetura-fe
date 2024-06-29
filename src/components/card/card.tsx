import './card.css'

interface CardProps {
  title?: string
  text: string
  complement?: string //indica que complement é opcional
}

export const Card = ({title ='Título Padrão', text, complement}: CardProps): JSX.Element => {
  return(
  <div className='box'>
    <h1>{title} </h1>
    <p>{text}</p>
    {complement ? <p>{complement}</p> : null}
  </div>
)}
