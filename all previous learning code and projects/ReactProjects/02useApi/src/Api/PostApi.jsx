import { useEffect } from 'react'
import { getPost } from './Api'

function PostApi() {

    const fetchData = async () => {
        let res = await getPost()
    }

    useEffect(() => {

        fetchData()

    }, [])

    return (
        <div>
            <h1>this is method of post api</h1>
        </div>
    )
}

export default PostApi
