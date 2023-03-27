import React from "react";
import { useForm } from "react-hook-form";
import Navbar from './back'
// import Select from 'react-select'

function Backnew() {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("img1", data.file1[0]);
        formData.append("img2", data.file2[0]);
        formData.append("img3", data.file3[0]);
        formData.append("img4", data.file4[0]);
        formData.append("img5", data.file5[0]);
        formData.append("chvideo", data.file0[0]);
        // formData.append("envideo", data.file00[0]);
        formData.append("name", data.name)
        formData.append("status", data.status)
        // formData.append("p2", data.p2)
        // formData.append("p3", data.p3)
        // formData.append("p4", data.p4)
        formData.append("category", data.Title)
        formData.append("desc1", data.desc1)
        formData.append("desc2", data.desc2)

        const res = await fetch("https://siungsport-api.siungsport.com/product/product", {
            method: "POST",
            body: formData,
        })
            .then((res) => {
                if (res.status === 200) {
                    alert("新增成功")
                }
                else {
                    alert("新增失敗：已擁有相關名稱產品")
                }
            });

        alert(JSON.stringify(`${res.message}, status: ${res.status}`));
    };

    return (
        <>
            <Navbar />
            <div className="" style={{ display: "flex", justifyContent: "center" }}>
                <form onSubmit={handleSubmit(onSubmit)} style={{ width: "70%" }}>
                    <br />
                    <div className="mb-3">
                        <input
                            className="form-control"
                            type="name" {...register("name")}
                            placeholder="產品名稱/主題"
                        />
                        <br />
                        <select {...register("Title")}
                            className="form-control"
                        >
                            <option value='[""]'>請選擇分類</option>
                            <option value='["VR"]'>VR虛擬實境</option>
                            <option value='["IoT"]'>IoT物聯網</option>
                            <option value='["Web"]'>Web平台設計</option>
                            <option value='["AI"]'>AI人工智慧</option>
                            <option value='["Reh"]'>復健相關產品</option>
                            <option value='["AR"]'>AR擴增實境</option>
                            <option value='["News"]'>新聞發佈</option>
                            <option value='["Suc"]'>成功案例</option>
                        </select>
                        <br />
                        <select {...register("status")}
                            className="form-control"
                        >
                            <option value='[""]'>選擇排列版式</option>
                            <option value='1'>1.圖文-文圖-影片</option>
                            <option value='2'>2.文圖-圖文-影片</option>
                        </select>
                    </div>
                    <div>
                        <h5><label for="exampleInputEmail1" class="form-label">第一張圖片</label></h5>
                        <input
                            type="file"
                            {...register("file1")}
                        />
                    </div>
                    <br />
                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            placeholder="第一段文章"
                            type="desc1" {...register("desc1")}
                        />
                        {/* <select {...register("p2")}
                            className="form-control"
                        >
                            <option value='[""]'>請選擇位置</option>
                            <option value='["left"]'>左邊</option>
                            <option value='["right"]'>右邊</option>
                        </select> */}
                    </div>
                    <div>
                        <h5><label for="exampleInputEmail1" class="form-label">第二張圖片</label></h5>
                        <input type="file"
                            {...register("file2")}
                        />
                        {/* <select {...register("p3")}
                            className="form-control"
                        >
                            <option value='[""]'>請選擇位置</option>
                            <option value='["left"]'>左邊</option>
                            <option value='["right"]'>右邊</option>
                        </select> */}
                    </div>
                    <br />
                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            placeholder="第二段文章"
                            type="desc2" {...register("desc2")}
                        />
                        {/* <select {...register("p4")}
                            className="form-control"
                        >
                            <option value='[""]'>請選擇位置</option>
                            <option value='["left"]'>左邊</option>
                            <option value='["right"]'>右邊</option>
                        </select> */}
                    </div>
                    <div>
                        <h5><label for="exampleInputEmail1" class="form-label">影片1</label></h5>
                        <input type="file"
                            {...register("file0")}
                        />
                    </div>
                    {/* <div>
                        <h5><label for="exampleInputEmail1" class="form-label">影片2</label></h5>
                        <input type="file"
                            {...register("file00")}
                        />
                    </div> */}
                    <div>
                        <h5><label for="exampleInputEmail1" class="form-label">更多圖片</label></h5>
                        <div style={{ display: "flex" }}>
                            <input type="file"
                                {...register("file3")}
                            />
                            <input type="file"
                                {...register("file4")}
                            />
                            <input type="file"
                                {...register("file5")}
                            />
                        </div>
                    </div>
                    <br />
                    <button type="submit" className="btn btn-outline-primary">
                        新增
                    </button>
                    <button className="btn btn-outline-danger mx-2" type="reset" value="clear">
                        清空
                    </button>
                </form>
            </div >
        </>
    );
}

export default Backnew;

