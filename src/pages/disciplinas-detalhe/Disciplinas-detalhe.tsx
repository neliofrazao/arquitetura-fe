import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { DisciplineResponse, getDiscipline } from '../../services';

export const DisciplinasDetalhe = () => {
  const [discipline, setDiscipline] = useState<DisciplineResponse>({} as DisciplineResponse);
  const [isLoad, setIsload] = useState(false);
  // useParams() é um hook do React Router que permite acessar os parâmetros da URL definidos nas rotas. Quando uma rota corresponde
  // a uma URL com parâmetros, como por exemplo /disciplinas/:id(Olhar as rotas no aqrquivo main.tsx), o React Router extrai esses parâmetros e os
  // disponibiliza por meio do hook useParams().
  // No caso desse código, estamos desestruturando o objeto retornado por useParams() e pegando o valor do parâmetro id. Isso significa
  // que se a URL atual corresponder a /disciplinas/123, id terá o valor '123'.
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchDiscipline = async () => {
      try {
        setIsload(true);
        const response = await getDiscipline(id as string);
        setDiscipline(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsload(false);
      }
    };
    fetchDiscipline();
  }, []);

  if (!isLoad) {
    return <div>Loading...</div>;
  }

  if (!discipline) {
    return <div>Disciplina não encontrada</div>;
  }

  console.log(discipline);

  return (
    <>
      <h2>Disicplinas Detalhe</h2>
      <p>{discipline.name}</p>
      <p>{discipline.description}</p>
      <p>{discipline.professor}</p>
      <p>{discipline.status}</p>

      {/* <Navbar />
      <ContainerWrapper title='Alunos'>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </Card.Text>
            <Button variant='primary'>Go somewhere</Button>
          </Card.Body>
        </Card>
      </ContainerWrapper>

      <ContainerWrapper title='Disciplinas'>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </Card.Text>
            <Button variant='primary'>Go somewhere</Button>
          </Card.Body>
        </Card>
      </ContainerWrapper>

      <Footer /> */}
    </>
  );
};
