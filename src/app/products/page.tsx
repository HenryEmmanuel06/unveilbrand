"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme') {
        setTheme(e.newValue || 'dark');
      }
    };
    window.addEventListener('storage', handleStorageChange);
    const currentTheme = localStorage.getItem('theme') || 'dark';
    setTheme(currentTheme);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    window.dispatchEvent(new StorageEvent('storage', { key: 'theme', newValue: newTheme }));
  };

  const ThemeToggle = () => (
    <button
      onClick={toggleTheme}
      className="fixed bottom-16 right-4 z-50 p-2 rounded-full transition-colors duration-200 group"
      style={{ backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <Image
        src={theme === 'dark' ? '/sun.svg' : '/moon.svg'}
        alt={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        width={24}
        height={24}
        style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }}
        className={`transition-transform duration-300 ease-in-out ${theme === 'dark' ? 'text-white' : 'text-black'} group-hover:scale-110 group-hover:rotate-180 group-active:scale-95 cursor-pointer`}
      />
      <style jsx>{`
        .group:hover img, .group:active img {
          will-change: transform;
        }
      `}</style>
    </button>
  );

  const categories = ['All', 'Themes', 'Templates', 'Merch', 'UI Kits', 'Recommendations'];

  return (
    <main className={`${theme === 'dark' ? 'bg-[#040508]' : 'bg-white'} pt-20 w-full transition-colors duration-300`}>
      <ThemeToggle />
      <div className="w-[90%] max-w-[1270px] mx-auto mt-20 text-center">
        <h1 className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300`}>Amazing Products</h1>
        <p className={`${theme === 'dark' ? 'text-white/80' : 'text-gray-600'} text-lg max-w-2xl mx-auto mb-12 transition-colors duration-300`}>
          We have many years of experience working for big brands both directly and indirectly through big Agencies. We partner with you and your team to deliver technology solutions.
        </p>
        <div className={`flex justify-center rounded-full overflow-x-auto gap-4 mb-20 px-[25px] py-[20px] border border-[0.5px] ${theme === 'dark' ? 'border-[#232323]' : 'border-black/20'} w-[100%] max-w-[800px] mx-auto transition-colors duration-300`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition duration-300 ${activeCategory === category ? 'bg-[#A212A8] text-white' : `${theme === 'dark' ? 'border border-[0.5px] border-[#232323] text-white hover:bg-gray-700' : 'border border-[0.5px] border-black/30 text-black hover:bg-black hover:text-white'}`}`}
            >
              {category}
            </button>
          ))}
        </div>
          <h1 className={`text-3xl md:text-8xl mx-auto text-center font-bold text-center py-[100px] rounded-lg backdrop-blur-[1.5px] ${theme === 'dark' ? 'bg-[#FFFFFF1A] text-white' : 'bg-black/5 text-black'} transition-colors duration-300`}>COMING SOON</h1>

      </div>
    </main>
  );
} 