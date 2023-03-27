import React from 'react'
import spaceVideo from '../../videos/123.mp4'
import '../AI/First.css'
const First = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id="video">
                <source src={spaceVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>IoT物聯網</h1>
            </div>
        </div>
    )
}

export default First
