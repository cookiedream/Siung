import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import First from '../components/FristPage/First'
import Second from '../components/FristPage/Second'
import Thirth from '../components/FristPage/Thirth';
import Contact from '../components/Contact/First'

function Home() {

    return (
        <>
            <Navbar />
            <First />
            <Second />
            <Thirth />
            <Contact />
        </>
    );
}

export default Home;
