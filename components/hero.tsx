import Image from 'next/image';
import Link from 'next/link';
import { HiMiniCommandLine } from "react-icons/hi2";

const Hero = () => {
  return (
    <section className="relative w-full bg-[#f8faff] overflow-hidden py-16 lg:py-24">
      {/* Background soft glow effect */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-100/40 blur-[120px] rounded-full -z-10 translate-x-1/4 -translate-y-1/4" />

      <div className="container px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <div className="space-y-8 z-10">
          <h1 className="text-3xl lg:text-7xl font-extrabold text-[#1B2A6B] leading-[1.1] tracking-tight">
            The fast track to <br />
            <span className="bg-gradient-to-r from-[#1B296A] to-[#5E080B] bg-clip-text text-transparent">
              Fluent English
            </span>
          </h1>
          
          <p className="text-gray-500 text-lg lg:text-xl max-w-lg leading-relaxed">
            Unlock your potential with personalized AI-driven lessons, real-time 
            feedback, and interactive modules designed for rapid fluency.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link 
              href="/start" 
              className="bg-[#1e2d6d] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#151f4d] transition-all shadow-lg active:scale-95"
            >
              Start Learning
            </Link>
            <Link 
              href="/demo" 
              className="bg-white text-[#1e2d6d] border border-gray-200 px-8 py-4 rounded-xl font-bold hover:border-gray-400 transition-all shadow-sm active:scale-95"
            >
              Request Demo
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-3 pt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200 relative">
                  <Image 
                    fill 
                    src={`https://i.pravatar.cc/100?img=${i+10}`} 
                    alt="Student" 
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-gray-400">
              Joined by <span className="font-bold text-[#1B2A6B]">10,000+</span> students worldwide
            </p>
          </div>
        </div>

        {/* Right Column: Browser Mockup */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Main Browser Window */}
          <div className="relative z-10 w-full max-w-[620px] bg-white rounded-[24px] shadow-[0_42px_64px_-16px_rgba(27,42,107,0.2)] border-[6px] border-white overflow-hidden">
            
            {/* Browser Header */}
            <div className="px-5 py-4 flex justify-between items-center border-b border-gray-50 bg-white">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF605C]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
              </div>
              <div className="w-24 h-5 bg-gray-100/80 rounded-full"></div>
            </div>

            {/* Inner Content Section */}
            <div className="p-8 space-y-6">
              {/* Top Banner */}
              <div className="w-full h-10 bg-[#EEF2FF] rounded-xl"></div>

              {/* Grid of Cards */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white border-2 border-gray-50 rounded-2xl p-5 h-32 relative">
                   <div className="w-10 h-3 bg-[#E0E7FF] rounded-full mb-4"></div>
                   <div className="w-full h-8 bg-gray-50/80 rounded-lg absolute bottom-5 left-5 right-5"></div>
                </div>
                <div className="bg-white border-2 border-gray-50 rounded-2xl p-5 h-32 relative">
                   <div className="w-10 h-3 bg-[#E0F7FA] rounded-full mb-4"></div>
                   <div className="w-full h-8 bg-gray-50/80 rounded-lg absolute bottom-5 left-5 right-5"></div>
                </div>
              </div>

              {/* Bottom Wide Task Card */}
              <div className="bg-white border-2 border-gray-50 rounded-2xl p-6 h-40 relative">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#E0E7FF] rounded-xl flex items-center justify-center text-[#3730A3]">
                    <HiMiniCommandLine className="text-xl" />
                  </div>
                  <div className="w-32 h-3.5 bg-gray-100 rounded-full"></div>
                </div>
                
                <div className="mt-8 space-y-3">
                  <div className="w-full h-2 bg-gray-50 rounded-full"></div>
                  <div className="w-[85%] h-2 bg-gray-50 rounded-full"></div>
                  <div className="w-[60%] h-2 bg-gray-50 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/30 blur-[100px] rounded-full -z-10"></div>
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-200/20 blur-3xl rounded-full"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;