'use client';
import React from 'react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import Link from 'next/link';

export default function ProductsSection() {
  const [theme, setTheme] = React.useState<'dark' | 'light'>('dark');

  React.useEffect(() => {
    // Get initial theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme as 'dark' | 'light');

    // Listen for theme changes
    const handleThemeChange = (e: StorageEvent) => {
      if (e.key === 'theme') {
        setTheme(e.newValue as 'dark' | 'light');
      }
    };

    window.addEventListener('storage', handleThemeChange);
    return () => window.removeEventListener('storage', handleThemeChange);
  }, []);

  return (
    <section className={`w-full ${theme === 'dark' ? 'bg-[#040508]' : 'bg-white'} flex flex-col items-center pt-0 md:pt-20 transition-colors duration-300`}>
      <AnimatedSection className="w-[90%] max-w-[1330px] mx-auto flex flex-col items-center text-center gap-2 border-b border-[#7F7F7F]/20 px-5" style={{
      backgroundImage: theme === 'dark' ? 'url("/images/shiny bg product.png")' : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: "no-repeat"
  }}>
        {/* Section Title */}
        <h2 className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} text-3xl md:text-5xl font-bold mb-4 transition-colors duration-300`}>Ready-Made Tools You&apos;ll Love Using!</h2>
        <p className={`${theme === 'dark' ? 'text-white/80' : 'text-gray-600'} text-[15px] md:text-lg w-[90%] max-w-2xl mb-8 mx-auto transition-colors duration-300`}>Hand-picked collections crafted to help you start, design & work smarter, all optimized for modern creators.</p>
        {/* CTA Button */}
        <div className="mb-12 flex justify-center">
           <Link href="/products" className="flex z-50 items-center gap-4 bg-[#A212A8] text-white font-medium px-8 py-3 rounded-full shadow-lg hover:bg-[#8d1091] transition cursor-pointer">
            <Image src="/images/cta logo.svg" alt="CTA Logo" width={20} height={20} />
            Preview Available Products
          </Link>
        </div>
        {/* Main Content: Images */}
        <div className="flex flex-col-reverse md:flex-row justify-center items-center w-full gap-10 lg:gap-12 -mt-32 md:pt-20 min-h-[300px] md:min-h-[540px] overflow-hidden product-image-display-desktop">
          {/* Left: Main Product Image (Person) */}
            <Image
              src="/images/product img 1.png"
              alt="Main Product"
              width={700}
              height={457}
            className={`object-contain relative top-10 product-1-img ${theme === 'light' ? 'opacity-90' : ''} transition-opacity duration-300`}
              priority
              unoptimized
            />
          {/* Right: Stacked Product Images */}
          <div className="flex-1 flex flex-col justify-end items-center md:items-center relative px-[0] backdrop-blur-[1.5px] rounded-[20px] top-10 product-rhs group mt-30 lg:mt-0" style={{
            background: theme === 'dark' 
              ? "linear-gradient(179.93deg, rgba(255, 255, 255, 0.1) 0.06%, rgba(255, 255, 255, 0.0285513) 59.94%, rgba(255, 255, 255, 0.015055) 76.91%, rgba(255, 255, 255, 0) 91.85%)"
              : "linear-gradient(179.93deg, rgba(0, 0, 0, 0.05) 0.06%, rgba(0, 0, 0, 0.02) 59.94%, rgba(0, 0, 0, 0.01) 76.91%, rgba(0, 0, 0, 0) 91.85%)"
          }}>
             {/* Gradient overlay at the bottom */}
              <div className="pointer-events-none absolute w-min-[600px] lg:w-min-[400px] w-[500px] lg:w-full bottom-5 h-3/4 z-40" style={{
              background: theme === 'dark'
                ? "linear-gradient(180deg, rgba(11, 12, 15, 0) 11.73%, rgba(1, 1, 2, 0.11) 31.6%, rgba(11, 12, 15, 0.8) 71.64%, rgba(9, 10, 13, 0.9) 82.47%, #040508 100%)"
                : "linear-gradient(180deg, rgba(255, 255, 255, 0) 11.73%, rgba(255, 255, 255, 0.11) 31.6%, rgba(255, 255, 255, 0.8) 71.64%, rgba(255, 255, 255, 0.9) 82.47%, #ffffff 100%)"
              }} />
              <Link href="/products">
              <div className="relative w-[320px] h-[420px] md:w-[320px] md:h-[420px] flex items-end justify-center left-[19px] -top-5 md:top-0 md:left-6">
             
              {/* Back Image (img 4, left, tilted) */}

                <Image
                  src="/images/product img 4.png"
                  alt="Product 4"
                   width={259}
              height={384}
                
                  className="rounded-xl object-cover absolute top-20 -left-14 group-hover:-left-22 z-10 rotate-[-4deg] origin-top group-hover:rotate-[-8deg] transition-all duration-300 group-hover:scale-88 cursor-pointer"
                />
          
              {/* Back Image (img 3, right, tilted) */}
              <Image
                  src="/images/product img 3.png"
                  alt="Product 4"
                   width={259}
              height={384}
                
                  className="rounded-xl object-cover absolute top-20 left-18 z-20 group-hover:left-26 rotate-[4deg] origin-top group-hover:rotate-[8deg] transition-all duration-300 group-hover:scale-88 cursor-pointer"
                />
              {/* Front Image (img 2, centered, straight) */}
              <Image
                  src="/images/product img 2.png"
                  alt="Product 4"
                  width={270}
                  height={370}
                  className="rounded-xl object-cover absolute top-14 -left-0 z-30 transition-all duration-300 origin-top group-hover:scale-88 cursor-pointer"
                style={
                  {
                    boxShadow: "0px 1px 50px 0px #00000059"
                  }}/>
            </div>
              </Link>
            
          </div>
        </div>
      </AnimatedSection>

       <div className={`w-[90%] max-w-[1330px] h-[400px] mx-auto flex flex-col items-center text-center gap-2 product-img-mobile ${theme === 'light' ? 'opacity-90' : ''} transition-opacity duration-300`}>
                <Image 
                  src="/images/product-img-5-mobile.png"
                  alt="Product 4"
                  width={400}
                  height={500}
                  className="object-cover"
                />
       </div>
    </section>
  );
} 