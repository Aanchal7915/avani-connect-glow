import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, Eye } from 'lucide-react';

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/blogs/${slug}`);
        const json = await res.json();
        if (json?.success) setPost(json.data);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    if (slug) fetchPost();
  }, [slug]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (!post) return <div className="p-8">Post not found</div>;

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
        <div className='h-[20px]'></div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <div className="text-sm text-gray-500 mt-2 flex gap-4 items-center">
          <div className="flex items-center gap-2"><Calendar size={16} />{new Date(post.publishedAt || post.createdAt).toLocaleDateString()}</div>
          <div className="flex items-center gap-2"><User size={16} />{post.author}</div>
          <div className="flex items-center gap-2"><Eye size={16} />{post.views} views</div>
        </div>
      </div>

      {post.featuredImage && <img src={post.featuredImage} alt={post.title} className="w-full h-64 object-cover rounded mb-6" />}

      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

      <div className="mt-8">
        <Link to="/blog" className="text-blue-600">&larr; Back to articles</Link>
      </div>
    </div>
  );
};

export default BlogDetail;
