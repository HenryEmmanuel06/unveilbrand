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

// Utility to slugify a string
function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export default function BlogDetail() {
  const params = useParams()
  const [blog, setBlog] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [recommendedBlogs, setRecommendedBlogs] = useState<BlogPost[]>([])
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

  // Fetch blog by slug (title)
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const slug = typeof params.slug === 'string' ? params.slug : Array.isArray(params.slug) ? params.slug[0] : '';
        // Fetch all blogs, then find the one whose slugified title matches the slug
        const { data, error } = await supabase
          .from('blogs')
          .select('*');
        if (error) throw error;
        const found = (data || []).find((b: BlogPost) => slugify(b.title) === slug);
        setBlog(found || null);
      } catch (error) {
        console.error('Error fetching blog:', error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [params.slug]);

  useEffect(() => {
    const fetchRecommendedBlogs = async () => {
      if (blog) {
        try {
          const { data, error } = await supabase
            .from('blogs')
            .select('*')
            .neq('id', blog.id)
            .limit(10);
          if (error) throw error;
          const shuffledBlogs = data.sort(() => 0.5 - Math.random());
          setRecommendedBlogs(shuffledBlogs.slice(0, 3));
        } catch (error) {
          console.error('Error fetching recommended blogs:', error);
        }
      }
    };
    fetchRecommendedBlogs();
  }, [blog]);

  if (loading) {
    return (
      <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#040508]' : 'bg-white'} flex items-center justify-center transition-colors duration-300`}>
        <div className={theme === 'dark' ? 'text-white' : 'text-black'}>Loading...</div>
      </div>
    )
  }

  if (!blog) {
    return (
      <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#040508]' : 'bg-white'} flex items-center justify-center transition-colors duration-300`}>
        <div className={theme === 'dark' ? 'text-white' : 'text-black'}>Blog not found</div>
      </div>
    )
  }

  return (
    <section className={`${theme === 'dark' ? 'bg-[#040508]' : 'bg-white'} mx-auto py-20 transition-colors duration-300`}>
      <ThemeToggle />
      <div className={`w-[90%] max-w-[1270px] mx-auto mt-30 px-4 ${theme === 'dark' ? 'bg-[#040508]' : 'bg-white'} transition-colors duration-300`}>
        <h1 className={`w-[100%] mx-auto lg:w-[900px] text-center mx-auto text-4xl md:text-5xl font-bold mb-10 ${theme === 'dark' ? 'text-white' : 'text-black'} transition-colors duration-300`}>{blog.title}</h1>

        {blog.featured_image && (
          <div className="relative w-[100%] lg:w-[945px] h-[300px] md:h-[600px] mb-8 rounded-lg overflow-hidden mx-auto" style={{
            backgroundImage: `url(${blog.featured_image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
          
          
            {/* <Image
              src={blog.featured_image}
              alt={blog.title}
              fill
              className="object-cover"
            /> */}
          </div>
        )}

        <div className="prose max-w-none mt-15">
          {/* WARNING: This renders raw HTML from the database. Make sure only trusted users can write blog content! */}
          <div
            className={`${theme === 'dark' ? 'text-white' : 'text-black'} w-[100%] lg:w-[945px] mb-4 mx-auto transition-colors duration-300`}
            style={{ fontSize: '16px' }}
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </div>
      <div className={`w-[90%] lg:w-full max-w-[1332px] mx-auto mt-30 border-t-[0.5px] ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} transition-colors duration-300`}></div>
      <div className="w-[90%] max-w-[1270px] mx-auto pt-10">
        <div className="flex justify-between items-center mb-10">
          <h2 className={`text-[16px] md:text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'} transition-colors duration-300`}>Recommendations</h2>
          <Link
            href="/blog"
          >
            <button
              className={`border rounded-full px-8 py-3 font-medium transition cursor-pointer ${theme === 'dark' ? 'border-white/30 text-white hover:bg-[#fff] hover:text-black' : 'border-black/30 text-black hover:bg-black hover:text-white'}`}
            >
              <span className="relative z-10">View More Blogs</span>
              <span className="absolute inset-0 bg-[#A403F2] opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
            </button>
          </Link>
         </div>
        </div>
           <div className={`w-[90%] lg:w-full max-w-[1332px] mx-auto mb-10 border-t-[0.5px] ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} transition-colors duration-300`}></div>
          <div className="w-[90%] max-w-[1270px] mx-auto py-20 pt-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {recommendedBlogs.map((recBlog) => (
            <Link
              href={`/blog/${slugify(recBlog.title)}`}
              key={recBlog.id}
              className={`${theme === 'dark' ? 'bg-[#FFFFFF1A] hover:bg-[#FFFFFF1A]' : 'bg-white/80 hover:bg-white border border-black/10'} p-[20px] pb-[30px] rounded-[20px] transition-colors duration-300`}
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
                  <div className={`w-full h-48 rounded-tl-[10px] rounded-tr-[10px] mb-4 flex items-center justify-center ${theme === 'dark' ? 'bg-white text-gray-500' : 'bg-gray-100 text-gray-500'}`}>
                    No Image
                  </div>
                )
              }
              <div className="py-6">
                <h3 className={`text-lg font-semibold mb-[20px] w-[100%] h-[50px] md:h-[44px] ${theme === 'dark' ? 'text-white' : 'text-black'} transition-colors duration-300`}>{recBlog.title}</h3>
                <div className={`${theme === 'dark' ? 'text-white/80' : 'text-gray-600'} space-y-2 transition-colors duration-300`}>
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