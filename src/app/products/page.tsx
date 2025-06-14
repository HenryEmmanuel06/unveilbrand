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
        <div className="flex justify-center flex-wrap gap-4 mb-20">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-white font-medium transition duration-300 ${activeCategory === category ? 'bg-[#A212A8]' : 'border border-gray-600 hover:bg-gray-700'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="text-white text-2xl mt-10 p-10 border border-gray-700 rounded-lg">
          Products Coming Soon!
        </div>

      </div>
    </main>
  );
} 