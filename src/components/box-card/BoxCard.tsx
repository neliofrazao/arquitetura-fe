import type { Filme } from "../../shared/types";

type BoxCardProps = Omit<Filme, "id">

export const BoxCard = ({ titulo, genero, estrelas, assistido }: BoxCardProps) => {
  return (
    <div className="box-card">
      <h3>{titulo}</h3>
      <p>Gênero: {genero}</p>
      <p>Estrelas: {estrelas}</p>
      <p>{assistido ? "Assistido" : "Não Assistido"}</p>
      <a href="#" className="btn-secondary">
        Detalhes
      </a>
    </div>
  );
};
