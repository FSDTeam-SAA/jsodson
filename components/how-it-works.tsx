import { FiUploadCloud, FiEdit,  } from "react-icons/fi";

const steps = [
  {
    number: '01',
    title: 'Teacher Uploads',
    description: 'Instructors provide specific course materials and curriculum parameters effortlessly.',
    icon: <FiUploadCloud className="w-6 h-6 text-[#1e2d6d]" />,
    // This card sits at the top
    offset: "lg:mt-0" 
  },
  {
    number: '02',
    title: 'Student Completes',
    description: 'Interactive lessons powered by AI adapt to your pace, identifying your specific weaknesses.',
    icon: <FiEdit className="w-6 h-6 text-[#1e2d6d]" />,
    // This card is pushed down slightly
    offset: "lg:mt-16" 
  },
  {
    number: '03',
    title: 'AI Feedback',
    description: 'Instant, detailed analysis of grammar, fluency, and pronunciation in real-time.',
    icon: <FiEdit className="w-6 h-6 text-[#1e2d6d]" />,
    // This card is pushed down the most
    offset: "lg:mt-32" 
  },
];
const HowItWorks = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container  px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#1e2d6d] mb-4">How It Works</h2>
          <p className="text-gray-400 text-sm font-medium">
            Three simple steps to mastery using our proprietary AI learning engine.
          </p>
        </div>

        {/* Steps Container */}
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`relative flex-1 w-full bg-white border border-[#D1D5DB] rounded-2xl p-10 shadow-sm hover:shadow-md transition-all duration-300 min-h-[320px] ${step.offset}`}
            >
              {/* Decorative Background Number */}
              <span className="absolute top-6 right-8 text-7xl font-bold text-[#D1D5DB] pointer-events-none">
                {step.number}
              </span>

              {/* Icon Container */}
              <div className="w-12 h-12 bg-[#F1F5F9] rounded-xl flex items-center justify-center mb-8">
                {step.icon}
              </div>

              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-[#1A1F36] mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;