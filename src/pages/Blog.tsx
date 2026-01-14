import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

// Simple toast component
const Toast = ({ message, type, onClose }) => (
  <div
    className={`fixed top-8 right-8 z-50 px-6 py-4 rounded-lg shadow-lg text-white font-semibold transition-all duration-300 ${type === "success"
      ? "bg-green-600"
      : "bg-red-600"
      }`}
    role="alert"
  >
    {message}
    <button className="ml-4 text-white font-bold" onClick={onClose}>×</button>
  </div>
);

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [toast, setToast] = useState(null);
  const [isSending, setIsSending] = useState(false);

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

  const featuredPosts = blogPosts.filter(post => post.isPublished && (post.featuredImage || post.isFeatured));
  const regularPosts = filteredPosts.filter(post => post.isPublished && !(post.featuredImage || post.isFeatured));

  // Newsletter subscribe handler
  const handleNewsletterSubscribe = async () => {
    const toEmail = process.env.REACT_APP_NEWSLETTER_EMAIL;
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    if (!newsletterEmail) {
      setToast({ message: "Please enter your email.", type: "error" });
      setTimeout(() => setToast(null), 3000);
      return;
    }
    if (!toEmail || !serviceId || !templateId || !userId) {
      setToast({ message: "Email service is not configured.", type: "error" });
      setTimeout(() => setToast(null), 3000);
      return;
    }

    setIsSending(true);

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: userId,
          template_params: {
            to_email: toEmail,
            subscriber_email: newsletterEmail
          }
        })
      });
      if (res.ok) {
        setToast({ message: "Subscription email sent successfully!", type: "success" });
        setNewsletterEmail("");
        setTimeout(() => setToast(null), 3000);
      } else {
        setToast({ message: "Failed to send subscription email.", type: "error" });
        setTimeout(() => setToast(null), 3000);
      }
    } catch (err) {
      setToast({ message: "Failed to send subscription email.", type: "error" });
      setTimeout(() => setToast(null), 3000);
    }
    setIsSending(false);
  };

  return (
    <div className="pt-20">
      {/* Hero Section - Full Page */}
      <section className="relative min-h-[70vh] flex items-center py-20 overflow-hidden bg-[#0f172a]">
        {/* Background Geometric Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large Diagonal Navy/Blue Shape */}
          <div className="absolute -top-24 -right-20 w-[120%] h-full bg-[#1e293b] -rotate-12 transform origin-top-right shadow-2xl" />

          {/* Yellow Diagonal Strip */}
          <div className="absolute top-0 right-1/4 w-32 h-[150%] bg-gradient-to-r from-amber-400 to-orange-500 rotate-[35deg] transform origin-top opacity-40 shadow-2xl" />

          {/* Subtle Stardust Texture */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="max-w-4xl relative">
              <div className="w-20 h-2 bg-gradient-to-r from-amber-400 to-orange-500 mb-8" />
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                Insights & <br />
                <span className="text-amber-500">Knowledge.</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl font-medium">
                Stay ahead with expert insights on digital marketing, technology, and business strategy.
                Real-world knowledge to fuel your growth.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom Hexagon Accent */}
        <div className="absolute -bottom-12 right-12 w-48 h-48 opacity-10">
          <svg viewBox="0 0 100 100" fill="currentColor" className="text-white">
            <path d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z" />
          </svg>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="relative -mt-16 z-20 pb-12">
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
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(post.date).toLocaleDateString()}
                        <Clock className="w-4 h-4 ml-4 mr-2" />
                        {post.readTime}
                        <Eye className="w-4 h-4 ml-4 mr-2" />
                        {post.views}
                      </div>
                      <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-amber-500 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-amber-500 mr-3">
                            <User className="w-5 h-5" />
                          </div>
                          <span className="text-sm text-slate-700 font-bold">{post.author}</span>
                        </div>
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

      {/* 
      // Regular Posts
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
                      <Calendar className="w-3.5 h-3.5 mr-1.5" />
                      {new Date(post.date).toLocaleDateString()}
                      <Clock className="w-3.5 h-3.5 ml-3 mr-1.5" />
                      {post.readTime}
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-amber-500 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed text-sm font-medium line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-4 pt-4 border-t border-slate-200">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-amber-500 mr-2">
                          <User className="w-4 h-4" />
                        </div>
                        <span className="text-xs text-slate-700 font-bold">{post.author}</span>
                      </div>
                      <div className="flex items-center text-slate-500">
                        <Eye className="w-3.5 h-3.5 mr-1" />
                        <span className="text-xs font-bold">{post.views}</span>
                      </div>
                    </div>
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
          
          {regularPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-slate-400" />
              </div>
              <p className="text-slate-600 text-lg font-bold">
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      // Newsletter Section
      <section className="relative py-24 overflow-hidden bg-[#0f172a]">
        // Background Elements
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-amber-400 to-orange-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-amber-400 to-orange-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fadeInUp" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-amber-400 to-orange-500/20 rounded-full border border-amber-500/30 mb-8">
              <span className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse" />
              <span className="text-amber-500 font-black text-[10px] uppercase tracking-[0.3em]">Newsletter</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Stay in the Loop
            </h2>
            <p className="text-xl text-white/80 mb-10 font-medium">
              Get expert insights delivered to your inbox. No spam, just value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                value={newsletterEmail}
                onChange={e => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-amber-500 focus:outline-none font-bold"
                disabled={isSending}
              />
              <button
                className={`bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 px-8 py-4 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center shadow-lg shadow-yellow-200/20 ${isSending ? "opacity-60 cursor-not-allowed" : "hover:brightness-110"}`}
                onClick={handleNewsletterSubscribe}
                type="button"
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-2 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>
            <p className="text-sm text-white/50 mt-6 font-bold uppercase tracking-wider">
              Join 1,000+ subscribers • Unsubscribe anytime
            </p>
          </AnimatedSection>
        </div>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </section>
      */}

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