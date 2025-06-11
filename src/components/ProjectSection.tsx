'use client';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import AnimatedSection from './AnimatedSection';

const projects = [
  {
    id: 0,
    title: "Creative Console",
    company: "Creative Console",
    year: "2024",
    type: ["Branding", "UI Kits", "Interface Design"],
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
    type: ["Web Design", "Development"],
    description: `As much as we love them, not all our friends and family members take security as seriously as we'd like. So if we ever send them our passwords, credit card numbers, or sensitive text, you can assume your secret just set itself up rent-free in your recipient's chat history or inbox indefinitely. That's bad. \n\n I designed Sendsecure.ly at a recent 3-day hackathon when the Basis Theory team was together in Miami for an off-site. The logo was a combination of the "S" from its name and a link icon. Cheesy? Maybe. But effective and recognizable.\n\n We've also launched it in Product Hunt, which was pretty cool. Lots of good feedback and people using it to send sensitive information to co-workers and friends.`,
    projectLink: "https://www.anotherproject.com",
    images: [
      '/images/applibry slide 1.png',
      '/images/applibry slide 1.png',
      '/images/applibry slide 1.png',
      '/images/applibry slide 1.png'
    ],
    modalBackground: "'/images/applibry modal background.png'", // Example background for another project
  },
];

const ProjectSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [slide, setSlide] = useState(0);
  const [currentProjectId, setCurrentProjectId] = useState<number | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const openModal = (projectId: number) => {
    // Save current scroll position
    setScrollPosition(window.scrollY);
    // Prevent scrolling
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.width = '100%';

    setCurrentProjectId(projectId);
    setShowModal(true);
    setSlide(0);
  };

  const closeModal = () => {
    // Re-enable scrolling
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    // Restore scroll position
    window.scrollTo(0, scrollPosition);

    setShowModal(false);
  };

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, []);

  const nextSlide = () => setSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const currentProject = projects.find(project => project.id === currentProjectId);
  const slides = currentProject ? currentProject.images : [];

  return (
    <section className="w-full py-2 bg-[#040508]" id='projects'>
      <div className="relative mx-auto w-[90%] max-w-[1330px]" style={{
        backgroundImage: 'url("/images/shiny bg Projects.png")',
        backgroundSize: 'cover',
        backgroundPositionY: '-100px',
        backgroundRepeat: "no-repeat"
      }}>
        <AnimatedSection>
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-20 text-left">Thoughtful Designs With Real World Solutions</h2>
        <div className="mx-auto h-[1400px] lg:h-[700px] grid grid-cols-1 lg:grid-cols-12 grid-rows-36 lg:grid-rows-12 gap-4">
          {/* First Container - 5 columns */}
          <div className="lg:col-span-5 row-span-12 lg:row-span-12 row-span-8 h-full grid gap-4 bg-[#121316] p-[10px] rounded-[20px]">
            <div className="row-span-3 lg:row-span-1 bg-[#FFFFFF05] rounded-[15px] h-full">
              <div className="">
                <div className="flex items-center justify-between w-full px-[15px] py-[30px] pb-0">
                  <span className="text-white font-extrabold text-3xl">Applibry</span>
                  <div className="flex gap-2">
                    <span className="border border-white/30 text-white/70 text-xs px-4 py-1 rounded-full bg-transparent">Branding | UI Kits | Interface Design</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-span-12 lg:row-span-11 rounded-[20px] relative h-full cursor-pointer" style={{
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
          <div className="lg:col-span-4 row-span-12 lg:row-span-12 row-span-8 h-full grid grid-cols-2 gap-4">
            <div className="col-span-1 row-span-8 lg:row-span-4 rounded-[20px] relative h-full" style={{
              backgroundImage: 'url("/images/project img 3.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
            </div>
            <div className="col-span-1 row-span-8 lg:row-span-4 rounded-[20px] relative h-full" style={{
              backgroundImage: 'url("/images/project img 2.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
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
          <div className="lg:col-span-3 row-span-12 lg:row-span-12 row-span-8 h-full grid gap-4">
            <div className="row-span-12 lg:row-span-7 rounded-[20px] relative overflow-hidden h-full" style={{
              backgroundImage: 'url("/images/project img 5.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
            </div>
            <div className="row-span-12 lg:row-span-5 rounded-[20px] relative overflow-hidden h-full" style={{
              backgroundImage: 'url("/images/project img 6.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
            </div>
          </div>
        </div>
        </AnimatedSection>
        <AnimatedSection className="w-full max-w-[1332px] mx-auto mt-12 border-t border-b border-white/10 px-2 py-6 flex items-center justify-between gap-8 xl:flex-row flex-col xl:border-t xl:border-b border-0">
          <div className="flex items-center min-w-[220px] xl:w-auto xl:justify-start justify-center client-info-row">
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
              <span className="text-white text-sm font-semibold text-left min-w-[200px]">★★★★★</span>
              <span className="text-white text-sm font-semibold text-left min-w-[200px]">
                20+ Happy Clients
              </span>
            </div>
          </div>
          <button className="border border-white/30 rounded-full px-8 py-3 text-white font-medium hover:bg-[#fff] hover:text-black transition cursor-pointer">
            Become One Of Them Today!
          </button>
        </AnimatedSection>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div
              className="relative rounded-3xl w-[90vw] h-[90vh] flex flex-row shadow-2xl overflow-hidden gap-4">
              {/* Left: Image Slide */}
              <div className="flex-1 flex items-center justify-center p-6 rounded-2xl shadow-lg relative" style={{
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
                <Image src={slides[slide]} alt={`Slide ${slide + 1}`} width={600} height={400} className="rounded-2xl object-contain max-h-[60vh]" />
                {/* Next Button */}
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-lg z-10 cursor-pointer"
                  aria-label="Next Slide"
                >
                  <svg width="24" height="24" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                </button>
                {/* Pagination Dots */}
                <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 flex gap-3 z-10 bg-[#11111133] p-3 rounded-full">
                  {slides.map((_, idx) => (
                    <span
                      key={idx}
                      onClick={() => setSlide(idx)}
                      className={`cursor-pointer w-[10px] h-[10px] rounded-full ${idx === slide ? 'bg-white' : 'bg-[#FFFFFF80]'} transition-all duration-300 hover:bg-white`}
                    ></span>
                  ))}
                </div>
              </div>
              {/* Right: Controls */}
              <div className="w-[40%] 2xl:w-[35%] max-w-full flex flex-col p-4 text-white rounded-[10px] shadow-lg bg-[#111111]">
                {/* Header */}
                <div className="flex justify-between gap-3 items-center mb-[10px]">
                  <h2 className="text-3xl font-bold bg-[#FFFFFF0D] py-[16px] px-[20px] flex-1 rounded-[10px]">{currentProject?.title}</h2>
                  <div className="flex gap-2">
                    <a href={currentProject?.projectLink} target="_blank" rel="noopener noreferrer" className="w-[70px] h-[65px] py-[16px] px-[20px] flex items-center justify-center rounded-[10px] bg-[#FFFFFF0D] hover:bg-[#555555] transition text-white">
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
                    </a>
                    <button onClick={closeModal} className="w-[70px] h-[65px] py-[16px] px-[20px] flex items-center justify-center rounded-[10px] bg-[#FFFFFF0D] hover:bg-[#555555] transition text-white text-[35px] cursor-pointer">&times;</button>
                  </div>
                </div>

                {/* Project Details */}
                <div className="mb-[10px] bg-[#1a1a1a] rounded-2xl p-4">
                  <div className="flex flex-row text-sm gap-10">
                    <div>
                      <p className="text-white text-[12px] font-normal">COMPANY</p>
                      <p className="font-bold text-[16px] 2xl:text-[18px]">{currentProject?.company}</p>
                    </div>
                    <div>
                      <p className="text-white text-[12px] font-normal">YEAR</p>
                      <p className="font-bold text-lg">{currentProject?.year}</p>
                    </div>
                    <div>
                      <p className="text-white text-[12px] font-normal">TYPE</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <span className="border border-white/30 text-white/70 text-[10px] xlg:text-[12px] px-2 py-1 rounded-full bg-transparent">
                          {currentProject?.type.join(' | ')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overview */}
                <div className="bg-[#1a1a1a] rounded-2xl p-4 flex-1 overflow-y-auto">
                  <h3 className="text-white text-[12px] font-normal mb-2">OVERVIEW</h3>
                  <p className="text-white/90 text-sm leading-relaxed whitespace-pre-line">{currentProject?.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default ProjectSection; 