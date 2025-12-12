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
      image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
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
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Premium Courses
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <AnimatedSection key={course.id} animation="fadeInUp" delay={0.4 + (course.id * 0.1)}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {categories.find(cat => cat.id === course.category)?.name}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium ml-1">{course.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {course.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-1" />
                        {course.students} students
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                          <span className="text-lg text-gray-400 line-through ml-2">{course.originalPrice}</span>
                        </div>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                          {Math.round(((parseInt(course.originalPrice.replace('₹', '').replace(',', '')) - parseInt(course.price.replace('₹', '').replace(',', ''))) / parseInt(course.originalPrice.replace('₹', '').replace(',', ''))) * 100)}% OFF
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Course Features:</h4>
                      <div className="space-y-2">
                        {course.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        <div>Instructor: {course.instructor}</div>
                        <div>Level: {course.level}</div>
                      </div>
                      <div className="flex space-x-2">
                        <Link
                          to={`/courses/${course.id}`}
                          className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center"
                        >
                          View More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                        <a
                          href={course.paymentLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 hover:scale-105 flex items-center"
                        >
                          Enroll Now
                          <ArrowRight className="ml-2 w-4 h-4" />
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                {/* <Certificate className="w-8 h-8" /> */}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Courses</h3>
              <p className="text-gray-600">
                Industry-recognized certificates upon completion of all courses.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Job Guarantee</h3>
              <p className="text-gray-600">
                Assured job placement in reputed firms after course completion.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                <Briefcase className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Paid Internship</h3>
              <p className="text-gray-600">
                30-day paid internship with real-world project experience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Assistance</h3>
              <p className="text-gray-600">
                Free AI tools and assistance in both Hindi and English.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of students who have successfully launched their careers with our premium courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-consultation"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Consultation
            </Link>
            <a
              href="tel:+919253625099"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
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
        />
      )}
    </div>
  );
};

export default Courses;