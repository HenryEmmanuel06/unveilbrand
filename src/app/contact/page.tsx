'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const testimonials = [
  {
    image: '/images/client 1.png',
    name: 'Ferdinand Alfred',
    title: 'CEO, Wallet',
    description: 'Our success is interwoven with the success of the businesses we serve. We only grow when the businesses on our clientele grow, so we work extremely hard to help our clients grow. And we have a lot of fun in the process &apos;cos we love it.',
  },
  {
    image: '/images/client 2.png',
    name: 'Jane Doe',
    title: 'COO, Example Inc.',
    description: 'Working with them has been a game-changer for our company. Their dedication and creativity are unmatched. We saw a significant increase in our engagement and sales.',
  },
  {
    image: '/images/client 3.png',
    name: 'John Smith',
    title: 'CTO, Tech Solutions',
    description: 'The team is professional, responsive, and delivered a product that exceeded our expectations. I highly recommend them to anyone looking for top-tier design and development.',
  },
  {
    image: '/images/client 4.png',
    name: 'Sarah Wilson',
    title: 'Marketing Head, Innovate Co.',
    description: 'From the initial concept to the final launch, the process was seamless and collaborative. They truly understood our vision and brought it to life beautifully.',
  }
];

const ContactPage = () => {
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
    <section className={`w-full ${theme === 'dark' ? 'bg-[#040508]' : 'bg-white'} flex flex-col items-center pt-45 transition-colors duration-300`}>
      <ThemeToggle />
      <style jsx>{`
        .contact-input::placeholder {
        color: #111111;
        }
        .contact-input:focus{
        outline: none;
        }
      `}</style>
      <style jsx global>{`
        .testimonial-pagination .swiper-pagination-bullet {
          background-color: ${theme === 'dark' ? 'white' : 'black'};
          opacity: 1;
          margin: 0 5px !important;
        }
        .testimonial-pagination .swiper-pagination-bullet-active {
          background-color: #A212A8;
        }
      `}</style>
      <div className="w-[90%] max-w-[1332px] mx-auto flex flex-col items-center text-center gap-2">
        <h1 className={`text-3xl md:text-5xl font-extrabold text-center mb-6 leading-tight ${theme === 'dark' ? 'text-white' : 'text-black'} transition-colors duration-300`}>
          Let&apos;s get started!
        </h1>
        <p className={`text-base md:text-lg text-center max-w-2xl mb-10 mx-auto ${theme === 'dark' ? 'text-[#E0E0E0]' : 'text-gray-700'} transition-colors duration-300`}>
          Book your first meeting time with us via filling the form or by chat.
          We look forward to meeting you!
        </p>
       <a href="https://wa.me/2347046036398" target="_blank" rel="noopener noreferrer"> <button className={`mb-8 px-6 py-2 border rounded-full transition ${theme === 'dark' ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'}`}>Whatsapp Chat</button></a>
        <form className={`w-[100%] max-w-[900px] bg-transparent md:block md:grid backdrop-blur-[1.5px] border-none md:border border-[0.5px] border-opacity-10 rounded-[15px] shadow-lg p-8 gap-6 p-[0px] pt-[0px] md:p-[30px] pb-[60px] ${theme === 'dark' ? 'md:bg-[#121316CC] md:border-[#FFFFFF33]' : 'md:bg-black/10 md:border-black/20'} transition-colors duration-300`}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4 md:mb-0">
            <input type="text" placeholder="First Name:" className="p-3 rounded bg-[#FFFFFFE5] text-black col-span-12 md:col-span-6 contact-input h-[58px]" />
            <input type="text" placeholder="Surname:" className="p-3 rounded bg-[#FFFFFFE5] text-black col-span-12 md:col-span-6 contact-input h-[58px]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4 md:mb-0">
            <input type="text" placeholder="Phone Number" className="p-3 rounded bg-[#FFFFFFE5] text-black col-span-12 md:col-span-5 contact-input h-[58px]" />
            <input type="email" placeholder="Email" className="p-3 rounded bg-[#FFFFFFE5] text-black col-span-12 md:col-span-7 contact-input h-[58px]" />
          </div>
          <div className='bg-[#FFFFFFE5] py-[20px] px-[25px] text-[#111111] rounded-[5px] mb-4 md:mb-0'>
            <label className="block mb-2 font-semibold text-sm text-left">Your Budget:</label>
            <div className="flex gap-8">
              <label className="flex items-center gap-2 text-[14px] md:text-[18px]">
                <input type="radio" name="budget" className="accent-fuchsia-600" />
                Tiny Budget
              </label>
              <label className="flex items-center gap-2 text-[14px] md:text-[18px]">
                <input type="radio" name="budget" className="accent-fuchsia-600" />
                Medium Budget
              </label>
              <label className="flex items-center gap-2 text-[14px] md:text-[18px]">
                <input type="radio" name="budget" className="accent-fuchsia-600" />
                Premium Budget
              </label>
            </div>
          </div>
          <input type="text" placeholder="Select The Industries You're In" className="p-3 rounded bg-[#FFFFFFE5] text-black contact-input mb-4 md:mb-0 w-full" />
          <textarea placeholder="Message" className="p-3 rounded bg-[#FFFFFFE5] text-black min-h-[120px] contact-input w-full" />
          <div className="mt-5 md:mt-0 flex justify-center">
            <button type='submit' className="flex items-center gap-4 bg-[#A212A8] text-white font-medium px-8 py-3 rounded-full shadow-lg hover:bg-[#8d1091] transition cursor-pointer">
              <Image src="/images/cta logo.svg" alt="CTA Logo" width={20} height={20} />
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className={`w-[90%] lg:w-full max-w-[1332px] mx-auto mt-30 border-t-[0.5px] ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} transition-colors duration-300`}></div>

      <div className="w-[90%] max-w-[1332px] mx-auto mt-20 px-4">
        <h2 className={`text-3xl md:text-5xl font-extrabold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-black'} transition-colors duration-300`}>
          What our customers are saying:
        </h2>
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          pagination={{
            clickable: true,
            el: '.testimonial-pagination'
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className={`backdrop-blur-[1.5px] p-8 rounded-2xl flex flex-col justify-between border h-[320px] md:h-[270px] cursor-grab active:cursor-grabbing transition-colors duration-300 ${theme === 'dark' ? 'bg-[#121316CC] border-[#FFFFFF1A]' : 'bg-black/5 border-black/20'}`}>
                <p className={`mb-6 text-left ${theme === 'dark' ? 'text-white/80' : 'text-gray-700'} transition-colors duration-300`}>{testimonial.description}</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="ml-4 text-left">
                    <p className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-black'} transition-colors duration-300`}>{testimonial.name}</p>
                    <p className={`${theme === 'dark' ? 'text-white/60' : 'text-gray-600'} transition-colors duration-300`}>{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="testimonial-pagination text-center mt-8"></div>
      </div>
      <div className={`w-[90%] lg:w-full max-w-[1332px] mx-auto mt-15 border-t-[0.5px] ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} transition-colors duration-300`}></div>
    </section>
  );
};

export default ContactPage; 