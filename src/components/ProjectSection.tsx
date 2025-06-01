import React from 'react';
import Image from "next/image";

const ProjectSection = () => {
  return (
    <section className="w-full py-2 bg-[#040508]">

      <div className="relative mx-auto w-[90%] max-w-[1330px]" style={{
        backgroundImage: 'url("/images/shiny bg Projects.png")',
        backgroundSize: 'cover',
        backgroundPositionY: '-100px',
        backgroundRepeat: "no-repeat"
        // backgroundColor: "red",
      }}>
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-20 text-left">Thoughtful Designs With Real World Solutions</h2>

        <div className="mx-auto h-[700px] grid grid-cols-12 grid-rows-12 gap-4">

          {/* First Container - 5 columns */}
          <div className="col-span-5 row-span-12 h-full grid gap-4 bg-[#121316] p-[10px] rounded-[20px]">
            <div className="row-span-1 bg-[#FFFFFF05] rounded-[15px] h-full">

              <div className="">
                <div className="flex items-center justify-between w-full px-[15px] py-[30px] pb-0">
                  <span className="text-white font-extrabold text-3xl">Applibry</span>
                  <div className="flex gap-2">
                    <span className="border border-white/30 text-white/70 text-xs px-4 py-1 rounded-full bg-transparent">Branding | UI Kits | Interface Design</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-span-11 rounded-[20px] relative h-ful" style={{
              backgroundImage: 'url("/images/project img 1.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
            </div>
          </div>

          {/* Second Container - 4 columns */}
          <div className="col-span-4 row-span-12 h-full grid grid-cols-2 gap-4">
            <div className="col-span-1 row-span-3 rounded-[20px] relative h-full" style={{
              backgroundImage: 'url("/images/project img 3.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>

            </div>
            <div className="col-span-1 row-span-3 rounded-[20px] relative h-full" style={{
              backgroundImage: 'url("/images/project img 2.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>

            </div>
            <div className="col-span-2 row-span-9 rounded-[20px] relative h-full" style={{
              backgroundImage: 'url("/images/project img 4.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>

            </div>
          </div>

          {/* Third Container - 3 columns */}
          <div className="col-span-3 row-span-12 h-full grid gap-4">
            <div className="row-span-7 rounded-[20px] relative overflow-hidden h-full" style={{
              backgroundImage: 'url("/images/project img 5.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>

            </div>
            <div className="row-span-5 rounded-[20px] relative overflow-hidden h-full" style={{
              backgroundImage: 'url("/images/project img 6.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>

            </div>
          </div>
        </div>

             <div className="w-full max-w-[1332px] mx-auto mt-12 border-t border-b border-white/10 px-8 py-6 flex items-center justify-between gap-8 xl:flex-row flex-col xl:border-t xl:border-b border-0">
          <div className="flex items-center min-w-[220px] w-full xl:w-auto xl:justify-start justify-center client-info-row">
            <div className="flex -space-x-3 justify-center w-full">
              {[1,2,3,4,5].map((i) => (
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
              <span className="text-white text-sm font-semibold mt-1 text-left min-w-[200px]">
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
 
            )
          }
export default ProjectSection; 