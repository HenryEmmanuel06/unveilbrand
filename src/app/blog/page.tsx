'use client'
import Image from 'next/image';

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import ProductsSection from '@/components/ProductsSection';

const toTitleCase = (phrase: string) => {
  return phrase
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

interface BlogPost {
  id: number
  title: string
  author: string
  category: string
  created_at: string
  featured_image: string | null
}

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export default function AllBlogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [offset, setOffset] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const [theme, setTheme] = useState('dark')
  const initialLimit = 6
  const loadMoreLimit = 3

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

  console.log(offset)
  useEffect(() => {
    fetchAllBlogs(initialLimit, 0)
  }, [])

  const fetchAllBlogs = async (limit: number, currentOffset: number) => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('id, title, author, category, created_at, featured_image')
        .order('created_at', { ascending: false })
        .range(currentOffset, currentOffset + limit - 1) // Supabase range is inclusive

      if (error) throw error
      
      if (data) {
        setBlogs((prevBlogs) => {
          const newBlogs = [...prevBlogs]
          data.forEach((newBlog) => {
            if (!newBlogs.some((blog) => blog.id === newBlog.id)) {
              newBlogs.push(newBlog)
            }
          })
          return newBlogs
        })
        setHasMore(data.length === limit)
      }
    } catch (error) {
      console.error('Error fetching blogs:', error)
    } finally {
      setLoading(false)
    }
  }

  const loadMoreBlogs = () => {
    setOffset((prevOffset) => {
      const newOffset = prevOffset + loadMoreLimit
      fetchAllBlogs(loadMoreLimit, newOffset)
      return newOffset
    })
  }

  if (loading) {
    return (
      <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#040508]' : 'bg-white'} flex items-center justify-center transition-colors duration-300`}>
        <div className={theme === 'dark' ? 'text-white' : 'text-black'}>Loading...</div>
      </div>
    )
  }

  return (
    <div className={`${theme === 'dark' ? 'bg-[#040508]' : 'bg-white'} pt-20 transition-colors duration-300`}>
      <ThemeToggle />
      <div className="w-[90%] max-w-[1332px] mx-auto mt-30">
        <h1 className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-4xl md:text-5xl font-bold mb-6 text-center transition-colors duration-300`}>All Blog Posts</h1>
        <p className={`${theme === 'dark' ? 'text-white/80' : 'text-gray-600'} text-lg max-w-2xl mx-auto mb-12 text-center transition-colors duration-300`}>
        We have many years of experience working for big brands both directly and indirectly through big Agencies. We partner with you and your team to deliver technology solutions.
        </p>
        <div className="flex justify-center">
          <Image
            src="/images/about purple arrow.svg"
            alt="Scroll Down"
            width={48}
            height={48}
            className="w-10 h-10 md:w-12 md:h-12 animate-bounce cursor-pointer"
            onClick={() => window.scrollBy({ top: 400, left: 0, behavior: 'smooth' })}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-25">
          {blogs.map((blog) => (
            <Link
              href={`/blog/${slugify(blog.title)}`}
              key={blog.id}
              className={`${theme === 'dark' ? 'bg-[#FFFFFF1A] hover:bg-[#FFFFFF1A]' : 'bg-black/5 hover:bg-black/5 border border-black/10'} p-[20px] pb-[30px] rounded-[20px] transition-colors duration-300`}
            >
              {
                blog.featured_image ? (
                  <Image
                    src={blog.featured_image}
                    alt={blog.title}
                    width={250}
                    height={250}
                    className="w-full h-48 object-cover rounded-tl-[10px] rounded-tr-[10px] mb-4"
                  />
                ) : (
                  <div className={`w-full h-48 rounded-tl-[10px] rounded-tr-[10px] mb-4 flex items-center justify-center ${theme === 'dark' ? 'bg-white text-gray-500' : 'bg-white text-gray-500'}`}>
                    No Image
                  </div>
                )
              }
              <h2 className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-lg font-semibold mb-[20px] w-[100%] h-[100px] md:w-[297px] lg:w-full md:h-[44px] transition-colors duration-300`}>{blog.title}</h2>
              <div className={`${theme === 'dark' ? 'text-white/80' : 'text-gray-600'} space-y-2 transition-colors duration-300`}>
                <p className="flex gap-[20px]">
                  <span className='italic text-sm'>{toTitleCase(blog.author)}</span>
                  <span className='text-sm'>{new Date(blog.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: '2-digit' })}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
        {hasMore && (
          <div className="flex justify-center mt-16">
            <button
              onClick={loadMoreBlogs}
              className={`border rounded-full px-8 py-3 font-medium transition cursor-pointer ${theme === 'dark' ? 'border-white/30 text-white hover:bg-[#fff] hover:text-black' : 'border-black/30 text-black hover:bg-black hover:text-white'}`}
            >
              <span className="relative z-10">View More Blogs</span>
              <span className="absolute inset-0 bg-[#A403F2] opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
            </button>
          </div>
        )}
      </div>
      <ProductsSection />
    </div>
  )
} 
