import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LayoutComponent } from './components/index.ts';
import { Disicplinas, DisciplinasDetalhe } from './pages/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Define o contexto do navegador para as rotas */}
      <Routes>
        {/* Define as rotas */}
        <Route path='/' element={<LayoutComponent />}>
          {/* Define o componente de layout para a rota raiz */}
          <Route index element={<App />} />
          {/* Define o componente App como o elemento inicial da rota raiz */}
          <Route path='/disciplinas' element={<Disicplinas />} />
          {/* Define a rota para a página de disciplinas */}
          <Route path='/disciplinas/:id' element={<DisciplinasDetalhe />} />
          {/* Define a rota para a página de detalhes da disciplina com base no ID */}
        </Route>{' '}
        {/* Fim da rota raiz */}
      </Routes>{' '}
      {/* Fim das rotas */}
    </BrowserRouter>{' '}
    {/* Fim do contexto do navegador */}
  </React.StrictMode>

  //<BrowserRouter>: Este componente fornece o contexto do navegador para as rotas. Ele deve envolver todas as rotas da aplicação.
  //<Routes>: Este componente define as rotas da aplicação.
  //<Route path='/'>: Define a rota raiz da aplicação. O componente LayoutComponent será renderizado para todas as rotas filhas dentro desta rota.
  //<Route index>: Define o componente App como o componente inicial da rota raiz, ou seja, ele será renderizado quando a rota raiz for acessada.
  //<Route path='/disciplinas'>: Define a rota para a página de disciplinas. Quando a URL corresponder a /disciplinas, o componente Disciplinas será renderizado.
  //<Route path='/disciplinas/:id'>: Define a rota para a página de detalhes da disciplina com base no ID. Quando a URL corresponder a
  // /disciplinas/:id, o componente DisciplinasDetalhe será renderizado, recebendo o ID da disciplina como parâmetro.
);
