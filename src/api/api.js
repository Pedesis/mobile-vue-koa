import axios from 'axios';
let base="https://www.easy-mock.com/mock/5bead0bc8eaaf00b3a4e1491/vue/";
let LOCALURL="http://localhost:3000"
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
export const shop = params=>{return axios.get(`${base}`,params);}
export const adduser = params=>{return axios.post(`${LOCALURL}/user/register`,params);}
export const login = params=>{return axios.post(`${LOCALURL}/user/Login`,params);}
export const goods = params=>{return axios.post(`${LOCALURL}/goods/getDetailGoodsInfo`,params);}
export const goodsList = params=>{return axios.post(`${LOCALURL}/goods/getCategoryList`,params);}
export const goodsSubList = params=>{return axios.post(`${LOCALURL}/goods/getCategorySubList`,params);}
export const goodsSubID = params=>{return axios.post(`${LOCALURL}/goods/getGoodsListByCategorySubID`,params);}
