import React from 'react'
import ThemeToggle from '../Components/ThemeToggle'
import Background from '../Components/Background'
import { Navbar } from '../Components/Navbar'
import {HeroSection} from '../Components/HeroSection'
import {AboutSection} from '../Components/AboutSection'
import {Skills} from '../Components/Skills'
import {ProjectSection} from '../Components/ProjectSection'
import {ContactSection} from '../Components/ContactSection'
import { Footer } from '../Components/Footer'



function Home() {
  return (
    <div className='min-h-screen'>
     {/*theme toggle  */}
     <ThemeToggle/>
     {/*Background */}
     <Background/>
     {/*Navbar */}
     <Navbar/>
     {/*Main Content */}
    
     <main>
       <HeroSection/>
       <AboutSection/>
       <Skills/>
       <ProjectSection/>
       <ContactSection/>
      
       
     </main>
     <Footer/>
       
    </div>
  )
}

export default Home
