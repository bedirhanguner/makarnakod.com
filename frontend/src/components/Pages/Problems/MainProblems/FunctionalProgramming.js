import React from 'react'
import '../../../../App.css';
import Navbar from '../../../Navbar/Navbar';
import ProblemsPage from '../ProblemsPage';

function FunctionalProgramming() {
    return (
        <>
            <Navbar />
            <ProblemsPage 
                domain='fonksiyonel programlama'
                address='fonksiyonel-programlama'
            />
        </>
    );
}

export default FunctionalProgramming;