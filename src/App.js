import './App.css';
import News from './components/News';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Footer from './components/Footer';
import Beverages from './components/Beverages';
import { createContext, useContext } from 'react';
import beverage from './modals/beverage';

export const bevContext = createContext()

function App() {

  return (

    <div className="App">
      <bevContext.Provider value={beverage}>
        <Navbar />
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/News' element={<News />} />
        </Routes>
        <Footer/>
      </bevContext.Provider>
    </div >

  );
}

export default App;
