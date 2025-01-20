import React from 'react'
import Header from '../components/Header'
import HeroImage from '../components/HeroImage'
import Services from '../components/Services'
import Info from '../components/Info'
import About from '../components/About'
import Footer from '../components/Footer'

function Home() {
return (
    <div>
            <Header className="fixed" />
            <HeroImage />
            <Services />
            <Info />
            <About />
            <Footer />
            
    </div>
)
}

export default Home