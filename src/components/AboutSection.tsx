'use client';
import React from 'react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const AboutSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-45 pb-20">
      <AnimatedSection className="w-[90%] lg:w-full max-w-[1332px] mx-auto">
        <div style={{
         backgroundImage: 'url("/images/about section shinny bg.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: "no-repeat",
      }}>
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-6 leading-tight">
          We Are A Group of Passionate<br />
          Designers, Developers.
        </h1>
        <p className="text-base md:text-lg text-center text-[#E0E0E0] max-w-2xl mb-10 mx-auto">
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

        <div className="w-[90%] max-w-[1332px] mx-auto flex flex-row items-stretch justify-center mt-30 rounded-xl overflow-hidden border border-[0.5px] border-[#FFFFFF33] border-opacity-10">
          <div className="flex items-center justify-center w-[35%] min-w-[180px] p-8 border-r bg-[#FFFFFF0D] backdrop-blur-[1.5px] border-[0.5px] border-[#FFFFFF33] border-opacity-10">
            <h2 className="text-2xl md:text-[45px] font-extrabold text-white leading-tight text-left">
              Technology for<br />profitability
            </h2>
          </div>
          <div className="flex flex-col justify-center w-[65%] py-8 px-15 bg-[#FFFFFF0D] backdrop-blur-[1.5px] border border-[0.5px] border-[#FFFFFF33] border-opacity-10">
            <p className="text-base md:text-lg text-[#E0E0E0] mb-2">
              When you work with us, we consider ourselves your partners and we do all that&apos;s required to help achieve your goals.
            </p>
            <p className="text-base md:text-lg text-[#E0E0E0]">
              we consider ourselves your partners
            </p>
          </div>
        </div>

        {/* New section for the three cards */}
        <div className="w-[90%] max-w-[1332px] mx-auto mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
          {/* Card 1 */}
          <div className="flex flex-col items-center p-4 pb-8 bg-[#FFFFFF1A] text-center rounded-[20px]">
            <Image
              src="https://res.cloudinary.com/dddpexcfo/image/upload/v1749580761/about_section_gif_1_pqkwzz.gif"
              alt="People Over Technology"
              width={250}
              height={250}
              unoptimized={true}
              className="mb-2"
            />
            <h3 className="text-xl md:text-3xl font-extrabold text-white mb-4">People Over Technology</h3>
            <p className="text-sm md:text-base text-white">
              Because we solely focus on people, not technology, we focus more on providing rich customer experience every step of the way. From building soothing websites to creating campaign strategies, it&apos;s all about people, not stats.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center p-4 pb-8 bg-[#FFFFFF1A] text-center rounded-[20px]">
            <Image
              src="https://res.cloudinary.com/dddpexcfo/image/upload/v1749581878/about_section_gif_2_eakgyt.gif"
              alt="People Over Technology"
              width={250}
              height={250}
              unoptimized={true}
              className="mb-2"
            />
            <h3 className="text-xl md:text-3xl font-extrabold text-white mb-4">Shared Success</h3>
            <p className="text-sm md:text-base text-white">
              Our success is interwoven with the success of the businesses we serve. We only grow when the businesses on our clientele grow,
              so we work extremely hard to help our clients grow. And we have a lot of fun in the process &apos;cos we love it.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center p-4 pb-8 bg-[#FFFFFF1A] text-center rounded-[20px]">
            <Image
              src="https://res.cloudinary.com/dddpexcfo/image/upload/v1749582676/about_section_gif_3_wmplhu.gif"
              alt="People Over Technology"
              width={250}
              height={250}
              unoptimized={true}
              className="mb-2"
            />
            <h3 className="text-xl md:text-3xl font-extrabold text-white mb-4">Shared Success</h3>
            <p className="text-sm md:text-base text-white">
              Our success is interwoven with the success of the businesses we serve. We only grow when the businesses on our clientele grow,
              so we work extremely hard to help our clients grow. And we have a lot of fun in the process &apos;cos we love it.
            </p>
          </div>
        </div>
      </div>
        <div className="w-[90%] max-w-[1332px] mx-auto mt-27 border-t border-b border-white/10 px-2 py-6 flex items-center justify-between gap-8 xl:flex-row flex-col xl:border-t xl:border-b border-0">
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
        </div>
      </AnimatedSection>
    </section>
  );
};

export default AboutSection; 