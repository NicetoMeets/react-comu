import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Heading from './Component/Heading';
import List from './Component/Post/List';
import Upload from './Component/Post/Upload';

function App() {
  const [contentList, setContentList] = useState([]);
  return (
    <>
    <Heading />
    <Routes>
      <Route path='/' 
      element={<List contentList={contentList} setContentList={setContentList}/>} />
      <Route path='/Upload' 
      element={<Upload contentList={contentList} setContentList={setContentList}/>} />
    </Routes>
    </>
  );
}

export default App;
