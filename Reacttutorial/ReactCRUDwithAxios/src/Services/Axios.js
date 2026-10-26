import axios from "axios";

// Firsly we need to create the instance of axios with baseUrl using the create() method.
const api = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
});

// After that simply use that instance to call get() method:
export const getPost = (signal)=>{
    return api.get("/posts", { signal });
}

// Delete Function:
export const deletePost = (deleteId)=>{
    return api.delete(`/posts/${deleteId}`);
}

// Post Function:
export const postItem = (newPost)=>{
    return api.post("/posts",newPost);
}

// Update Function:
export const updateData = (id,newPost)=>{
    return api.put(`/posts/${id}`,newPost);
}