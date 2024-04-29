import React from 'react'
import HeroSection from '../../components/HeroSection'

const NewHeroSection = () => {
  return (
    <div>
        <HeroSection />
        <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2rem', width: '100%' }}>
  <a href="https://food-api-bhawna.netlify.app/" target='#' onClick={() => redirectToNewPage()}>Click here to Find Recipe and Ingredients</a>
</div>
    </div>
  )
}

export default NewHeroSection