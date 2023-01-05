import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Heading from './Component/Heading';
import List from './Component/Post/List';
import Upload from './Component/Post/Upload';
import Detail from './Component/Post/Detail';

function App() {

  return (
    <>
    <Heading />
    <Routes>
      <Route path='/' element={<List />} />
      <Route path='/upload' element={<Upload/>} />
      <Route path='/post/:postNum' element={<Detail/>} />
    </Routes>
    </>
  );
}

export default App;
