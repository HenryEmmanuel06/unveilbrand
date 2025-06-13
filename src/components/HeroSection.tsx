"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const HeroSection = () => {
  
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
    <section className="relative w-full flex flex-col items-center justify-center pt-16 bg-[#040508] overflow-hidden">
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
          animation: gradient-move-reverse 2s linear infinite;
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
      {/* Main container */}
      <AnimatedSection className="relative z-10 mx-auto w-[90%] max-w-[1330px] flex flex-col items-center text-center gap-2" style={{
        backgroundImage: 'url("/images/shiny bg hero.png")',
        backgroundSize: 'cover',
        backgroundPositionY: '80px',
        // backgroundColor: "red",
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
                  className={
                    `border border-white/20 rounded-full px-[30px] py-[15px] text-[#cccccc] tracking-widest text-xs font-[100] bg-black/30 backdrop-blur-[7px] hover:bg-white/10 transition cursor-pointer whitespace-nowrap ` +
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
              <button className="relative z-10 bg-black rounded-full px-8 py-3 text-white font-medium hover:bg-[#fff] hover:text-black transition cursor-pointer w-full h-full border border-white/30">
                See our works
              </button>
            </div>
          </Link>
          
        </div>
        {/* Clients and Logo Slider Section */}
        <div className="w-[90%] lg:w-full max-w-[1332px] mx-auto mt-30 border-t border-b border-white/10 px-2 py-6 flex items-center justify-between gap-8 xl:flex-row flex-col xl:border-t xl:border-b border-0">
          {/* Happy Clients */}
          <div className="flex items-center min-w-[220px] xl:w-auto xl:justify-start justify-center client-info-row">
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
                       <span className="text-white text-sm font-semibold text-left min-w-[200px]">
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
        {/* End Clients and Logo Slider Section */}

       
      </AnimatedSection>
    </section>
  );
};

export default HeroSection; 