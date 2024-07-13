import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Course, CourseDetail, Home, Student } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Wrapper } from './shared';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper />} >
          <Route  index element={<Home />} />
          <Route path="/cursos" element={<Course />} />
          <Route path="/cursos/:id" element={<CourseDetail />} />
          <Route path="/cursos/novo-curso" element={<CourseDetail />} />
          <Route path="/cursos/editar-curso/:id" element={<p>Editar Curso</p>} />
          <Route path="/estudante" element={<Student />} />
        </Route>
      </Routes>   
    </BrowserRouter>
  </React.StrictMode>,
)
