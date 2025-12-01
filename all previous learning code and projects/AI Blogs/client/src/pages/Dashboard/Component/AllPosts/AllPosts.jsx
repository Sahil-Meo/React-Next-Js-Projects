import React from 'react'
import BreadCrumbs from '../../../../components/BreadCrumbs'
import BlogsTable from './Component/BlogsTabel';

const AllPosts = () => {
     return (
          <div className='flex flex-col gap-4'>
               <BreadCrumbs />
               <h1 className="text-2xl sm:text-3xl font-bold">Today Trending</h1>
               <div className="flex">
                    <BlogsTable />
               </div>
          </div>
     )
}

export default AllPosts;
