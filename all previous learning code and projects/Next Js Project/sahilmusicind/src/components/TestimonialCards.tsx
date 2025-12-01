"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "../lib/utils";

export function TestimonialCards() {
  return (
    <div className="w-full h-[40rem] rounded-md flex flex-col dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">

      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />

      <h2 className="text-3xl text-white dark:text-neutral-50 text-center font-semibold mb-8 z-10 md:text-4xl">
        Hear our harmony: Voices of success
      </h2>



      <div className=" flex justify-center w-full antialiased overflow-hidden px-4 sm:px-6 lg:px-8">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote: "Learn essential guitar chords and progressions to play your favorite songs with ease. Master finger placements and strumming.",
    name: "John Smith",
    title: "Master Guitar Chords"
  },
  {
    quote: "Start your piano journey with step-by-step lessons. Develop hand coordination and learn to read sheet music.",
    name: "Emma Johnson",
    title: "Piano for Beginners"
  },
  {
    quote: "Improve your singing skills with exercises on pitch, tone, and breath control. Discover vocal warm-ups and techniques to enhance your voice.",
    name: "Michael Brown",
    title: "Vocal Training & Techniques"
  },
  {
    quote: "Understand scales, chords, and harmony to enhance your musical knowledge. Unlock the secrets of .",
    name: "Sophia Davis",
    title: "Music Theory Made Easy"
  },
  {
    quote: "Create professional-quality beats and tracks using digital audio workstations. Learn the fundamentals of mixing, mastering, and sound design.",
    name: "Daniel Wilson",
    title: "Beat Making & Production"
  },
  {
    quote: "Decode musical notation and play songs confidently on any instrument. Gain the skills to sight-read and interpret complex compositions.",
    name: "Olivia Martinez",
    title: "Learn to Read Sheet Music"
  }
];
