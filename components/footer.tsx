import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineEnvelope } from 'react-icons/hi2';

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-50">
      <div className="container px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-4">
            <div >
              <Image 
                src="/logo.png" 
                alt="Apex English Logo" 
                width={210} 
                height={130} 
              />
            </div>
            <p className="text-gray-400 text-[15px] leading-relaxed max-w-xs">
              It is a long established fact that a reader will be distracted by 
              the readable content of a page when looking at its layout. The point 
              of using Lorem Ipsum is making it look like readable English.
            </p>
          </div>

          {/* Sitemap */}
          <div className="md:col-span-2">
            <h4 className="text-[#1e2d6d] font-bold text-sm mb-6">Sitemap</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-[#1e2d6d] transition">Home</Link></li>
              <li><Link href="#" className="hover:text-[#1e2d6d] transition">Abouts</Link></li>
              <li><Link href="#" className="hover:text-[#1e2d6d] transition">Growers</Link></li>
              <li><Link href="#" className="hover:text-[#1e2d6d] transition">Merchants</Link></li>
              <li><Link href="#" className="hover:text-[#1e2d6d] transition">Contact</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-2">
            <h4 className="text-[#1e2d6d] font-bold text-sm mb-6">Socials</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-[#1e2d6d] transition">Facebook</Link></li>
              <li><Link href="#" className="hover:text-[#1e2d6d] transition">Linkedin</Link></li>
              <li><Link href="#" className="hover:text-[#1e2d6d] transition">Instagram</Link></li>
              <li><Link href="#" className="hover:text-[#1e2d6d] transition">Twitter</Link></li>
            </ul>
          </div>

          {/* Office & Newsletter */}
          <div className="md:col-span-4">
            <h4 className="text-[#1e2d6d] font-bold text-sm mb-4">Head Office</h4>
            <p className="text-gray-400 text-xs leading-loose mb-10">
              Xilliams Corner Wine © 2017. 1112 A Market St <br />
              # Ste B22, Charlottesville, CA 45565
            </p>

            <h4 className="text-[#1e2d6d] font-bold text-sm mb-6">News letter</h4>
            <div className="relative w-full border-b border-gray-200 pb-2 flex items-center">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-transparent outline-none text-sm text-gray-500 placeholder:text-gray-300"
              />
              <HiOutlineEnvelope className="text-gray-400 text-xl" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-50 gap-4">
          <div className="text-gray-400 text-sm">
            contact@lift.agency
          </div>
          <div className="text-gray-400 text-sm">
            (123) 456-7890
          </div>
          <div className="text-gray-300 text-[11px] font-medium uppercase tracking-wider">
            © 2026 Apex English All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;