import React, { useState } from 'react';
import {
  TrendingUp,
  Users,
  Globe,
  Search,
  Share2,
  Brain,
  Mic,
  Calculator,
  Star,
  Calendar,
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const caseStudies = [
    {
      id: 1,
      category: 'web-development',
      title: "TechStart India - E-commerce Platform",
      client: "TechStart India",
      industry: "E-commerce",
      challenge: "TechStart needed a modern, scalable e-commerce platform to compete with established players in the Indian market.",
      solution: "Developed a custom e-commerce solution with advanced features including AI-powered recommendations, mobile-first design, and integrated payment gateways.",
      results: {
        traffic: "300% increase in website traffic",
        conversions: "150% improvement in conversion rates",
        revenue: "₹2.5Cr additional revenue in first year",
        mobile: "85% of sales from mobile devices"
      },
      duration: "6 months",
      team: "5 developers, 2 designers, 1 PM",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Stripe"]
    },
    {
      id: 2,
      category: 'seo-content',
      title: "EcoSolutions - SEO & Content Strategy",
      client: "EcoSolutions",
      industry: "Environmental Services",
      challenge: "EcoSolutions struggled with low organic visibility and needed to establish thought leadership in the sustainability space.",
      solution: "Implemented comprehensive SEO strategy with content marketing, technical optimization, and local SEO to target environmentally conscious businesses.",
      results: {
        rankings: "Ranked #1 for 15 target keywords",
        traffic: "400% increase in organic traffic",
        leads: "250% more qualified leads",
        authority: "Established as industry thought leader"
      },
      duration: "8 months",
      team: "2 SEO specialists, 3 content writers",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["WordPress", "Yoast SEO", "Google Analytics", "SEMrush"]
    },
    {
      id: 3,
      category: 'social-media',
      title: "HealthTech - Social Media Campaign",
      client: "HealthTech",
      industry: "Healthcare Technology",
      challenge: "HealthTech needed to increase brand awareness and generate leads through social media platforms.",
      solution: "Created targeted social media campaigns across LinkedIn, Instagram, and Facebook with educational content and lead generation strategies.",
      results: {
        followers: "200% increase in social media followers",
        engagement: "150% improvement in engagement rates",
        leads: "300% more qualified leads",
        awareness: "Significant brand awareness growth"
      },
      duration: "Ongoing",
      team: "2 social media managers, 1 designer",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      technologies: ["LinkedIn Ads", "Facebook Ads", "Instagram", "Hootsuite"]
    },
    {
      id: 4,
      category: 'ai-solutions',
      title: "FinServe - AI-Powered Customer Service",
      client: "FinServe",
      industry: "Financial Services",
      challenge: "FinServe needed to automate customer service operations while maintaining high service quality.",
      solution: "Developed AI-powered chatbot and automated response system integrated with existing CRM and knowledge base.",
      results: {
        automation: "70% of customer queries automated",
        savings: "₹50L annual cost savings",
        satisfaction: "95% customer satisfaction rate",
        efficiency: "3x faster response times"
      },
      duration: "4 months",
      team: "3 AI developers, 1 UX designer",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      technologies: ["Python", "TensorFlow", "NLP", "AWS", "Dialogflow"]
    },
    {
      id: 5,
      category: 'podcast-production',
      title: "EduTech - Educational Podcast Series",
      client: "EduTech",
      industry: "Education Technology",
      challenge: "EduTech wanted to establish thought leadership and reach educators through podcast content.",
      solution: "Created and produced a weekly educational podcast series with industry experts and practical insights.",
      results: {
        downloads: "50,000+ monthly downloads",
        subscribers: "10,000+ podcast subscribers",
        partnerships: "15+ educational partnerships",
        authority: "Established as education thought leader"
      },
      duration: "Ongoing",
      team: "1 producer, 1 host, 1 audio engineer",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop",
      technologies: ["Adobe Audition", "Zoom", "Anchor", "Spotify"]
    },
    {
      id: 6,
      category: 'financial-consulting',
      title: "RetailPlus - Financial Strategy & Funding",
      client: "RetailPlus",
      industry: "Retail",
      challenge: "RetailPlus needed strategic financial guidance to scale operations and secure funding for expansion.",
      solution: "Provided comprehensive financial consulting including business model optimization, funding strategy, and investor pitch preparation.",
      results: {
        funding: "₹10Cr secured in Series A funding",
        valuation: "3x increase in company valuation",
        growth: "200% revenue growth",
        expansion: "Successfully expanded to 5 new cities"
      },
      duration: "6 months",
      team: "2 financial consultants, 1 strategy expert",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      technologies: ["Financial Modeling", "Pitch Decks", "Valuation Analysis"]
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'seo-content', name: 'SEO & Content' },
    { id: 'social-media', name: 'Social Media' },
    { id: 'ai-solutions', name: 'AI Solutions' },
    { id: 'podcast-production', name: 'Podcast Production' },
    { id: 'financial-consulting', name: 'Financial Consulting' }
  ];

  const filteredCaseStudies = activeFilter === 'all'
    ? caseStudies
    : caseStudies.filter(study => study.category === activeFilter);

  const getCategoryIcon = (category) => {
    const icons = {
      'web-development': <Globe className="w-6 h-6" />,
      'seo-content': <Search className="w-6 h-6" />,
      'social-media': <Share2 className="w-6 h-6" />,
      'ai-solutions': <Brain className="w-6 h-6" />,
      'podcast-production': <Mic className="w-6 h-6" />,
      'financial-consulting': <Calculator className="w-6 h-6" />
    };
    return icons[category] || <Globe className="w-6 h-6" />;
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80")' }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Real results from real businesses. Discover how we've helped companies across
              industries achieve their digital transformation goals.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid with Success-Themed Background */}
      <section className="relative py-24 overflow-hidden bg-[#1a1a1a]">
        {/* Unique Background Design: Emerald Growth Path & Urban Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Professional Urban Growth Background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.15]"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")' }}
          />

          {/* Emerald Growth Strip (Distinguishing from Services/Yellow and Courses/Blue) */}
          <div className="absolute top-1/2 left-0 w-full h-[600px] -translate-y-1/2 bg-gradient-to-r from-emerald-600/10 via-teal-500/15 to-emerald-700/10 z-0 -skew-y-6 transform origin-right" />

          {/* Geometric Accent Shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCaseStudies.map((study) => (
              <div key={study.id} className="group flex flex-col bg-white rounded-[1.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.05)] overflow-hidden hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] transition-all duration-500 hover:-translate-y-1.5 border border-slate-100">
                {/* Visual Header - Compact */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-1.5">
                    <div className="p-1 px-2 bg-emerald-500 rounded-full text-white text-[9px] font-black uppercase tracking-wider shadow-lg">
                      {study.industry}
                    </div>
                  </div>
                </div>

                {/* Content Area - Optimized */}
                <div className="p-5 flex flex-col flex-grow bg-white">
                  {/* Category & Title */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 bg-slate-50 rounded-lg text-emerald-600 border border-slate-100">
                      {React.cloneElement(getCategoryIcon(study.category), { className: "w-3.5 h-3.5" })}
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {study.category.replace('-', ' ')}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 mb-2 leading-tight group-hover:text-emerald-600 transition-colors">
                    {study.title}
                  </h3>

                  {/* Challenge Text - Smaller but Full */}
                  <p className="text-slate-500 text-[13px] leading-relaxed mb-4 font-medium">
                    {study.challenge}
                  </p>

                  {/* Results Bento Box */}
                  <div className="bg-slate-50/80 rounded-2xl p-4 mb-4 border border-slate-100/50">
                    <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Metrics of Success</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(study.results).map(([key, value]) => (
                        <div key={key} className="flex flex-col gap-0.5">
                          <div className="flex items-center gap-1">
                            <TrendingUp className="w-2.5 h-2.5 text-emerald-500" />
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">{key}</span>
                          </div>
                          <span className="text-[11px] font-extrabold text-slate-900 leading-none">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Details Footer */}
                  <div className="mt-auto pt-4 border-t border-slate-50">
                    <div className="flex flex-col gap-2 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center text-[10px] font-bold text-slate-500">
                          <Calendar className="w-3 h-3 mr-1 text-emerald-500" />
                          {study.duration}
                        </div>
                        <div className="flex items-center text-[10px] font-bold text-slate-500">
                          <Users className="w-3 h-3 mr-1 text-emerald-500" />
                          {study.team}
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack - Nano Size */}
                    <div className="flex flex-wrap gap-1">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded text-[8px] font-black uppercase tracking-tighter"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Success Metrics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that demonstrate our commitment to delivering exceptional results.
            </p>
          </div>

          <div className="flex flex-nowrap items-center justify-between gap-2 overflow-x-visible px-2">
            <div className="text-center flex-1">
              <div className="text-xl sm:text-4xl font-black text-blue-600 mb-1 lg:mb-2 transition-transform hover:scale-105">150+</div>
              <div className="text-[10px] sm:text-base font-bold text-gray-500 uppercase tracking-tight">Happy Clients</div>
            </div>
            <div className="text-center flex-1">
              <div className="text-xl sm:text-4xl font-black text-purple-600 mb-1 lg:mb-2 transition-transform hover:scale-105">300+</div>
              <div className="text-[10px] sm:text-base font-bold text-gray-500 uppercase tracking-tight">Projects</div>
            </div>
            <div className="text-center flex-1">
              <div className="text-xl sm:text-4xl font-black text-green-600 mb-1 lg:mb-2 transition-transform hover:scale-105">85%</div>
              <div className="text-[10px] sm:text-base font-bold text-gray-500 uppercase tracking-tight">Growth</div>
            </div>
            <div className="text-center flex-1">
              <div className="text-xl sm:text-4xl font-black text-orange-600 mb-1 lg:mb-2 transition-transform hover:scale-105">₹50Cr+</div>
              <div className="text-[10px] sm:text-base font-bold text-gray-500 uppercase tracking-tight">Revenue</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm scale-110"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2070&auto=format&fit=crop")' }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-sans">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Real feedback from businesses we've helped transform.
            </p>
          </div>

          <div className="relative overflow-hidden lg:overflow-visible px-4 py-8">
            <div
              className="flex lg:grid lg:grid-cols-3 lg:gap-8 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              <style dangerouslySetInnerHTML={{
                __html: `
                @media (min-width: 1024px) {
                  .lg\\:grid { transform: none !important; }
                }
              `}} />
              {[
                {
                  name: "Abhishek Parashar",
                  position: "Founder, Training and Placement Cell",
                  content:
                    "The team delivered exactly what we needed — a clean, professional, and easy-to-manage website. The entire process was smooth, timely, and well-communicated. We’re very satisfied with both the quality and support.",
                  rating: 5,
                  image: "/review1.png"
                },
                {
                  name: "Mohit Bazzad",
                  position: "Founder, Kings pet Hospital",
                  content:
                    "We are extremely pleased with the website design and functionality delivered by the team. It’s user-friendly, professional, and perfectly showcases our services. The entire process was efficient and stress-free.",
                  rating: 5,
                  image: "/review2.png"
                },
                {
                  name: "Aman Sharma",
                  position: "CEO, Hi Tech Luxury Homes",
                  content:
                    "We’re thrilled with the website — it’s elegant, responsive, and beautifully represents our brand. The design perfectly highlights our property offerings. The team delivered on time with excellent communication.",
                  rating: 5,
                  image: "/review3.png"
                }
              ].map((testimonial, index) => {
                const isDark = index % 2 !== 0;
                const headerColor = isDark ? "bg-[#333333]" : "bg-[#FFA500]";
                const roleColor = isDark ? "text-[#333333]" : "text-[#FFA500]";

                return (
                  <div key={index} className="w-full lg:w-auto flex-shrink-0 lg:flex-shrink px-4 lg:px-0">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col group max-w-2xl lg:max-w-none mx-auto">
                      {/* Top Header Section */}
                      <div className={`${headerColor} h-32 lg:h-40 flex flex-col items-center justify-start pt-6 lg:pt-8 relative`}>
                        <div className="text-center z-10 text-white relative">
                          <span className="block font-serif italic text-xl lg:text-2xl tracking-wider mb-1 opacity-90">Client</span>
                          <span className="block text-xl lg:text-2xl font-bold tracking-[0.2em] uppercase font-sans">TESTIMONIAL</span>
                        </div>
                      </div>

                      {/* Overlapping Image */}
                      <div className="relative flex justify-center -mt-10 lg:-mt-14 z-20">
                        <div className="p-1 bg-white rounded-full shadow-md">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full border-4 border-white shadow-sm object-cover`}
                          />
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="px-6 pt-4 pb-8 text-center flex-grow flex flex-col items-center">
                        <h4 className="text-base lg:text-lg font-bold text-gray-900 uppercase tracking-widest mb-1">
                          {testimonial.name}
                        </h4>
                        <p className={`${roleColor} text-[10px] lg:text-xs font-bold uppercase tracking-widest mb-3 lg:mb-4`}>
                          {testimonial.position}
                        </p>

                        <div className="flex justify-center gap-1 mb-4 lg:mb-5">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>

                        <div className="relative">
                          <span className="opacity-10 text-4xl lg:text-6xl leading-none font-serif absolute -top-4 left-0">"</span>
                          <p className="text-gray-600 text-[13px] lg:text-sm leading-relaxed px-4 italic">
                            {testimonial.content}
                          </p>
                          <span className="opacity-10 text-4xl lg:text-6xl leading-none font-serif absolute -bottom-6 lg:-bottom-8 right-0">"</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination Dots - Hidden on Laptop */}
            <div className="flex lg:hidden justify-center gap-3 mt-10">
              {[1, 2, 3].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentTestimonial === index ? "bg-amber-500 scale-125 w-6" : "bg-white/30 hover:bg-white/50"
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm scale-110"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-purple-600/40 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-sans">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Let's discuss your project and create a custom strategy to drive growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-[#FDB931] transition-all duration-200 shadow-lg hover:transform hover:-translate-y-1 hover:shadow-xl"
            >
              Start Your Project
            </a>
            <a
              href="tel:+919253625099"
              className="bg-white text-gray-900 border-2 border-white px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-gray-100 hover:text-black transition-all duration-200 hover:transform hover:-translate-y-1 shadow-lg"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies; 