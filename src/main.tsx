import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Course, Home, Student } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Wrapper } from './shared';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper />}> 
          <Route index element={<Home />} />
          <Route path="estudante" element={<Student />} />
          <Route path='cursos'>
            <Route index element={<Course />} />
            <Route path="professor" element={<div>Página de professor do curso</div>} />
            <Route path="*" element={<div>Professor não encontrado</div>} />
            {/* <Route path='/professor' element={<div>Professor do curso</div>} /> */}
          </Route>
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
       
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
