import React from 'react'
import '../style/back.css'
import logo from '../../images/logo.png'




function backnew() {


    return (
        <>

            {/* 以下為後台Navbar */}
            <div>
                <div>
                    <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{ padding: "0" }}>
                        <div class="container-fluid" style={{ backgroundColor: "rgba(var(--bs-primary-rgb)" }}>

                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="examplesl" style={{ justifyContent: "space-between" }}>
                                <div>
                                    <img src={logo} alt="" href="/" />
                                </div>
                                <div class="navbar-nav">
                                    <a class="nav-link a" href="/back/ar">AR</a>
                                    <a class="nav-link a" href="/back/vr">VR</a>
                                    <a class="nav-link a" href="/back/iot">IoT</a>
                                    <a class="nav-link a" href="/back/ai">AI</a>
                                    <a class="nav-link a" href="/back/Reh">復健</a>
                                    <a class="nav-link a" href="/back/Web">平台</a>
                                    <a class="nav-link a" href="/back/Suc">成功案例</a>
                                    <a class="nav-link a" href="/back/News">媒體曝光</a>
                                    {/* <a class="nav-link a" href="/back/Editor">文字編輯器</a> */}
                                </div>
                                <div>
                                    <a class="nav-link active" aria-current="page" href="/back">新增</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

            </div>
        </>
    )
}
export default backnew


