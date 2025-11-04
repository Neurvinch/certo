import React from 'react'
import Header from './component/Header'
import HeroSection from './component/HeroSection'
import Footer from './component/Footer'
import LatestInsights from './component/LatestInsights'
import Spying from './component/Spying'
import StoryHelp from './component/StoryHelp'
import SecurityFocus from './component/SecurityFocus'

const App = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
       <SecurityFocus/>
      <Spying/>
      <LatestInsights/>
      <StoryHelp/>
      <Footer/>
    </div>
  )
}

export default App