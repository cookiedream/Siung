import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Contact from '../components/Contact/First'
// import First from '../components/IoT/First';
import Second from '../components/IoT/Second';

function IoT() {

    return (
        <>
            <Navbar />
            {/* <First /> */}
            <Second />
            <Contact />
        </>
    );
}

export default IoT;