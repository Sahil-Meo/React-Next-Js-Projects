import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams()
    return (
        <div>
            <h1 className='text-center py-4 bg-gray-700 text-white text-3xl'> User: {userid}</h1>
        </div>
    )
}

export default User
