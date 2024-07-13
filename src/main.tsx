import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Course, Home, Student } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Wrapper } from './shared';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper />} >
          <Route  index element={<Home />} />
          <Route path="/cursos" element={<Course />} />
          <Route path="/estudante" element={<Student />} />
        </Route>
      </Routes>   
    </BrowserRouter>
  </React.StrictMode>,
)
