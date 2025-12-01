'use client'
import React from 'react'
import courseData from '../data/music_courses.json'
import { BackgroundGradient } from './ui/background-gradient'
import Link from 'next/link'


interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}


const FeaturedCourses = () => {

    const featuredCourse = courseData.courses.filter((course: Course) => course.isFeatured)

    return (
        <div className='py-12 bg-gray-900'>
            <div className="">
                <div className="text-center">
                    <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>Featured Courses</h2>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn With the Best</p>
                </div>
            </div>

            <div className="mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  mx-10 ">
                    {featuredCourse.map((course) => (
                        <div key={course.id} className="flex justify-center text-center">
                            <BackgroundGradient className="flex flex-col  rounded-[22px] max-w-max p-4 sm:p-10 bg-white dark:bg-zinc-900 h-full overflow-hidden">
                                <p className='text-black dark:text-neutral-200 text-2xl mb-2 mt-4'>{course.title}</p>
                                <p className='text-black dark:text-neutral-400 text-sm flex-grow '>{course.description}</p>

                                <Link className='bg-black dark:bg-white text-neutral-50 dark:text-black w-fit mx-auto rounded-xl mt-1 py-1 px-3 text-base' href={`/courses/${course.slug}`}>
                                    Read More
                                </Link>
                            </BackgroundGradient>
                        </div>
                    ))}


                </div>
            </div>

            <div className="mt-20 text-center">
                <button className='py-3 px-8  dark:bg-white dark:text-black cursor-pointer rounded-xl  text-white bg-black text-lg  '>Explore Our Courses</button>
            </div>
        </div>
    )
}

export default FeaturedCourses
