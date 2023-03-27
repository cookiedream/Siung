import React from "react";
import './First.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import l1 from '../../images/1.jpg'
import l2 from '../../images/2.jpg'
import l3 from '../../images/3.jpg'
import l4 from '../../images/4.jpg'
import l5 from '../../images/5.jpg'


const First = () => {


    return (
        <>
            <div >
                <Carousel >
                    <div className="slide">
                        <img src={l1} alt="" />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                    <div className="slide">
                        <img src={l2} alt="" />
                        {/* <p className="legend">Legend 2</p> */}
                    </div>
                    <div className="slide">
                        <img src={l3} alt="" />
                        {/* <p className="legend">Legend 3</p> */}
                    </div>
                    <div className="slide">
                        <img src={l4} alt="" />
                        {/* <p className="legend">Legend 4</p> */}
                    </div>
                    <div className="slide">
                        <img src={l5} alt="" />
                        {/* <p className="legend">Legend 5</p> */}
                    </div>
                </Carousel>
            </div>

        </>
    )
}

export default First
