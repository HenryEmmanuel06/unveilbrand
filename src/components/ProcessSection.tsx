import Image from "next/image";

const processSteps = [
  {
    img: "/images/process img 1.png",
    title: "Step 1 Title",
    desc: "Description for step 1 goes here. This should match the Figma design text.",
  },
  {
    img: "/images/process img 2.png",
    title: "Step 2 Title",
    desc: "Description for step 2 goes here. This should match the Figma design text.",
  },
  {
    img: "/images/process img 3.png",
    title: "Step 3 Title",
    desc: "Description for step 3 goes here. This should match the Figma design text.",
  },
];

const ProcessSection = () => {
  return (
    <section className="w-full bg-[#040508] py-20 flex flex-col items-center">
      <div className="w-[90%] max-w-[1330px] mx-auto flex flex-col items-center text-center">
        {/* Section Title */}
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">Our Process</h2>
        <p className="text-white/80 text-lg max-w-2xl mb-12">A short description of the process section, matching the Figma subtitle or intro text.</p>
        {/* Steps */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-8 w-full justify-center items-stretch">
          {processSteps.map((step, idx) => (
            <div key={idx} className="w-[90%] md:w-auto flex-1 flex flex-col bg-white/5 rounded-2xl p-6 md:p-8 shadow-lg border border-white/10 max-w-[350px] mx-auto">
              <h3 className="text-white text-xl font-semibold mb-2 text-left">{step.title}</h3>
              <p className="text-white/70 text-base mb-6 text-left">{step.desc}</p>
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