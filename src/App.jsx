import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Success from './Pages/Success/Success';
import './App.css'
import AboutPage from './Pages/about/AboutPage';
import Qualitypage from './Pages/qualities/Qualitypage';
import TeamPage from './Pages/team/TeamPage';
import Reservationpage from './Pages/reservations/Reservationpage';
import NewHeroSection from './Pages/heroSection/NewHeroSection';
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/qualities' element={<Qualitypage/>}/>
          <Route path='/team' element={<TeamPage/>}/>
          <Route path='/reservation' element={<Reservationpage/>}/>
          <Route path='/heroSection' element={<Home/>}/>
          
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Toaster/>
      </Router>
    </>
  )
}

export default App
