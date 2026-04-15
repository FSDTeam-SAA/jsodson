import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-24 bg-[#f8faff]">
      <div className="container px-6">
        {/* Main Card Container */}
        <div className="relative bg-white rounded-[40px] shadow-2xl shadow-blue-100/50 flex flex-col lg:flex-row items-center overflow-hidden min-h-[450px]">
          {/* Left Side: Content */}
          <div className="flex-1 p-10 lg:p-20 z-10">
            <h2 className="text-xl lg:text-4xl font-extrabold text-[#1A1F36] leading-relaxed  mb-6">
              Start your journey to fluency with <br /> Apex English today!
            </h2>
            <p className="text-[#6B7280] text-lg max-w-lg mb-10 leading-relaxed">
              Explore a sample week from our course and take our placement test
              to find your level and ideal starting point.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/signup"
                className="bg-[#1e2d6d] text-white px-4 py-4 rounded-xl font-bold hover:bg-[#151f4d] transition-all shadow-lg"
              >
                Create Account
              </Link>
              <Link
                href="/student-join"
                className="bg-white text-[#1e2d6d] border border-gray-200 px-8 py-4 rounded-xl font-bold hover:border-gray-400 transition-all"
              >
                Join as Student
              </Link>
            </div>
          </div>

          {/* Right Side: Visual Section */}
          <div>
            <Image
              width={500}
              height={500}
              src="/ctaimage.png"
              alt="CTA Illustration"
              className="w-full h-auto object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
