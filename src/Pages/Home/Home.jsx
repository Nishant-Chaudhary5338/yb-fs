import React from 'react'
import HeroSection from '../../components/HeroSection'
import About from '../../components/About'
import Qualities from '../../components/Qualities'
import Menu from '../../components/Menu'
import WhoAreWe from '../../components/WhoAreWe'
import Team from '../../components/Team'
import Reservation from '../../components/Reservation'
import Footer from '../../components/Footer'
import MealFinder from '../../components/MealFinder'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <About/>
      <Qualities/>
      <Menu/>
      <WhoAreWe/>
      <Team/>
      <Reservation/>
      <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2rem', width: '100%' }}>
  Find Recipe and Ingredients
</div>


      <Footer/>
    </>
  )
}

export default Home
