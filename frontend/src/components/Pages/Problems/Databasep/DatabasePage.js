import React from 'react'
import '../../../../App.css';
import Navbar from '../../../Navbar/Navbar';
import ProblemsPage from '../ProblemsPage';

function DatabasePage() {
    return (
        <>
            <Navbar />
            <ProblemsPage 
                domain='betik'
                address='betik'
            />
        </>
    );
}

export default DatabasePage;