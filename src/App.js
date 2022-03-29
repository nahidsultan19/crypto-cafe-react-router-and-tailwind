import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Coins from './components/Coins/Coins';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import About from './components/About/About';
import CoinDetails from './components/CoinDetails/CoinDetails';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/coins' element={<Coins />} />
        <Route path='/coin-details/:id' element={<CoinDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
