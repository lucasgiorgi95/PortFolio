import React from 'react'
import About from './components/About'
import Home from './components/Home'
import NavBar from './components/NavBar'
import SocialLinks from './components/SocialLinks'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Copy from './components/Copy'

function App() {

  return (
    <div className="App">
     <NavBar/>
     <Home/>
     <About/>
     <Portfolio/>
     <Experience/>
     <Copy/>


     <SocialLinks/>
    </div>
  )
}

export default App
