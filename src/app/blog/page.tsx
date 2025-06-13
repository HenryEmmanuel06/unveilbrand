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

export default function AllBlogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [offset, setOffset] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const initialLimit = 6
  const loadMoreLimit = 3

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
      <div className="min-h-screen bg-[#040508] flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className="bg-[#040508] py-20">
      <div className="w-[90%] max-w-[1332px] mx-auto mt-30">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 text-center">All Blog Posts</h1>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-12 text-center">
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
              href={`/blog/${blog.id}`}
              key={blog.id}
              className="bg-[#FFFFFF1A] p-[20px] pb-[30px] rounded-[20px] hover:bg-[#FFFFFF1A] transition"
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
                  <div className="w-full h-48 bg-white rounded-tl-[10px] rounded-tr-[10px] mb-4 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )
              }
              <h2 className="text-white text-lg font-semibold mb-[20px] w-[100%] h-[100px] md:w-[297px] md:h-[44px]">{blog.title}</h2>
              <div className="text-white/80 space-y-2">
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
              className="border border-white/30 rounded-full px-8 py-3 text-white font-medium hover:bg-[#fff] hover:text-black transition cursor-pointer"
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
