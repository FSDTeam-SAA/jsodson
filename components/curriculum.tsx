import { 
  HiOutlineVideoCamera, 
  HiOutlineLightBulb, 
  HiOutlinePencil, 
  HiOutlineMicrophone, 
  HiOutlineChartBar, 
  HiOutlineUsers 
} from "react-icons/hi2";

const curriculumData = [
  {
    week: "WEEK 1",
    title: "Business Communication Basics",
    tasks: [
      { icon: <HiOutlineVideoCamera />, label: "Video Lesson", sub: "Professional Greetings" },
      { icon: <HiOutlineLightBulb />, label: "AI Quiz", sub: "Contextual Vocabulary" },
      { icon: <HiOutlinePencil />, label: "Writing Task", sub: "Formal Email Draft" },
    ]
  },
  {
    week: "WEEK 2",
    title: "Mastering Presentations",
    tasks: [
      { icon: <HiOutlineMicrophone />, label: "Speaking Drills", sub: "Pitch Practice" },
      { icon: <HiOutlineChartBar />, label: "Interactive Data", sub: "Describing Trends" },
      { icon: <HiOutlineUsers />, label: "Peer Review", sub: "Collaborative Feedback" },
    ]
  }
];

const Curriculum = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-2xl  lg:text-[36px]  font-extrabold text-[#1A1F36]">Structured Weekly Learning</h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {curriculumData.map((item, idx) => (
            <div key={idx} className="relative pl-12 pb-16 last:pb-0">
              
              {/* Vertical Line */}
              <div className="absolute left-[5px] top-2 bottom-0 w-[2px] bg-blue-100" />
              
              {/* Timeline Dot */}
              <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-[#1e2d6d] z-10" />

              {/* Week Header */}
              <div className="mb-8">
                <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">
                  {item.week}
                </span>
                <h3 className="text-2xl font-bold text-[#1e2d6d] mt-1">
                  {item.title}
                </h3>
              </div>

              {/* Task Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {item.tasks.map((task, tIdx) => (
                  <div 
                    key={tIdx} 
                    className="bg-white border border-gray-100 p-5 rounded-xl hover:shadow-sm transition-shadow flex items-start gap-4"
                  >
                    <div className="text-xl text-blue-600 mt-1">
                      {task.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-800">{task.label}</h4>
                      <p className="text-xs text-gray-400 mt-1">{task.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Curriculum;