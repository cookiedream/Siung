import React from "react";
import './Second.css'
import logo from '../../images/雄感動DM.png'
import logo1 from '../../images/雄感動DM2.png'
import i1 from '../../images/ai.jpg'
import i4 from '../../images/iot.jpg'
import i2 from '../../images/vr.jpg'
import i3 from '../../images/ar.jpg'
import i5 from '../../images/web.jpg'
function SecondPage() {

    return (
        <>
            <div className="word" >
                <h1>雄感動服務核心</h1>
                <p className="o123">
                    青年衛生剛剛歷史非常金幣，網際快車很大歌曲有一種初步出生經銷商一塊官方共同基地，少年聽說，地位言論看過戰士消費者拿出明年臺東下列父親，影音你知道回事，運行金錢能夠女孩子加速成為可見附近水溝就業自然規範大家等方面，將軍全體，本書超市電話熱門食物不僅特性，集。
                </p>
                <br />
                <div style={{ display: "flex", flexDirection: "column", paddingBottom: "2rem", alignItems: "center", width: "-webkit-fill-available" }}>
                    <img src={logo} alt="" style={{ height: "auto", width: "100%" }} />
                    <br />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div class="container text-center" >
                            <div><h1 style={{ marginBottom: "0", marginTop: "1rem", backgroundColor: "rgb(225, 232, 251)" }}>主力產品</h1></div>
                            <div class="row align-items-center" style={{ marginBottom: "1rem" }}>
                                <div class="col-lg col-sm-12" >
                                    <br />
                                    <h4 className='q123' style={{ paddingTop: "0", backgroundColor: "rgb(225, 232, 251)" }}>銀髮復健</h4>
                                    <br />
                                    <a href="Rehab"><img src={i4} alt='123' /></a>
                                </div>
                                <div class="col-lg col-sm-12">
                                    <br />
                                    <h4 className='q123' style={{ paddingTop: "0", backgroundColor: "rgb(225, 232, 251)" }}>運動履歷</h4>
                                    <br />
                                    <a href="IoT"><img src={i1} alt='123' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <img src={logo1} alt="" style={{ height: "auto", width: "100%" }} />
                </div>
            </div >
            <div style={{ backgroundColor: "#E1E8FB", display: "flex", flexDirection: "column" }}>
                <div><h1 className="asdf" style={{ display: "flex", justifyContent: "center", paddingTop: "1rem" }}>其他產品</h1></div>
                <div class="container text-center" >
                    <div class="row align-items-center">
                        <div class="col-lg-2 col-md-4 col-sm-12">
                            <h5 className='q123' style={{ paddingBottom: "0.5rem" }}>IoT物聯網</h5>
                            <a href="iot"><img src={i4} alt='123' style={{ width: "80%" }} /></a>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-12">
                            <h5 className='q123' style={{ paddingBottom: "0.5rem" }}>AI影像辨識</h5>
                            <a href="ai"><img src={i1} alt='123' style={{ width: "80%" }} /></a>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-12">
                            <h5 className='q123' style={{ paddingBottom: "0.5rem" }}>AR擴增實境</h5>
                            <a href="ar"><img src={i3} alt='123' style={{ width: "80%" }} /></a>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-12">
                            <h5 className='q123' style={{ paddingBottom: "0.5rem" }}>VR虛擬實境</h5>
                            <a href="vr"><img src={i2} alt='123' style={{ width: "80%" }} /></a>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-12">
                            <h5 className='q123' style={{ paddingBottom: "0.5rem" }}>平台設計</h5>
                            <a href="web"><img src={i5} alt='123' style={{ width: "80%" }} /></a>
                        </div>
                    </div>
                    <br />
                </div>

            </div>



        </>
    )
}

export default SecondPage;