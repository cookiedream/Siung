import Navbar from './back'
import '../style/back.css'
import axios from "axios";
import { Link } from "react-router-dom";
import '../style/css.css'
import React, { useEffect } from "react";
import api from "../axios";

function Second() {

    const [post, setPost] = React.useState([])

    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    useEffect(() => {
        async function fetchData() {
            const res = await api.getProduct.get('/AI');
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



    // async function postDelete(id) {
    //     await axios.delete(`https://dev003.iiiavr.ml/product/product/${id}`)
    //         .then((res) => {
    //             if (res.status === 200) { 
    //                     window.location.reload();
    //             } else {
    //                 alert("刪除失敗。")
    //             }
    //         });

    // }






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
                            {post.map((AI, index) => {
                                return (
                                    <tr >
                                        <th scope='row' key={index}>
                                            {index + 1}
                                        </th>
                                        <td>{AI.name}</td>
                                        <td>
                                            <img className="" src={AI.img1} alt="" />
                                            <img className="" src={AI.img2} alt="" />
                                            <img className="" src={AI.img3} alt="" />
                                            <img className="" src={AI.img4} alt="" />
                                            <img className="" src={AI.img5} alt="" />
                                        </td>
                                        <td>
                                            <p>{AI.desc1}</p>
                                        </td>
                                        <td>
                                            {AI.desc2}
                                        </td>
                                        <td>
                                            <video width="" height="" controls src={AI.chvideo} />
                                            {/* <video width="" height="" controls src={AI.envideo} /> */}
                                        </td>
                                        <td>
                                            <Link
                                                className="btn btn-outline-primAIy mx-2 "
                                                style={{ backgroundColor: "lightgreen", marginBottom: "1rem" }}
                                                to={`/edit/${AI.id}`}
                                            >
                                                編輯
                                            </Link>
                                            <Link
                                                className="btn btn-outline-primAIy mx-2"
                                                // onClick={() => postDelete(AI.id)}
                                                onClick={() => handleClick(AI.id)}
                                                style={{ backgroundColor: "red", color: "black" }}
                                            >
                                                刪除
                                            </Link>
                                            {/* <Modal show={show} onHide={handleClose}>
                                                <Modal.Body
                                                    style={{ display: "flex", alignItems: "center" }}
                                                >確定要刪除</Modal.Body>
                                                <Modal.Footer>
                                                    <Button vAIiant="secondAIy" onClick={handleClose}>
                                                        取消
                                                    </Button>
                                                    <Button vAIiant="secondAIy"
                                                        onClick={() => postDelete(AI.id)}
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