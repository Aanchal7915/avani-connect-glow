import React, { useState } from 'react';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowRight,
  Search,
  Tag,
  Eye,
  Share2
} from 'lucide-react';

// Simple toast component
const Toast = ({ message, type, onClose }) => (
  <div
    className={`fixed top-8 right-8 z-50 px-6 py-4 rounded-lg shadow-lg text-white font-semibold transition-all duration-300 ${
      type === "success"
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

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential SEO Strategies for 2024: A Complete Guide",
      excerpt: "Discover the most effective SEO strategies that will dominate 2024, from technical optimization to content marketing techniques that drive organic traffic.",
      content: "In 2024, SEO continues to evolve with new algorithms and user behavior patterns. This comprehensive guide covers everything from technical SEO fundamentals to advanced content strategies...",
      author: "Rahul Sharma",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "seo",
      tags: ["SEO", "Digital Marketing", "Content Strategy"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      views: 2450,
      featured: true
    },
    {
      id: 2,
      title: "The Future of AI in Digital Marketing: Trends to Watch",
      excerpt: "Explore how artificial intelligence is revolutionizing digital marketing and what trends businesses should prepare for in the coming years.",
      content: "Artificial intelligence is no longer a futuristic concept in digital marketing. From chatbots to predictive analytics, AI is transforming how businesses connect with their customers...",
      author: "Priya Patel",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "ai-technology",
      tags: ["AI", "Digital Marketing", "Technology"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      views: 1890,
      featured: false
    },
    {
      id: 3,
      title: "Building a Successful E-commerce Website: Best Practices",
      excerpt: "Learn the essential elements and best practices for creating a high-converting e-commerce website that drives sales and customer satisfaction.",
      content: "Creating a successful e-commerce website requires more than just good design. It needs strategic planning, user experience optimization, and conversion-focused features...",
      author: "Amit Kumar",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "web-development",
      tags: ["Web Development", "E-commerce", "UX Design"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      views: 3200,
      featured: true
    },
    {
      id: 4,
      title: "Social Media Marketing Strategies for Small Businesses",
      excerpt: "Discover cost-effective social media marketing strategies that help small businesses build brand awareness and drive engagement.",
      content: "Small businesses often struggle with social media marketing due to limited resources. However, with the right strategies, even small teams can achieve significant results...",
      author: "Neha Singh",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "digital-marketing",
      tags: ["Social Media", "Small Business", "Marketing"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      views: 1560,
      featured: false
    },
    {
      id: 5,
      title: "Content Marketing ROI: How to Measure and Improve Performance",
      excerpt: "Learn how to measure the return on investment of your content marketing efforts and strategies to improve performance.",
      content: "Content marketing is a long-term strategy that requires careful measurement and optimization. Understanding your ROI helps justify investments and improve results...",
      author: "Rahul Sharma",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "digital-marketing",
      tags: ["Content Marketing", "ROI", "Analytics"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      views: 2100,
      featured: false
    },
    {
      id: 6,
      title: "Startup Funding Guide: From Bootstrap to Series A",
      excerpt: "A comprehensive guide for startups looking to secure funding, from bootstrapping strategies to preparing for Series A investment.",
      content: "Securing funding is one of the biggest challenges for startups. This guide covers everything from bootstrapping strategies to preparing for institutional investment...",
      author: "Amit Kumar",
      date: "2024-01-03",
      readTime: "12 min read",
      category: "business-strategy",
      tags: ["Startup", "Funding", "Business Strategy"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      views: 2800,
      featured: true
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest trends in digital marketing, technology, and business strategy. 
              Expert insights to help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.date).toLocaleDateString()}
                      <Clock className="w-4 h-4 ml-4 mr-2" />
                      {post.readTime}
                      <Eye className="w-4 h-4 ml-4 mr-2" />
                      {post.views} views
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      {/* <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </button> */}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.date).toLocaleDateString()}
                    <Clock className="w-4 h-4 ml-4 mr-2" />
                    {post.readTime}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Eye className="w-4 h-4 mr-1" />
                      <span className="text-sm">{post.views}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button> */}
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {regularPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated with Our Insights
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get the latest articles, tips, and insights delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              value={newsletterEmail}
              onChange={e => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              disabled={isSending}
            />
            <button
              className={`bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center ${isSending ? "opacity-60 cursor-not-allowed" : "hover:bg-gray-100"}`}
              onClick={handleNewsletterSubscribe}
              type="button"
              disabled={isSending}
            >
              {isSending ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-2 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
          <p className="text-sm text-blue-200 mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}
      </section>

      {/* Popular Topics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Topics
            </h2>
            <p className="text-xl text-gray-600">
              Explore our most-read articles and trending topics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">SEO</h3>
              <p className="text-gray-600 text-sm">
                15+ articles on search engine optimization and ranking strategies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                <Share2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Social Media</h3>
              <p className="text-gray-600 text-sm">
                12+ articles on social media marketing and engagement strategies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                <Tag className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Content Marketing</h3>
              <p className="text-gray-600 text-sm">
                10+ articles on content strategy and creation best practices.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                <Share2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Strategy</h3>
              <p className="text-gray-600 text-sm">
                8+ articles on digital transformation and business strategy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;