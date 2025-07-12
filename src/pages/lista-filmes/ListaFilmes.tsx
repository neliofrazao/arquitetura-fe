import { Container } from "../../shared/container";
import "../../style/lista-filmes.css";

export const ListaFilmes = () => {
  return (
    <Container 
      title="Meus Filmes"
      actionButton={<button className="btn-primary">Adicionar Filme</button>}>
      Qualquer texto aqui
    </Container>
  );
};
