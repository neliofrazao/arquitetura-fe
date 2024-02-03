import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LayoutComponent } from './components/index.ts';
import { Disicplinas, DisciplinasDetalhe } from './pages/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutComponent />}>
          <Route index element={<App />} />
          <Route path='/disciplinas' element={<Disicplinas />} />
          <Route path='/disciplinas/:id' element={<DisciplinasDetalhe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
