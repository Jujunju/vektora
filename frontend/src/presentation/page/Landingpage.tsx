import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Service from '../components/Service'
import Contact from '../components/Contact'

function Landingpage() {
  return (
    <div className=''>
        <Navbar/>
        <main>
          <Hero/>
          <About/>
          <Service/>
          <Contact/>
        </main>
    </div>
  )
}

export default Landingpage