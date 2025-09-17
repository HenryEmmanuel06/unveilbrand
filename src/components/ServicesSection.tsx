import React, { useState, useEffect } from "react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import Link from "next/link";
type Service = { title: string; col: number; row: number };

const ServiceCard = ({
  service,
  theme,
  borderRadius,
}: {
  service: Service;
  theme: string;
  borderRadius: string;
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const spotlightColor =
    theme === 'dark'
      ? 'rgba(255, 255, 255, 0.25)'
      : 'rgba(0, 0, 0, 0.15)';

  return (
    <div
      ref={cardRef}
      className={`backdrop-blur-[1px] border border-[0.5px] ${theme === 'dark' ? 'bg-[#121316CC] border-[#FFFFFF33] text-white' : 'bg-black/5 border-black/10 text-black'} backdrop-blur-[1px] border-opacity-10 px-8 py-7 md:py-5 text-[14px] md:text-[20px] font-normal flex items-center justify-start shadow-md text-center md:text-left ${borderRadius} transition-all duration-500 cursor-pointer`}
      style={{
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)',
        background: isHovering
          ? `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 60%)`
          : undefined,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {service.title}
    </div>
  );
};

const ServicesSection = () => {
  const [theme, setTheme] = useState('dark');

  // Sync theme with localStorage
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme') {
        setTheme(e.newValue || 'dark');
      }
    };
    window.addEventListener('storage', handleStorageChange);
    const currentTheme = localStorage.getItem('theme') || 'dark';
    setTheme(currentTheme);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const services: Service[] = [
    { title: "Website Development", col: 1, row: 1 },
    { title: "Apps Development", col: 2, row: 1 },
    { title: "UI & Interface Design", col: 1, row: 2 },
    { title: "Product Design", col: 2, row: 2 },
    { title: "CMS Solutions {Wordpress, Webflow, Sho...}", col: 1, row: 3 },
    { title: "MVP Development for Startups", col: 2, row: 3 },
    { title: "Site Management & Optimization", col: 1, row: 4 },
    { title: "Branding {Identity, Strategy & Po...}", col: 2, row: 4 },
  ];

  return (
    <section className={`services-section w-full flex flex-col items-center ${theme === 'dark' ? 'bg-[#040508]' : 'bg-white'} transition-colors duration-300`}>
      <AnimatedSection
        className="relative mx-auto w-[90%] max-w-[1200px] py-5 pt-10 md:py-30 md:pt-40"
        style={{
          backgroundImage: theme === 'dark' ? 'url("/images/shiny bg services.png")' : 'none',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: "no-repeat",
          backgroundColor: theme === 'light' ? '#fff' : 'transparent',
        }}>
        <h2 className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-3xl md:text-5xl font-bold mx-auto text-center transition-colors duration-300`}>Solutions We&apos;re Really Good At</h2>
        <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'} text-[15px] md:ext-lg max-w-900px mb-12 text-center transition-colors duration-300`}>
          From development to Result. We deliver skills crafted to position your brand for long-term impact.
        </p>
        <div className="grid grid-cols-2 gap-6 w-full max-w-5xl mb-10 mx-auto w-[90%] max-w-[1180px]">
          {services.map((service: Service, idx: number) => {
            // Determine if this is left or right column on desktop
            const isLeft = idx % 2 === 0;
            const borderRadius = isLeft
              ? "rounded-[8px] md:rounded-full md:rounded-tr-[8px] md:rounded-br-[8px] md:rounded-tl-full md:rounded-bl-full"
              : "rounded-[8px] md:rounded-full md:rounded-tl-[8px] md:rounded-bl-[8px] md:rounded-tr-full md:rounded-br-full";
            return (
              <ServiceCard
                key={idx}
                service={service}
                theme={theme}
                borderRadius={borderRadius}
              />
            );
          })}
        </div>
        <div className="mt-12 flex justify-center">
          <Link href="/contact">
            <button className="flex items-center gap-4 bg-[#A212A8] text-white font-medium px-8 py-3 rounded-full shadow-lg hover:bg-[#A212A8] transition cursor-pointer">
              <Image src="/images/cta logo.svg" alt="CTA Logo" width={20} height={20} />
              Book a call with us
            </button>
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default ServicesSection; 