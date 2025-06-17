'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'

interface BlogPost {
  id: number
  title: string
  content: string
  featured_image: string
  author: string
  category: string
  created_at: string
}

const toTitleCase = (phrase: string) => {
  return phrase
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export default function BlogDetail() {
  const params = useParams()
  const [blog, setBlog] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [recommendedBlogs, setRecommendedBlogs] = useState<BlogPost[]>([])

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

  useEffect(() => {
    const fetchRecommendedBlogs = async () => {
      if (blog) {
        try {
          const { data, error } = await supabase
            .from('blogs')
            .select('*')
            .neq('id', blog.id) // Exclude the current blog
            .limit(10) // Fetch more than 3 to ensure randomness

          if (error) throw error
          
          // Shuffle the array to get random blogs
          const shuffledBlogs = data.sort(() => 0.5 - Math.random());
          setRecommendedBlogs(shuffledBlogs.slice(0, 3)); // Take the first 3 random blogs
        } catch (error) {
          console.error('Error fetching recommended blogs:', error)
        }
      }
    }
    fetchRecommendedBlogs()
  }, [blog]) // Fetch recommendations once the main blog is loaded

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
        <h1 className="w-[100%] mx-auto lg:w-[900px] text-center mx-auto text-white text-4xl md:text-5xl font-bold mb-10">{blog.title}</h1>
        
       

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
            <p key={index} className="text-white mb-4 mx-auto">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="w-[90%] max-w-[1270px] mx-auto py-20">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-white text-3xl font-bold">Recommendations</h2>
          <Link
            href="/blog"
          >
             <button
              className="border border-white/30 rounded-full px-8 py-3 text-white font-medium hover:bg-[#fff] hover:text-black transition cursor-pointer"
            >
              <span className="relative z-10">View More Blogs</span>
              <span className="absolute inset-0 bg-[#A403F2] opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendedBlogs.map((recBlog) => (
            <Link
              href={`/blog/${recBlog.id}`}
              key={recBlog.id}
              className="bg-[#FFFFFF1A] p-[20px] pb-[30px] rounded-[20px] hover:bg-[#FFFFFF1A] transition"
            >
              {
                recBlog.featured_image ? (
                  <Image
                    src={recBlog.featured_image}
                    alt={recBlog.title}
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
              <div className="py-6">
                <h3 className="text-white text-lg font-semibold mb-[20px] w-[100%] h-[100px] md:h-[44px]">{recBlog.title}</h3>
                <div className="text-white/80 space-y-2">
                  <p className="flex gap-[20px]">
                    <span className="italic text-sm">{toTitleCase(recBlog.author)}</span>
                    <span className="text-sm">{new Date(recBlog.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: '2-digit' })}</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 