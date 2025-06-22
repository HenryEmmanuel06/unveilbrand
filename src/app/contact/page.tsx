'use client'
import React from 'react';
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
    description: 'Working with them has been a game-changer for our company. Their dedication and creativity are unmatched. We saw a significant increase in our engagement and sales.',
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
  return (
    <section className='w-full bg-[#040508] flex flex-col items-center pt-45 pb-20'>
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
          background-color: white;
          opacity: 1;
        }
        .testimonial-pagination .swiper-pagination-bullet-active {
          background-color: #A212A8;
        }
      `}</style>
      <div className="w-[90%] max-w-[1332px] mx-auto flex flex-col items-center text-center gap-2">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-6 leading-tight">
          Let's get started!
        </h1>
        <p className="text-base md:text-lg text-center text-[#E0E0E0] max-w-2xl mb-10 mx-auto">
          Book your first meeting time with us via filling the form or by chat.
          We look forward to meeting you!
        </p>
        <button className="mb-8 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">Whatsapp Chat</button>
        <form className="w-[100%] max-w-[900px] bg-transparent md:bg-[#FFFFFF0D] block md:grid backdrop-blur-[1.5px] border-none md:border border-[0.5px] border-[#FFFFFF33] border-opacity-10 rounded-[15px] shadow-lg p-8 gap-6 p-[0px] pt-[0px] md:p-[30px] pb-[60px]">
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
              <Image src="/images/cta logo.png" alt="CTA Logo" width={20} height={20} />
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="w-full max-w-[1332px] mx-auto mt-20 px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12 text-white">
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
              <div className="bg-[#1C1C1C] p-8 rounded-2xl flex flex-col justify-between border border-[#FFFFFF1A] h-[250px] cursor-grab active:cursor-grabbing">
                <p className="text-white/80 mb-6 text-left">{testimonial.description}</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="ml-4 text-left">
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-white/60">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="testimonial-pagination text-center mt-8"></div>
      </div>
    </section>
  );
};

export default ContactPage; 