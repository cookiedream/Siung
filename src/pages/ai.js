import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Contact from '../components/Contact/First'
// import First from '../components/AI/First';
import Second from '../components/AI/Second';

function AI() {

    return (
        <>
            <Navbar />
            {/* <First /> */}
            <Second />
            <Contact />
        </>
    );
}

export default AI;