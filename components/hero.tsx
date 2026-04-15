import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
   <section className="relative w-full   bg-[#f8faff]  overflow-hidden pt-16 2xl:pt-24 md:pt-10">
  {/* Background glow */}
  <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-blue-100/40 blur-[120px] rounded-full -z-10 translate-x-1/4 -translate-y-1/4" />

  <div className="container mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* LEFT */}
    <div className="space-y-6 lg:space-y-8">

      <h1 className="text-3xl sm:text-4xl lg:text-6xl 2xl:text-7xl font-extrabold text-[#1B2A6B] leading-[1.1] tracking-tight">
        Professional Level <br />
        <span className="bg-gradient-to-r from-[#1B296A] to-[#5E080B] bg-clip-text text-transparent">
          English in 30 Weeks
        </span>
      </h1>

      <p className="text-base sm:text-lg lg:text-xl max-w-xl text-gray-700 leading-relaxed">
        <span className="font-bold text-[#1B2A6B]">
          Level up your English.
        </span>{" "}
        <span className="text-gray-500">
          In 30 weeks with our intensive, personalized program designed for
          ambitious professionals.
        </span>
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4">
        <Link
          href="/learning"
          className="bg-[#1e2d6d] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-[#151f4d] transition-all shadow-lg active:scale-95"
        >
          Start Learning
        </Link>

        <Link
          href="/demo"
          className="bg-white text-[#1e2d6d] border border-gray-200 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:border-gray-400 transition-all shadow-sm active:scale-95"
        >
          Request Demo
        </Link>
      </div>

      {/* Social proof */}
      <div className="flex items-center gap-3 pt-2">
        <div className="flex -space-x-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200 relative"
            >
              <Image
                fill
                src={`https://i.pravatar.cc/100?img=${i + 10}`}
                alt="Student"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500">
          Joined by{" "}
          <span className="font-bold text-[#1B2A6B]">10,000+</span> students
          worldwide
        </p>
      </div>
    </div>

    {/* RIGHT */}
    <div className="relative w-full flex justify-center lg:justify-end">
      <Image
        src="/hero.png"
        alt="Mockup"
        width={900}
        height={900}
        priority
        className="2xl:max-w-[700px] object-contain"
      />
    </div>

  </div>
</section>
  );
};

export default Hero;
