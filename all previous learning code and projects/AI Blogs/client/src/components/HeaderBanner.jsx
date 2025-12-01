import React from "react";

const HeaderBanner = ({
     title,
     subtitle,
     backgroundImage,
     gradient = "linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))",
     height = "h-[60vh]",
     textAlign = "text-center",
}) => {
     return (
          <div
               className={`relative ${height} flex items-center justify-center bg-cover bg-center bg-no-repeat`}
               style={{
                    backgroundImage: `${gradient}, url(${backgroundImage})`,
               }}
          >
               {/* Content */}
               <div
                    className={`${textAlign} text-white z-10 max-w-4xl mx-auto px-6`}
               >
                    {title && (
                         <h1 className="text-4xl md:text-6xl font-semibold mb-0 leading-tight">
                              {title}
                         </h1>
                    )}
                    {subtitle && (
                         <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                              {subtitle}
                         </p>
                    )}
               </div>

               {/* Decorative elements */}
               <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"> </div>
               <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-300/20 rounded-full blur-3xl"> how wo do you do</div>
          </div>
     );
};

export default HeaderBanner;
