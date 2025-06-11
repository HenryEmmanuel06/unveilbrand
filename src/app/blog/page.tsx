'use client'
import Image from 'next/image';

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

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

  useEffect(() => {
    fetchAllBlogs()
  }, [])

  const fetchAllBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('id, title, author, category, created_at, featured_image')
        .order('created_at', { ascending: false })

      if (error) throw error
      setBlogs(data || [])
    } catch (error) {
      console.error('Error fetching blogs:', error)
    } finally {
      setLoading(false)
    }
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
              className="bg-[#FFFFFF1A] p-[20px] pb-[30px] rounded-lg hover:bg-[#FFFFFF1A] transition"
            >
              {
                blog.featured_image ? (
                  <Image
                    src={blog.featured_image}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                ) : (
                  <div className="w-full h-48 bg-white rounded-md mb-4 flex items-center justify-center text-gray-500">
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
      </div>
    </div>
  )
} 