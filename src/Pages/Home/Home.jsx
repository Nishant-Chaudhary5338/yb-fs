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
  const redirectToNewPage = () => {
    window.location.href = "https://endearing-capybara-4446ec.netlify.app/";
  }
  
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
  <a href="https://endearing-capybara-4446ec.netlify.app/" target='#' onClick={() => redirectToNewPage()}>Click here to Find Recipe and Ingredients</a>
</div>



      <Footer/>
    </>
  )
}

export default Home
