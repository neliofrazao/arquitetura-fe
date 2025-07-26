import { useNavigate, useParams } from "react-router-dom";
import { Container } from "../../shared/container";
import { useEffect, useState } from "react";
import type { Filme } from "../../shared/types";
import "../../style/detalhe-filme.css";
import { fetchDetalheFilme } from "../../service/fetch-detalhe-filme";
import { Link } from "react-router-dom";
import { removerFilme } from "../../service/remover-filme";

interface FilmeDetalhes extends Filme {
  sinopse: string;
}

export const FilmeDetalhe = () => {
  // Obtém o ID do filme a partir dos parâmetros da rota
  // const { id } = useParams<{ id: string }>();
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState<FilmeDetalhes | null>(null);

  useEffect(() => {
    // Chama a função fetchDetalheFilme passando o ID do fil
    const fetchFilme = async () => {
      if (!id) {
        throw new Error("ID do filme não fornecido");
      }
      try {
        const data = await fetchDetalheFilme(id);
        setFilme(data);
      } catch (error) {
        console.error("Erro ao buscar detalhes do filme:", error);
      } finally {
        // Aqui você pode definir o estado de carregamento ou erro, se necessário
      }
    };
    fetchFilme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = async () => {
    if (!id) {
      throw new Error("ID do filme não fornecido");
    }
    try {
      await removerFilme(id);
      alert("Filme removido com sucesso!");
      navigate("/");
      
    } catch (error) {
      console.error("Erro ao remover o filme:", error);
    }
  }

  return (
    <Container
      title="Detalhes do Filme"
      actionButton={
        <div className="detalhes-filme-actions">
          <Link className="button-primary" to={"/"}>
            Voltar
          </Link>
           <Link className="button-primary" to={`/editar-filme/${id}`}>
            Editar Filme
          </Link>
          <button className="button-danger" onClick={handleDelete}>Deletar Filme</button>
        </div>
      }
    >
      <h2 className="title-movie">{filme?.titulo}</h2>
      <div className="box-card">
        <p>Gênero: {filme?.genero} </p>
        <p>Estrelas: {filme?.estrelas}</p>
        <p>Assistido: {filme?.assistido ? "Sim" : "Não"}</p>
        <p>Descrição: {filme?.sinopse}</p>
      </div>
    </Container>
  );
};
