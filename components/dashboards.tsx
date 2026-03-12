import { HiOutlineBookOpen, HiOutlineChartBar, HiOutlineCheckCircle, HiOutlineUsers } from "react-icons/hi2";

const Dashboards = () => {
  return (
    <section className="py-24 bg-[#f8faff]">
      <div className="container px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-extrabold text-[#1A1F36] mb-4">Powerful Dashboards for Everyone</h2>
          <p className="text-[#6B7280] text-lg">
            Purpose-built interfaces that give students clarity and teachers control.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* STUDENT DASHBOARD (Light) */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Browser Header */}
            <div className="px-6 py-4 border-b border-gray-50 flex justify-between items-center">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <span className="text-[10px] font-bold py-1 px-3 border border-gray-200 rounded-full text-gray-500 uppercase tracking-tighter">
                Student View
              </span>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-xl font-bold text-[#1e2d6d]">Welcome back, Alex!</h3>
                  <p className="text-sm text-gray-400 mt-1">You&apos;re on a 5-day learning streak.</p>
                </div>
                <div className="p-2 bg-gray-50 rounded-lg text-gray-400">
                  <HiOutlineChartBar className="text-xl" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-10">
                {/* Next Lesson Card */}
                <div className="bg-[#f0f4ff] p-5 rounded-2xl">
                  <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">Next Lesson</p>
                  <h4 className="text-sm font-bold text-[#1e2d6d] mb-4">Advanced Phrasal Verbs</h4>
                  <button className="w-full bg-[#1e2d6d] text-white py-2 rounded-lg text-xs font-bold">Start Now</button>
                </div>
                {/* Recent Score Card */}
                <div className="bg-[#f0fff4] p-5 rounded-2xl border border-green-50">
                  <p className="text-[10px] font-bold text-gray-400 uppercase mb-2 text-green-700/50">Recent Score</p>
                  <h4 className="text-sm font-bold text-[#1e2d6d] mb-1">Grammar Quiz 4</h4>
                  <div className="flex items-center gap-2 text-green-500 font-bold text-lg">
                    92% <HiOutlineCheckCircle className="text-xl" />
                  </div>
                </div>
              </div>

              {/* Tasks List */}
              <div>
                <h4 className="text-sm font-bold text-[#1e2d6d] mb-4">Upcoming Tasks</h4>
                <div className="space-y-3">
                  {[1, 2].map((i) => (
                    <div key={i} className="flex justify-between items-center p-4 border border-gray-50 rounded-xl">
                      <div className="flex items-center gap-3 text-[#1e2d6d]">
                        <HiOutlineBookOpen className="text-gray-400" />
                        <span className="text-xs font-semibold">Reading Assignment {i}</span>
                      </div>
                      <span className="text-[10px] font-bold text-gray-400">Due Tomorrow</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* TEACHER DASHBOARD (Dark) */}
          <div className="bg-[#1e2d6d] rounded-3xl shadow-xl overflow-hidden text-white">
            {/* Browser Header */}
            <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center">
              <div className="flex gap-1.5 opacity-40">
                <div className="w-2.5 h-2.5 rounded-full bg-white" />
                <div className="w-2.5 h-2.5 rounded-full bg-white" />
                <div className="w-2.5 h-2.5 rounded-full bg-white" />
              </div>
              <span className="text-[10px] font-bold py-1 px-3 border border-white/20 rounded-full text-white/60 uppercase tracking-tighter">
                Teacher View
              </span>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-xl font-bold">Class Overview</h3>
                  <p className="text-sm text-white/40 mt-1 font-medium">Intermediate B2 - Fall Cohort</p>
                </div>
                <div className="p-2 bg-white rounded-lg text-[#1e2d6d]">
                  <HiOutlineUsers className="text-xl" />
                </div>
              </div>

              <div className="flex items-end justify-between mb-12">
                <div>
                  <p className="text-xs font-bold text-white/40 uppercase mb-2">Class Average</p>
                  <span className="text-5xl font-black">84%</span>
                </div>
                {/* Simple Bar Chart Visual */}
                <div className="flex items-end gap-1.5 h-16">
                  {[30, 45, 40, 60, 55, 70, 65].map((h, i) => (
                    <div key={i} className="w-2.5 bg-red-500 rounded-t-sm" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>

              {/* Needs Attention */}
              <div>
                <h4 className="text-sm font-bold text-white/40 mb-4 uppercase tracking-wide">Needs Attention</h4>
                <div className="space-y-3">
                  {[
                    { name: "Sarah Jenkins", msg: "Missed 2 assignments", color: "text-red-400" },
                    { name: "David Chen", msg: "Struggling with grammar", color: "text-yellow-400" },
              
                  ].map((user, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-white/5 border border-white/5 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-500 rounded-full border border-white/10" />
                        <div>
                          <p className="text-xs font-bold">{user.name}</p>
                          <p className={`text-[10px] ${user.color}`}>{user.msg}</p>
                        </div>
                      </div>
                      <button className="text-[10px] font-bold py-1.5 px-4 bg-white/10 hover:bg-white/20 rounded-lg transition">Message</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Dashboards;