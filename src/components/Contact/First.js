import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './First.css'
import logo from "../../images/雄感動-logo-直小.png"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function First() {

    const form = useRef();






    function handleFormSubmit(e) {
        e.preventDefault();
        emailjs.sendForm('service_rqwahxi', 'template_qkdbfpw', form.current, 'led64LImCW5d_B3Ex')
            .then(() => {
                // 成功提交後清空表單
                document.getElementById("user_name").value = "";
                document.getElementById("user_phone").value = "";
                document.getElementById("user_email").value = "";
                document.getElementById("message").value = "";
                alert("我們會盡快與您聯絡");

            }, (error) => {
                console.log('郵件發送失敗: ', error);
            });
    };

    return (
        <>

            <div className='zxc' id="upto">
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img className='im' src={logo} alt="" />
                </div>
                <div class="footer" style={{ height: "50%" }}>
                    <a href="/" style={{ textDecoration: "none" }}>回首頁</a>
                    <a href="https://www.facebook.com/siungsport/" style={{ textDecoration: "none" }}>臉書粉絲團</a>
                    <a href="https://www.google.com/maps?ll=22.604642,120.299884&z=16&t=m&hl=zh-TW&gl=US&mapclient=embed&q=806%E9%AB%98%E9%9B%84%E5%B8%82%E5%89%8D%E9%8E%AE%E5%8D%80%E5%BE%A9%E8%88%88%E5%9B%9B%E8%B7%AF10%E8%99%9F" style={{ textDecoration: "none" }}>服務位置</a>
                    <a href="/privary" style={{ textDecoration: "none" }}>隱私權政策</a>
                </div>
                <Form ref={form} onSubmit={handleFormSubmit} id="id" >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control id='user_name' name="user_name" type="user_name" placeholder="姓名" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control id='user_email' name="user_email" type="user_email" placeholder="信箱" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control id='user_phone' name="user_phone" type="user_phone" placeholder="聯絡電話" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control id='message' name="message" type="message" as="textarea" placeholder="您的留言" required />
                    </Form.Group>
                    <Button variant="primary" value="Send" type="submit">
                        送出
                    </Button>
                </Form>
            </div>


        </>
    );
};
export default First;