import React from 'react'
import '../../../../App.css';
import Navbar from '../../../Navbar/Navbar';
import KitProblemsPage from '../KitProblemsPage';

function FifteenDaysOfPythonPage() {
    return (
        <>
            <Navbar />
            <KitProblemsPage 
                domain='python'
                address='15-gunde-python-kiti'
            />
        </>
    );
}

export default FifteenDaysOfPythonPage;