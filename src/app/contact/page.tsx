'use client'
import React from 'react';
import Image from 'next/image';


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
      <div className="w-[90%] max-w-[1332px] mx-auto flex flex-col items-center text-center gap-2">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-6 leading-tight">
          Let’s get started!
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
    </section>
  );
};

export default ContactPage; 