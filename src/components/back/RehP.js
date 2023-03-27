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
            const res = await api.getProduct.get('/Reh');
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
                            {post.map((Reh, index) => {
                                return (
                                    <tr >
                                        <th scope='row' key={index}>
                                            {index + 1}
                                        </th>
                                        <td>{Reh.name}</td>
                                        <td>
                                            <img className="" src={Reh.img1} alt="" />
                                            <img className="" src={Reh.img2} alt="" />
                                            <img className="" src={Reh.img3} alt="" />
                                            <img className="" src={Reh.img4} alt="" />
                                            <img className="" src={Reh.img5} alt="" />
                                        </td>
                                        <td>
                                            <p>{Reh.desc1}</p>
                                        </td>
                                        <td>
                                            {Reh.desc2}
                                        </td>
                                        <td>
                                            <video width="" height="" controls src={Reh.chvideo} />
                                            {/* <video width="" height="" controls src={Reh.envideo} /> */}
                                        </td>
                                        <td>
                                            <Link
                                                className="btn btn-outline-primRehy mx-2 "
                                                style={{ backgroundColor: "lightgreen", marginBottom: "1rem" }}
                                                to={`/edit/${Reh.id}`}
                                            >
                                                編輯
                                            </Link>
                                            <Link
                                                className="btn btn-outline-primRehy mx-2"
                                                onClick={() => handleClick(Reh.id)}
                                                style={{ backgroundColor: "red", color: "black" }}
                                            >
                                                刪除
                                            </Link>
                                            {/* <Modal show={show} onHide={handleClose}>
                                                <Modal.Body
                                                    style={{ display: "flex", alignItems: "center" }}
                                                >確定要刪除</Modal.Body>
                                                <Modal.Footer>
                                                    <Button vRehiant="secondRehy" onClick={handleClose}>
                                                        取消
                                                    </Button>
                                                    <Button vRehiant="secondRehy"
                                                        onClick={() => postDelete(Reh.id)}
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