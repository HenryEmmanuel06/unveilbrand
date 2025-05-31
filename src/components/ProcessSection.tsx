import Image from "next/image";

const processSteps = [
  {
    img: "/images/process img 1.png",
    title: "Swift",
    desc: "We move fast—because your time is money. From idea to launch, our turnaround is built for speed without compromising quality.",
  },
  {
    img: "/images/process img 2.png",
    title: "Effortless",
    desc: "We handle it, so you don't have to. Seamless processes, clear communication, & intuitive design making everything feel smooth.",
  },
  {
    img: "/images/process img 3.png",
    title: "Affordable",
    desc: "Premium doesn't have to be pricey. We deliver top results that match your budget; no hidden costs, no bloated packages.",
  },
];

const ProcessSection = () => {
  return (
    <section className="w-full bg-[#040508] py-20 flex flex-col items-center">
      <div className="w-[90%] max-w-[1330px] mx-auto flex flex-col items-center text-center">
        {/* Section Title */}
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">Excellence in 3 Distinct Abilities</h2>
        <p className="text-white/80 text-lg max-w-900px mb-12">Here at Unveilbrand, we deliver solutions that save time, cut complexity, and fit your budget.</p>
        {/* Steps */}
        <div className="flex flex-col lg:flex-row gap-12 md:gap-8 w-full justify-center items-stretch">
          {processSteps.map((step, idx) => (
            <div key={idx} className="flex-1 flex flex-col bg-white/5 rounded-2xl shadow-lg border border-white/10 w-[90%] md:w-[410px] h-[330px] mx-auto">
              <div className="flex flex-col flex-grow">
                <h3 className="text-white text-xl font-semibold pl-[40px] pt-[35px] text-left text-[32px]">{step.title}</h3>
                <p className="text-white text-base text-left text-[15px] px-[40px] pt-[10px]">{step.desc}</p>
              </div>
              <div className="w-full flex justify-center">
                <Image src={step.img} alt={step.title} width={320} height={180} className="rounded-xl object-cover w-full h-auto" />
              </div>
            </div>
          ))}
        </div>
        {/* Book Now Button */}
        <div className="mt-12 flex justify-center">
          <button className="flex items-center gap-2 bg-[#A212A8] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-[#A212A8] transition">
            <Image src="/images/cta logo.png" alt="CTA Logo" width={20} height={20} />
            Book a call with us
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 