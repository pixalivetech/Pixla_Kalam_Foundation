import React from 'react'
import Hero from "./Components/Home/Hero"
import About from "./Components/Home/About"
import Story from "./Components/Home/Story"
import Join from "./Components/Home/Joinus"
import Key from "./Components/Home/Key"
import Green from "./Components/Home/Greenmission"
import Donate from "./Components/Home/Donate"
import Testimonials from "./Components/Home/Testimonials"

const App = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Story/>
      <Join/>
      <Key/>
      <Green/>
      <Donate/>
      <Testimonials/>
    </div>
  )
}

export default App
