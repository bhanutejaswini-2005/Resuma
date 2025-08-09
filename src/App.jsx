import Content from './Content';
import Form from './Form';
import Login from './Login';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Resume from "./Resume";
<Route path="/resume" element={<Resume />} />

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/form" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  )
}

export default App