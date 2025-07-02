"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(
    typeof window !== 'undefined' && localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
  );
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light' || storedTheme === 'dark') {
      setTheme(storedTheme);
    }
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'theme' && (e.newValue === 'light' || e.newValue === 'dark')) {
        setTheme(e.newValue);
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const handleOurWorksClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu on click
    if (window.location.pathname !== '/') {
      router.push('/#projects');
    } else {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-[5px] lg:top-[20px] left-0 right-0 z-50 w-[90%] lg:w-[945px] mx-auto flex flex-col justify-between items-center px-[15px] border border-white/10 ${theme === 'light' ? 'bg-black/15' : 'bg-black/90 lg:bg-black/30'} backdrop-blur-[5px] transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'rounded-[30px] py-[15px] pb-[50px]' : 'rounded-[30px] lg:rounded-full py-[10px] lg:py-[15px]'}`}>
        <div className="w-full flex justify-between items-center">
          <Link href="/">
            <Image
              src="/images/unveilbrand logo.svg"
              alt="Unveilbrand Logo"
              width={135}
              height={40}
              className="object-contain cursor-pointer ml-3"
              priority
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center">
            <ul className={`flex gap-8 text-base font-medium items-center ${theme === 'light' ? 'text-black' : 'text-white'}`}>
              <li className={`hover:${theme === 'light' ? 'text-black/70' : 'text-[#A212A8]'} transition cursor-pointer ${pathname === '/' ? (theme === 'light' ? 'text-[#A212A8] font-semibold' : 'text-[#A212A8] font-semibold') : ''}`}>
                <Link href="/">Home</Link>
              </li>
              <li className={`hover:${theme === 'light' ? 'text-black/70' : 'text-[#A212A8]'} transition cursor-pointer ${pathname === '/#projects' ? (theme === 'light' ? 'text-[#A212A8] font-semibold' : 'text-[#A212A8] font-semibold') : ''}`}>
                <Link href="/#projects" onClick={handleOurWorksClick}>Our Works</Link>
              </li>
              <li className={`hover:${theme === 'light' ? 'text-black/70' : 'text-[#A212A8]'} transition cursor-pointer ${pathname === '/about' ? (theme === 'light' ? 'text-[#A212A8] font-semibold' : 'text-[#A212A8] font-semibold') : ''}`}>
                <Link href="/about">About</Link>
              </li>
              <li className={`hover:${theme === 'light' ? 'text-black/70' : 'text-[#A212A8]'} transition cursor-pointer ${pathname === '/blog' ? (theme === 'light' ? 'text-[#A212A8] font-semibold' : 'text-[#A212A8] font-semibold') : ''}`}>
                <Link href="/blog">Blog</Link>
              </li>
              <li className={`hover:${theme === 'light' ? 'text-black/70' : 'text-[#A212A8]'} transition cursor-pointer ${pathname === '/products' ? (theme === 'light' ? 'text-[#A212A8] font-semibold' : 'text-[#A212A8] font-semibold') : ''}`}>
                <Link href="/products">Products</Link>
              </li>
              <li className="ml-10">
                <Link href="/contact">
                  <button className={`border rounded-full px-6 py-2 font-medium transition cursor-pointer ${theme === 'light' ? 'text-black hover:bg-[#A212A8] hover:text-white border-black/30' : 'text-white hover:bg-[#A212A8] border-white/30'} ${pathname === '/contact' ? (theme === 'light' ? 'bg-[#A212A8] text-white' : 'bg-[#A212A8]') : ''}`}>
                    Contact
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 relative">
              <span className={`block absolute w-full h-0.5 bg-white transition-all duration-300 ease-in-out left-0 ${isMobileMenuOpen ? 'rotate-45 top-[11px]' : 'top-[5px]'}`}></span>
              <span className={`block absolute w-full h-0.5 bg-white transition-all duration-300 ease-in-out left-0 top-[11px] ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block absolute w-full h-0.5 bg-white transition-all duration-300 ease-in-out left-0 ${isMobileMenuOpen ? '-rotate-45 top-[11px]' : 'top-[17px]'}`}></span>
            </div>
          </button>
        </div>
        
        {/* Mobile Menu Links */}
        <div className={`transition-all duration-500 ease-in-out lg:hidden w-full overflow-hidden ${isMobileMenuOpen ? 'max-h-100 mt-8' : 'max-h-0'}`}>
          <ul className={`flex flex-col items-center gap-8 text-2xl font-medium text-center ${theme === 'light' ? 'text-black' : 'text-white'}`}>
            <li className={`hover:${theme === 'light' ? 'text-[#A212A8]' : 'text-[#A212A8]'} transition cursor-pointer ${pathname === '/' ? (theme === 'light' ? 'text-[#A212A8]' : 'text-[#A212A8]') : ''}`}>
              <Link href="/" onClick={handleNavigation}>Home</Link>
            </li>
            <li className={`hover:${theme === 'light' ? 'text-[#A212A8]' : 'text-[#A212A8]'} transition cursor-pointer ${pathname === '/#projects' ? (theme === 'light' ? 'text-[#A212A8]' : 'text-[#A212A8]') : ''}`}>
              <Link href="/#projects" onClick={handleOurWorksClick}>Our Works</Link>
            </li>
            <li className={`hover:${theme === 'light' ? 'text-[#A212A8]' : 'text-[#A212A8]'} transition cursor-pointer ${pathname === '/about' ? (theme === 'light' ? 'text-[#A212A8]' : 'text-[#A212A8]') : ''}`}>
              <Link href="/about" onClick={handleNavigation}>About</Link>
            </li>
            <li className={`hover:${theme === 'light' ? 'text-[#A212A8]' : 'text-[#A212A8]'} transition cursor-pointer ${pathname === '/blog' ? (theme === 'light' ? 'text-[#A212A8]' : 'text-[#A212A8]') : ''}`}>
              <Link href="/blog" onClick={handleNavigation}>Blog</Link>
            </li>
            <li className={`hover:${theme === 'light' ? 'text-[#A212A8]' : 'text-[#A212A8]'} transition cursor-pointer ${pathname === '/products' ? (theme === 'light' ? 'text-[#A212A8]' : 'text-[#A212A8]') : ''}`}>
              <Link href="/products" onClick={handleNavigation}>Products</Link>
            </li>
            <li className={`mt-4 hover:${theme === 'light' ? 'text-[#A212A8]' : 'text-[#A212A8]'} transition cursor-pointer`}>
              <Link href="/contact" onClick={handleNavigation}>
                <button className={`border rounded-full px-8 py-3 font-medium transition cursor-pointer ${theme === 'light' ? 'text-black hover:text-white hover:bg-[#A212A8] border-black/30' : 'text-white border-white/30 hover:bg-[#A212A8]'} ${pathname === '/contact' ? (theme === 'light' ? 'bg-[#A212A8] text-white' : 'bg-[#A212A8]') : ''}`}>
                  Contact
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar; 