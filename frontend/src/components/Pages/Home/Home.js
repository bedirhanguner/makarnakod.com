import React from 'react'
import '../../../App.css';
import HeroSection from '../../HeroSection/HeroSection';
import Navbar from '../../Navbar/Navbar';
import Cards from '../../Cards/Cards';
import Footer from '../../Footer/Footer';
//import Transition from '../../Transition/Transition'


function Home() {
    return (
        <>
            <HeroSection />
            <Navbar />
            <Cards />
            {/*<Transition />*/}
            <Footer />
        </>
    );
}

export default Home;