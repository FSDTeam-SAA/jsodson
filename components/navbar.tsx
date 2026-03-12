import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="w-full bg-[#f8faff] border-b border-gray-100 ">
      <div className="container flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="">
          <Link href="/" className=''>
            <Image 
              src="/logo.png"
              alt="Apex English Logo" 
              width={120} 
              height={82} 
              priority
            />
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center space-x-10">
          <Link href="/features" className="text-sm font-semibold text-gray-700 hover:text-blue-900 transition">
            Features
          </Link>
          <Link href="/how-it-works" className="text-sm font-semibold text-gray-700 hover:text-blue-900 transition">
            How It Works
          </Link>
          <Link href="/curriculum" className="text-sm font-semibold text-gray-700 hover:text-blue-900 transition">
            Curriculum
          </Link>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center space-x-8">
          <Link href="/login" className="text-sm font-bold text-gray-800 hover:opacity-70 transition">
            Login
          </Link>
          <Link 
            href="/signup" 
            className="bg-[#1e2d6d] text-white px-6 py-2.5 rounded-md text-sm font-bold hover:bg-[#151f4d] transition shadow-sm"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;