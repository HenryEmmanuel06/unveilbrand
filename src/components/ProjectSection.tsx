'use client';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from './AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 0,
    title: "Creative Console",
    company: "Creative Console",
    year: "2024",
    type: ["Branding"],
    description: `As much as we love them, not all our friends and family members take security as seriously as we'd like. So if we ever send them our passwords, credit card numbers, or sensitive text, you can assume your secret just set itself up rent-free in your recipient's chat history or inbox indefinitely. That's bad.\n\nI designed Sendsecure.ly at a recent 3-day hackathon when the Basis Theory team was together in Miami for an off-site. The logo was a combination of the "S" from its name and a link icon. Cheesy? Maybe. But effective and recognizable.\n\nWe've also launched it in Product Hunt, which was pretty cool. Lots of good feedback and people using it to send sensitive information to co-workers and friends.`,
    projectLink: "https://www.creativeconsole.com", // Example link
    images: [
      '/images/project image 4 slide one img.png',
      '/images/project image 4 slide one img.png',
      '/images/project image 4 slide one img.png',
      '/images/project image 4 slide one img.png',
    ],
    modalBackground: "'/images/project image 4 background popup.png'", // Specific background for this project
  },
  {
    id: 1,
    title: "Applibry",
    company: "Creative Console",
    year: "2024",
    type: ["Web Design"],
    description: `Not every app idea deserves just another cookie-cutter logo and some off-the-shelf UI. When a product promises to bridge professionals and services through a smart digital library, the identity and experience need to reflect that promise — with clarity, modernism, and intention. That’s what we aimed for with Applibry.\n
We handled everything from the brand logo to the full UI design. The logo is a clean, intelligent symbol that merges the essence of a digital library and mobile access — simple enough to be memorable, distinct enough to own its space. The UI followed suit: sleek layouts, accessible interactions, and a calming color system designed to make users feel like they’re actually in control of their digital content. \n
This wasn’t just a design task — it was a design stance. And we’re proud to say it now powers a growing platform that people are beginning to talk about.
Applibry is one of those projects where thoughtful branding and intuitive interface came together. We loved working on it — and our clients loved launching it.`,
    projectLink: "https://www.applibry.com",
    images: [
      '/images/applibry slide 1.png',
      '/images/applibry slide 1.png',
      '/images/applibry slide 1.png',
      '/images/applibry slide 1.png'
    ],
    modalBackground: "'/images/applibry modal background.png'", // Example background for another project
  },
    {
    id: 2,
    title: "Homly",
    company: "Creative Console",
    year: "2023",
    type: ["Web Design"],
    description: `As much as we love them, not all our friends and family members take security as seriously as we'd like. So if we ever send them our passwords, credit card numbers, or sensitive text, you can assume your secret just set itself up rent-free in your recipient's chat history or inbox indefinitely. That's bad.\n\nI designed Sendsecure.ly at a recent 3-day hackathon when the Basis Theory team was together in Miami for an off-site. The logo was a combination of the "S" from its name and a link icon. Cheesy? Maybe. But effective and recognizable.\n\n We've also launched it in Product Hunt, which was pretty cool. Lots of good feedback and people using it to send sensitive information to co-workers and friends.`,
    projectLink: "https://www.gethomly.com",
    images: [
      '/images/homly modal slide 1.png',
      '/images/homly modal slide 1.png',
      '/images/homly modal slide 1.png',
      '/images/homly modal slide 1.png'
    ],
    modalBackground: "'/images/homly modal background.png'", // Example background for another project
  },
  {
    id: 3,
    title: "lx engineering",
    company: "Engineering Service",
    year: "2023",
    type: ["Web Design"],
    description: `Engineering might be about precision, but branding one? That’s about clarity, confidence, and trust.
When LX Engineering Services came to us, they didn’t just need a website. They needed an identity — something that communicated strength, structure, and modern engineering excellence without saying too much. So we got to work, from the ground up.\n
We started with the branding concept, building a visual language that spoke to both corporate clients and engineering professionals. The logo was designed to reflect structure and movement — sharp, minimal, and built on purpose. Then came the website: modern, responsive, and built to showcase their services clearly without overwhelming visitors. The color palette? Professional and bold. The user flow? Straightforward and intuitive.\n
This wasn’t just a design project — it was a transformation. From logo to launch, we helped shape how LX Engineering shows up in the world — and now they’re doing exactly what engineers do best: building things that last.`,
    projectLink: "https://www.lxengineeringservices.com",
    images: [
      '/images/lx slider 1.png',
      '/images/lx slider 1.png',
      '/images/lx slider 1.png',
      '/images/lx slider 1.png'
    ],
    modalBackground: "'/images/lx modal background.png'", // Example background for another project
  },
   {
    id: 4,
    title: "Boustta",
    company: "Travels",
    year: "2024",
    type: ["Branding", "UI Kits", "Interface Design"],
    description: `Some brands want to blend in. Boustta wasn’t one of them.
From day one, it was clear this brand needed a presence — bold, clean, and unmissable. Our job? To craft the branding and logo that would give Boustta its voice before a single word was spoken.\n
We began with the brand strategy, exploring the identity behind Boustta — what it stands for, who it's speaking to, and how it should make people feel. The result was a branding system built around clarity, confidence, and sharp visual consistency.\n
The logo? Simple yet striking. Built with a distinct type style and mark that reflects movement and trust — the kind of mark that works as well on a digital screen as it does embossed on packaging or printed on a storefront.\n
This wasn’t just about making something look good — it was about making something last. And with Boustta’s brand now fully formed, it's ready to grow, connect, and lead.
`,
    projectLink: "https://www.lxengineeringservices.com",
    images: [
      '/images/Bouvstta logo animation.gif',
      '/images/boustta slide 1.png',
      '/images/Bouvstta logo animation.gif',
      '/images/boustta slide 1.png'
    ],
    modalBackground: "'/images/boustta modal bg.png'", // Example background for another project
    firstSlideModalBackground: "'/images/white bg.png'", // Special background for first slide
  },
   {
    id: 5,
    title: "Boustta",
    company: "Travels",
    year: "2024",
    type: ["Branding", "UI Kits", "Interface Design"],
    description: `As much as we love them, not all our friends and family members take security as seriously as we'd like. So if we ever send them our passwords, credit card numbers, or sensitive text, you can assume your secret just set itself up rent-free in your recipient's chat history or inbox indefinitely. That's bad. \n\n I designed Sendsecure.ly at a recent 3-day hackathon when the Basis Theory team was together in Miami for an off-site. The logo was a combination of the "S" from its name and a link icon. Cheesy? Maybe. But effective and recognizable.\n\n We've also launched it in Product Hunt, which was pretty cool. Lots of good feedback and people using it to send sensitive information to co-workers and friends.`,
    projectLink: "https://www.lxengineeringservices.com",
    images: [
      
    ],
    modalBackground: "'/images/sharefood modal bg.png'", // Example background for another project
  },
];

const ProjectSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [slide, setSlide] = useState(0);
  const [currentProjectId, setCurrentProjectId] = useState<number | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
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

  const openModal = (projectId: number) => {
    setScrollPosition(window.scrollY);
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.width = '100%';
    setCurrentProjectId(projectId);
    setShowModal(true);
    setSlide(0);
  };

  const closeModal = () => {
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollPosition);
    setShowModal(false);
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, []);

  const currentProject = projects.find(project => project.id === currentProjectId);
  const slides = currentProject ? currentProject.images : [];

  const nextSlide = () => setSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className={`w-full py-2 pt-10 md:pt-0 ${theme === 'dark' ? 'bg-[#040508]' : 'bg-white'} transition-colors duration-300`} id='projects'>
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
      <div className="relative mx-auto w-[90%] max-w-[1330px]" style={{
        backgroundImage: theme === 'dark' ? 'url("/images/shiny bg Projects.png")' : 'none',
        backgroundSize: 'cover',
        backgroundPositionY: '-100px',
        backgroundRepeat: "no-repeat",
        backgroundColor: theme === 'light' ? '#fff' : 'transparent',
      }}>
        <AnimatedSection>
        <h2 className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-3xl md:text-5xl font-bold mb-10 md:mb-20 text-left transition-colors duration-300`}>Thoughtful Designs With Real World Solutions</h2>
        <div className="mx-auto h-[1400px] md:h-[2500px] lg:h-[700px] grid grid-cols-1 lg:grid-cols-12 grid-rows-36 lg:grid-rows-12 gap-4">
          {/* First Container - 5 columns */}
          <div className={`${theme === 'dark' ? 'bg-[#121316]' : 'bg-white/80'} lg:col-span-5 row-span-12 lg:row-span-12 row-span-8 h-full grid gap-4 p-[10px] rounded-[20px] transition-colors duration-300`}>
            <div className={`${theme === 'dark' ? 'bg-[#FFFFFF05]' : 'bg-black/5'} row-span-3 lg:row-span-1 rounded-[15px] h-full transition-colors duration-300`}>
              <div className="">
                <div className="flex items-center justify-between w-full px-[15px] py-[30px] pb-0">
                  <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} font-extrabold text-[18px] md:text-3xl transition-colors duration-300`}>Applibry</span>
                  <div className="flex gap-2">
                    <span className={`${theme === 'dark' ? 'border border-white/30 text-white/70' : 'border border-black/30 text-black/70'} text-xs px-4 py-1 rounded-full bg-transparent`}>Branding | UI Kits</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-span-12 md:row-span-34 lg:row-span-11 rounded-[20px] relative h-full cursor-pointer" style={{
              backgroundImage: 'url("/images/project img 1.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: "no-repeat"
            }}
              onClick={() => openModal(1)}
            >
            </div>
          </div>
          {/* Second Container - 4 columns */}
          <div className="lg:col-span-4 row-span-12 lg:row-span-12 row-span-8 h-full grid grid-cols-2 gap-4 cursor-pointer">
            <div className="col-span-1 row-span-8 lg:row-span-4 rounded-[20px] relative h-full" style={{
              backgroundImage: 'url("/images/project img 3.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onClick={() => openModal(3)}
            >
            </div>
            <div className="col-span-1 row-span-8 lg:row-span-4 rounded-[20px] relative h-full" style={{
              backgroundImage: 'url("/images/project img 2.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onClick={() => openModal(4)}
            >
            </div>
            <div className="col-span-2 row-span-12 lg:row-span-8 rounded-[20px] relative h-full cursor-pointer" style={{
              backgroundImage: 'url("/images/project img 4.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
              onClick={() => openModal(0)}
            >
            </div>
          </div>
          {/* Third Container - 3 columns */}
          <div className="lg:col-span-3 md:row-span-36 row-span-12 lg:row-span-12 row-span-8 h-full grid gap-4">
            <div className="row-span-12 lg:row-span-7 rounded-[20px] relative overflow-hidden h-full cursor-pointer" style={{
              backgroundImage: 'url("/images/project img 5.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onClick={() => openModal(5)}
            >
            </div>
            <div className="row-span-12 md:row-span-12 lg:row-span-5 rounded-[20px] relative overflow-hidden h-full cursor-pointer" style={{
              backgroundImage: 'url("/images/project img 6.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onClick={() => openModal(2)}
            >
            </div>
          </div>
        </div>
        </AnimatedSection>
        <AnimatedSection className={`w-full max-w-[1332px] mx-auto mt-12 border-t border-b ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} px-2 py-6 flex items-center justify-between gap-8 xl:flex-row flex-col xl:border-t xl:border-b border-0`}>
          <div className="flex items-end min-w-[220px] xl:w-auto xl:justify-start md:justify-center client-info justify-between hidden md:flex">
            <div className="flex -space-x-3 justify-center w-full">
              {[1, 2, 3, 4, 5].map((i) => (
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
          <div className="flex md:hidden w-[100%]" style={{
            justifyContent: "space-between",
          }}>
            <div className="flex -space-x-3 justify-start">
              {[1, 2, 3, 4, 5].map((i) => (
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
            <div className="flex flex-col justify-end">
              <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-[12px] font-semibold text-left`}>★★★★★</span>
              <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-[12px] font-semibold text-left`}>
                20+ Happy Clients
              </span>
            </div>
          </div>
           <Link href="/contact">
            {/* This outer div acts as the animated border container */}
            <div className="relative rounded-full overflow-hidden" style={{ padding: '2px' }}>
              {/* The animated gradients, filling the wrapper, always visible */}
              <div className="absolute inset-0 rounded-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-[#A212A8]/50 to-transparent animate-gradient-move"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-l from-transparent via-[#A212A8]/50 to-transparent animate-gradient-move-reverse"></div>
              </div>
              {/* The actual button content with a solid background, covering the center */}
             <button className={`relative z-10 ${theme === 'dark' ? 'bg-black text-white border-white/30' : 'bg-white text-black border-black/30'} rounded-full px-8 py-3 font-medium hover:bg-[#fff] hover:text-black transition cursor-pointer w-full h-full border`}>
              Become One Of Them Today!
            </button>
            </div>
          </Link>
        </AnimatedSection>
        <AnimatePresence>
          {showModal && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
            >
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className={`relative rounded-3xl w-[90vw] h-[95vh] lg:h-[90vh] flex flex-col lg:flex-row shadow-2xl overflow-y-auto lg:overflow-hidden gap-4 mb-10 lg:mb-0`}
              >
                {/* Left: Image Slide */}
                {currentProject?.id === 4 ? (
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={slide === 0 || slide === 2 ? "first-bg" : "default-bg"}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="flex-1 flex items-center justify-center p-6 rounded-2xl shadow-lg relative mt-10 lg:mt-0 min-h-[220px] md:min-h-[300px]"
                      style={{
                        backgroundImage: `url(${
                          slide === 0 || slide === 2
                            ? currentProject.firstSlideModalBackground
                            : currentProject.modalBackground
                        })`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {/* Prev Button */}
                      <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-lg z-10 cursor-pointer"
                        aria-label="Previous Slide"
                      >
                        <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
                      </button>
                      {/* Image */}
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                          key={slide}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            position: "relative",
                          }}
                        >
                          <Image
                            src={slides[slide]}
                            alt={`Slide ${slide + 1}`}
                            width={300}
                            height={350}
                            className={`rounded-2xl object-contain max-h-[50vh] w-[200px] lg:w-[600px]  -mt-10 md:-mt-20 h-[150px] lg:h-[270px] lg:w-[100%]`}
                          />
                        </motion.div>
                      </AnimatePresence>
                      {/* Next Button */}
                      <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-lg z-10 cursor-pointer"
                        aria-label="Next Slide"
                      >
                        <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                      </button>
                      {/* Pagination Dots */}
                      <div className="absolute bottom-[5px] md:bottom-[20px] left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-[#11111133] p-2 rounded-full">
                        {slides.map((_, idx) => (
                          <span
                            key={idx}
                            onClick={() => setSlide(idx)}
                            className={`cursor-pointer w-[7px] h-[7px] rounded-full ${idx === slide ? 'bg-white' : 'bg-[#FFFFFF80]'} transition-all duration-300 hover:bg-white`}
                          ></span>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                ) : (
                  <div className="flex-1 flex items-center justify-center p-6 rounded-2xl shadow-lg relative mt-10 lg:mt-0 min-h-[220px] md:min-h-[300px]" style={{
                    backgroundImage: `url(${currentProject?.modalBackground})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}>
                    {/* Prev Button */}
                    <button
                      onClick={prevSlide}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-lg z-10 cursor-pointer"
                      aria-label="Previous Slide"
                    >
                      <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    {/* Image */}
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={slide}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        style={{ position: "absolute", width: "100%", display: "flex", justifyContent: "center" }}
                      >
                        <Image
                          src={slides[slide]}
                          alt={`Slide ${slide + 1}`}
                          width={300}
                          height={350}
                          className={`rounded-2xl object-contain max-h-[50vh] w-[200px] lg:w-[600px]  ${currentProjectId === 4 ? '-mt-10 md:-mt-20 h-[150px] lg:h-[270px] lg:w-[100%]' : ''}`}
                        />
                      </motion.div>
                    </AnimatePresence>
                    {/* Next Button */}
                    <button
                      onClick={nextSlide}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-lg z-10 cursor-pointer"
                      aria-label="Next Slide"
                    >
                      <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                    </button>
                    {/* Pagination Dots */}
                    <div className="absolute bottom-[5px] md:bottom-[20px] left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-[#11111133] p-2 rounded-full">
                      {slides.map((_, idx) => (
                        <span
                          key={idx}
                          onClick={() => setSlide(idx)}
                          className={`cursor-pointer w-[7px] h-[7px] rounded-full ${idx === slide ? 'bg-white' : 'bg-[#FFFFFF80]'} transition-all duration-300 hover:bg-white`}
                        ></span>
                      ))}
                    </div>
                  </div>
                )}
                {/* Right: Controls */}
                <div className={`w-[100%] lg:w-[40%] 2xl:w-[35%] max-w-full flex flex-col p-4 rounded-[10px] shadow-lg min-h-[300px] ${theme === 'dark' ? 'bg-[#111111] text-white' : 'bg-white text-black'}`}>
                  {/* Header */}
                  <div className="flex justify-between gap-3 items-center mb-[10px]">
                    <h2 className={`text-[16px] h-[50px] md:h-auto md:text-3xl font-bold py-[16px] px-[20px] flex-1 rounded-[10px] flex items-center ${theme === 'dark' ? 'bg-[#FFFFFF0D] text-white' : 'bg-black/5 text-black'}`}>{currentProject?.title}</h2>
                    <div className="flex gap-2">
                      <a href={currentProject?.projectLink} target="_blank" rel="noopener noreferrer" className={`w-[55px] md:w-[70px] h-[50px] md:h-[65px] py-[16px] px-[20px] flex items-center justify-center rounded-[10px] transition ${theme === 'dark' ? 'bg-[#FFFFFF0D] hover:bg-[#555555] text-white' : 'bg-black/5 hover:bg-black/20 text-black'}`}>
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
                      </a>
                      <button onClick={closeModal} className={`w-[55px] md:w-[70px] h-[50px] md:h-[65px] py-[16px] px-[20px] flex items-center justify-center rounded-[10px] transition text-[35px] cursor-pointer ${theme === 'dark' ? 'bg-[#FFFFFF0D] hover:bg-[#555555] text-white' : 'bg-black/5 hover:bg-black/20 text-black'}`}>&times;</button>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className={`mb-[10px] rounded-2xl p-4 ${theme === 'dark' ? 'bg-[#1a1a1a] text-white' : 'bg-black/5 text-black'}`}>
                    <div className="flex flex-row text-sm gap-7 md:gap-10">
                      <div>
                        <p className="text-[12px] font-normal">COMPANY</p>
                        <p className="font-bold sm:text-[14px] md:text-[16px] 2xl:text-[18px]">{currentProject?.company}</p>
                      </div>
                      <div>
                        <p className="text-[12px] font-normal">YEAR</p>
                        <p className="font-bold text-[14px] md:text-lg">{currentProject?.year}</p>
                      </div>
                      <div className='flex-1'>
                        <p className="text-[12px] font-normal">TYPE</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          <span className={`${theme === 'dark' ? 'border border-white/30 text-white/70' : 'border border-black/30 text-black/70'} text-[10px] xlg:text-[12px] px-2 py-1 rounded-full bg-transparent`}>
                            {currentProject?.type.join(' | ')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Overview */}
                  <div className={`rounded-2xl p-4 flex-1 overflow-y-auto ${theme === 'dark' ? 'bg-[#1a1a1a] text-white' : 'bg-black/5 text-black'}`}>
                    <h3 className="text-[12px] font-normal mb-2">OVERVIEW</h3>
                    <p className={`${theme === 'dark' ? 'text-white/90' : 'text-black/90'} text-sm leading-relaxed whitespace-pre-line`}>{currentProject?.description}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
export default ProjectSection; 