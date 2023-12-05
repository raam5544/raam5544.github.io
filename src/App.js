import './App.css';
import News from './components/News';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Footer from './components/Footer';
import Beverages from './components/Beverages';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/News' element={<News />} />
      </Routes>
      <Beverages/>
      <Footer />
    </div>
  );
}

export default App;
