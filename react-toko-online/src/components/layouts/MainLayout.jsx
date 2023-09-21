import React from 'react'
import HeroSection from './Hero/HeroSection'
import Footer from './footer/Footer'
import Navbar from '../navbar/navbar'

const MainLayout = ({ children, showHeader = true }) => {
    return (
        <>
            {showHeader && <Navbar />}
            <HeroSection />
            {children}
            <Footer />
        </>
    )
}

export default MainLayout