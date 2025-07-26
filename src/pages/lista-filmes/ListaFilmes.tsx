import { useEffect, useState } from "react";
import { BoxCard } from "../../components/box-card";
import { Container } from "../../shared/container";
import "../../style/lista-filmes.css";
import type { Filme } from "../../shared/types";
import { Link, useSearchParams } from "react-router-dom";

export const ListaFilmes = () => {
  const [filmes, setFilmes] = useState<Filme[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const queryString = searchParams.toString();
    fetch(`http://localhost:3000/filmes?${queryString}`)
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
  }, [searchParams]);

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

  console.log("searchParams", searchParams);

  return (
    <Container
      title="Meus filmes"
      actionButton={
        <Link className="button-primary" to="/cadastrar-filme">
          Adicionar Filme
        </Link>
      }
    >
      <div className="filtros">
        <input
          type="text"
          placeholder="Buscar por título"
          className="input-text"
          value={searchParams.get("titulo") || ""}
          onChange={(e) => { setSearchParams({ titulo: e.target.value }); }}
        />
        <button className="button-primary" onClick={() => setSearchParams({})}>Limpar busca</button>
      </div>

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
