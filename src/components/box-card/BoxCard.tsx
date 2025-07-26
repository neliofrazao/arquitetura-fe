import { Link } from "react-router-dom";
import type { Filme } from "../../shared/types";

type BoxCardProps = Filme;

export const BoxCard = ({ id, titulo, genero, estrelas, assistido }: BoxCardProps) => {
  return (
    <div className="box-card">
      <h3>{titulo}</h3>
      <p>Gênero: {genero}</p>
      <p>Estrelas: {estrelas}</p>
      <p>{assistido ? "Assistido" : "Não Assistido"}</p>
      <Link to={`/filme/${id}`} className="btn-secondary">
        Detalhes
      </Link>
    </div>
  );
};
