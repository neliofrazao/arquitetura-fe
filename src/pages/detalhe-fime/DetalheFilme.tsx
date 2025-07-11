import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../../style/detalhe-filme.css";

interface Filme {
  id: number;
  titulo: string;
  genero: string;
  estrelas: number;
  sinopse: string;
  assistido: boolean;
}

export default function DetalhesFilme() {
  const { id } = useParams();
  const [filme, setFilme] = useState<Filme | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/filmes/${id}`)
      .then((res) => res.json())
      .then(setFilme);
  }, [id]);

  const handleDelete = async () => {
    if (!filme) return;
    if (!window.confirm("Tem certeza que deseja deletar este filme?")) return;
    await fetch(`http://localhost:3000/filmes/${filme.id}`, { method: "DELETE" });
    alert("Filme deletado");
    navigate('/')
  };

  if (!filme) return <p>Carregando...</p>;

  return (
    <div className="container">
      <header className="container-header">
        <h1>Meus Filmes</h1>
        <div className="detalhes-filme-actions">
          <button className="button-primary" onClick={()=>navigate(`/editar-filme/${id}`)}>Editar filme</button>
          <button onClick={handleDelete} className="button-danger">Deletar filme</button>
        </div>
      </header>
      <h2>{filme.titulo}</h2>
      <div className="detalhes-filme-info">
        <p><strong>Gênero:</strong> {filme.genero}</p>
        <p><strong>Estrelas:</strong> {filme.estrelas}</p>
        <p><strong>Status:</strong> {filme.assistido ? "Assistido" : "Não assistido"}</p>
        <p><strong>Sinopse:</strong> {filme.sinopse}</p>
      </div>
      <Link to="/" className="link">Voltar</Link>
    </div>
  );
}