import React from 'react'

import About from "./../Components/Home/About"
import Story from "./../Components/Home/Story"
import Join from "./../Components/Home/Joinus"
import Key from "./../Components/Home/Key"
import Green from "./../Components/Home/Greenmission"
import Donate from "./../Components/Home/Donate"
import Testimonials from "./../Components/Home/Testimonials"
import Gallery from "./../Components/Home/Gallery"
import Volunteers from "./../Components/Home/Volunteers"
import Promises from "./../Components/Home/Promises"


const App = () => {
  return (
    <div>
      
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
      
    </div>
  )
}

export default App
