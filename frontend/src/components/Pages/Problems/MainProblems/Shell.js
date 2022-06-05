import React from 'react'
import '../../../../App.css';
import Navbar from '../../../Navbar/Navbar';
import ProblemsPage from '../ProblemsPage';

function Shell() {
    return (
        <>
            <Navbar />
            <ProblemsPage 
                domain='kabuk'
                address='kabuk'
            />
        </>
    );
}

export default Shell;