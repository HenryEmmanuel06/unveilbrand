'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AnimatedSection from './AnimatedSection';
import React from 'react';

const Footer = () => {
  const router = useRouter();

  const [theme, setTheme] = React.useState<'dark' | 'light'>('dark');
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme as 'dark' | 'light');
    const handleThemeChange = (e: StorageEvent) => {
      if (e.key === 'theme') {
        setTheme(e.newValue as 'dark' | 'light');
      }
    };
    window.addEventListener('storage', handleThemeChange);
    return () => window.removeEventListener('storage', handleThemeChange);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOurWorksClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // If we're not on the home page, navigate to home page first
    if (window.location.pathname !== '/') {
      router.push('/#projects');
    } else {
      // If we're already on home page, just scroll to the section
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`relative ${theme === 'dark' ? 'bg-[#040508] text-white' : 'bg-white text-gray-900'} pt-10 pb-10 md:pt-20 overflow-hidden transition-colors duration-300`}>
      {/* Top section: Navigation links and subscription form */}
      <AnimatedSection className="w-[90%] max-w-[1332px] mx-auto flex flex-col md:flex-col lg:flex-row items-center justify-between pb-10">
        {/* Navigation Links */}
        <nav className="hidden md:flex flex-col flex-row gap-10 mb-4 md:mb-0">
          <Link href="/" className={`transition cursor-pointer text-center ${theme === 'dark' ? 'text-white hover:text-[#A212A8]' : 'text-gray-900 hover:text-black'}`}>Home</Link>
          <Link href="/about" className={`transition cursor-pointer text-center ${theme === 'dark' ? 'text-white hover:text-[#A212A8]' : 'text-gray-900 hover:text-black'}`}>About</Link>
          <Link href="/#projects" onClick={handleOurWorksClick} className={`transition cursor-pointer text-center ${theme === 'dark' ? 'text-white hover:text-[#A212A8]' : 'text-gray-900 hover:text-black'}`}>Our Works</Link>
          <Link href="/products" className={`transition cursor-pointer text-center ${theme === 'dark' ? 'text-white hover:text-[#A212A8]' : 'text-gray-900 hover:text-black'}`}>Marketplace</Link>
          <Link href="/blog" className={`transition cursor-pointer text-center ${theme === 'dark' ? 'text-white hover:text-[#A212A8]' : 'text-gray-900 hover:text-black'}`}>Blog</Link>
        </nav>
        {/* Subscription Form */}
        <form className="flex items-center gap-3 w-[90%] md:w-auto flex-col md:flex-row mt-0 md:mt-10 lg:mt-0">
          <div className={`flex items-center border rounded-full px-4 py-2.5 w-[100%] md:w-auto transition-colors duration-300 ${theme === 'dark' ? 'border-[#ffffff]' : 'border-black'}`}>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className={`bg-transparent outline-none px-2 w-[100%] md:w-auto h-full transition-colors duration-300 ${theme === 'dark' ? 'text-white placeholder-[#FFFFFF33]' : 'text-gray-900 placeholder-black/60'}`}
            />
            <Image src="/images/email logo.svg" alt="Email" width={22} height={22} style={theme === 'light' ? { filter: 'invert(0) brightness(0)' } : {}} />
          </div>
          <button
            type="submit"
            className={`border rounded-full px-6 py-2.5 h-full transition w-[100%] md:w-auto ${theme === 'dark' ? 'border-[#ffffff] text-white hover:bg-[#232323]' : 'border-black text-black hover:bg-black hover:text-white'}`}
          >
            Subscribe Today!
          </button>
        </form>
      </AnimatedSection>
      <div className="w-[90%] max-w-[1330px] mx-auto flex flex-col">
          <Image src="/images/unveilbrand footer logo.png" alt="WhatsApp" width={1330} height={239} className={`border-b px-5 mb-5 md:mb-0 transition-colors duration-300 mx-auto ${theme === 'dark' ? 'border-[#7F7F7F]' : 'border-black'}`}/>
      </div>
      <div className="w-[90%] max-w-[1330px] mx-auto flex flex-col text-center gap-2">
        {/* Large background text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none w-[90%] max-w-[1330px] mx-auto mt-10 md:mt-30">
         
        
          {/* <div className="border-t border-[#7F7F7F] relative z-10 w-[1775px] md:w-[1330px] mx-auto"></div> */}
        </div>

        {/* Content above the line (empty for spacing) */}
        {/* <div className="h-12 md:h-40 lg:h-48" /> */}
        {/* Horizontal line */}
        

        {/* Footer main row */}
        <div className="z-10 flex flex-col md:flex-row items-center justify-center w-full mx-auto pt-5 md:pt-20">
          {/* Chat Us Button */}
          <Link
            href="https://wa.me/your-number"
            className={`fixed bottom-4 left-4 z-50 flex items-center gap-2 border rounded-full pl-4 px-2 hover:px-3 py-3 transition mb-4 md:mb-0 ring-animate group ${theme === 'dark' ? 'border-[#232323] text-white hover:bg-[#232323]' : 'border-black text-black hover:bg-none hover:text-black'}`}
            style={{
              animation: 'ringy-shake 1.5s infinite',
              animationPlayState: 'running'
            }}
            onMouseEnter={e => { e.currentTarget.style.animationPlayState = 'paused'; }}
            onMouseLeave={e => { e.currentTarget.style.animationPlayState = 'running'; }}
          >
            <Image src="/images/whatsapp logo.svg" alt="WhatsApp" width={18} height={18} style={theme === 'light' ? { filter: 'invert(0) brightness(0)' } : { filter: 'none' }} />
            <span className="m-0 max-w-0 overflow-hidden group-hover:max-w-xs group-hover:pl-2 group-hover:overflow-visible transition-all duration-300 ease-in-out relative" style={{whiteSpace: 'nowrap'}}>
              Chat Us!
            </span>
          </Link>

          {/* Social Icons */}
          <div className={`flex items-center gap-7 border rounded-full px-[20px] py-[10px] transition-colors duration-300 ${theme === 'dark' ? 'border-[#232323]' : 'border-black'}`}
            style={{ boxShadow: theme === 'dark' ? "0px 0px 10px 0px #00000026" : "0px 0px 10px 0px #00000026" }}>

            <Link href="#" aria-label="Facebook" className="hover:opacity-80 transition">
              <Image src="/images/facebook logo.svg" alt="Facebook" width={22} height={22} style={theme === 'light' ? { filter: 'invert(0) brightness(0)' } : {}} />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:opacity-80 transition">
              <Image src="/images/instagram logo.svg" alt="Instagram" width={22} height={22} style={theme === 'light' ? { filter: 'invert(0) brightness(0)' } : {}} />
            </Link>
            <Link href="#" aria-label="TikTok" className="hover:opacity-80 transition">
              <Image src="/images/tiktok logo.svg" alt="TikTok" width={22} height={22} style={theme === 'light' ? { filter: 'invert(0) brightness(0)' } : {}} />
            </Link>
            <Link href="#" aria-label="YouTube" className="hover:opacity-80 transition">
              <Image src="/images/youtube logo.svg" alt="YouTube" width={22} height={22} style={theme === 'light' ? { filter: 'invert(0) brightness(0)' } : {}} />
            </Link>
            <Link href="#" aria-label="X" className="hover:opacity-80 transition">
              <Image src="/images/twitter logo.svg" alt="X" width={22} height={22} style={theme === 'light' ? { filter: 'invert(0) brightness(0)' } : {}} />
            </Link>
            <Link href="#" aria-label="Dribbble" className="hover:opacity-80 transition">
              <Image src="/images/dribble logo.svg" alt="Dribbble" width={22} height={22} style={theme === 'light' ? { filter: 'invert(0) brightness(0)' } : {}} />
            </Link>
          </div>

          {/* Scroll Up Button */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`fixed bottom-4 right-4 z-50 flex items-center gap-2 border rounded-full p-2 transition mt-4 md:mt-0 ${theme === 'dark' ? 'border-[#232323] text-white hover:bg-none' : 'border-black text-black hover:bg-none hover:text-white'} ${isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} cursor-pointer`}
            style={{
              transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out'
            }}
          >
            <Image src="/images/arrow up.svg" alt="Scroll Up" width={22} height={22} style={theme === 'light' ? { filter: 'invert(0) brightness(0)' } : {filter: 'none'}} />
            {/* <span className="font-medium">Scroll Up</span> */}
          </button>
        </div>
      </div>

      {/* Custom CSS for shake animation */}
      <style jsx>{`
        @keyframes ringy-shake {
          0% { transform: translateY(0) rotate(0deg); }
          10% { transform: translateY(-4px) rotate(-8deg); }
          20% { transform: translateY(4px) rotate(6deg); }
          30% { transform: translateY(-4px) rotate(-6deg); }
          40% { transform: translateY(4px) rotate(4deg); }
          50% { transform: translateY(-2px) rotate(-2deg); }
          60% { transform: translateY(2px) rotate(2deg); }
          70% { transform: translateY(-1px) rotate(-1deg); }
          80% { transform: translateY(1px) rotate(1deg); }
          90% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
      `}</style>
    </footer>
  );
};

export default Footer; 