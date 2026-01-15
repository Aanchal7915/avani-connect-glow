import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calendar,
  User,
  Clock,
  ArrowRight,
  Search,
  Tag,
  Eye,
  Share2,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'digital-marketing', name: 'Digital Marketing' },
    { id: 'seo', name: 'SEO' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'ai-technology', name: 'AI & Technology' },
    { id: 'business-strategy', name: 'Business Strategy' }
  ];

  const [blogPosts, setBlogPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [postsError, setPostsError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoadingPosts(true);
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/blogs`);
        const json = await res.json();
        if (json?.success) setBlogPosts(json.data || []);
        else setPostsError(json?.message || "Failed to load posts");
      } catch (err) {
        setPostsError(err.message || "Failed to load posts");
      }
      setLoadingPosts(false);
    };
    fetchPosts();
  }, []);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.excerpt || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.tags || []).some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.isPublished && (post.featuredImage || post.isFeatured));
  const regularPosts = filteredPosts.filter(post => post.isPublished && !(post.featuredImage || post.isFeatured));

  return (
    <div className="pt-20">
      {/* Hero Section - Matching Theme */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/30 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="text-center">
              <motion.h1
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Insights on{" "}
                <span className="text-amber-500">Digital Growth</span>
              </motion.h1>
              <motion.p
                className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                Stay ahead with expert insights on digital marketing, technology, and business strategy.
                Real-world knowledge to fuel your growth.
              </motion.p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" delay={0.3}>
            <div className="bg-white rounded-[2rem] shadow-2xl p-8 border border-slate-100">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                <div className="relative flex-1 max-w-md w-full">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-b-2 border-slate-200 focus:border-amber-500 text-slate-900 font-bold transition-all outline-none rounded-lg"
                  />
                </div>
                <div className="flex flex-wrap gap-3 justify-center">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-5 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-wider transition-all duration-200 ${activeCategory === category.id
                        ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 shadow-lg shadow-yellow-200/50'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="fadeInUp" delay={0.1}>
              <div className="flex items-center gap-3 mb-12">
                <Sparkles className="w-8 h-8 text-amber-500" />
                <h2 className="text-4xl font-black text-slate-900 tracking-tight">Featured Articles</h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <AnimatedSection key={post.id} animation="fadeInUp" delay={index * 0.1}>
                  <article className="group bg-white rounded-[2rem] shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-slate-100">
                    <div className="relative overflow-hidden">
                      <Link to={`/blog/${post.slug}`}>
                        <img
                          src={post.featuredImage || post.image}
                          alt={post.title}
                          className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </Link>
                      <div className="absolute top-6 left-6">
                        <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider shadow-lg">
                          Featured
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center text-xs text-slate-500 mb-4 font-bold uppercase tracking-wider">
                        {new Date(post.publishedAt || post.createdAt).toLocaleDateString()}
                        {post.readTime && <span className="ml-4">{post.readTime}</span>}
                      </div>
                      <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-amber-500 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-end pt-6 border-t border-slate-100">
                        <Link to={`/blog/${post.slug}`} className="text-slate-900 hover:text-amber-500 font-black text-xs uppercase tracking-wider flex items-center transition-colors">
                          Read More <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      {regularPosts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="fadeInUp" delay={0.1}>
              <div className="flex items-center gap-3 mb-12">
                <TrendingUp className="w-8 h-8 text-amber-500" />
                <h2 className="text-4xl font-black text-slate-900 tracking-tight">Latest Articles</h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <AnimatedSection key={post.id} animation="fadeInUp" delay={index * 0.05}>
                  <article className="group bg-slate-50 rounded-[1.5rem] shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-amber-500">
                    <div className="relative overflow-hidden">
                      <Link to={`/blog/${post.slug}`}>
                        <img
                          src={post.featuredImage || post.image}
                          alt={post.title}
                          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </Link>
                      <div className="absolute top-4 left-4">
                        <span className="bg-slate-900 text-amber-500 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider shadow-lg">
                          {categories.find(cat => cat.id === post.category)?.name}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-[10px] text-slate-500 mb-4 font-bold uppercase tracking-wider">
                        {new Date(post.publishedAt || post.createdAt).toLocaleDateString()}
                        {post.readTime && <span className="ml-3">{post.readTime}</span>}
                      </div>
                      <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-amber-500 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 mb-4 leading-relaxed text-sm font-medium line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {(post.tags || []).slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="bg-white text-slate-600 px-2 py-1 rounded-lg text-[10px] font-bold border border-slate-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Link to={`/blog/${post.slug}`} className="text-slate-900 hover:text-amber-500 font-black text-[10px] uppercase tracking-wider flex items-center transition-colors">
                          Read <ArrowRight className="ml-1 w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}



      {/* Popular Topics */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" delay={0.1}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-slate-200 mb-6 shadow-sm">
                <span className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full" />
                <span className="text-slate-400 font-black text-[10px] uppercase tracking-[0.3em]">Explore Topics</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                Popular Topics
              </h2>
              <p className="text-xl text-slate-600 font-medium">
                Dive into our most-read content and trending discussions.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
            <AnimatedSection animation="fadeInUp" delay={0.1}>
              <div className="group bg-white p-4 md:p-8 rounded-[1.2rem] md:rounded-[1.5rem] shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-amber-500 h-full flex flex-col">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-slate-900 rounded-lg md:rounded-xl flex items-center justify-center text-amber-500 mx-auto mb-3 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Search className="w-5 h-5 md:w-8 md:h-8" />
                </div>
                <h3 className="text-sm md:text-xl font-black text-slate-900 mb-1 md:mb-3 text-center tracking-tight uppercase">SEO</h3>
                <p className="text-slate-600 text-[10px] md:text-sm text-center font-medium leading-relaxed">
                  15+ articles on search engine optimization and ranking strategies.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={0.15}>
              <div className="group bg-white p-4 md:p-8 rounded-[1.2rem] md:rounded-[1.5rem] shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-amber-500 h-full flex flex-col">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-slate-900 rounded-lg md:rounded-xl flex items-center justify-center text-amber-500 mx-auto mb-3 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Share2 className="w-5 h-5 md:w-8 md:h-8" />
                </div>
                <h3 className="text-sm md:text-xl font-black text-slate-900 mb-1 md:mb-3 text-center tracking-tight uppercase">Social Media</h3>
                <p className="text-slate-600 text-[10px] md:text-sm text-center font-medium leading-relaxed">
                  12+ articles on social media marketing and engagement strategies.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <div className="group bg-white p-4 md:p-8 rounded-[1.2rem] md:rounded-[1.5rem] shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-amber-500 h-full flex flex-col">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-slate-900 rounded-lg md:rounded-xl flex items-center justify-center text-amber-500 mx-auto mb-3 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Tag className="w-5 h-5 md:w-8 md:h-8" />
                </div>
                <h3 className="text-sm md:text-xl font-black text-slate-900 mb-1 md:mb-3 text-center tracking-tight uppercase">Content</h3>
                <p className="text-slate-600 text-[10px] md:text-sm text-center font-medium leading-relaxed">
                  10+ articles on content strategy and creation best practices.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={0.25}>
              <div className="group bg-white p-4 md:p-8 rounded-[1.2rem] md:rounded-[1.5rem] shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-amber-500 h-full flex flex-col">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-slate-900 rounded-lg md:rounded-xl flex items-center justify-center text-amber-500 mx-auto mb-3 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-5 h-5 md:w-8 md:h-8" />
                </div>
                <h3 className="text-sm md:text-xl font-black text-slate-900 mb-1 md:mb-3 text-center tracking-tight uppercase text-wrap">Digital</h3>
                <p className="text-slate-600 text-[10px] md:text-sm text-center font-medium leading-relaxed">
                  8+ articles on digital transformation and business strategy.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;











