import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Course, Home, Student } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes >
        <Route index element={<Home />} />
        <Route path="/estudante" element={<Student />} />
        <Route path='/cursos' element={<Course />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
