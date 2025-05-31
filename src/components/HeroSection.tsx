"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Multi-stage transform values for pills
  const leftPillsY = useTransform(scrollY, [0, 200, 800], [0, 120, 600]);
  const leftPillsX = useTransform(scrollY, [0, 200, 800], [0, -60, -300]);
  const leftPillsRotate = useTransform(scrollY, [0, 200, 800], [0, -10, -45]);
  const leftPillsOpacity = useTransform(scrollY, [0, 800, 1000], [1, 1, 0]);

  const rightPillsY = useTransform(scrollY, [0, 200, 800], [0, 120, 600]);
  const rightPillsX = useTransform(scrollY, [0, 200, 800], [0, 60, 300]);
  const rightPillsRotate = useTransform(scrollY, [0, 200, 800], [0, 10, 45]);
  const rightPillsOpacity = useTransform(scrollY, [0, 800, 1000], [1, 1, 0]);

  return (
    <section className="relative w-full flex flex-col items-center justify-center min-h-[80vh] py-16 bg-[#040508] overflow-hidden">
      {/* Shiny background */}
      <Image
        src="/images/shinny background.png"
        alt="Shiny background"
        fill
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        priority
      />
      {/* Main container */}
      <div className="relative z-10 mx-auto w-[90%] max-w-[1330px] flex flex-col items-center text-center gap-2">
        {/* Navbar */}
        <nav className="fixed top-[20px] left-0 right-0 z-50 w-[90%] lg:w-[945px] mx-auto flex justify-between items-center py-[15px] px-[15px] border border-white/10 rounded-full bg-black/30 backdrop-blur-[15px]">
          <Link href="/">
            <Image
              src="/images/unveilbrand logo.png"
              alt="Unveilbrand Logo"
              width={135}
              height={40}
              className="object-contain cursor-pointer"
              priority
            />
          </Link>
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center">
            <ul className="flex gap-8 text-white text-base font-medium">
              <li className="hover:text-[#A212A8] transition cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-[#A212A8] transition cursor-pointer">
                <Link href="/our-works">Our Works</Link>
              </li>
              <li className="hover:text-[#A212A8] transition cursor-pointer">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:text-[#A212A8] transition cursor-pointer">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="hover:text-[#A212A8] transition cursor-pointer">
                <Link href="/products">Products</Link>
              </li>
            </ul>
            <button className="ml-20 border border-white/30 rounded-full px-6 py-2 text-white font-medium hover:bg-[#A212A8] transition cursor-pointer">Contact</button>
          </div>
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </nav>
        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-black/95 z-50 transition-all duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col items-center justify-center h-full relative">
            {/* Close Button */}
            <button 
              className="absolute top-8 right-8 text-white p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <span className="w-full h-0.5 bg-white transform rotate-45 absolute"></span>
                <span className="w-full h-0.5 bg-white transform -rotate-45 absolute"></span>
              </div>
            </button>
            <ul className="flex flex-col gap-8 text-white text-2xl font-medium text-center">
              <li className="hover:text-[#A212A8] transition cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-[#A212A8] transition cursor-pointer">
                <Link href="/our-works">Our Works</Link>
              </li>
              <li className="hover:text-[#A212A8] transition cursor-pointer">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:text-[#A212A8] transition cursor-pointer">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="hover:text-[#A212A8] transition cursor-pointer">
                <Link href="/products">Products</Link>
              </li>
            </ul>
            <button className="mt-8 border border-white/S30 rounded-full px-8 py-3 text-white font-medium hover:bg-white/10 transition">Contact</button>
          </div>
        </div>
        {/* Category Pills */}
        <div className="w-full flex justify-center lg:justify-end max-w-[945px] mx-auto mt-[20px] lg:mt-[100px]">
          <div className="flex flex-wrap sm:flex-nowrap gap-y-2 gap-x-0 justify-center lg:justify-end w-full">
            {['Branding', 'Websites', 'Mobile Apps', 'Dashboards', 'Templates', 'UI Kits'].map((cat, idx) => {
              const isLeftSide = idx < 3;
              return (
                <motion.span
                  key={cat}
                  style={{
                    y: isLeftSide ? leftPillsY : rightPillsY,
                    x: isLeftSide ? leftPillsX : rightPillsX,
                    rotate: isLeftSide ? leftPillsRotate : rightPillsRotate,
                    opacity: isLeftSide ? leftPillsOpacity : rightPillsOpacity,
                    position: 'relative',
                    zIndex: 10 + idx
                  }}
                  className={
                    `border border-white/20 rounded-full px-[30px] py-[15px] text-white/80 text-sm font-medium bg-black/30 backdrop-blur-[15px] hover:bg-white/10 transition cursor-pointer whitespace-nowrap ` +
                    `${idx !== 0 ? '-ml-7 ' : ''}`
                  }
                >
                  {cat}
                </motion.span>
              );
            })}
          </div>
        </div>
        {/* Headline */}
        <h1 className="text-white text-[40px] md:text-[70px] xl:text-[90px] font-normal leading-[90%] mx-auto text-center">
          We build <span className="font-bold text-white">digital products </span><br className="hidden md:block" />
          with <span className="font-bold text-white">emphasis!</span>
        </h1>
        {/* Subheadline */}
        <p className="text-white text-lg max-w-xl mx-auto my-4">
          More than just great design, we craft strategic solutions that fuel your brand&apos;s growth, attract the right customers, and turn attention into sales.
        </p>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          <button className="flex items-center gap-4 bg-[#A212A8] text-white font-medium px-8 py-3 rounded-full shadow-lg hover:bg-[#A212A8] transition cursor-pointer">
            <Image src="/images/cta logo.png" alt="CTA Logo" width={20} height={20} />
            Book a call with us
          </button>
          <button className="border border-white/30 rounded-full px-8 py-3 text-white font-medium hover:bg-[#fff] hover:text-black transition cursor-pointer">
            See our works
          </button>
        </div>
        {/* Clients and Logo Slider Section */}
        <div className="w-[90%] lg:w-full max-w-[1332px] mx-auto mt-12 border-t border-b border-white/10 px-8 py-6 flex items-center justify-between gap-8 xl:flex-row flex-col xl:border-t xl:border-b border-0">
          {/* Happy Clients */}
          <div className="flex items-center min-w-[220px] w-full xl:w-auto xl:justify-start justify-center client-info-row">
            <div className="flex -space-x-3 justify-center w-full">
              {[1,2,3,4,5].map((i) => (
                <Image
                  key={i}
                  src={`/images/client ${i}.png`}
                  alt={`Client ${i}`}
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-black"
                />
              ))}
            </div>
            <div className="flex flex-col items-center ml-4 client-info-text">
              <span className="text-white text-sm font-semibold text-left min-w-[200px]">★★★★★</span>
              <span className="text-white text-sm font-semibold mt-1 text-left min-w-[200px]">
                20+ Happy Clients
              </span>
            </div>
          </div>
          {/* Logo Slider */}
          <div className="relative w-full max-w-[67%] overflow-hidden h-[40px] xl:h-[40px] lg:h-[32px] md:h-[28px]">
            <div className="absolute left-0 top-0 flex items-center h-full animate-logo-scroll min-w-full">
              {[...Array(8)].map((_, i) => (
                <Image
                  key={i}
                  src="/images/logo slider.png"
                  alt="Unveilbrand Logo Slider"
                  width={160}
                  height={40}
                  className="object-contain mx-8 xl:w-[160px] lg:w-[140px] md:w-[120px]"
                />
              ))}
            </div>
          </div>
        </div>
        {/* End Clients and Logo Slider Section */}

        <style jsx global>{`
          @keyframes logo-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-logo-scroll {
            animation: logo-scroll 20s linear infinite;
            width: 200%;
          }

          /* Tablet Layout (below 1280px) */
          @media (max-width: 1280px) {
            .animate-logo-scroll {
              animation-duration: 15s;
            }
            .client-info-row {
              flex-direction: column !important;
              align-items: center !important;
            }
            .client-info-text {
              margin-left: 0 !important;
              align-items: center !important;
              flex-direction: column !important;
              margin-top: 0.5rem !important;
              text-align: center !important;
              width: 100%;
              display: flex;
              justify-content: center;
            }
            .client-info-text span {
              text-align: center !important;
              width: 100%;
              display: block;
            }
          }

          /* Mobile Layout (below 980px) */
          @media (max-width: 980px) {
            .animate-logo-scroll {
              animation-duration: 12s;
            }
          }

          @media (max-width: 480px) {
            .client-info-row { flex-direction: column !important; align-items: center !important; }
            .client-info-text { margin-left: 0 !important; align-items: center !important; flex-direction: column !important; margin-top: 0.5rem !important; }
            .client-info-text span.ml-2 { margin-left: 0 !important; margin-top: 0.25rem !important; }
          }
        `}</style>
      </div>
    </section>
  );
};

export default HeroSection; 