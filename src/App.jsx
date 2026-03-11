import React, { useState } from 'react'
import './App.css'
import './Styles/main.scss'
import TopScroll from './section/TopScroll'
import Header from './section/Header'
import Hero from './section/Hero'
import Follow from './section/Follow'
import Collection from './section/Collection'
import Introduction from './section/introduction'


function App() {
  const [showTopBanner, setShowTopBanner] = useState(true);

  return (
    <div className='app'>
      <TopScroll showTopBanner={showTopBanner} setShowTopBanner={setShowTopBanner} />
      <Header showTopBanner={showTopBanner} />
      <Hero/>
      <Follow/>
      <Collection/>
      <Introduction/>
    </div>
  )
}

export default App
