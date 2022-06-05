import React from 'react'
import '../../../../App.css';
import Navbar from '../../../Navbar/Navbar';
import ProblemsPage from '../ProblemsPage';

function Algorithm() {
    return (
        <>
            <Navbar />
            <ProblemsPage 
                domain='algoritma'
                address='algoritma'
            />
        </>
    );
}

export default Algorithm;