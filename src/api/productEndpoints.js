import axiosInstance from "./axiosInstance";

const getProducts = async ()=>{
  return (await axiosInstance.get('/products')).data
}
const getProduct = async (id)=>{
  return (await axiosInstance.get(`/products/`+id)).data
}

export default { getProducts,getProduct };
