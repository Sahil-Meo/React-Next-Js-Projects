import { MoveRight } from "lucide-react";
import React from "react";

const Banners = () => {
     return (
          <div className="grid grid-cols-6 gap-4 my-6">
               {/* Left side - two small banners (25% width) */}
               <div className="col-span-2 flex flex-col gap-4">
                    {/* Banner 1 */}
                    <div
                         className="flex flex-col justify-center p-6 rounded-2xl shadow-lg text-white h-1/2 bg-cover bg-center relative"
                         style={{ backgroundImage: "url(/ai-project-4.webp)" }}
                    >
                         <div className="absolute inset-0 bg-black/40 rounded-2xl" /> {/* Overlay */}
                         <div className="relative z-10">
                              <h3 className="text-xl font-semibold mb-2">
                                   Explore More About AI
                              </h3>
                              <p className="text-base mb-4">
                                   Stay updated with the latest insights in Artificial Intelligence.
                              </p>
                              <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium shadow hover:bg-gray-200 transition">
                                   Learn More <MoveRight size={18} />
                              </button>
                         </div>
                    </div>

                    {/* Banner 2 */}
                    <div
                         className="flex flex-col justify-center p-6 rounded-2xl shadow-lg text-white h-1/2 bg-cover bg-center relative"
                         style={{ backgroundImage: "url(/ai-project-5.webp)" }}
                    >
                         <div className="absolute inset-0 bg-black/40 rounded-2xl" />
                         <div className="relative z-10">
                              <h3 className="text-lg font-semibold">AI Trends & Insights</h3>
                              <p className="text-base">
                                   Discover the future of machine learning and AI applications.
                              </p>
                         </div>
                    </div>
               </div>

               {/* Right side - big banner (75% width) */}
               <div
                    className="col-span-4 flex items-center justify-center p-10 rounded-2xl shadow-xl text-white bg-cover bg-center relative h-[500px]"
                    style={{ backgroundImage: "url(/ai-project-6.jpg)" }}
               >
                    <div className="absolute inset-0 bg-black/50 rounded-2xl" />
                    <div className="relative z-10 max-w-xl text-center">
                         <h2 className="text-3xl md:text-4xl font-bold mb-4">
                              The Future of AI is Here
                         </h2>
                         <p className="text-base md:text-lg mb-6">
                              From deep learning to generative AI, explore groundbreaking
                              innovations that are shaping tomorrow.
                         </p>
                         <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg text-base font-medium shadow hover:bg-gray-200 transition mx-auto">
                              Read Blogs <MoveRight size={20} />
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default Banners;
