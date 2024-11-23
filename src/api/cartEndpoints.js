import axiosInstance from "./axiosInstance";

const addToCartBackend = async (product) => {
  return (await axiosInstance.post("/cart", product)).data;
};

const increaseCartQuantityBackend = async (id, quantity) => {
  return (
    await axiosInstance.patch(`/cart/${id}`, {
      quantity,
    })
  ).data;
};

const decreaseCartQuantityBackend = async (id, quantity) => {
  return (
    await axiosInstance.patch(`/cart/${id}`, {
      quantity,
    })
  ).data;
};

const removeCartItemBackend = async (id) => {
  return (await axiosInstance.delete(`/cart/${id}`)).data;
};

export default { addToCartBackend, increaseCartQuantityBackend, decreaseCartQuantityBackend, removeCartItemBackend };
