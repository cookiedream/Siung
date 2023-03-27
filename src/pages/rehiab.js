import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Contact from '../components/Contact/First'
// import First from '../components/Rehab/First';
import Second from '../components/Rehab/Second';

function Rehab() {

    return (
        <>
            <Navbar />
            {/* <First /> */}
            <Second />
            <Contact />
        </>
    );
}

export default Rehab;