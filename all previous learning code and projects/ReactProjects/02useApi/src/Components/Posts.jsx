import React, { useEffect, useState } from 'react'
import { deletePost, getPost } from '../Api/Api'
import PostsForm from './PostsForm'

function Posts() {
    const [data, setData] = useState([])
    const [UpdateData, setUpdateData] = useState({})

    const getPostData = async () => {

        const res = await getPost()
        console.log(res.data)
        setData(res.data)
    }

    const handleUpdatePost = (curData) => {
        setUpdateData(curData)
    }

    const handleDeletePost = async (id) => {
        const res = await deletePost(id)
        if (res.status === 200) {
            const UpdatedData = data.filter((curPost) => {
                return curPost.id !== id;
            });
            setData(UpdatedData)
        }

    }

    useEffect(() => {
        getPostData()
    }, [])

    return (
        <>
            <PostsForm data={data} UpdateData={UpdateData} setUpdateData={setUpdateData} setData={setData} />

            <div>
                <ul className='d-flex flex-wrap my-5 justify-content-center  gap-2 mx-auto'>
                    {data?.map((curData) => {
                        const { id, title, body } = curData;
                        return <div
                            style={{ width: "500px" }}
                            className=' bg-dark text-white rounded p-2'
                            key={id}>
                            <p>{id}</p>
                            <p className='fs-5 '> <span className=' fs-4 '>Title:</span> {title} </p>
                            <p className='fs-6 lh-base'> <span className=' fs-4 '>Content:</span> {body} </p>
                            <div className='d-flex gap-2'>
                                <button className='btn btn-success fs-5 px-4' onClick={() => {
                                    handleUpdatePost(curData)
                                }}>Update</button>
                                <button className='btn btn-danger fs-5 px-4' onClick={() => handleDeletePost(id)}>Delete</button>
                            </div>
                        </div>
                    })}
                </ul>
            </div>
        </>
    )
}

export default Posts
