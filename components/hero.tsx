import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full bg-[#f8faff] overflow-hidden pt-16 lg:pt-40 pb-0">
      {" "}
      {/* Background soft glow effect */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-100/40 blur-[120px] rounded-full -z-10 translate-x-1/4 -translate-y-1/4" />
      <div className="container px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="space-y-8 z-10">
          <h1 className="text-3xl lg:text-7xl font-extrabold text-[#1B2A6B] leading-[1.1] tracking-tight">
            Professional Level <br />
            <span className="bg-gradient-to-r from-[#1B296A] to-[#5E080B] bg-clip-text text-transparent">
              English in 30 Weeks
            </span>
          </h1>

          <p className=" text-lg lg:text-xl flex max-w-lg leading-relaxed">
            <h1 className="font-bold ">
              Level up your English.{" "}
              <span className="text-gray-500 text-sm">
                {" "}
                In 30 weeks with our intensive, personalized program designed
                for ambitious professionals.
              </span>
            </h1>
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
          <div className="flex items-center gap-3 pb-10">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200 relative"
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
            <p className="text-sm font-medium text-gray-400">
              Joined by{" "}
              <span className="font-bold text-[#1B2A6B]">10,000+</span> students
              worldwide
            </p>
          </div>
        </div>

        {/* Right Column: Browser Mockup */}
        <div className="relative flex h-full justify-center lg:justify-end">
          <div className="lg:absolute lg:bottom-0">
            <Image
              src="/hero.png"
              alt="Mockup"
              width={600}
              height={600}
              priority
              className="object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
