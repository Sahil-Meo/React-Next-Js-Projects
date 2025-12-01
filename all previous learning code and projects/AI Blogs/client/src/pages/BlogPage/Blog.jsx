import React, { useState } from 'react'
import HeaderBanner from '../../components/HeaderBanner'
import MaxWidthContainer from '../../components/MaxWidthContainer/MaxWidthContainer'
import Navbar from './Components/Navbar';
import BlogTemplate from './Components/BlogTemplate';
import BlogDetail from './BlogDetail';

const Blog = () => {

     const [filters, setFilters] = useState({});

     const handleFilterChange = (newFilters) => {
          setFilters(newFilters);
     };

     return (
          <>
               <HeaderBanner
                    title="Learn All About AI"
                    subtitle="Ready to transform your business with AI? Let's discuss your project and explore how we can help you achieve your goals."
                    backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2070&q=80"
               />
               <MaxWidthContainer>
                    <Navbar onFilterChange={handleFilterChange} />
               </MaxWidthContainer>
          </>
     )
}

export default Blog
