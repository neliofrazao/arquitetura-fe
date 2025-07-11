import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListaFilmes from "./pages/lista-filmes/ListaFilmes";
import DetalhesFilme from "./pages/detalhe-fime/DetalheFilme";
import "./style/global.css";

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
