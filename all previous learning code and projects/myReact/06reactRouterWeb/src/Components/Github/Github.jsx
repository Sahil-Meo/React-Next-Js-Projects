import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const loadData = useLoaderData()
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/Sahil-Meo')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       setData(data)
  //     })
  // }, [])

  return (
    <>
      <div className='text-center  m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {loadData.followers}
        <img src={loadData.avatar_url} alt="Git picture" width={300} />
      </div>
      <h1 className='text-center font-sans text-3xl text-orange-700 font-bold my-4'>More About My Self!</h1>
      <div>
        <div className='text-left m-4 font-sans'>
          <h2 className='text-2xl'>Sahil Majeed</h2>
          <h4 className='text-xl text-orange-700'>Web Developer & E-Commerence Expert</h4>
          <p className='w-2/5 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, commodi veritatis itaque quo sit cupiditate ex culpa optio ipsam facere facilis error cum, tenetur nemo reprehenderit distinctio tempora quidem incidunt.</p>
        </div>
      </div>
    </>
  )
}

export default Github


export const fetchgithubfollwer = async ()=>{
  const responce = await fetch('https://api.github.com/users/Sahil-Meo')
  return responce.json();
}