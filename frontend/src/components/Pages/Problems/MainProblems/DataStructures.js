import React from 'react'
import '../../../../App.css';
import Navbar from '../../../Navbar/Navbar';
import ProblemsPage from '../ProblemsPage';

function DataStructures() {
    return (
        <>
            <Navbar />
            <ProblemsPage 
                domain='veri yapıları'
                address='veri-yapilari'
            />
        </>
    );
}

export default DataStructures;