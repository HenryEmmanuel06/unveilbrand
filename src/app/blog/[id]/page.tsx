'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { supabase } from '@/lib/supabase'

interface BlogPost {
  id: number
  title: string
  content: string
  featured_image: string
  author: string
  category: string
  created_at: string
}

export default function BlogDetail() {
  const params = useParams()
  const [blog, setBlog] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select('*')
          .eq('id', params.id)
          .single()

        if (error) throw error
        setBlog(data)
      } catch (error) {
        console.error('Error fetching blog:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchBlog()
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#040508] flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#040508] flex items-center justify-center">
        <div className="text-white">Blog not found</div>
      </div>
    )
  }

  return (
    <article className="min-h-screen bg-[#040508] py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">{blog.title}</h1>
        
        <div className="flex items-center gap-4 text-white/80 mb-8">
          <span>By {blog.author}</span>
          <span>•</span>
          <span>{new Date(blog.created_at).toLocaleDateString()}</span>
          <span>•</span>
          <span className="bg-[#A212A8] px-3 py-1 rounded-full text-sm">
            {blog.category}
          </span>
        </div>

        {blog.featured_image && (
          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src={blog.featured_image}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="prose prose-invert max-w-none">
          {blog.content.split('\n').map((paragraph, index) => (
            <p key={index} className="text-white/90 mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  )
} 