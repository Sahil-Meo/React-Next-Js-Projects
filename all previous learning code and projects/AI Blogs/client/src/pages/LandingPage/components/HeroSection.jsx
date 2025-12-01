import React from 'react';
import { ArrowRight, Play, Star, Users, Award } from 'lucide-react';

const HeroSection = () => {
  const handleGetStarted = () => {
    console.log('Get Started clicked');
  };

  const handleWatchDemo = () => {
    console.log('Watch Demo clicked');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-700 via-purple-900 to-indigo-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/30 to-blue-800/30" />

        {/* Animated Background Shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen">

          {/* Text Container */}
          <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium text-white">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>Trusted by 10,000+ users</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Build Your
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Dream Product
                </span>
                <span className="block">Today</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Transform your ideas into reality with our cutting-edge platform.
                Join thousands of creators who are already building the future.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleGetStarted}
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleWatchDemo}
                className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Seminars
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-white mb-1">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="text-2xl font-bold">10K+</span>
                </div>
                <p className="text-gray-400 text-sm">Active Users</p>
              </div>

              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-white mb-1">
                  <Award className="w-5 h-5 text-purple-400" />
                  <span className="text-2xl font-bold">99%</span>
                </div>
                <p className="text-gray-400 text-sm">Satisfaction</p>
              </div>

              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-white mb-1">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-2xl font-bold">4.9</span>
                </div>
                <p className="text-gray-400 text-sm">Rating</p>
              </div>
            </div>
          </div>

          {/* Image Container */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Main Image Container */}
              <img src="/hero-section-mobile.png" alt="hero-img"
                className='w-full' />

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg animate-bounce">
                🚀 New
              </div>
              <div className="absolute p-4 bg-gradient-to-l from-purple-600 to-pink-500 top-4 right-0 text-sm font-medium shadow-lg  rounded-full text-white animate-bounce px-3 py-1">Sahil meo</div>

              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-400 to-emerald-400 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg animate-pulse">
                ✨ Live
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl -z-10 group-hover:from-purple-600/30 group-hover:to-blue-600/30 transition-all duration-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;