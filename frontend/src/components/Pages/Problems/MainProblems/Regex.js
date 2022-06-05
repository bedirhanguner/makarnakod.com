import React from 'react'
import '../../../../App.css';
import Navbar from '../../../Navbar/Navbar';
import ProblemsPage from '../ProblemsPage';

function Regex() {
    return (
        <>
            <Navbar />
            <ProblemsPage 
                domain='regex'
                address='regex'
            />
        </>
    );
}

export default Regex;