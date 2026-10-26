import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPost = () => {
  return api.get("/posts");
};

export const getIndPost = async (id) => {
  try {
    let res = await api.get(`/posts/${id}`);
    return res.status >= 200 && res.status < 300 ? res.data : [];
  } catch (err) {
    console.log(err.message);
  }
};

export const getPagination = async (pg) => {
  try {
    let res = await api.get(`/posts/?_start=${pg}&_limit=5`);
    return res.status >= 200 && res.status < 300 ? res.data : [];
  } catch (err) {
    console.log(err.message);
  }
};

export const deletePost = async (deleteId) => {
  try {
    let res = await api.delete(`/posts/${deleteId}`);
    console.log(res.data);
    return res.status === 200 ? res : [];
  } catch (err) {
    console.log(err.message);
    return err;
  }
};

export const updatePost = async (id) => {
  try {
    let res = await api.patch(`/posts/${id}`, { title: "Updated Title." });
    return res.status === 200 ? res.data : [];
  } catch (err) {
    return err;
  }
};

export const getInfiniteData = async ({ pageParam = 0 }) => {
  try {
    const res = await api.get(`/posts/?_start=${pageParam}&_limit=10`);
    // console.log("res", res);
    return res.status === 200 ? res.data : [];
  } catch (err) {
    console.log(err);
    // return err;
  }
};
