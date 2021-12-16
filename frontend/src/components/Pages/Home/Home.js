import React from 'react'
import '../../../App.css';
import HeroSection from '../../HeroSection/HeroSection';
import Navbar from '../../Navbar/Navbar';
import Cards from '../../Cards/Cards';
import Footer from '../../Footer/Footer';
import Dashboard from '../Dashboard/Dashboard';

function Home() {
    return (
        <>
            <HeroSection />
            <Navbar />
            <Dashboard />
            {/*<Cards />*/}
            {/*<Transition />*/}
            <Footer />
        </>
    );
}

export default Home;