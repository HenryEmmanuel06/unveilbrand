import Image from 'next/image';

export default function ProductsSection() {
  return (
    <section className="w-full bg-[#040508] flex flex-col items-center py-20">
      <div className="w-[90%] max-w-[1330px] mx-auto flex flex-col items-center text-center gap-2">
        {/* Section Title */}
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">Ready-Made Tools You'll Love Using!</h2>
        <p className="text-white/80 text-lg max-w-2xl mb-8">Hand-picked collections crafted to help you start, design & work smarter, all optimized for modern creators.</p>
        {/* CTA Button */}
        <div className="mb-12 flex justify-center">
          <button className="flex items-center gap-4 bg-[#A212A8] text-white font-medium px-8 py-3 rounded-full shadow-lg hover:bg-[#8d1091] transition cursor-pointer">
            <Image src="/images/cta logo.png" alt="CTA Logo" width={20} height={20} />
            Preview Available Products
          </button>
        </div>
        {/* Main Content: Images */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12 mt-4 md:pt-20 min-h-[300px] md:min-h-[540px] overflow-hidden">
          {/* Left: Main Product Image (Person) */}
          
            <Image
              src="/images/product img 1.png"
              alt="Main Product"
              width={700}
              height={456}
              className="object-contain relative top-10 product-1-img"
              priority
              unoptimized
            />
         
          {/* Right: Stacked Product Images */}
          <div className="flex-1 flex flex-col justify-end items-center md:items-center relative px-[0] backdrop-blur-[1.5px] rounded-[20px] top-10" style={{
            background: "linear-gradient(179.93deg, rgba(255, 255, 255, 0.1) 0.06%, rgba(255, 255, 255, 0.0285513) 59.94%, rgba(255, 255, 255, 0.015055) 76.91%, rgba(255, 255, 255, 0) 91.85%)",

          }}>
            <div className="relative w-[320px] h-[420px] md:w-[320px] md:h-[420px] flex items-end justify-center left-[19px] -top-5 md:top-0 md:left-6">
              {/* Gradient overlay at the bottom */}
              <div className="pointer-events-none absolute -left-[19px] -bottom-5 w-full h-1/2 z-40" style={{
                background: "linear-gradient(180deg, rgba(11, 12, 15, 0) 11.73%, rgba(11, 12, 15, 0.111839) 31.6%, rgba(11, 12, 15, 0.8) 71.64%, rgba(9, 10, 13, 0.9) 82.47%, #040508 100%)"
              }} />
              {/* Back Image (img 4, left, tilted) */}

                <Image
                  src="/images/product img 4.png"
                  alt="Product 4"
                   width={259}
              height={384}
                
                  className="rounded-xl object-cover absolute top-24 -left-6 z-10 rotate-[-6deg]"
                />
             
              {/* Back Image (img 3, right, tilted) */}
              <Image
                  src="/images/product img 3.png"
                  alt="Product 4"
                   width={259}
              height={384}
                
                  className="rounded-xl object-cover absolute top-24 left-12 z-20 rotate-[6deg]"
                />
              {/* Front Image (img 2, centered, straight) */}
              <Image
                  src="/images/product img 2.png"
                  alt="Product 4"
                  width={400}
                  height={500}
                  className="rounded-xl object-cover absolute top-8 -left-4 z-30"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 