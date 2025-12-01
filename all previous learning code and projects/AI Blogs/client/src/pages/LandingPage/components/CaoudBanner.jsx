import { MoveRight, Sparkles, Brain, Zap } from 'lucide-react';
import React from 'react';

const ClaudBanners = () => {
  return (
    <div className='grid grid-cols-2 gap-6 py-6 max-w-7xl mx-auto'>
      {/* Left column - Two small banners (25% height each) */}
      <div className="flex flex-col gap-6 h-full">
        {/* First small banner */}
        <div 
          className="relative flex flex-col justify-between p-8 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 min-h-[300px] bg-cover bg-center bg-no-repeat group"
          style={{ 
            backgroundImage: "linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(147, 51, 234, 0.8)), url(/ai-project-4.webp)"
          }}
        >
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-yellow-300" />
              <span className="text-sm font-semibold text-blue-100 uppercase tracking-wide">AI Insights</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
              Explore More to Learn About AI
            </h3>
            <p className="text-blue-100 text-base mb-6 opacity-90">
              Discover the latest AI innovations and stay ahead of the curve with cutting-edge technology.
            </p>
          </div>
          <button className="relative z-10 flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 group-hover:scale-105 w-fit">
            <span className="font-medium">Learn More</span>
            <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20"></div>
        </div>

        {/* Second small banner */}
        <div 
          className="relative flex flex-col justify-between p-8 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 min-h-[300px] bg-cover bg-center bg-no-repeat group"
          style={{ 
            backgroundImage: "linear-gradient(135deg, rgba(16, 185, 129, 0.8), rgba(5, 150, 105, 0.8)), url(/ai-project-5.webp)"
          }}
        >
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-6 h-6 text-emerald-300" />
              <span className="text-sm font-semibold text-emerald-100 uppercase tracking-wide">Smart Solutions</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
              AI-Powered Innovation
            </h3>
            <p className="text-emerald-100 text-base mb-6 opacity-90">
              Transform your business with intelligent automation and machine learning solutions.
            </p>
          </div>
          <button className="relative z-10 flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 group-hover:scale-105 w-fit">
            <span className="font-medium">Get Started</span>
            <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20"></div>
        </div>
      </div>

      {/* Right column - Large banner (75% width) */}
      <div 
        className="relative flex flex-col justify-center items-start p-12 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 min-h-[636px] bg-cover bg-center bg-no-repeat group"
        style={{ 
          backgroundImage: "linear-gradient(135deg, rgba(99, 102, 241, 0.8), rgba(168, 85, 247, 0.8)), url(/ai-project-6.jpg)"
        }}
      >
        <div className="relative z-10 max-w-lg">
          <div className="flex items-center gap-2 mb-6">
            <Zap className="w-8 h-8 text-yellow-300" />
            <span className="text-base font-semibold text-indigo-100 uppercase tracking-wide">Featured</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
            The Future of AI is Here
          </h2>
          <p className="text-indigo-100 text-lg mb-8 opacity-90 leading-relaxed">
            Join thousands of innovators who are already leveraging artificial intelligence to revolutionize their industries. Experience the power of next-generation AI technology that adapts, learns, and grows with your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-3 bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-full transition-all duration-300 font-semibold shadow-lg hover:shadow-xl group-hover:scale-105">
              <span>Start Your Journey</span>
              <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 font-semibold group-hover:scale-105">
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-yellow-300/20 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
};

export default ClaudBanners;