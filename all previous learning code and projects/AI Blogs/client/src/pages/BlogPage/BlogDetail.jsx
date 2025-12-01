import React, { use, useEffect, useState } from 'react'
import HeaderBanner from '../../components/HeaderBanner'
import Comments from './Components/Comments'
import BlogTemplate from './Components/BlogTemplate'
import { newBlogs, comments } from '../../Json-data'
import { useParams } from 'react-router-dom'
import MaxWidthContainer from '../../components/MaxWidthContainer/MaxWidthContainer'

const BlogDetail = () => {
     const blogId = useParams().id;
     const [blogData, setBlogData] = useState(null);
     const [comment, setComment] = useState([]);


     useEffect(() => {
          const fetchBlogDetails = async () => {
               const response = await fetch(`/api/blogs/${blogId}`);
               const data = await response.json();
               setBlogData(data);
          };
          fetchBlogDetails();

          const fetchComments = async () => {
               const response = await fetch(`/api/blogs/${blogId}/comments`);
               const data = await response.json();
               setComment(data);
          };
          fetchComments();
     }, []);

     useEffect(() => {
          const blog = newBlogs.find(blog => blog.id === parseInt(blogId));
          if (blog) {
               setBlogData(blog);
          }

          const commentsData = comments.filter(comment => comment.id === parseInt(blogId));
          console.log(commentsData);
          setComment(commentsData);

     }, [blogId]);

     return (
          <div>
               <HeaderBanner
                    title={"Explore more with BLOG AI"}
                    subtitle={"we are providing our best if you want to learn more about open ai, explore more in our blogs."}
                    backgroundImage={"/ai-project-9.jpg"}
               />

               <MaxWidthContainer>
                    <div className='my-10 flex gap-6'>
                         <div className=''>
                              <BlogTemplate blogData={blogData} />
                         </div>
                         <div className='bg-gray-50 shadow-md rounded-md p-4 flex flex-col gap-4 w-1/3 h-fit sticky top-20'>
                              <h4 className='text-2xl font-bold'>Comments</h4>
                              <div className="w-full h-[1px] bg-gray-300"></div>
                              {comment.map(comment => (
                                   <Comments key={comment.id} comment={comment} />
                              ))}
                         </div>
                    </div>
               </MaxWidthContainer>
          </div>
     )
}


export default BlogDetail;