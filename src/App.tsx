import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FilmeDetalhe } from "./pages/filme-detalhe";
import { ListaFilmes } from "./pages/lista-filmes";
import "./style/global.css";
import { CriarFilme } from "./pages/criar-filme";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListaFilmes />} />
        <Route path="/filme/:id" element={<FilmeDetalhe />} />
        <Route path="/cadastrar-filme" element={<CriarFilme />} />
        <Route path="/editar-filme/:id" element={<CriarFilme />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
