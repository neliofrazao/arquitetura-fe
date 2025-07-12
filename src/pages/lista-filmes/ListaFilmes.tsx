import { BoxCard } from "../../components/box-card";
import { Container } from "../../shared/container";
import "../../style/lista-filmes.css";

const lista = [
  {
    id: 1,
    titulo: "Filme 1",
    genero: "Terror",
    estrelas: "Estrela 1",
    assistido: true,
  },
  {
    id: 2,
    titulo: "Filme 2",
    genero: "Ação",
    estrelas: "Estrela 2",
    assistido: false,
  },
];

export const ListaFilmes = () => {
  return (
    <Container
      title="Meus Filmes"
      actionButton={<button className="btn-primary">Adicionar Filme</button>}
    >
      <div className="lista-filmes-grid">
        {lista.map((filme) => (
          <BoxCard
            key={filme.id}
            title={filme.titulo}
            genre={filme.genero}
            stars={filme.estrelas}
            watched={filme.assistido}
          />
        ))}
      </div>
    </Container>
  );
};
