import React, { useEffect, useState } from 'react'
import { AddPost, api, UpdatePost } from '../Api/Api'

function PostsForm({ data, setData, UpdateData, setUpdateData }) {
    const [addData, setAddData] = useState({
        title: "",
        body: "",
    })
    const [currentState, setCurrentState] = useState(true)
    let textsShow = Object.keys(UpdateData).length === 0;

    const handleAddPost = async () => {
        const res = await api.post('/posts', addData )
        // const res = await AddPost(addData)
        console.log(res.data)
        if (res.status === 200 || 201) {
            setData([...data, res.data])
        }
        setAddData({
            title: "",
            body: ""
        })
    }

    const handleOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setAddData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleUpdatePost = async () => {
        let id = UpdateData.id
        const res = await UpdatePost(id, addData)
        setData((prev) => prev.map((prev) => prev.id === res.data.id ? res.data : prev))

        setAddData({
            title: "",
            body: "",
        })

        setUpdateData({})
    }
    useEffect(() => {
        UpdateData && setAddData({
            title: UpdateData.title || "",
            body: UpdateData.body || "",
        });
        setCurrentState(false)
    }, [UpdateData])

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            currentState ? handleAddPost() : handleUpdatePost()

        }} style={{ backgroundColor: "gray" }} className='d-flex flex-row justify-content-center container mt-5 gap-2 rounded p-4 w-75'>
            <input style={{ width: "40%" }}
                className=' form-control fs-5'
                placeholder='Enter Title here'
                type="text"
                name="title"
                id=""
                value={addData.title}
                onChange={handleOnChange}
            />
            <input style={{ width: "40%" }}
                className=' form-control fs-5'
                placeholder='Enter Content here'
                type="text"
                name="body"
                id=""
                value={addData.body}
                onChange={handleOnChange}
            />
            <button className='btn btn-success fs-5'>{textsShow ? "Add Post" : "Update Post"}</button>
        </form>
    )
}

export default PostsForm
