import _axios from "axios"

const axios = (baseURL) => {
    //建立一個自定義的axios
    const instance = _axios.create({
        baseURL: baseURL || 'https://siungsport-api.siungsport.com/product/products/', //JSON-Server端口位置
        timeout: 3000,
    });

    return instance;
}

export { axios };
export default axios();
