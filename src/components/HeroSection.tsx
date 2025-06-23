"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [theme, setTheme] = useState('dark');
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

  useEffect(() => {
    // Get initial theme
    const currentTheme = localStorage.getItem('theme') || 'dark';
    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    // Dispatch storage event for other components
    window.dispatchEvent(new StorageEvent('storage', {
      key: 'theme',
      newValue: newTheme,
    }));
  };

  // Fixed position theme toggle button
  const ThemeToggle = () => (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2 rounded-full transition-colors duration-200 group"
      style={{
        backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
      }}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <Image
        src={theme === 'dark' ? '/sun.svg' : '/moon.svg'}
        alt={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        width={24}
        height={24}
        style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }}
        className={`transition-transform duration-300 ease-in-out ${theme === 'dark' ? 'text-white' : 'text-black'} group-hover:scale-110 group-hover:rotate-180 group-active:scale-95 cursor-pointer`}
      />
      <style jsx>{`
        .group:hover img, .group:active img {
          will-change: transform;
        }
      `}</style>
    </button>
  );

  return (
    <section className={`relative w-full flex flex-col items-center justify-center pt-16 ${theme === 'dark' ? 'bg-[#040508]' : 'bg-white'} overflow-hidden transition-colors duration-300`}>
      <style jsx>{`
        @keyframes gradient-move {
          0% {
            transform: translateX(-100%) translateY(-100%);
          }
          100% {
            transform: translateX(100%) translateY(100%);
          }
        }

        @keyframes gradient-move-reverse {
          0% {
            transform: translateX(100%) translateY(100%);
          }
          100% {
            transform: translateX(-100%) translateY(-100%);
          }
        }

        .animate-gradient-move {
          animation: gradient-move 2s linear infinite;
        }

        .animate-gradient-move-reverse {
          animation: gradient-move-reverse 0s linear infinite;
        }

        .animate-gradient-border {
          animation: gradient-border 5s linear infinite;
        }

        @keyframes gradient-border {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
      <ThemeToggle />
      {/* Main container */}
      <AnimatedSection 
        className="relative z-10 mx-auto w-[90%] max-w-[1330px] flex flex-col items-center text-center gap-2" 
        style={{
          backgroundImage: theme === 'dark' ? 'url("/images/shiny bg hero.png")' : 'none',
          backgroundSize: 'cover',
          backgroundPositionY: '80px',
          backgroundColor: theme === 'light' ? '#ffffff' : 'transparent',
      }}>
        {/* Category Pills */}
        <div className="w-full flex justify-center lg:justify-end max-w-[945px] mx-auto mt-[60px] lg:mt-[150px]">
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
                  className={`
                    border ${theme === 'dark' ? 'border-white/20' : 'border-black/20'} 
                    rounded-full px-[30px] py-[15px] 
                    ${theme === 'dark' ? 'text-[#cccccc] bg-black/30' : 'text-[#333333] bg-white/70'} 
                    tracking-widest text-xs font-[100] backdrop-blur-[7px] 
                    hover:bg-${theme === 'dark' ? 'white/10' : 'black/10'} 
                    transition cursor-pointer whitespace-nowrap 
                    ${idx !== 0 ? '-ml-7' : ''}
                  `}
                >
                  {cat}
                </motion.span>
              );
            })}
          </div>
        </div>
        {/* Headline */}
        <h1 className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-[40px] md:text-[70px] xl:text-[90px] font-normal leading-[90%] mx-auto text-center transition-colors duration-300`}>
          We build <span className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>digital products </span><br className="hidden md:block" />
          with <span className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>emphasis!</span>
        </h1>
        {/* Subheadline */}
        <p className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-lg max-w-xl mx-auto my-4 transition-colors duration-300`}>
          More than just great design, we craft strategic solutions that fuel your brand&apos;s growth, attract the right customers, and turn attention into sales.
        </p>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <button className="flex items-center gap-4 bg-[#A212A8] text-white font-medium px-8 py-3 rounded-full shadow-lg hover:bg-[#A212A8] transition cursor-pointer">
            <Image src="/images/cta logo.png" alt="CTA Logo" width={20} height={20} />
            Book a call with us
          </button>
          <Link href="/#projects" scroll={false} onClick={(e) => {
            e.preventDefault();
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            {/* This outer div acts as the animated border container */}
            <div className="relative rounded-full overflow-hidden" style={{ padding: '2px' }}>
              {/* The animated gradients, filling the wrapper, always visible */}
              <div className="absolute inset-0 rounded-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-[#A212A8]/50 to-transparent animate-gradient-move"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-l from-transparent via-[#A212A8]/50 to-transparent animate-gradient-move-reverse"></div>
              </div>
              {/* The actual button content with a solid background, covering the center */}
              <button className={`relative z-10 ${theme === 'dark' ? 'bg-black' : 'bg-white'} rounded-full px-8 py-3 ${theme === 'dark' ? 'text-white' : 'text-black'} font-medium hover:bg-[#fff] hover:text-black transition cursor-pointer w-full h-full border ${theme === 'dark' ? 'border-white/30' : 'border-black/30'}`}>
                See our works
              </button>
            </div>
          </Link>
        </div>
        {/* Clients and Logo Slider Section */}
        <div className={`w-[90%] lg:w-full max-w-[1332px] mx-auto mt-15 md:mt-30 border-t border-b ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} px-2 py-6 flex items-center justify-between gap-8 xl:flex-row flex-col xl:border-t xl:border-b border-0`}>
          {/* Happy Clients */}
          <div className="flex items-center min-w-[220px] xl:w-auto xl:justify-start justify-center client-info-row hidden md:flex">
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
              <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-sm font-semibold text-left min-w-[200px]`}>★★★★★</span>
              <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-sm font-semibold text-left min-w-[200px]`}>
                20+ Happy Clients
              </span>
            </div>
          </div>
          {/* Logo Slider */}
          <div className="relative w-full sm:max-w-[100%] md:max-w-[67%] overflow-hidden h-[40px] xl:h-[40px] lg:h-[32px] md:h-[28px]">
            <div className="absolute left-0 top-0 flex items-center h-full animate-logo-scroll min-w-full">
              {[...Array(10)].map((_, i) => (
                <Image
                  key={i}
                  src={`/images/hero slide img ${(i % 5) + 1}.png`}
                  alt={`Hero Slide Image ${(i % 5) + 1}`}
                  width={160}
                  height={40}
                  className="object-contain mx-8 xl:w-[160px] lg:w-[140px] md:w-[120px]"
                />
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default HeroSection; 