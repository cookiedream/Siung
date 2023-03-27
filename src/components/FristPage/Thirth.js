import React from "react";
import Carousel from "react-elastic-carousel";
import './Thirth.css'


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

function Thirth() {
    return (
        <>
            <h1 className="class" style={{ textAlign: "center" }}>合作夥伴</h1>
            <div className="App">
                <Carousel breakPoints={breakPoints}>
                    <img src={require('../../images/1.png')} alt="" />
                    <img src={require('../../images/2.png')} alt="" />
                    <img src={require('../../images/3.png')} alt="" />
                    <img src={require('../../images/4.png')} alt="" />
                    <img src={require('../../images/5.png')} alt="" />
                    <img src={require('../../images/6.png')} alt="" />
                    <img src={require('../../images/7.png')} alt="" />
                    <img src={require('../../images/8.png')} alt="" />
                </Carousel>
            </div>
        </>
    );
}
export default Thirth
