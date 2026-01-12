import React, { useState } from 'react';
import {
  //  GraduationCap, 
  //  Certificate, 
  Users,
  Clock,
  Star,
  ArrowRight,
  CheckCircle,
  BookOpen,
  Code,
  Palette,
  Briefcase,
  Brain,
  Search,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PaymentModal from '../components/PaymentModal';
import AnimatedSection from '../components/AnimatedSection';

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const categories = [
    { id: 'all', name: 'All Courses', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'development', name: 'Development', icon: <Code className="w-5 h-5" /> },
    { id: 'design', name: 'Design', icon: <Palette className="w-5 h-5" /> },
    { id: 'marketing', name: 'Marketing', icon: <Search className="w-5 h-5" /> },
    { id: 'business', name: 'Business', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'technology', name: 'Technology', icon: <Brain className="w-5 h-5" /> }
  ];

  const courses = [
    {
      id: 1,
      title: "Graphic Designing and Adobe Photoshop",
      category: "design",
      description: "Full step by step course about graphic design, Adobe Photoshop, and digital art creation with AI tools integration.",
      duration: "80 hours",
      price: "₹19,999",
      originalPrice: "₹29,999",
      rating: 4.8,
      students: 1250,
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      features: [
        "Certificate after completion",
        "Free AI tool assistance (Hindi & English)",
        "Assured paid 30-day internship",
        "Assured job in reputed firm",
        "MCQ test for course completion"
      ],
      instructor: "Priya Sharma",
      level: "Beginner to Advanced",
      language: "Hindi & English",
      paymentLink: "https://razorpay.com/payment-link/plink_QkAxEmxe6Ri9Et"
    },
    {
      id: 2,
      title: "100-Hour Digital Marketing Mastery",
      category: "marketing",
      description: "Unlock the power of digital marketing with our comprehensive 100-hour course covering all aspects of modern marketing.",
      duration: "100 hours",
      price: "₹19,999",
      originalPrice: "₹35,000",
      rating: 4.9,
      students: 2100,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      features: [
        "Certificate after completion",
        "Free AI tool assistance (Hindi & English)",
        "Assured paid 30-day internship",
        "Assured job in reputed firm",
        "MCQ test for course completion"
      ],
      instructor: "Rahul Kumar",
      level: "Beginner to Advanced",
      language: "Hindi & English",
      paymentLink: "https://razorpay.com/payment-link/plink_Qj5b7hCG3D5e7H"
    },
    {
      id: 3,
      title: "Video Editing Course",
      category: "design",
      description: "Master video editing with professional tools and techniques for creating compelling content.",
      duration: "60 hours",
      price: "₹19,999",
      originalPrice: "₹25,000",
      rating: 4.7,
      students: 980,
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop",
      features: [
        "Certificate after completion",
        "Free AI tool assistance (Hindi & English)",
        "Assured paid 30-day internship",
        "Assured job in reputed firm",
        "MCQ test for course completion"
      ],
      instructor: "Amit Patel",
      level: "Beginner to Intermediate",
      language: "Hindi & English",
      paymentLink: "https://razorpay.com/payment-link/plink_QkAy1wWQmdhynn"
    },
    {
      id: 4,
      title: "Full Stack Website Development",
      category: "development",
      description: "Complete web development course covering frontend, backend, databases, and deployment strategies.",
      duration: "120 hours",
      price: "₹19,999",
      originalPrice: "₹40,000",
      rating: 4.9,
      students: 1850,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
      features: [
        "Certificate after completion",
        "Free AI tool assistance (Hindi & English)",
        "Assured paid 30-day internship",
        "Assured job in reputed firm",
        "MCQ test for course completion"
      ],
      instructor: "Neha Singh",
      level: "Beginner to Advanced",
      language: "Hindi & English",
      paymentLink: "https://razorpay.com/payment-link/plink_QkAz7ZhqFfLcXD"
    },
    {
      id: 5,
      title: "Android and iOS App Development",
      category: "development",
      description: "Learn mobile app development for both Android and iOS platforms with modern frameworks.",
      duration: "100 hours",
      price: "₹19,999",
      originalPrice: "₹35,000",
      rating: 4.8,
      students: 1450,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      features: [
        "Certificate after completion",
        "Free AI tool assistance (Hindi & English)",
        "Assured paid 30-day internship",
        "Assured job in reputed firm",
        "MCQ test for course completion"
      ],
      instructor: "Rajesh Kumar",
      level: "Intermediate to Advanced",
      language: "Hindi & English",
      paymentLink: "https://razorpay.com/payment-link/plink_QkAzoc7SqJq6Fs"
    },
    {
      id: 6,
      title: "Hospital Management Course",
      category: "business",
      description: "Comprehensive hospital management course for healthcare administration and operations.",
      duration: "80 hours",
      price: "₹19,999",
      originalPrice: "₹30,000",
      rating: 4.6,
      students: 750,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      features: [
        "Certificate after completion",
        "Free AI tool assistance (Hindi & English)",
        "Assured paid 30-day internship",
        "Assured job in reputed firm",
        "MCQ test for course completion"
      ],
      instructor: "Dr. Anjali Verma",
      level: "Beginner to Intermediate",
      language: "Hindi & English",
      paymentLink: "https://razorpay.com/payment-link/plink_QkB0ZuMTIzNQaF"
    },
    {
      id: 7,
      title: "Sales Manager Course",
      category: "business",
      description: "Master sales management techniques and strategies for business growth and revenue generation.",
      duration: "60 hours",
      price: "₹19,999",
      originalPrice: "₹25,000",
      rating: 4.7,
      students: 1100,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      features: [
        "Certificate after completion",
        "Free AI tool assistance (Hindi & English)",
        "Assured paid 30-day internship",
        "Assured job in reputed firm",
        "MCQ test for course completion"
      ],
      instructor: "Vikram Singh",
      level: "Beginner to Advanced",
      language: "Hindi & English",
      paymentLink: "https://razorpay.com/payment-link/plink_QkD0vcwaw7q9N8"
    },
    {
      id: 8,
      title: "LLB and LLM Course",
      category: "business",
      description: "Legal analysis and corporate law course for aspiring lawyers and legal professionals.",
      duration: "100 hours",
      price: "₹19,999",
      originalPrice: "₹45,000",
      rating: 4.8,
      students: 650,
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
      features: [
        "Certificate after completion",
        "Free AI tool assistance (Hindi & English)",
        "Assured paid 30-day internship",
        "Assured job in reputed firm",
        "MCQ test for course completion"
      ],
      instructor: "Adv. Meera Sharma",
      level: "Intermediate to Advanced",
      language: "Hindi & English",
      paymentLink: "https://razorpay.com/payment-link/plink_QkEWaTixFjaC5x"
    },
    {
      id: 9,
      title: "BSc Nursing Course",
      category: "business",
      description: "Comprehensive nursing course for mastering nursing jobs in Indian hospitals.",
      duration: "120 hours",
      price: "₹19,999",
      originalPrice: "₹35,000",
      rating: 4.9,
      students: 890,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      features: [
        "Certificate after completion",
        "Free AI tool assistance (Hindi & English)",
        "Mock interviews and interview questions",
        "Assured paid 30-day internship",
        "Assured job in reputed firm"
      ],
      instructor: "Dr. Priya Patel",
      level: "Beginner to Advanced",
      language: "Hindi & English",
      paymentLink: "https://razorpay.com/payment-link/plink_QkEzYm9PTePejB"
    },
    {
      id: 10,
      title: "AI, Machine Learning, and Data Science",
      category: "technology",
      description: "Cutting-edge course on artificial intelligence, machine learning, and data science applications.",
      duration: "150 hours",
      price: "₹19,999",
      originalPrice: "₹50,000",
      rating: 4.9,
      students: 1650,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      features: [
        "Certificate after completion",
        "Free AI tool assistance (Hindi & English)",
        "Mock interviews and interview questions",
        "Assured paid 30-day internship",
        "Assured job in reputed firm"
      ],
      instructor: "Dr. Amit Kumar",
      level: "Intermediate to Advanced",
      language: "Hindi & English",
      paymentLink: "https://razorpay.com/payment-link/plink_QkbfT6omfXOa6v"
    },
    {
      id: 11,
      title: "Cybersecurity and Ethical Hacking",
      category: "technology",
      description: "Learn cybersecurity fundamentals and ethical hacking techniques for digital security.",
      duration: "100 hours",
      price: "₹19,999",
      originalPrice: "₹40,000",
      rating: 4.8,
      students: 1200,
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=300&fit=crop",
      features: [
        "Certificate after completion",
        "Free AI tool assistance (Hindi & English)",
        "Mock interviews and interview questions",
        "Assured paid 30-day internship",
        "Assured job in reputed firm"
      ],
      instructor: "Rahul Verma",
      level: "Intermediate to Advanced",
      language: "Hindi & English",
      paymentLink: "https://razorpay.com/payment-link/plink_QkbVQMoRjk8O3c"
    },
    {
      id: 12,
      title: "Real Estate Course",
      category: "business",
      description: "Comprehensive real estate course for jobs in Dubai, Delhi NCR, Chandigarh, and Jaipur.",
      duration: "80 hours",
      price: "₹19,999",
      originalPrice: "₹30,000",
      rating: 4.7,
      students: 950,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
      features: [
        "Certificate after completion",
        "Free AI tool assistance (Hindi & English)",
        "Mock interviews and interview questions",
        "Assured paid 30-day internship",
        "Assured job in reputed firm"
      ],
      instructor: "Kapil Sharma",
      level: "Beginner to Intermediate",
      language: "Hindi & English",
      paymentLink: "https://razorpay.com/payment-link/plink_QkuHfTcQCXSjNZ"
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80")' }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Premium Courses
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Premium courses made with love for you! Master in-demand skills with our comprehensive
                training programs and secure your future with assured job placements.
              </p>
            </div>
          </AnimatedSection>
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
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="grid grid-cols-3 lg:flex lg:flex-wrap lg:justify-center gap-2 md:gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex flex-col lg:flex-row items-center justify-center space-y-1 lg:space-y-0 lg:space-x-2 px-2 py-2.5 lg:px-4 lg:py-2 rounded-lg font-bold transition-all duration-300 ${activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg transform -translate-y-0.5'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  <div className="scale-75 lg:scale-100">{category.icon}</div>
                  <span className="text-[10px] lg:text-sm tracking-tight lg:tracking-normal line-clamp-1">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid with Unique Path-to-Success Background */}
      <section className="relative py-24 overflow-hidden bg-slate-900">
        {/* Unique Background Design: Indigo Strip & Academic Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Subtle Academic Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format&fit=crop")' }}
          />

          {/* Purple Path Strip (Distinguishing from Services' Yellow Strip) */}
          <div className="absolute top-1/2 left-0 w-full h-[500px] -translate-y-1/2 bg-gradient-to-r from-purple-600/10 via-violet-500/20 to-indigo-600/10 z-0 skew-y-3 transform" />

          {/* Decorative Grainy Overlay for Texture */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <AnimatedSection key={course.id} animation="fadeInUp" delay={0.4 + (course.id * 0.1)}>
                <div className="group flex flex-col bg-white rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.05)] overflow-hidden hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)] transition-all duration-500 hover:-translate-y-2 border border-slate-100 h-full">
                  {/* Thumbnail Section */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                    {/* Category Overlay */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-lg">
                        {categories.find(cat => cat.id === course.category)?.name}
                      </span>
                    </div>

                    {/* Highly Visible Rating Overlay */}
                    <div className="absolute bottom-4 right-4">
                      <div className="flex items-center gap-1 bg-white/95 backdrop-blur-md rounded-xl px-2.5 py-1.5 shadow-xl border border-white/50">
                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-black text-slate-900 leading-none">{course.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-black text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors h-14 line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-slate-500 text-[13px] leading-relaxed mb-4 line-clamp-2 h-10 font-medium">
                      {course.description}
                    </p>

                    {/* Bento Info Grid */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="bg-slate-50 p-2 rounded-xl flex items-center gap-2 border border-slate-100">
                        <Clock className="w-3.5 h-3.5 text-blue-500" />
                        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">{course.duration}</span>
                      </div>
                      <div className="bg-slate-50 p-2 rounded-xl flex items-center gap-2 border border-slate-100">
                        <Users className="w-3.5 h-3.5 text-blue-500" />
                        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">{course.students} Learners</span>
                      </div>
                    </div>

                    {/* Price Block */}
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-2xl border border-blue-100/50 mb-5">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-black text-blue-700">{course.price}</span>
                        <span className="text-sm text-blue-400/70 line-through font-bold">{course.originalPrice}</span>
                      </div>
                      <span className="bg-blue-600 text-white text-[9px] font-black uppercase px-2 py-1 rounded-lg">
                        {Math.round(((parseInt(course.originalPrice.replace('₹', '').replace(',', '')) - parseInt(course.price.replace('₹', '').replace(',', ''))) / parseInt(course.originalPrice.replace('₹', '').replace(',', ''))) * 100)}% OFF
                      </span>
                    </div>

                    {/* Mini Instructor & Features Footer */}
                    <div className="mt-auto space-y-4 pt-2 border-t border-slate-50">
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-bold text-slate-400">
                        <div className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-emerald-500 mr-1.5" />
                          <span>Instructor: {course.instructor}</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-emerald-500 mr-1.5" />
                          <span>Level: {course.level}</span>
                        </div>
                      </div>

                      {/* Call to Actions */}
                      <div className="flex gap-2">
                        <Link
                          to={`/courses/${course.id}`}
                          className="flex-1 text-center py-2.5 px-3 rounded-xl text-[12px] font-black text-blue-600 border border-blue-100 hover:bg-blue-50 transition-all duration-300 uppercase tracking-wider"
                        >
                          View Details
                        </Link>
                        <a
                          href={course.paymentLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-[1.5] text-center py-2.5 px-3 rounded-xl text-[12px] font-black text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 uppercase tracking-wider block"
                        >
                          Enroll Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">
                No courses found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Course Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Courses?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive training with guaranteed job placement and industry-recognized certifications.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            <div className="text-center p-2">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white mx-auto mb-3 lg:mb-4">
                <CheckCircle className="w-6 h-6 lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-sm lg:text-xl font-bold text-gray-900 mb-1 lg:mb-2 text-center px-1">Certified Courses</h3>
              <p className="text-gray-600 text-[10px] lg:text-base leading-snug lg:leading-relaxed">
                Industry-recognized certificates upon completion.
              </p>
            </div>

            <div className="text-center p-2">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white mx-auto mb-3 lg:mb-4">
                <Users className="w-6 h-6 lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-sm lg:text-xl font-bold text-gray-900 mb-1 lg:mb-2 text-center px-1">Job Guarantee</h3>
              <p className="text-gray-600 text-[10px] lg:text-base leading-snug lg:leading-relaxed">
                Assured job placement in reputed firms.
              </p>
            </div>

            <div className="text-center p-2">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-3 lg:mb-4">
                <Briefcase className="w-6 h-6 lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-sm lg:text-xl font-bold text-gray-900 mb-1 lg:mb-2 text-center px-1">Paid Internship</h3>
              <p className="text-gray-600 text-[10px] lg:text-base leading-snug lg:leading-relaxed">
                30-day paid internship with real-world experience.
              </p>
            </div>

            <div className="text-center p-2">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white mx-auto mb-3 lg:mb-4">
                <Brain className="w-6 h-6 lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-sm lg:text-xl font-bold text-gray-900 mb-1 lg:mb-2 text-center px-1">AI Assistance</h3>
              <p className="text-gray-600 text-[10px] lg:text-base leading-snug lg:leading-relaxed">
                Free AI tools and assistance in Hindi & English.
              </p>
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
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524178232363-1fb28f74b0cd?q=80&w=2070&auto=format&fit=crop")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-purple-600/40 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-sans">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Join thousands of students who have successfully launched their careers with our premium courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-consultation"
              className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-[#FDB931] transition-all duration-200 shadow-lg hover:transform hover:-translate-y-1 hover:shadow-xl"
            >
              Get Consultation
            </Link>
            <a
              href="tel:+919253625099"
              className="bg-white text-gray-900 border-2 border-white px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-gray-100 hover:text-black transition-all duration-200 hover:transform hover:-translate-y-1 shadow-lg"
            >
              Call +91 9253625099
            </a>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {selectedCourse && (
        <PaymentModal
          isOpen={isPaymentModalOpen}
          onClose={() => setIsPaymentModalOpen(false)}
          course={selectedCourse}
          onSuccess={(data: any) => console.log('Payment successful', data)}
        />
      )}
    </div>
  );
};

export default Courses;