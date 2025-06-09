'use client';
import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-45 pb-20">
      <div className="w-[90%] lg:w-full max-w-[1332px] mx-auto">
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
              src="https://uccce2e410d3fe3b0672edf7b6bb.previews.dropboxusercontent.com/p/thumb/ACol69bx6m6xQHLM8PUjnh32C0adi6zu--ag2dMqW4RonVbB_8n_ODgbhx5WXRI-K44rKoKoLPsQ66g3cea-N0o90Ig7pOsKMKmFFHs1VdYdnYt7cevaLsdqA_j3yTH286dDeKuuvXJWRlrjn9-4HespDO8CaoZXMZUP6eVyJe-EQgnJ6pyd4EYyK0Q7bfx_lG5-sPi-XKnMCT1lGk34CSHwlispDRSRt8IIzPQa2M0vUR8OCVc5rkqEwklreLRKLehBUR5Kzl_r_PusOmWjp8Ffvz0qWGvsiwvQnDE_8pOdja2VOiq-s1f2GpC1h5AVwGa7KnxSY6DiHEK3IfbQW7CX3mdKkLJkLeNoUXQPjLE5i895TwevJAUDZJXG-rkoNeBgifBD5Oeue4HVGWhzbad6_VsMUuwf2TpeeHx5C56kEOb1GDq8oe6tLrBd4UbCaTmICOcEl5cxp0UmjlqTJADUGS0_yPpSa_qa2kaoe7iX7Nquvbh6e1rNpJeSIWQ7fSc_3QsmCe8tvVylbkdDJRp6/p.gif?is_prewarmed=truehttps://www.dropbox.com/scl/fi/wbr48addf8e9lwfxjf56f/about-section-gif-1.gif?rlkey=8s6gcfkvjsfp9maa1apxer3dx&st=axrat6cb&dl=0"
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
              src="https://uc0a5bbd5e3dbb509a52f3e8cd37.previews.dropboxusercontent.com/p/thumb/ACqqSjY7Ljqxp1fcBONfJ85TCUV8M79iD9L5vHNL89hqwAetBRf7I14HvHzJN0IWeYjg5xiF6TAAfdGIfPwO8qSpmQKNMCrFT-x4W2u2fniWxpfINV3BxHV6QnNaYTrbbo7Ovna46_pmQr612ObFpVyWDrJz00ScuWt60JHpZVh_uUPLJTWgE8xh48MPMzHzx8UI66CzS-Hd7mKtn1Tjmd0IANU_Gi6D6_33ny_p9f0GPH32d5Zyo9IhW42lg8Vvx7NC_zxBoobRSN-XjimR3GpVDdOww5oP2bPax_PH32hLB4XUEFDIbwqdVXD4bNLA2yjBIZiHJ2IGsPuti5aew5bGR2EsmV4Dg84nJsdYGz-Clvju2IciNLZowipKPCvtK8Cv7y2OOfLcEtk1Q61aAlQopqS9MHlbN6NgXb8ZREKGoSw7fOSdxUqgtkhDfme_jKcJ9dVG5UbTDGVoib087YL7/p.gif?is_prewarmed=true"
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
              src="https://previews.dropbox.com/p/thumb/ACqU3wtqUJQnfeZ2JsZ7LUcMHflKPOaZDSTzpKJWBt5lrNDCmlpxTMYdguf2pOg5TiTYGCNNsf92SSe7xIlZRZSGIhqvOXmX-TH05FeCV1GI2qbJxBrO5Hs7r1IZriWoHn65Qo1DUGE8NxPh9i0MMWfC3dFTbYspfqmrjZbHh0aSFcChaREeiKOa_--6deGqEdMVdsxB12aWpxBQ2-TdsAZBTfob8bQHaVGGi7RRB8ptTlhNM6jtcgj1pcnxYYhonD09CRGVdPYNCtBqvpnWToSeU-515vjYe3ldF2Y_2r0wN7V9C4f3TJdf2XFTrlcmoa4YdyIYXvqv-OEoHLJZ70c-v1Gw6tHrBRiAAN7B0sPXyEQUTFV4rI-V0MRmyOr9joTsdBNiFNUc1OzIY4jATf0Z/p.gif?is_prewarmed=true"
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
      </div>

    </section>

  );
};

export default AboutSection; 