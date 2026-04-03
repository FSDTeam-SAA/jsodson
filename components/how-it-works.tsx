// import { FiUploadCloud, FiEdit,  } from "react-icons/fi";

// const steps = [
//   {
//     number: '01',
//     title: '1-2-1 class ',
//     description: 'Instructors provide specific course materials and curriculum parameters effortlessly.',
//     icon: <FiUploadCloud className="w-6 h-6 text-[#1e2d6d]" />,
//     // This card sits at the top
//     offset: "lg:mt-0" 
//   },
//   {
//     number: '02',
//     title: 'Student Completes',
//     description: 'Interactive lessons powered by AI adapt to your pace, identifying your specific weaknesses.',
//     icon: <FiEdit className="w-6 h-6 text-[#1e2d6d]" />,
//     // This card is pushed down slightly
//     offset: "lg:mt-16" 
//   },
//   {
//     number: '03',
//     title: 'AI Feedback',
//     description: 'Instant, detailed analysis of grammar, fluency, and pronunciation in real-time.',
//     icon: <FiEdit className="w-6 h-6 text-[#1e2d6d]" />,
//     // This card is pushed down the most
//     offset: "lg:mt-32" 
//   },
// ];
// const HowItWorks = () => {
//   return (
//     <section className="py-24 bg-white">
//       <div className="container  px-6">
        
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-extrabold text-[#1e2d6d] mb-4">Each Week</h2>
//           <p className="text-gray-400 text-sm font-medium">
//             Three simple steps to mastery using our proprietary AI learning engine.
//           </p>
//         </div>

//         {/* Steps Container */}
//         <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
//           {steps.map((step, index) => (
//             <div 
//               key={index}
//               className={`relative flex-1 w-full bg-white border border-[#D1D5DB] rounded-2xl p-10 shadow-sm hover:shadow-md transition-all duration-300 min-h-[320px] ${step.offset}`}
//             >
//               {/* Decorative Background Number */}
//               <span className="absolute top-6 right-8 text-7xl font-bold text-[#D1D5DB] pointer-events-none">
//                 {step.number}
//               </span>

//               {/* Icon Container */}
//               <div className="w-12 h-12 bg-[#F1F5F9] rounded-xl flex items-center justify-center mb-8">
//                 {step.icon}
//               </div>

//               {/* Text Content */}
//               <div className="relative z-10">
//                 <h3 className="text-xl font-bold text-[#1A1F36] mb-4">
//                   {step.title}
//                 </h3>
//                 <p className="text-gray-500 leading-relaxed text-[15px]">
//                   {step.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;


import { ChevronRight } from "lucide-react";
import { FiUser, FiBookOpen } from "react-icons/fi";

const steps = [
  {
    number: "01",
    title: "1-2-1 Class",
    description:
      "Your expert tutor introduces this week’s topic. You receive a one hour lesson focused on speaking skills which you can book flexibly.",
    icon: <FiUser className="w-6 h-6 text-[#1e2d6d]" />,
    offset: "lg:mt-0",
  },
  {
    number: "02",
    title: "Student Receives Weekly Materials",
    icon: <FiBookOpen className="w-6 h-6 text-[#1e2d6d]" />,
    offset: "lg:mt-16",
    list: [
      "Interactive quizzes introduce vocabulary and reinforce key language",
      "Recorded lessons introduce additional learning",
      "Targeted reading, writing and listening practice with AI-powered feedback",
      "Weekly bonus material including articles, videos and podcasts",
    ],
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-6 mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#1e2d6d] mb-4">
            Each Week
          </h2>
          <p className="text-gray-400 text-sm font-medium">
            Your weekly learning process step by step.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex-1 w-full bg-white border border-[#D1D5DB] rounded-2xl p-10 shadow-sm hover:shadow-md transition-all duration-300 min-h-[320px] ${step.offset}`}
            >
              {/* Background Number */}
              <span className="absolute top-6 right-8 text-7xl font-bold text-[#D1D5DB] pointer-events-none">
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 bg-[#F1F5F9] rounded-xl flex items-center justify-center mb-8">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#1A1F36] mb-4">
                {step.title}
              </h3>

              {/* Description */}
              {step.description && (
                <p className="text-gray-500 leading-relaxed text-[15px] mb-4">
                  {step.description}
                </p>
              )}

              {/* Bullet List */}
              {step.list && (
                <ul className="space-y-3 text-gray-500 text-[15px]">
                  {step.list.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-green-500"><ChevronRight className="text-[#1e2d6d]"/></span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div>
          <p className="text-center text-gray-400 text-sm mt-12">
          Students are assessed at the start and end of each 10-week module to ensure precise progress tracking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;