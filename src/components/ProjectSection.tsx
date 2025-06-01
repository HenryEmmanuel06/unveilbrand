import Image from "next/image";



const ProjectSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 bg-black">
      <div className="w-[90%] max-w-[1332px] mx-auto flex flex-col items-center">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 text-center">Thoughtful Designs With Real World Solutions</h2>
        {/* Grid */}
        <div
          className="w-full grid grid-cols-[1.3fr_1fr_1fr] gap-[20px] mt-10 h-[700px]"
          style={{ alignItems: "start", gridTemplateRows: '170px' }}
        >
          {/* Column 1: Applibry (spans all rows in col 1, with container) */}
          <div className="col-start-1 col-end-2 row-start-1 row-end-5 flex flex-col h-full">
            <div className="flex flex-col w-full p-2 bg-[#18191C] rounded-2xl shadow-lg border border-white/10">
              <div className="flex items-center justify-between w-full px-[15px] py-[30px]">
                <span className="text-white font-extrabold text-3xl">Applibry</span>
                <div className="flex gap-2">
                  <span className="border border-white/30 text-white/70 text-xs px-4 py-1 rounded-full bg-transparent">Branding | UI Kits | Interface Design</span>
                </div>
              </div>
              <div className="w-full">
                <Image src="/images/project img 1.png" alt="Applibry" width={1100} height={900} className="rounded-xl object-cover w-full h-auto" style={{maxWidth:'100%', minHeight:'auto'}} />
              </div>
            </div>
          </div>
          {/* Column 2: LX and Shield side by side (row 1) */}
          <div className="col-start-2 col-end-3 row-start-1 row-end-2 flex items-center justify-center gap-[20px] p-0 m-0">
            <div className="w-1/2 flex items-center justify-center h-auto">
              <Image src="/images/project img 3.png" alt="LX Logo" width={220} height={220} className="rounded-xl object-cover w-full h-auto" style={{maxWidth:'100%'}} />
            </div>
            <div className="w-1/2 flex items-center justify-center h-auto">
              <Image src="/images/project img 2.png" alt="Shield Logo" width={220} height={220} className="rounded-xl object-cover w-full h-auto" style={{maxWidth:'100%'}} />
            </div>
          </div>
          {/* Column 2: Website Stack (row 2, full width of col 2) */}
          <div className="col-start-2 col-end-3 row-start-2 row-end-3 flex items-center justify-center p-0 m-0">
            <Image src="/images/project img 4.png" alt="Website Stack" width={400} height={400} style={{height:'auto',width:'auto',maxWidth:'100%'}} />
          </div>
          {/* Column 3: Food App (row 1) */}
          <div className="col-start-3 col-end-4 row-start-1 row-end-3 flex flex-col h-full gap-1">
            <div className="flex-1 flex items-center justify-center">
              <Image src="/images/project img 5.png" alt="Food App" width={400} height={600} style={{height:'auto',width:'auto',maxWidth:'100%'}} />
            </div>
             <div className="flex-1 flex items-center justify-center mt-[20px]">
              <Image src="/images/project img 6.png" alt="GetHomly" width={300} height={200} style={{height:'auto',width:'auto',maxWidth:'100%'}} />
            </div>
          </div>
        </div>
        {/* Clients Display (reuse from HeroSection) */}
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
  );
};

export default ProjectSection; 