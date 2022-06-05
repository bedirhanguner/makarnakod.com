import React from 'react'
import '../../../../App.css';
import Navbar from '../../../Navbar/Navbar';
import KitProblemsPage from '../KitProblemsPage';

function TwentyDaysOfJavascript() {
    return (
        <>
            <Navbar />
            <KitProblemsPage 
                domain='javascript'
                address='20-gunde-javascript-kiti'
            />
        </>
    );
}

export default TwentyDaysOfJavascript;