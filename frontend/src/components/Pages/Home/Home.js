import React from 'react'
import '../../../App.css';
import HeroSection from '../../HeroSection/HeroSection';
import Navbar from '../../Navbar/Navbar';
import Cards from '../../Cards/Cards';
import Footer from '../../Footer/Footer';


function Home() {
    return (
        <>
            <HeroSection />
            <Navbar />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;