import React from 'react'
import Header from './component/Header'
import HeroSection from './component/HeroSection'
import Footer from './component/Footer'
import LatestInsights from './component/LatestInsights'
import Spying from './component/Spying'
import StoryHelp from './component/StoryHelp'

const App = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <StoryHelp/>
      <Spying/>
      <LatestInsights/>
      
      <Footer/>
    </div>
  )
}

export default App