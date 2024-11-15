import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Add from './pages/Add';
import Header from './components/Header';
import Footer from './components/Footer';
import Edit from './pages/Edit';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
