interface BoxCardProps {
  title: string;
  genre: string;
  stars: string;
  watched: boolean;
}

export const BoxCard = ({ title, genre, stars, watched }: BoxCardProps) => {
  return (
    <div className="box-card">
      <h3>{title}</h3>
      <p>Gênero: {genre}</p>
      <p>Estrelas: {stars}</p>
      <p>{watched ? "Assistido" : "Não Assistido"}</p>
      <a href="#" className="btn-secondary">
        Detalhes
      </a>
    </div>
  );
};
