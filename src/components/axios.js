import axios from 'axios';

// https://dev003.iiiavr.ml/product/products/
const getProduct = axios.create({
    baseURL: 'https://siungsport-api.siungsport.com/product/products',
});

const getCarousel = axios.create({
    baseURL: 'https://siungsport-api.siungsport.com/product/products/carousel'
})
const login = axios.create({
    baseURL: 'http://140.92.48.139:4001'
})

// eslint-disable-next-line import/no-anonymous-default-export
export default { getProduct, getCarousel, login };
