import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FilmeDetalhe } from "./pages/filme-detalhe";
import { ListaFilmes } from "./pages/lista-filmes";
import "./style/global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListaFilmes />} />
        <Route path="/filme/:id" element={<FilmeDetalhe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
