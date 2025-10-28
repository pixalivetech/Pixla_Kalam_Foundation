import React from 'react'
import Hero from "./Components/Home/Hero"
import About from "./Components/Home/About"
import Story from "./Components/Home/Story"
import Join from "./Components/Home/Joinus"
import Key from "./Components/Home/Key"
import Green from "./Components/Home/Greenmission"
import Donate from "./Components/Home/Donate"
import Testimonials from "./Components/Home/Testimonials"
import Gallery from "./Components/Home/Gallery"
import Volunteers from "./Components/Home/Volunteers"
import Promises from "./Components/Home/Promises"
import Footer from "./Components/Home/Footer"

const App = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Story/>
      <Join/>
      <Key/>
      <Green/>
      <Promises/>
      <Volunteers/>
      <Donate/>
      <Testimonials/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default App
