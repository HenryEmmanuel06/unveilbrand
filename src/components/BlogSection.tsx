'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { supabase } from '@/lib/supabase'
import AnimatedSection from './AnimatedSection'

interface BlogPost {
  id: number
  title: string
  author: string
  category: string
  created_at: string
  featured_image?: string
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  const day = date.getDate().toString().padStart(2, '0')
  const month = date.toLocaleString('en-US', { month: 'short' })
  const year = date.getFullYear().toString().slice(-2)
  return `${day} ${month} ${year}`
}

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export default function BlogSection() {
  const [latestBlogs, setLatestBlogs] = useState<BlogPost[]>([])
  const [techEducation, setTechEducation] = useState<BlogPost | null>(null)
  const [techStories, setTechStories] = useState<BlogPost | null>(null)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme') {
        setTheme(e.newValue || 'dark');
      }
    };
    window.addEventListener('storage', handleStorageChange);
    const currentTheme = localStorage.getItem('theme') || 'dark';
    setTheme(currentTheme);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    // Fetch 3 latest blogs
    const { data: latest, error: latestError } = await supabase
      .from('blogs')
      .select('id, title, author, category, created_at')
      .order('created_at', { ascending: false })
      .limit(3)

    // Fetch latest Tech-education
    const { data: techEdu, error: techEduError } = await supabase
      .from('blogs')
      .select('id, title, author, category, created_at, featured_image')
      .eq('category', 'Tech-education')
      .order('created_at', { ascending: false })
      .limit(1)

    // Fetch latest Tech-stories
    const { data: techStories, error: techStoriesError } = await supabase
      .from('blogs')
      .select('id, title, author, category, created_at, featured_image')
      .eq('category', 'Tech-stories')
      .order('created_at', { ascending: false })
      .limit(1)

    if (!latestError) setLatestBlogs(latest || [])
    if (!techEduError) setTechEducation(techEdu && techEdu[0] ? techEdu[0] : null)
    if (!techStoriesError) setTechStories(techStories && techStories[0] ? techStories[0] : null)
  }

  return (
    <section className={`w-full flex flex-col items-center py-10 pb-12 md:pb-30 md:py-30 ${theme === 'dark' ? 'bg-[#040508]' : 'bg-white'} transition-colors duration-300`}>
      <AnimatedSection 
        className="relative mx-auto w-[90%] max-w-[1180px]" 
        style={{
          backgroundImage: theme === 'dark' ? 'url("/images/shiny bg blogs.png")' : 'none',
        backgroundSize: 'cover',
        backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: theme === 'light' ? '#fff' : 'transparent',
    }}>
        <h2 className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-3xl md:text-5xl font-bold mx-auto text-center mb-10 md:mb-20 transition-colors duration-300`}>
          Thoughtful Designs With Real World Solutions
        </h2>
        <div className="flex flex-col lg:flex-row gap-15">
          {/* Left: Most Features */}
          <div className={`${theme === 'dark' ? 'bg-[#121316CC] border-[#FFFFFF33]' : 'bg-black/5 border-black/10'} backdrop-blur-[1.5px] shadow-md border border-[0.5px] border-opacity-10 rounded-2xl p-8 flex-1 flex w-[100%] md:min-w-[500px] md:max-w-[420px] flex-col justify-center align-center mx-auto transition-colors duration-300`}>
            <div className="flex justify-between items-center mb-4">
              <span className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'} text-sm font-semibold tracking-widest transition-colors duration-300`}>Most Features</span>
              <Link href="/blog" className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'} text-xs font-bold tracking-widest hover:text-[#A212A8] transition-colors duration-300`}>SEE ALL BLOGS</Link>
            </div>
            {latestBlogs[0] && (
              <Link href={`/blog/${slugify(latestBlogs[0].title)}`} className="block mb-6">
                <div className={`border-l-2 ${theme === 'dark' ? 'border-white' : 'border-black'} pl-7 mt-5 transition-colors duration-300`}>
                  <h3 className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-[27px] md:text-[40px] font-semibold italic leading-tight mb-2 transition-colors duration-300`}>
                    {latestBlogs[0].title.length > 35 ? `${latestBlogs[0].title.slice(0, 35)}...` : latestBlogs[0].title}
                  </h3>
                  <div className={`flex gap-4 ${theme === 'dark' ? 'text-white/70' : 'text-black/70'} text-xs font-semibold transition-colors duration-300`}>
                    <span>{latestBlogs[0].author?.toUpperCase()}</span>
                    <span>{formatDate(latestBlogs[0].created_at)}</span>
                  </div>
                </div>
              </Link>
            )}

            <div className="flex flex-col gap-4 w-[90%] md:w-[400px]">
              <div className={`border-t ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} my-0 ml-6 transition-colors duration-300`} />
              {latestBlogs.slice(1).map((blog, idx) => (
                <Link key={blog.id} href={`/blog/${slugify(blog.title)}`} className="flex flex-col gap-1 group">
                  <div className="flex items-center gap-6">
                    <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-sm transition-colors duration-300`}>●</span>
                    <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} font-semibold group-hover:text-[#A212A8] transition-colors duration-300`}>{blog.title}</span>
                  </div>
                  <div className={`flex gap-4 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'} text-xs italic pl-8 transition-colors duration-300`}>
                    <span>{blog.author}</span>
                    <span>{formatDate(blog.created_at)}</span>
                  </div>
                  {idx < latestBlogs.slice(1).length - 1 && <div className={`border-b ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} mt-4 mb-0 ml-6 transition-colors duration-300`} />}
                </Link>
              ))}
            </div>
          </div>
          {/* Right: Tech-education and Tech-stories */}
          <div className="flex-1 flex flex-col gap-10 mt-10 hidden md:flex">
            {techEducation && (
              <Link href={`/blog/${slugify(techEducation.title)}`} className={`flex flex-row items-stretch p-0 min-h-[120px] overflow-hidden group border-t ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} transition-colors duration-300`}>
                {/* Rotated Category */}
                <div className="flex items-center font-normal justify-end bg-transparent -ml-7" style={{
                  marginLeft: "-40px",
                }}>
                  <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} block text-xs font tracking-widest rotate-[-90deg] whitespace-nowrap border-b-1 border-[#A212A8] pb-1`} style={{}}>
                    TECH-EDUCATION
                  </span>
                </div>
                {/* Main Content */}
                <div className="flex-1 flex flex-col justify-center p-6 pl-0 -ml-3">
                  <h3 className={`${theme === 'dark' ? 'text-white md:text-[#333333] group-hover:text-white' : 'text-black md:text-black group-hover:text-black'} text-[16px] md:text-[27px] font-bold mb-2 transition-colors duration-300`}>
                    {techEducation.title.length > 60 ? `${techEducation.title.slice(0, 50)}...` : techEducation.title}
                  </h3>
                  <div className="flex gap-4 text-[#A212A8] text-xs font-normal pt-1">
                    <span>{techEducation.author?.toUpperCase()}</span>
                    <span className={`flex gap-4 ${theme === 'dark' ? 'text-white md:text-[#333333] group-hover:text-white' : 'text-black md:text-black group-hover:text-black'} text-xs transition-colors duration-300`}>
                      {new Date(techEducation.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })} GMT +1
                    </span>
                  </div>
                </div>
                {/* Image */}
                {techEducation.featured_image ? (
                  <div className="w-24 h-24 rounded-lg overflow-hidden ml-6 mt-8">
                    <Image src={techEducation.featured_image} alt={techEducation.title} width={96} height={96} className="object-cover w-full h-full" />
                  </div>
                ) : (
                  <div className={`w-24 h-24 rounded-lg ${theme === 'dark' ? 'bg-[#222]' : 'bg-gray-100'} flex-shrink-0 m-4 transition-colors duration-300`} />
                )}
              </Link>
            )}
            {techStories && (
              <Link href={`/blog/${slugify(techStories.title)}`} className={`flex flex-row items-stretch p-0 min-h-[120px] overflow-hidden group border-t ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} transition-colors duration-300`}>
                {/* Rotated Category */}
                <div className="flex items-center font-normal justify-end bg-transparent -ml-7">
                  <span className={`${theme === 'dark' ? 'text-white' : 'text-black'} block text-xs font tracking-widest rotate-[-90deg] whitespace-nowrap border-b-1 border-[#A212A8] pb-1`} style={{}}>
                    TECH-STORIES
                  </span>
                </div>
                {/* Main Content */}
                <div className="flex-1 flex flex-col justify-center p-6 pl-0 -ml-3">
                  <h3 className={`${theme === 'dark' ? 'text-white md:text-[#333333] group-hover:text-white' : 'text-black md:text-black group-hover:text-black'} text-[16px] md:text-[27px] font-bold mb-2 transition-colors duration-300`}>
                    {techStories.title.length > 60 ? `${techStories.title.slice(0, 50)}...` : techStories.title}
                  </h3>
                  <div className="flex gap-4 text-[#A212A8] text-xs font-normal pt-1">
                    <span>{techStories.author?.toUpperCase()}</span>
                    <span className={`flex gap-4 ${theme === 'dark' ? 'text-white md:text-[#333333] group-hover:text-white' : 'text-black md:text-black group-hover:text-black'} text-xs transition-colors duration-300`}>
                      {new Date(techStories.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })} GMT +1
                    </span>
                  </div>
                </div>
                {/* Image */}
                {techStories.featured_image ? (
                  <div className="w-24 h-24 rounded-lg overflow-hidden ml-6 mt-8">
                    <Image src={techStories.featured_image} alt={techStories.title} width={96} height={96} className="object-cover w-full h-full" />
                  </div>
                ) : (
                  <div className={`w-24 h-24 rounded-lg ${theme === 'dark' ? 'bg-[#222]' : 'bg-gray-100'} flex-shrink-0 m-4 transition-colors duration-300`} />
                )}
              </Link>
            )}
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
} 