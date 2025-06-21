"use client";
import { useState } from 'react';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Themes', 'Templates', 'Merch', 'UI Kits', 'Recommendations'];

  return (
    <main className="bg-[#040508] pt-20">
      <div className="w-[90%] max-w-[1270px] mx-auto mt-20 text-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">Amazing Products</h1>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-12">
          We have many years of experience working for big brands both directly and indirectly through big Agencies. We partner with you and your team to deliver technology solutions.
        </p>
        <div className="flex justify-center rounded-full overflow-x-auto gap-4 mb-20 px-[25px] py-[20px] border-none md:border border-[0.5px] border-[#232323] w-[100%] max-w-[800px] mx-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-white font-medium transition duration-300 ${activeCategory === category ? 'bg-[#A212A8]' : 'border border-[0.5px] border-[#232323] hover:bg-gray-700'}`}
            >
              {category}
            </button>
          ))}
        </div>


      </div>
      
        <div className="w-[90%] max-w-[1270px] backdrop-blur-[1.5px] bg-[#FFFFFF1A] flex justify-center items-center mx-auto mt-20 text-center text-white py-[100px] px-[220px] rounded-lg">
          <h1 className='text-8xl mx-auto text-center font-bold'>COMING SOON</h1>
        </div>
    </main>
  );
} 