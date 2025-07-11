// App.tsx
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  Link,
} from "react-router-dom";
import ListaFilmes from "./pages/ListaFilmes";

interface Filme {
  id: number;
  titulo: string;
  genero: string;
  estrelas: number;
  sinopse: string;
  assistido: boolean;
}



function DetalhesFilme() {
  const { id } = useParams();
  const [filme, setFilme] = useState<Filme | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/filmes/${id}`)
      .then((res) => res.json())
      .then(setFilme);
  }, [id]);

  if (!filme) return <p>Carregando...</p>;

  return (
    <div className="detalhes">
      <h2>{filme.titulo}</h2>
      <p><strong>Gênero:</strong> {filme.genero}</p>
      <p><strong>Estrelas:</strong> {"★".repeat(filme.estrelas)}</p>
      <p><strong>Status:</strong> {filme.assistido ? "Assistido" : "Não assistido"}</p>
      <p><strong>Sinopse:</strong> {filme.sinopse}</p>
      <Link to="/filmes">Voltar</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListaFilmes />} />
        <Route path="/filmes/:id" element={<DetalhesFilme />} />
        <Route path="*" element={<p>404 - Página não encontrada</p>} />
      </Routes>
    </Router>
  );
}

export default App;