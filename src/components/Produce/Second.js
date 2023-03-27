import React from 'react'
import Card from 'react-bootstrap/Card';
import './Second.css'
import i1 from '../../images/ai.jpg'
import i2 from '../../images/vr.jpg'
import i3 from '../../images/ar.jpg'
import i4 from '../../images/iot.jpg'
import i5 from '../../images/web.jpg'
import i from '../../images/reb.jpg'




function Second() {
    return (
        <Card>
            <div>
                <h1 className='asd'>產品大項</h1>
                <div class="ppp">
                    <a className='www' href="Rehab"><img src={i} class="img-fluid1" alt="" /></a>
                    <h5 className='q123'>復健器材</h5>
                </div>

                <div class="container text-center">
                    <div class="row align-items-center">
                        <div class="col-lg-2 col-md-4 col-sm-12">
                            <a href="iot"><img src={i4} alt='123' /></a>
                            <h5 className='q123'>IoT物聯網</h5>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-12">
                            <a href="ai"><img src={i1} alt='123' /></a>
                            <h5 className='q123'>AI影像辨識</h5>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-12">
                            <a href="ar"><img src={i3} alt='123' /></a>
                            <h5 className='q123'>AR擴增實境</h5>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-12">
                            <a href="vr"><img src={i2} alt='123' /></a>
                            <h5 className='q123'>VR虛擬實境</h5>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-12">
                            <a href="web"><img src={i5} alt='123' /></a>
                            <h5 className='q123'>平台設計</h5>
                        </div>
                    </div>
                </div>
            </div>
        </Card >
    )
}

export default Second