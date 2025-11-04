import React from 'react'
import Header from './component/Header'
import HeroSection from './component/HeroSection'
import Footer from './component/Footer'
import LatestInsights from './component/LatestInsights'
import Spying from './component/Spying'

const App = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <Spying/>
      <LatestInsights/>
      <Footer/>
    </div>
  )
}

export default App