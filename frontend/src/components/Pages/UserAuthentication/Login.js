import React from 'react'
import HeroSection from '../../HeroSection/HeroSection';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

function Home() {
    return (
        <>
            <Navbar />
            <div>
                {/* login form */}
                <h1>Login</h1>
                <form>
                    <label>
                        Email:
                        <input type="text" name="email" required />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" required />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            {/*<Transition />*/}
            <Footer />
        </>
    );
}

export default Home;