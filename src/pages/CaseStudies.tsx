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

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState('all');

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
      image:  "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
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
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeFilter === filter.id
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

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-medium text-gray-700">
                      {study.industry}
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    {getCategoryIcon(study.category)}
                    <span className="ml-2 text-sm text-gray-500 uppercase tracking-wide">
                      {study.category.replace('-', ' ')}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {study.challenge}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {study.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      {study.team}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                    <div className="space-y-2">
                      {Object.entries(study.results).map(([key, value]) => (
                        <div key={key} className="flex items-center text-sm">
                          <TrendingUp className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-200 hover:scale-105 flex items-center justify-center">
                    View Full Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button> */}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">300+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-gray-600">Average Growth</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">₹50Cr+</div>
              <div className="text-gray-600">Revenue Generated</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What our clients say about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Avani Enterprises transformed our digital presence completely. Their expertise in web development 
                and SEO helped us achieve 300% increase in traffic and 150% improvement in conversions."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
                  alt="Priya Sharma"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">Priya Sharma</div>
                  <div className="text-sm text-gray-600">CEO, TechStart India</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The team's AI solutions helped us automate 70% of our customer service operations, 
                saving us ₹50L annually while improving customer satisfaction."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
                  alt="Rajesh Kumar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">Rajesh Kumar</div>
                  <div className="text-sm text-gray-600">CTO, FinServe</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Their financial consulting expertise helped us secure ₹10Cr in funding and scale 
                our operations across 5 new cities. Exceptional strategic guidance."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face"
                  alt="Anita Patel"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">Anita Patel</div>
                  <div className="text-sm text-gray-600">Founder, RetailPlus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss your project and create a custom strategy to drive growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Start Your Project
            </a>
            <a
              href="tel:+919253625099"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
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