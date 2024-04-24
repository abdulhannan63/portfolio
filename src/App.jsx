import React from 'react'
import './App.css'
import Navbar from './components/NavBar/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import MyWork from './components/MyWork/MyWork'
import Contact from './Contact/Contact'
import Skill from './Skill/Skill'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar  />
      <Header />
      <About />
      <MyWork />
      <Skill />
      <Contact />
      <Footer />
    </>
  )
}

export default App