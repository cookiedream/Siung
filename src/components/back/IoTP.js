import React, { useEffect } from "react";
import Navbar from './back'
import '../style/back.css'
import axios from "axios";
import { Link } from "react-router-dom";
import '../style/css.css'
import api from "../axios";

function Second() {

    const [post, setPost] = React.useState([])

    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    useEffect(() => {
        async function fetchData() {
            const res = await api.getProduct.get('/IoT');
            setPost(res.data.productList);
        }
        fetchData();
    }, []);


    const handleClick = (id) => {
        const res = window.confirm('確定是否要刪除');
        if (res) {
            axios.delete(`https://siungsport-api.siungsport.com/product/product/${id}`)
                .then(() => {
                    window.location.reload();
                });
        } else {
        }
    };






    return (

        <>

            <Navbar />
            <div className="container">
                <div className="py-4">
                    <table className="table border shadow">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">產品名稱</th>
                                <th scope="col" style={{ width: "20%" }}>圖片</th>
                                <th scope="col" style={{ width: "20%" }}>第一段文字</th>
                                <th scope="col" style={{ width: "20%" }}>第二段文字</th>
                                <th scope="col" style={{ width: "20%" }}>影片</th>
                                <th scope="col">功能</th>
                            </tr>
                        </thead>
                        <tbody>
                            {post.map((IoT, index) => {
                                return (
                                    <tr >
                                        <th scope='row' key={index}>
                                            {index + 1}
                                        </th>
                                        <td>{IoT.name}</td>
                                        <td>
                                            <img className="" src={IoT.img1} alt="" />
                                            <img className="" src={IoT.img2} alt="" />
                                            <img className="" src={IoT.img3} alt="" />
                                            <img className="" src={IoT.img4} alt="" />
                                            <img className="" src={IoT.img5} alt="" />
                                        </td>
                                        <td>
                                            <p>{IoT.desc1}</p>
                                        </td>
                                        <td>
                                            {IoT.desc2}
                                        </td>
                                        <td>
                                            <video width="" height="" controls src={IoT.chvideo} />
                                            {/* <video width="" height="" controls src={IoT.envideo} /> */}
                                        </td>
                                        <td>
                                            <Link
                                                className="btn btn-outline-primIoTy mx-2 "
                                                style={{ backgroundColor: "lightgreen", marginBottom: "1rem" }}
                                                to={`/edit/${IoT.id}`}
                                            >
                                                編輯
                                            </Link>
                                            <Link
                                                className="btn btn-outline-primIoTy mx-2"
                                                onClick={() => handleClick(IoT.id)}
                                                style={{ backgroundColor: "red", color: "black" }}
                                            >
                                                刪除
                                            </Link>
                                            {/* <Modal show={show} onHide={handleClose}>
                                                <Modal.Body
                                                    style={{ display: "flex", alignItems: "center" }}
                                                >確定要刪除</Modal.Body>
                                                <Modal.Footer>
                                                    <Button vIoTiant="secondIoTy" onClick={handleClose}>
                                                        取消
                                                    </Button>
                                                    <Button vIoTiant="secondIoTy"
                                                        onClick={() => postDelete(IoT.id)}
                                                    >
                                                        確定
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal> */}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )

}



export default Second;