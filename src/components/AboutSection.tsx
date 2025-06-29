'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme') {
        setTheme(e.newValue || 'dark');
      }
    };
    window.addEventListener('storage', handleStorageChange);
    const currentTheme = localStorage.getItem('theme') || 'dark';
    setTheme(currentTheme);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    window.dispatchEvent(new StorageEvent('storage', { key: 'theme', newValue: newTheme }));
  };

  const ThemeToggle = () => (
    <button
      onClick={toggleTheme}
      className="fixed bottom-16 right-4 z-50 p-2 rounded-full transition-colors duration-200 group"
      style={{ backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}
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
    <section className={`w-full flex flex-col items-center justify-center pt-45 pb-20 ${theme === 'dark' ? '' : 'bg-white'} transition-colors duration-300`}>
      <ThemeToggle />
      <AnimatedSection className="w-[90%] lg:w-full max-w-[1332px] mx-auto">
        <div style={{
          backgroundImage: theme === 'dark' ? 'url("/images/about section shinny bg.png")' : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: theme === 'light' ? '#fff' : 'transparent',
        }}>
          <h1 className={`text-3xl md:text-5xl font-extrabold text-center mb-6 leading-tight ${theme === 'dark' ? 'text-white' : 'text-black'} transition-colors duration-300`}>
            We Are A Group of Passionate<br />
            Designers, Developers.
          </h1>
          <p className={`text-base md:text-lg text-center max-w-2xl mb-10 mx-auto ${theme === 'dark' ? 'text-[#E0E0E0]' : 'text-gray-700'} transition-colors duration-300`}>
            We have many years of experience working for big brands both directly and indirectly through big Agencies. We partner with you and your team to deliver technology solutions that would help you better serve your customers.
          </p>
          <div className="flex justify-center">
            <Image
              src="/images/about purple arrow.svg"
              alt="Scroll Down"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12 animate-bounce cursor-pointer"
              onClick={() => window.scrollBy({ top: 400, left: 0, behavior: 'smooth' })}
            />
          </div>

          <div className={`w-[90%] max-w-[1332px] mx-auto flex md:flex-row flex-col items-stretch justify-center mt-30 rounded-xl overflow-hidden border border-[0.5px] ${theme === 'dark' ? 'border-[#FFFFFF33]' : 'border-black'} border-opacity-10`}>
            <div className={`flex items-center justify-center w-[100%] min-w-auto md:w-[35%] md:min-w-[180px] p-8 border-r ${theme === 'dark' ? 'bg-[#121316CC] border-[#FFFFFF33]' : 'bg-white border-black'} backdrop-blur-[1.5px] border-[0.5px] border-opacity-10`}>
              <h2 className={`text-2xl md:text-[30px] font-extrabold leading-tight text-left ${theme === 'dark' ? 'text-white' : 'text-black'} transition-colors duration-300`}>
                Technology for<br />profitability
              </h2>
            </div>
            <div className={`flex flex-col justify-center w-[100%] lg:w-[65%] py-8 px-15 ${theme === 'dark' ? 'bg-[#121316CC] border-[#FFFFFF33]' : 'bg-white border-black'} backdrop-blur-[1.5px] border border-[0.5px] border-opacity-10`}>
              <p className={`text-base md:text-lg mb-2 ${theme === 'dark' ? 'text-[#E0E0E0]' : 'text-gray-700'} transition-colors duration-300`}>
                When you work with us, we consider ourselves your partners and we do all that&apos;s required to help achieve your goals.
              </p>
              <p className={`text-base md:text-lg ${theme === 'dark' ? 'text-[#E0E0E0]' : 'text-gray-700'} transition-colors duration-300`}>
                we consider ourselves your partners
              </p>
            </div>
          </div>

          {/* New section for the three cards */}
          <div className="w-[90%] max-w-[1332px] mx-auto mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
            {/* Card 1 */}
            <div className={`flex flex-col items-center p-4 pb-8 text-center rounded-[20px] border border-[0.5px] ${theme === 'dark' ? 'bg-[#121316CC] border-[#FFFFFF33]' : 'bg-white border-black'} border-opacity-10`}>
              <Image
                src="https://res.cloudinary.com/dddpexcfo/image/upload/v1749580761/about_section_gif_1_pqkwzz.gif"
                alt="People Over Technology"
                width={250}
                height={250}
                unoptimized={true}
                className="mb-2"
              />
              <h3 className={`text-xl md:text-3xl font-extrabold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'} transition-colors duration-300`}>People Over Technology</h3>
              <p className={`text-sm md:text-base ${theme === 'dark' ? 'text-white' : 'text-black'} transition-colors duration-300`}>
                Because we solely focus on people, not technology, we focus more on providing rich customer experience every step of the way. From building soothing websites to creating campaign strategies, it&apos;s all about people, not stats.
              </p>
            </div>

            {/* Card 2 */}
            <div className={`flex flex-col items-center p-4 pb-8 text-center rounded-[20px] border border-[0.5px] ${theme === 'dark' ? 'bg-[#121316CC] border-[#FFFFFF33]' : 'bg-white border-black'} border-opacity-10`}>
              <Image
                src="https://res.cloudinary.com/dddpexcfo/image/upload/v1749581878/about_section_gif_2_eakgyt.gif"
                alt="People Over Technology"
                width={250}
                height={250}
                unoptimized={true}
                className="mb-2"
              />
              <h3 className={`text-xl md:text-3xl font-extrabold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'} transition-colors duration-300`}>Shared Success</h3>
              <p className={`text-sm md:text-base ${theme === 'dark' ? 'text-white' : 'text-black'} transition-colors duration-300`}>
                Our success is interwoven with the success of the businesses we serve. We only grow when the businesses on our clientele grow,
                so we work extremely hard to help our clients grow. And we have a lot of fun in the process &apos;cos we love it.
              </p>
            </div>

            {/* Card 3 */}
            <div className={`flex flex-col items-center p-4 pb-8 text-center rounded-[20px] border border-[0.5px] ${theme === 'dark' ? 'bg-[#121316CC] border-[#FFFFFF33]' : 'bg-white border-black'} border-opacity-10`}>
              <Image
                src="https://res.cloudinary.com/dddpexcfo/image/upload/v1749582676/about_section_gif_3_wmplhu.gif"
                alt="People Over Technology"
                width={250}
                height={250}
                unoptimized={true}
                className="mb-2"
              />
              <h3 className={`text-xl md:text-3xl font-extrabold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'} transition-colors duration-300`}>Shared Success</h3>
              <p className={`text-sm md:text-base ${theme === 'dark' ? 'text-white' : 'text-black'} transition-colors duration-300`}>
                Our success is interwoven with the success of the businesses we serve. We only grow when the businesses on our clientele grow,
                so we work extremely hard to help our clients grow. And we have a lot of fun in the process &apos;cos we love it.
              </p>
            </div>
          </div>
        </div>
        <div className={`w-[90%] max-w-[1332px] mx-auto mt-27 border-t border-b px-2 py-6 flex items-center justify-between gap-8 xl:flex-row flex-col xl:border-t xl:border-b border-0 ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}>
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
              <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-sm font-semibold text-left min-w-[200px] -ml-10 md:-ml-0`}>★★★★★</span>
              <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-sm font-semibold text-left min-w-[200px]`}>
                20+ Happy Clients
              </span>
            </div>
          </div>
          <button className={`border rounded-full px-8 py-3 font-medium transition cursor-pointer ${theme === 'dark' ? 'border-white/30 text-white hover:bg-[#fff] hover:text-black' : 'border-black/30 text-black hover:bg-black hover:text-white'}`}>
            Become One Of Them Today!
          </button>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default AboutSection; 