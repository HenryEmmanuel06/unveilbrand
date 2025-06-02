'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

interface BlogPost {
  id: number
  title: string
  author: string
  category: string
  created_at: string
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
        .select('id, title, author, category, created_at')
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
    <div className="min-h-screen bg-[#040508] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 text-center">All Blog Posts</h1>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-12 text-center">
          Explore our collection of insights, news, and updates from the world of branding and design
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link
              href={`/blog/${blog.id}`}
              key={blog.id}
              className="bg-[#FFFFFF0D] p-6 rounded-lg hover:bg-[#FFFFFF1A] transition"
            >
              <h2 className="text-white text-xl font-bold mb-3">{blog.title}</h2>
              <div className="text-white/80 space-y-2">
                <p>By {blog.author}</p>
                <p>{new Date(blog.created_at).toLocaleDateString()}</p>
                <span className="inline-block bg-[#A212A8] px-3 py-1 rounded-full text-sm">
                  {blog.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 