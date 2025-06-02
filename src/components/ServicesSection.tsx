import React from "react";
import Image from "next/image";

const services = [
  { title: "Branding {Identity, Strategy & Positioning}", col: 1, row: 1 },
  { title: "Website Development", col: 2, row: 1 },
  { title: "UI & Interface Design", col: 1, row: 2 },
  { title: "Site Management & Optimization", col: 2, row: 2 },
  { title: "CMS Solutions {Wordpress, Webflow, Shopify}", col: 1, row: 3 },
  { title: "MVP Development for Startups", col: 2, row: 3 },
  { title: "Branding", col: 1, row: 4 },
  { title: "Website Development", col: 2, row: 4 },
];

const ServicesSection = () => {
  return (
    <section className="services-section w-full flex flex-col items-center py-30 bg-[#040508]">
      <div className="relative mx-auto w-[90%] max-w-[1180px]" style={{
      backgroundImage: 'url("/images/shiny bg services.png")',
      backgroundSize: 'cover',
      backgroundPositionY: '-100px',
      backgroundRepeat: "no-repeat"
      // backgroundColor: "red",
  }}>
      <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 mx-auto text-center">Excellence in 3 Distinct Abilities</h2>
      <p className="text-white/80 text-lg max-w-900px mb-12 text-center">
        Here at Unveilbrand, we deliver solutions that save time, cut complexity, and fit your budget
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mb-10 mx-auto w-[90%] max-w-[1180px]">
        {services.map((service, idx) => {
          // Determine if this is left or right column on desktop
          const isLeft = idx % 2 === 0;
          const borderRadius = isLeft
            ? "rounded-full md:rounded-tr-[8px] md:rounded-br-[8px] md:rounded-tl-full md:rounded-bl-full"
            : "rounded-full md:rounded-tl-[8px] md:rounded-bl-[8px] md:rounded-tr-full md:rounded-br-full";
          return (
            <div
              key={idx}
              className={`bg-[#FFFFFF0D] px-8 py-5 text-white text-[16px] md:text-[20px] font-normal flex items-center justify-start shadow-md border border-[0.5px] border-[#FFFFFF33] border-opacity-10 backdrop-blur-sm ${borderRadius}`}
              style={{
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
              }}
            >
              {service.title}
            </div>
          );
        })}
      </div>
      <div className="mt-12 flex justify-center">
          <button className="flex items-center gap-4 bg-[#A212A8] text-white font-medium px-8 py-3 rounded-full shadow-lg hover:bg-[#A212A8] transition cursor-pointer">
            <Image src="/images/cta logo.png" alt="CTA Logo" width={20} height={20} />
            Book a call with us
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 