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
    <section className="bg-[#040508] mx-auto py-20">
      <div className="w-[90%] max-w-[1270px] mx-auto mt-30 px-4 bg-[#040508]">
        <h1 className="w-[900px] text-center mx-auto text-white text-4xl md:text-5xl font-bold mb-10">{blog.title}</h1>
        
       

        {blog.featured_image && (
          <div className="relative w-full h-[600px] mb-8 rounded-lg overflow-hidden">
            <Image
              src={blog.featured_image}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="prose prose-invert max-w-none mt-15">
          {blog.content.split('\n').map((paragraph, index) => (
            <p key={index} className="text-white mb-4 w-[90%] max-w-[1270px] text-center mx-auto">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
} 