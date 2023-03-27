import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Navbar from './back'


export default function EditUser() {


    let navigate = useHistory();

    const { id } = useParams();



    const [user, setUser] = useState({
        name: "",
        desc1: "",
        desc2: "",
        category: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: "",
        // chvideo: "",

    });

    const { name, desc1, desc2, category } = user;

    // 圖片修改
    const [img1, setImage1] = useState(null);
    const [img2, setImage2] = useState(null);
    const [img3, setImage3] = useState(null);
    const [img4, setImage4] = useState(null);
    const [img5, setImage5] = useState(null);
    // const [chvideo, setChvideo] = useState(null);


    const handleImage1Change = (e) => {
        setImage1(e.target.files[0]);
    };
    const handleImage2Change = (e) => {
        setImage2(e.target.files[0]);
    };
    const handleImage3Change = (e) => {
        setImage3(e.target.files[0]);
    };
    const handleImage4Change = (e) => {
        setImage4(e.target.files[0]);
    };
    const handleImage5Change = (e) => {
        setImage5(e.target.files[0]);
    };
    // const handleImage6Change = (e) => {
    //     setChvideo(e.target.files[0]);
    // };
    //其他修改
    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        // setUser({ ...user, [e.target.dec1]: e.target.value });
    };

    useEffect(() => {
        loadUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);





    const onSubmit = async (e) => {

        const formData = new FormData();
        e.preventDefault();
        formData.append("img1", img1);
        formData.append("img2", img2);
        formData.append("img3", img3);
        formData.append("img4", img4);
        formData.append("img5", img5);
        // formData.append("chvidoe", chvideo);
        formData.append("name", name)
        formData.append("status", "A")
        formData.append("category", category)
        formData.append("desc1", desc1)
        formData.append("desc2", desc2)
        const res = await fetch(`https://siungsport-api.siungsport.com/product/product/${id}`, {
            method: "PUT",
            body: formData,
        })
            .then((res) => {
                if (res.status === 200) {
                    alert("修改成功")
                }
            });
        navigate("/");
        alert(JSON.stringify(`${res.message}, status: ${res.status}`))
    };



    // Axios get
    const loadUser = async () => {
        const result = await axios.get(`https://siungsport-api.siungsport.com/product/content/${id}`);
        setUser(result.data.productList)
        let x = result.data.productList;
        for (var i of x) {
        }
        setUser(i);
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                        <h2 className="text-center m-4">編輯產品</h2>
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="mb-3">
                                <label htmlFor="Name" className="form-label">
                                    產品名稱
                                </label>
                                <input
                                    type={"text"}
                                    className="form-control"
                                    name="name"
                                    value={name}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <select
                                name="category"
                                onChange={(e) => onInputChange(e)}
                                className="form-control"
                                value={category}
                            >
                                <option value="VR">VR虛擬實境</option>
                                <option value="IoT">IoT物聯網</option>
                                <option value="Web">Web平台設計</option>
                                <option value="AI">AI人工智慧</option>
                                <option value="Reh">復健相關產品</option>
                                <option value="AR">AR擴增實境</option>
                            </select>
                            <div className="mb-3">
                                <label htmlFor="desc1" className="form-label">
                                    第一段文章
                                </label>
                                <textarea
                                    type={"text"}
                                    className="form-control"
                                    name="desc1"
                                    value={desc1}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="desc1" className="form-label">
                                    圖片一
                                </label>
                                <input type="file" accept="image/*" onChange={handleImage1Change} />
                                <img src={img1} alt="" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="desc2" className="form-label">
                                    第二段文章
                                </label>
                                <textarea
                                    type={"text"}
                                    className="form-control"
                                    name="desc2"
                                    value={desc2}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="desc1" className="form-label">
                                    圖片二
                                </label>
                                <input type="file" accept="image/*" onChange={handleImage2Change} />
                                <img src={img2} alt="" />
                            </div>
                            {/* <div className="mb-3">
                                <label htmlFor="desc1" className="form-label">
                                    影片一
                                </label>
                                <input type="file" accept="image/*" onChange={handleImage6Change} />
                                <video width="" height="" controls src={chvideo} />
                            </div> */}
                            {/* <div className="mb-3">
                                <label htmlFor="desc1" className="form-label">
                                    影片二
                                </label>
                                <input type="file" accept="image/*" onChange={handleImage7Change} />
                                <video width="" height="" controls src={envideo} />
                            </div> */}
                            <div className="mb-3">
                                <label htmlFor="desc1" className="form-label">
                                    圖片三
                                </label>
                                <input type="file" accept="image/*" onChange={handleImage3Change} />
                                <img src={img3} alt="" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="desc1" className="form-label">
                                    圖片四
                                </label>
                                <input type="file" accept="image/*" onChange={handleImage4Change} />
                                <img src={img4} alt="" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="desc1" className="form-label">
                                    圖片五
                                </label>
                                <input type="file" accept="image/*" onChange={handleImage5Change} />
                                <img src={img5} alt="" />
                            </div>
                            <button type="submit" className="btn btn-outline-primary">
                                送出
                            </button>
                            <Link className="btn btn-outline-danger mx-2" to="/back">
                                取消
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
