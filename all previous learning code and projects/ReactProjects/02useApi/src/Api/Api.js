import axios from 'axios'


export const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

export const getPost = () => {
    return api.get("/posts")
}


export const deletePost = (id) => {
    return api.delete(`/posts/${id}`)
}

export const AddPost = (post) => {

    return api.post("/posts", post)
}

export const UpdatePost = (id, post) => {
    return api.put(`/posts/${id}`, post)
}