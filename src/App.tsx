import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContainerWrapper } from './shared';
import { useEffect, useState } from 'react';
import { DisciplineResponse, getDisciplines } from './services';
import { Link } from 'react-router-dom';

function App() {
  // useState é um hook do React que permite adicionar estado a um componente de função.
  // Aqui, estamos inicializando o estado 'disciplines' com um array vazio e a função 'setDisciplines'
  // que nos permitirá atualizar esse estado no futuro.
  const [disciplines, setDisciplines] = useState<DisciplineResponse[]>([]);

  // useEffect é um hook do React que permite executar ações secundárias em componentes de função, como fazer solicitações de rede, manipular o
  // DOM ou interagir com o ambiente externo. Essas ações são chamadas de efeitos colaterais e podem ocorrer após a renderização do componente.
  // Neste caso, estamos usando-o para buscar as disciplinas ( assim que o componente
  // é montado (com o array de dependências vazio). Quando as disciplinas são recuperadas, atualizamos
  // o estado 'disciplines' com os dados retornados pela API.
  useEffect(() => {
    const fetchDisciplines = async () => {
      const response = await getDisciplines();
      setDisciplines(response);
    };
    fetchDisciplines();
  }, []);

  console.log(disciplines);

  if (!disciplines) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ContainerWrapper title='Disciplinas'>
        {/* Mapeia cada disciplina do array 'disciplines' */}
        {disciplines.map((discipline) => (
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{discipline.name}</Card.Title>
              <Card.Text>{discipline.description}</Card.Text>
              <Link to={`/disciplinas/${discipline.id}`}>
                <Button variant='primary'>Ver detalhes</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </ContainerWrapper>
    </>
  );
}

export default App;
