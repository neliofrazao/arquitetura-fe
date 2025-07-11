import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListaFilmes from "./pages/lista-filmes/ListaFilmes";
import DetalhesFilme from "./pages/detalhe-fime/DetalheFilme";
import CadastrarFilme from "./pages/cadastrar-filme/CadastrarFilme";
import EditarFilme from "./pages/editar-filme/EditarFilme";
import "./style/global.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListaFilmes />} />
        <Route path="/filmes/:id" element={<DetalhesFilme />} />
        <Route path="/cadastrar-filme" element={<CadastrarFilme/>} />
        <Route path="/editar-filme/:id" element={<EditarFilme />} />
        {/* Adicione outras rotas conforme necessário */}
        <Route path="*" element={<p>404 - Página não encontrada</p>} />
      </Routes>
    </Router>
  );
}

export default App;
