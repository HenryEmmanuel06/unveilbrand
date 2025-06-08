'use client';
import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-45 pb-20">
        <div className="w-[90%] lg:w-full max-w-[1332px] mx-auto">

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
      </div>
    </section>
   
  );
};

export default AboutSection; 