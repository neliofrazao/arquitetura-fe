import { useEffect, useState } from "react";
import { BoxCard } from "../../components/box-card";
import { Container } from "../../shared/container";
import "../../style/lista-filmes.css";
import type { Filme } from "../../shared/types";
import { Link } from "react-router-dom";

export const ListaFilmes = () => {
  const [filmes, setFilmes] = useState<Filme[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetch("http://localhost:3000/filmes")
      .then((response) => {
        // Verifica se a resposta é ok (status 200-299)
        if (!response.ok) {
          setError(true);
          throw new Error("Erro ao buscar filmes");
          
        }
        return response.json();
      })
      .then((data) => {
        setFilmes(data);
      })
      .catch((error) => {
        console.error("Erro:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="container">
        <p>Carregando...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <p>Erro ao carregar filmes.</p>
      </div>
    );
  }

  console.log("error:", error);

  return (
    <Container
      title="Exemplo"
      actionButton={<Link className="button-primary" to="/cadastrar-filme">Adicionar Filme</Link>}
    >
      <div className="lista-filmes-grid">
        {filmes?.length ? (
          filmes.map((filme) => (
            <BoxCard
              key={filme.id}
              id={filme.id}
              titulo={filme.titulo}
              genero={filme.genero}
              estrelas={filme.estrelas}
              assistido={filme.assistido}
            />
          ))
        ) : (
          <p>Nenhum filme encontrado.</p>
        )}
      </div>
    </Container>
  );
};
