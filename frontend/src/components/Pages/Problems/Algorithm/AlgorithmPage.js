import React from 'react'
import '../../../../App.css';
import Navbar from '../../../Navbar/Navbar';
import ProblemsPage from '../ProblemsPage';

function AlgorithmPage() {
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

export default AlgorithmPage;