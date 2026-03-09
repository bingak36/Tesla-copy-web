import './App.css'
import './Styles/main.scss'
import TopScroll from './section/TopScroll'
import Header from './section/Header'
import Hero from './section/Hero'
import Follow from './section/Follow'

function App() {

  return (
    <div className='app'>
      <TopScroll />
      <Header/>
      <Hero/>
      <Follow/>
    </div>
  )
}

export default App
