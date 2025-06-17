'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
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

export default function AdminDashboard() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [featuredImage, setFeaturedImage] = useState<File | null>(null)
  const [author, setAuthor] = useState('')
  const [category, setCategory] = useState('')
  const [categorySelect, setCategorySelect] = useState('')
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [editBlog, setEditBlog] = useState<BlogPost | null>(null)
  const [editLoading, setEditLoading] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState<number | null>(null)
  const [editFeaturedImage, setEditFeaturedImage] = useState<File | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Check if admin is authenticated via Supabase Auth
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/unveilbrand-admin')
      } else {
        // Fetch existing blogs
        fetchBlogs()
      }
    }
    checkAuth()
    // eslint-disable-next-line
  }, [])

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setBlogs(data || [])
    } catch (error) {
      console.error('Error fetching blogs:', error)
      setError('Failed to fetch blogs')
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFeaturedImage(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      let imageUrl = ''
      
      if (featuredImage) {
        // Upload image to Supabase Storage
        const fileExt = featuredImage.name.split('.').pop()
        const fileName = `${Math.random()}.${fileExt}`
        
        const { error: uploadError } = await supabase.storage
          .from('blog-images')
          .upload(fileName, featuredImage)

        if (uploadError) {
          throw new Error(`Failed to upload image: ${uploadError.message}`)
        }
        
        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('blog-images')
          .getPublicUrl(fileName)
        
        imageUrl = publicUrl
      }

      // Insert blog post
      const { error: insertError } = await supabase
        .from('blogs')
        .insert([
          {
            title,
            content,
            featured_image: imageUrl,
            author,
            category,
          }
        ])
        .select()

      if (insertError) {
        throw new Error(`Failed to create blog: ${insertError.message}`)
      }

      // Reset form
      setTitle('')
      setContent('')
      setFeaturedImage(null)
      setAuthor('')
      setCategory('')
      
      // Refresh blogs list
      await fetchBlogs()

    } catch (error) {
      console.error('Error creating blog:', error)
      setError((error as Error).message || 'Failed to create blog post')
    } finally {
      setLoading(false)
    }
  }

  // Logout handler
  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/unveilbrand-admin')
  }

  // Delete handler
  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return
    setDeleteLoading(id)
    setError('')
    try {
      const { error } = await supabase.from('blogs').delete().eq('id', id)
      if (error) throw error
      await fetchBlogs()
    } catch (error) {
      setError((error as Error).message || 'Failed to delete blog')
    } finally {
      setDeleteLoading(null)
    }
  }

  // Edit handler (open modal)
  const openEditModal = (blog: BlogPost) => {
    setEditBlog(blog)
  }

  // Edit submit handler
  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editBlog) return
    setEditLoading(true)
    setError('')
    try {
      let imageUrl = editBlog.featured_image

      if (editFeaturedImage) {
        // Upload new image to Supabase Storage
        const fileExt = editFeaturedImage.name.split('.').pop()
        const fileName = `${Math.random()}.${fileExt}`
        
        const { error: uploadError } = await supabase.storage
          .from('blog-images')
          .upload(fileName, editFeaturedImage)

        if (uploadError) {
          throw new Error(`Failed to upload image: ${uploadError.message}`)
        }
        
        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('blog-images')
          .getPublicUrl(fileName)
        
        imageUrl = publicUrl
      }

      const { error } = await supabase
        .from('blogs')
        .update({
          title: editBlog.title,
          content: editBlog.content,
          author: editBlog.author,
          category: editBlog.category,
          featured_image: imageUrl,
        })
        .eq('id', editBlog.id)
      if (error) throw error
      setEditBlog(null)
      setEditFeaturedImage(null)
      await fetchBlogs()
    } catch (error) {
      setError((error as Error).message || 'Failed to update blog')
    } finally {
      setEditLoading(false)
    }
  }

  const handleEditImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setEditFeaturedImage(e.target.files[0])
    }
  }

  const closeEditModal = () => {
    setEditBlog(null)
    setEditFeaturedImage(null)
  }

  const handleModalClick = (e: React.MouseEvent) => {
    // Only close if clicking the backdrop (the outer div)
    if (e.target === e.currentTarget) {
      closeEditModal()
    }
  }

  return (
    <div className="min-h-screen bg-[#040508] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-white text-3xl font-bold">Blog Management</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
        <form onSubmit={handleSubmit} className="bg-[#FFFFFF0D] p-6 rounded-lg mb-8">
          <div className="space-y-4">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded">
                {error}
              </div>
            )}
            <div>
              <label className="block text-white mb-2">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 rounded bg-[#FFFFFF1A] text-white border border-[#FFFFFF33]"
                required
              />
            </div>
            <div>
              <label className="block text-white mb-2">Content</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full px-4 py-2 rounded bg-[#FFFFFF1A] text-white border border-[#FFFFFF33] h-40"
                required
              />
            </div>
            <div>
              <label className="block text-white mb-2">Featured Image</label>
              <input
                type="file"
                onChange={handleImageChange}
                className="w-full text-white"
                accept="image/*"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Author</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-4 py-2 rounded bg-[#FFFFFF1A] text-white border border-[#FFFFFF33]"
                required
              />
            </div>
            <div>
              <label className="block text-white mb-2">Category</label>
              <div className="flex gap-2">
                <select
                  value={categorySelect}
                  onChange={e => {
                    setCategorySelect(e.target.value)
                    setCategory(e.target.value)
                  }}
                  className="px-4 py-2 rounded bg-[#FFFFFF1A] text-white border border-[#FFFFFF33]"
                >
                  <option value="">Pick Category</option>
                  <option value="Tech-education">Tech-education</option>
                  <option value="Tech-stories">Tech-stories</option>
                </select>
                <input
                  type="text"
                  placeholder="Or type category"
                  value={category}
                  onChange={e => {
                    setCategory(e.target.value)
                    setCategorySelect('')
                  }}
                  className="px-4 py-2 rounded bg-[#FFFFFF1A] text-white border border-[#FFFFFF33] flex-1"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#A212A8] text-white py-2 rounded hover:bg-[#A212A8]/90 transition"
              disabled={loading}
            >
              {loading ? 'Creating...' : 'Create Blog Post'}
            </button>
          </div>
        </form>
        <div className="bg-[#FFFFFF0D] p-6 rounded-lg">
          <h2 className="text-white text-2xl font-bold mb-4">Existing Blogs</h2>
          <div className="space-y-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-[#FFFFFF1A] p-4 rounded flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-white font-bold">{blog.title}</h3>
                  <p className="text-white/80">By {blog.author} • {new Date(blog.created_at).toLocaleDateString()}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => openEditModal(blog)}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                    disabled={deleteLoading === blog.id}
                  >
                    {deleteLoading === blog.id ? 'Deleting...' : 'Delete'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Edit Modal */}
        {editBlog && (
          <div 
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={handleModalClick}
          >
            <div className="bg-[#18181b] p-8 rounded-lg w-full max-w-lg relative">
              <button
                onClick={closeEditModal}
                className="absolute top-2 right-2 text-white text-xl"
              >
                &times;
              </button>
              <h2 className="text-white text-2xl font-bold mb-4">Edit Blog</h2>
              <form onSubmit={handleEditSubmit} className="space-y-4">
                <div>
                  <label className="block text-white mb-2">Title</label>
                  <input
                    type="text"
                    value={editBlog.title}
                    onChange={e => setEditBlog({ ...editBlog, title: e.target.value })}
                    className="w-full px-4 py-2 rounded bg-[#FFFFFF1A] text-white border border-[#FFFFFF33]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Content</label>
                  <textarea
                    value={editBlog.content}
                    onChange={e => setEditBlog({ ...editBlog, content: e.target.value })}
                    className="w-full px-4 py-2 rounded bg-[#FFFFFF1A] text-white border border-[#FFFFFF33] h-32"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Featured Image</label>
                  {editBlog.featured_image && !editFeaturedImage && (
                    <div className="mb-4">
                      <p className="text-white/80 mb-2">Current Image:</p>
                      <img 
                        src={editBlog.featured_image} 
                        alt="Current featured" 
                        className="w-32 h-32 object-cover rounded"
                      />
                    </div>
                  )}
                  <input
                    type="file"
                    onChange={handleEditImageChange}
                    className="w-full text-white"
                    accept="image/*"
                  />
                  <p className="text-white/60 text-sm mt-1">
                    {editFeaturedImage ? 'New image selected' : 'Select a new image to replace the current one'}
                  </p>
                </div>
                <div>
                  <label className="block text-white mb-2">Author</label>
                  <input
                    type="text"
                    value={editBlog.author}
                    onChange={e => setEditBlog({ ...editBlog, author: e.target.value })}
                    className="w-full px-4 py-2 rounded bg-[#FFFFFF1A] text-white border border-[#FFFFFF33]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Category</label>
                  <input
                    type="text"
                    value={editBlog.category}
                    onChange={e => setEditBlog({ ...editBlog, category: e.target.value })}
                    className="w-full px-4 py-2 rounded bg-[#FFFFFF1A] text-white border border-[#FFFFFF33]"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                  disabled={editLoading}
                >
                  {editLoading ? 'Saving...' : 'Save Changes'}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 