import React from 'react'
import Navbar from './Component/Navbar'
import BlogCard from '../../../../components/BlogCard'
import { newBlogs } from '../../../../Json-data'
import BreadCrumbs from '../../../../components/BreadCrumbs'

const Overview = () => {
     return (
          <div className='flex flex-col gap-4'>
               <BreadCrumbs />
               <h1 className="text-2xl sm:text-3xl font-bold">Today Trending</h1>
               <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {newBlogs.map((blog) => (
                         <BlogCard key={blog.id} blog={blog} />
                    ))}
               </div>
          </div>
     )
}

export default Overview
