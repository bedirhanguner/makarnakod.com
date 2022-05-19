import React from 'react'
import '../../../../App.css';
import Navbar from '../../../Navbar/Navbar';
import ProblemsPage from '../ProblemsPage';

function Database() {
    return (
        <>
            <Navbar />
            <ProblemsPage 
                domain='veritabanı'
                address='veritabani'
            />
        </>
    );
}

export default Database;