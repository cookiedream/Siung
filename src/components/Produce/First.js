import React from 'react'
import '../FristPage/First.css'
import spaceVideo from '../../videos/123.mp4'
const First = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id="video" style={{ zIndex: "-1" }}>
                <source src={spaceVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1 className='oip'>雄感動產品</h1>
                <p className='iop' >
                    玩家可在任何場域使用飛輪或單車設備，可選擇單人或多人遊戲，並透過VR或祼視3D顯示，讓玩家身歷其境，感受實際騎乘單車的速度及真實風速體感模擬，騎乘過程中會配合VR場景，會出現花香或檀香味道，讓玩家可感受大自然芬多精的氛圍。
                    玩家在運動過程中，系統會感測玩家的心率、速度及距離，並將資訊上傳至雲端平台，紀錄個人運動履歷及排行榜資料呈現，提供玩家打卡分享。
                </p>
            </div>
        </div>
    )
}

export default First
