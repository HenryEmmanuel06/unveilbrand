"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-[20px] left-0 right-0 z-50 w-[90%] lg:w-[945px] mx-auto flex justify-between items-center py-[15px] px-[15px] border border-white/10 rounded-full bg-black/30 backdrop-blur-[15px]">
        <Link href="/">
          <Image
            src="/images/unveilbrand logo.png"
            alt="Unveilbrand Logo"
            width={135}
            height={40}
            className="object-contain cursor-pointer ml-3"
            priority
          />
        </Link>
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center">
          <ul className="flex gap-8 text-white text-base font-medium">
            <li className="hover:text-[#A212A8] transition cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-[#A212A8] transition cursor-pointer">
              <Link href="#projects" onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}>Our Works</Link>
            </li>
            <li className="hover:text-[#A212A8] transition cursor-pointer">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-[#A212A8] transition cursor-pointer">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="hover:text-[#A212A8] transition cursor-pointer">
              <Link href="/products">Products</Link>
            </li>
          </ul>
          <button className="ml-10 border border-white/30 rounded-full px-6 py-2 text-white font-medium hover:bg-[#A212A8] transition cursor-pointer">Contact</button>
        </div>
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </nav>
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/95 z-50 transition-all duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full relative">
          {/* Close Button */}
          <button 
            className="absolute top-8 right-8 text-white p-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <span className="w-full h-0.5 bg-white transform rotate-45 absolute"></span>
              <span className="w-full h-0.5 bg-white transform -rotate-45 absolute"></span>
            </div>
          </button>
          <ul className="flex flex-col gap-8 text-white text-2xl font-medium text-center">
            <li className="hover:text-[#A212A8] transition cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-[#A212A8] transition cursor-pointer">
              <a href="#projects" onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}>Our Works</a>
            </li>
            <li className="hover:text-[#A212A8] transition cursor-pointer">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-[#A212A8] transition cursor-pointer">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="hover:text-[#A212A8] transition cursor-pointer">
              <Link href="/products">Products</Link>
            </li>
          </ul>
          <button className="mt-8 border border-white/S30 rounded-full px-8 py-3 text-white font-medium hover:bg-white/10 transition">Contact</button>
        </div>
      </div>
    </>
  );
};

export default NavBar; 