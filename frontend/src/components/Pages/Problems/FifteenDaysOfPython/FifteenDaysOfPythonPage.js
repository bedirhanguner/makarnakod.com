import React from 'react'
import '../../../../App.css';
import Navbar from '../../../Navbar/Navbar';
import ProblemsPage from '../ProblemsPage';

function FifteenDaysOfPythonPage() {
    return (
        <>
            <Navbar />
            <ProblemsPage 
                domain='python'
                address='15-gunde-python-kiti'
            />
        </>
    );
}

export default FifteenDaysOfPythonPage;