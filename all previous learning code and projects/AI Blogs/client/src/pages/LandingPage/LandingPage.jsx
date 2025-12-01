import React, { useState } from 'react'
import MaxWidthContainer from '../../components/MaxWidthContainer/MaxWidthContainer'
import HeroSection from './components/HeroSection'
import { blogs } from '../../Json-data'
import BlogCard from '../../components/BlogCard'
import PaginationButtons from './components/paginationButtons'
import Banners from './components/Banners'
import ClaudBanners from './components/CaoudBanner'
import BlogSecondCard from '../../components/BlogSecondCard'
import { newBlogs } from '../../Json-data';

const LandingPage = () => {

     const [currentPage, setCurrentPage] = useState(1);
     const totalPages = 10;

     return (
          <div>
               <HeroSection />
               <br />
               <MaxWidthContainer>
                    <div className="w-full my-10 ">
                         <div className='flex flex-col gap-4 mb-8'>
                              <h2 className="text-2xl sm:text-3xl  md:text-5xl font-bold ">Blog</h2>
                              <p className="text-base text-gray-800 ">If you are intrested to learn about ai you can learn from our blogs where you found latest and much informative content</p>
                         </div>
                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                              {newBlogs.map((blog) => (
                                   <BlogCard
                                        key={blog.id}
                                        blog={blog}
                                   />
                              ))}
                         </div>
                         <PaginationButtons
                              currentPage={currentPage}
                              totalPages={totalPages}
                              onPageChange={setCurrentPage}
                         />
                    </div>
                    <div>
                         <Banners />
                    </div>
               </MaxWidthContainer>

          </div>
     )
}

export default LandingPage
