import React from 'react'
import '../../../../App.css';
import Navbar from '../../../Navbar/Navbar';
import KitProblemsPage from '../KitProblemsPage';

function FifteenDaysOfPython() {
    return (
        <>
            <Navbar />
            <KitProblemsPage 
                domain='mülakat soruları'
                address='mulakat-hazirlanma-kiti'
            />
        </>
    );
}

export default FifteenDaysOfPython;