import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, Eye, ArrowLeft, Share2, Tag } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white pt-20">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 font-bold">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-black text-slate-900 mb-4">Article Not Found</h2>
          <Link to="/blog" className="text-amber-500 hover:text-amber-600 font-bold">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/30 rounded-full blur-[100px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" delay={0.1}>
            <Link
              to="/blog"
              className="inline-flex items-center text-slate-600 hover:text-amber-500 font-bold mb-8 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Articles
            </Link>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={0.2}>
            {/* Category Badge */}
            {post.category && (
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-xl text-xs font-black uppercase tracking-wider mb-6 shadow-lg">
                {post.category}
              </span>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white">
                  <User className="w-5 h-5" />
                </div>
                <span className="font-bold">{post.author || 'Avani Enterprises'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-amber-500" />
                <span className="font-medium">{new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-500" />
                <span className="font-medium">{post.readTime || '5 min read'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-amber-500" />
                <span className="font-medium">{post.views || 0} views</span>
              </div>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Image */}
      {post.featuredImage && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-16">
          <AnimatedSection animation="fadeInUp" delay={0.3}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            </div>
          </AnimatedSection>
        </section>
      )}

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <AnimatedSection animation="fadeInUp" delay={0.4}>
          <div 
            className="blog-content text-slate-900"
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.75rem',
              color: '#0f172a'
            }}
          >
            <style>{`
              .blog-content h1,
              .blog-content h2,
              .blog-content h3,
              .blog-content h4,
              .blog-content h5,
              .blog-content h6 {
                color: #0f172a !important;
                font-weight: 800 !important;
                margin-top: 2rem !important;
                margin-bottom: 1rem !important;
                line-height: 1.2 !important;
              }
              .blog-content h1 { font-size: 2.25rem !important; }
              .blog-content h2 { font-size: 1.875rem !important; }
              .blog-content h3 { font-size: 1.5rem !important; }
              .blog-content h4 { font-size: 1.25rem !important; }
              
              .blog-content p {
                color: #334155 !important;
                font-size: 1.125rem !important;
                line-height: 1.75rem !important;
                margin-bottom: 1.5rem !important;
              }
              
              .blog-content a {
                color: #f59e0b !important;
                text-decoration: none !important;
                font-weight: 600 !important;
              }
              .blog-content a:hover {
                color: #d97706 !important;
              }
              
              .blog-content strong,
              .blog-content b {
                color: #0f172a !important;
                font-weight: 700 !important;
              }
              
              .blog-content em,
              .blog-content i {
                color: #475569 !important;
                font-style: italic !important;
              }
              
              .blog-content ul,
              .blog-content ol {
                color: #334155 !important;
                margin: 1.5rem 0 !important;
                padding-left: 1.5rem !important;
              }
              
              .blog-content li {
                color: #334155 !important;
                font-size: 1.125rem !important;
                line-height: 1.75rem !important;
                margin-bottom: 0.5rem !important;
              }
              
              .blog-content blockquote {
                border-left: 4px solid #f59e0b !important;
                padding-left: 1.5rem !important;
                padding-top: 1rem !important;
                padding-bottom: 1rem !important;
                margin: 1.5rem 0 !important;
                background-color: #f8fafc !important;
                color: #475569 !important;
                font-style: italic !important;
              }
              
              .blog-content code {
                background-color: #f1f5f9 !important;
                color: #f59e0b !important;
                padding: 0.25rem 0.5rem !important;
                border-radius: 0.25rem !important;
                font-size: 0.875rem !important;
                font-family: monospace !important;
              }
              
              .blog-content pre {
                background-color: #0f172a !important;
                color: #ffffff !important;
                padding: 1.5rem !important;
                border-radius: 0.75rem !important;
                overflow-x: auto !important;
                margin: 1.5rem 0 !important;
              }
              
              .blog-content pre code {
                background-color: transparent !important;
                color: #ffffff !important;
                padding: 0 !important;
              }
              
              .blog-content img {
                border-radius: 1rem !important;
                box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1) !important;
                margin: 2rem 0 !important;
                width: 100% !important;
              }
              
              .blog-content table {
                width: 100% !important;
                border-collapse: collapse !important;
                margin: 1.5rem 0 !important;
              }
              
              .blog-content th {
                background-color: #f1f5f9 !important;
                color: #0f172a !important;
                font-weight: 700 !important;
                padding: 0.75rem !important;
                border: 1px solid #e2e8f0 !important;
                text-align: left !important;
              }
              
              .blog-content td {
                color: #334155 !important;
                padding: 0.75rem !important;
                border: 1px solid #e2e8f0 !important;
              }
              
              .blog-content hr {
                border: none !important;
                border-top: 2px solid #e2e8f0 !important;
                margin: 2rem 0 !important;
              }
            `}</style>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </AnimatedSection>

        {/* Share Section */}
        <AnimatedSection animation="fadeInUp" delay={0.5}>
          <div className="mt-16 pt-8 border-t-2 border-slate-100">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Share this article</h3>
                <p className="text-slate-600 text-sm">Help others discover this content</p>
              </div>
              <div className="flex gap-3">
                <button className="w-12 h-12 rounded-xl bg-slate-100 hover:bg-amber-500 text-slate-700 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Back to Blog CTA */}
        <AnimatedSection animation="fadeInUp" delay={0.6}>
          <div className="mt-16 p-8 bg-gradient-to-br from-slate-50 to-white rounded-3xl border-2 border-slate-100">
            <div className="text-center">
              <h3 className="text-2xl font-black text-slate-900 mb-4">Explore More Articles</h3>
              <p className="text-slate-600 mb-6">Discover more insights and expert knowledge</p>
              <Link
                to="/blog"
                className="inline-block px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white rounded-xl font-black text-sm uppercase tracking-widest shadow-lg transition-all duration-300"
              >
                View All Articles
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </article>
    </div>
  );
};

export default BlogDetail;
