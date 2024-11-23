import axiosInstance from "./axiosInstance";

const category = async ()=>{
  return (await axiosInstance.get('/category')).data
}

export default { category };
