import './App.css';
import { Routes, Route } from 'react-router-dom';
import Heading from './Component/Heading';
import List from './Component/List';
import Upload from './Component/Upload';

function App() {
  return (
    <>
    안녕안녕
    <Heading />
    <Routes>
      <Route path='/list' element={<List />} />
      <Route path='/Upload' element={<Upload />} />
    </Routes>
    </>
  );
}

export default App;
