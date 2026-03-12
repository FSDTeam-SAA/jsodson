import { HiOutlineQuestionMarkCircle, HiOutlinePencilSquare, HiOutlineSquare3Stack3D, HiOutlineGlobeAlt, HiMiniBolt } from "react-icons/hi2";

const LearningTools = () => {
  return (
    <section className="py-24 bg-[#f8faff]">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12">
        <h2 className="text-2xl lg:text-[36px] font-extrabold text-[#1A1F36] mb-4">Powerful Learning Tools</h2>
          <p className="text-[#6B7280] text-lg">
            Everything you need to master English, powered by the world&apos;s most advanced LLMs.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. AI Quiz Generator */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
            <div className="w-12 h-12 bg-[#f0f4ff] rounded-xl flex items-center justify-center mb-6 border border-blue-50">
              <HiOutlineQuestionMarkCircle className="text-2xl text-[#1e2d6d]" />
            </div>
            <h3 className="text-xl font-bold text-[#1A1F36] mb-3">AI Quiz Generator</h3>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              Personalized quizzes generated instantly based on your recent lesson performance.
            </p>
          </div>

          {/* 2. Writing Feedback */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
            <div className="w-12 h-12 bg-[#f0f4ff] rounded-xl flex items-center justify-center mb-6 border border-blue-50">
              <HiOutlinePencilSquare className="text-2xl text-[#1e2d6d]" />
            </div>
            <h3 className="text-xl font-bold text-[#1e2d6d] mb-3">Writing Feedback</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Deep analysis of essays and emails with suggestions for style, tone, and grammar.
            </p>
          </div>

          {/* 3. Weekly Modules */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
            <div className="w-12 h-12 bg-[#f0f4ff] rounded-xl flex items-center justify-center mb-6 border border-blue-50">
              <HiOutlineSquare3Stack3D className="text-2xl text-[#1e2d6d]" />
            </div>
            <h3 className="text-xl font-bold text-[#1e2d6d] mb-3">Weekly Modules</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Structured learning paths that evolve as you progress through different proficiency levels.
            </p>
          </div>

          {/* 4. Integrated Portals (Wide Card) */}
          <div className="md:col-span-2 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
            <div className="md:max-w-[55%] z-10">
              <div className="w-12 h-12 bg-[#f0f4ff] rounded-xl flex items-center justify-center mb-6 border border-blue-50">
                <HiOutlineGlobeAlt className="text-2xl text-[#1e2d6d]" />
              </div>
              <h3 className="text-xl font-bold text-[#1e2d6d] mb-3">Integrated Portals</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Seamless experience between Teacher and Student dashboards for real-time tracking.
              </p>
            </div>
            
            {/* Visual Mockup Element (Mimicking the image) */}
            <div className="mt-8 md:mt-0 w-full md:w-64 h-32 bg-[#f0f4ff]/50 rounded-3xl flex flex-col justify-center px-6 gap-3">
              <div className="h-2.5 w-full bg-gray-300/40 rounded-full"></div>
              <div className="h-2.5 w-3/4 bg-gray-300/40 rounded-full"></div>
              <div className="h-2.5 w-1/2 bg-gray-300/40 rounded-full"></div>
            </div>
          </div>

          {/* 5. Instant Insights (Dark Card) */}
          <div className="bg-[#1e2d6d] p-8 rounded-2xl shadow-xl flex flex-col justify-center text-white">
            <HiMiniBolt className="text-3xl text-white mb-6" />
            <h3 className="text-xl font-bold mb-3">Instant Insights</h3>
            <p className="text-blue-100/80 text-sm leading-relaxed">
              Get 10x faster progress reports compared to traditional classroom settings.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LearningTools;