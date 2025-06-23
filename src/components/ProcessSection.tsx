"use client";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { useState, useEffect } from "react";

const processSteps = [
  {
    img: "/images/process img 1.png",
    title: "Swift",
    desc: "We move fast—because your time is money. From idea to launch, our turnaround is built for speed without compromising quality.",
  },
  {
    img: "/images/process img 2.png",
    title: "Effortless",
    desc: "We handle it, so you don't have to. Seamless processes, clear communication, & intuitive design making everything feel smooth.",
  },
  {
    img: "/images/process img 3.png",
    title: "Affordable",
    desc: "Premium doesn't have to be pricey. We deliver top results that match your budget; no hidden costs, no bloated packages.",
  },
];

const ProcessSection = () => {
  const [theme, setTheme] = useState('dark');

  // Sync theme with HeroSection
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme') {
        setTheme(e.newValue || 'dark');
      }
    };

    // Listen for theme changes
    window.addEventListener('storage', handleStorageChange);
    
    // Get initial theme
    const currentTheme = localStorage.getItem('theme') || 'dark';
    setTheme(currentTheme);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <section className={`w-full ${theme === 'dark' ? 'bg-[#040508]' : 'bg-white'} pb-20 flex flex-col items-center transition-colors duration-300`}>
      <AnimatedSection 
        className="w-[90%] max-w-[1330px] mx-auto flex flex-col items-center text-center gap-2 py-5 pt-10 md:py-30 md:pt-40" 
        style={{
          backgroundImage: theme === 'dark' ? 'url("/images/shiny bg Abilities.png")' : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center -100px',
          backgroundRepeat: "no-repeat",
          backgroundColor: theme === 'light' ? '#ffffff' : 'transparent',
    }}>
        {/* Section Title */}
        <h2 className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-3xl md:text-5xl font-bold transition-colors duration-300`}>
          Excellence in 3 Distinct Abilities
        </h2>
        <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'} text-lg max-w-900px mb-12 transition-colors duration-300`}>
          Here at Unveilbrand, we deliver solutions that save time, cut complexity, and fit your budget.
        </p>
        {/* Steps */}
        <div className="flex flex-col lg:flex-row gap-12 md:gap-8 w-full justify-center items-stretch pt-10">
          {processSteps.map((step, idx) => (
            <div 
              key={idx} 
              className={`flex-1 flex flex-col rounded-2xl shadow-lg ${
                theme === 'dark' ? 'border border-white/10 bg-[#121316CC]' : 'border border-black/10 bg-white/70'
              } w-[90%] md:w-[410px] h-[330px] mx-auto backdrop-blur-[1px] transition-colors duration-300`}
            >
              <div className="flex flex-col flex-grow">
                <h3 className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-xl font-semibold pl-[40px] pt-[35px] text-left text-[32px] transition-colors duration-300`}>
                  {step.title}
                </h3>
                <p className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-base text-left text-[15px] px-[40px] pt-[10px] transition-colors duration-300`}>
                  {step.desc}
                </p>
              </div>
              <div className="w-full flex justify-center">
                <Image 
                  src={step.img} 
                  alt={step.title} 
                  width={320} 
                  height={180} 
                  className="rounded-xl object-cover w-full h-auto" 
                />
              </div>
            </div>
          ))}
        </div>
        {/* Book Now Button */}
        <div className="mt-12 flex justify-center">
          <button className="flex items-center gap-4 bg-[#A212A8] text-white font-medium px-8 py-3 rounded-full shadow-lg hover:bg-[#A212A8] transition cursor-pointer">
            <Image src="/images/cta logo.png" alt="CTA Logo" width={20} height={20} />
            Book a call with us
          </button>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default ProcessSection; 