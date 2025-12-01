'use client'

import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";
import Link from 'next/link';

const UpcomingWebinars = () => {
  return (
    <div className=' p-12 bg-gray-900 w-full'>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className='text-base text-teal-700  font-semibold uppercase  mb-2'>Up Comming webinars</h2>
          <p className=' text-3xl text-white font-extrabold dark:text-neutral-200 sm:text-4xl'>Enhance Your Musical Jurney</p>
        </div>

        <div className="mt-10">
          <HoverEffect items={musicWebinars} />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"}>
            <button className='py-3 px-8  dark:bg-white dark:text-black cursor-pointer rounded-xl  text-white bg-black text-lg  '>
              View All Webinars
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars


const musicWebinars = [
  {
    title: "NAfME Professional Learning Webinars",
    description: "A variety of informative webinars for music educators, available throughout the year.",
    link: "https://nafme.org/professional-learning-events/webinars/"
  },
  {
    title: "Midnight Music Free Online Training",
    description: "Webinars designed for music teachers, covering tech topics with professional development certificates.",
    link: "https://midnightmusic.com/free-trainings/"
  },
  {
    title: "World Music Pedagogy 2025 Online Webinar",
    description: "A three-day webinar course exploring diverse music genres for educational use.",
    link: "https://www.worldmusicpedagogy.com/2025-online-webinar.html"
  },
  {
    title: "Nottelmann Professional Development Webinars",
    description: "Free instructional webinars offering optional professional development credit for music educators.",
    link: "https://nottelmannmusic.com/nottelmann-professional-development-webinars/"
  },
  {
    title: "Preservation Hall Foundation SEAL Webinar",
    description: "A webinar discussing Social-Emotional Artistic Learning in New Orleans music.",
    link: "https://www.preshallfoundation.org/webinars"
  },
  {
    title: "MTNA Webinars",
    description: "A series of webinars providing opportunities for continuing education in music teaching.",
    link: "https://www.mtna.org/MTNA/Learn/Webinars/Webinars.aspx"
  }
];
