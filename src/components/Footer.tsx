'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AnimatedSection from './AnimatedSection';

const Footer = () => {
  const router = useRouter();

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
    <footer className="relative bg-[#040508] text-white pt-20 pb-10 overflow-hidden">
      {/* Top section: Navigation links and subscription form */}
      <AnimatedSection className="w-[90%] max-w-[1332px] mx-auto flex flex-col md:flex-col lg:flex-row items-center justify-between pb-10">
        {/* Navigation Links */}
        <nav className="flex flex-col sm:justify-center sm:items-center md:flex-row gap-10 mb-4 md:mb-0">
          <Link href="/" className="hover:text-[#A212A8] transition cursor-pointer text-center">Home</Link>
          <Link href="/about" className="hover:text-[#A212A8] transition cursor-pointer text-center">About</Link>
          <Link href="/#projects" onClick={handleOurWorksClick} className="hover:text-[#A212A8] transition cursor-pointer text-center">Our Works</Link>
          <Link href="/marketplace" className="hover:text-[#A212A8] transition cursor-pointer text-center">Marketplace</Link>
          <Link href="/blog" className="hover:text-[#A212A8] transition cursor-pointer text-center">Blog</Link>
        </nav>
        {/* Subscription Form */}
        <form className="flex items-center gap-3 w-[90%] md:w-auto flex-col md:flex-row mt-0 md:mt-10 lg:mt-0">
          <div className="flex items-center border border-[#ffffff] rounded-full px-4 py-2.5 w-[100%] md:w-auto">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="bg-transparent outline-none text-white placeholder-[#FFFFFF33] px-2 w-[100%] md:w-auto h-full"
            />
              <Image src="/images/email logo.svg" alt="Email" width={22} height={22} />
            
          </div>
          <button
            type="submit"
            className="border border-[#fffff] rounded-full px-6 py-2.5 h-full text-white hover:bg-[#232323] transition w-[100%] md:w-auto"
          >
            Subscribe Today!
          </button>
        </form>
      </AnimatedSection>

      <div className="w-[90%] max-w-[1330px] mx-auto flex flex-col text-center gap-2">
        {/* Large background text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none w-[90%] max-w-[1330px] mx-auto mt-60 md:mt-30">
         
          <Image src="/images/unveilbrand footer logo.png" alt="WhatsApp" width={1330} height={239} className='border-b border-[#7F7F7F] px-5'/>
        
          {/* <div className="border-t border-[#7F7F7F] relative z-10 w-[1775px] md:w-[1330px] mx-auto"></div> */}
        </div>

        {/* Content above the line (empty for spacing) */}
        <div className="h-32 md:h-40 lg:h-48" />
        {/* Horizontal line */}
        

        {/* Footer main row */}
        <div className="z-10 flex flex-col md:flex-row items-center justify-between w-full mx-auto pt-20">
          {/* Chat Us Button */}
          <Link
            href="https://wa.me/your-number"
            className="flex items-center gap-2 border border-[#232323] rounded-full px-6 py-2 text-white hover:bg-[#232323] transition mb-4 md:mb-0"
          >
            <Image src="/images/whatsapp logo.svg" alt="WhatsApp" width={22} height={22} />
            <span className="font-medium">Chat Us!</span>
          </Link>

          {/* Social Icons */}
          <div className="flex items-center gap-7 border border-[#232323] rounded-full px-[20px] py-[10px]" style={{
            boxShadow: "0px 0px 10px 0px #00000026",
          }}>

            <Link href="#" aria-label="Facebook" className="hover:opacity-80 transition">
              <Image src="/images/facebook logo.svg" alt="Facebook" width={22} height={22} />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:opacity-80 transition">
              <Image src="/images/instagram logo.svg" alt="Instagram" width={22} height={22} />
            </Link>
            <Link href="#" aria-label="TikTok" className="hover:opacity-80 transition">
              <Image src="/images/tiktok logo.svg" alt="TikTok" width={22} height={22} />
            </Link>
            <Link href="#" aria-label="YouTube" className="hover:opacity-80 transition">
              <Image src="/images/youtube logo.svg" alt="YouTube" width={22} height={22} />
            </Link>
            <Link href="#" aria-label="X" className="hover:opacity-80 transition">
              <Image src="/images/twitter logo.svg" alt="X" width={22} height={22} />
            </Link>
            <Link href="#" aria-label="Dribbble" className="hover:opacity-80 transition">
              <Image src="/images/dribble logo.svg" alt="Dribbble" width={22} height={22} />
            </Link>
          </div>

          {/* Scroll Up Button */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 border border-[#232323] rounded-full px-6 py-2 text-white hover:bg-[#232323] transition mt-4 md:mt-0"
          >
            <Image src="/images/arrow up.svg" alt="Scroll Up" width={22} height={22} />
            <span className="font-medium">Scroll Up</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 