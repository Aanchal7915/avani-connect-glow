import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Play,
  Globe,
  Search,
  Share2,
  Brain,
  Mic,
  Calculator,
  ChevronRight,
  Star,
  Briefcase,
  Landmark,
  ShieldCheck,
  TrendingUp,
  Users
} from 'lucide-react';
import { motion } from "framer-motion";
import AnimatedSection from '../components/AnimatedSection';
import AnimatedCounter from '../components/AnimatedCounter';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [counter, setCounter] = useState({
    clients: 0,
    projects: 0,
    growth: 0,
    years: 0
  });

  const targetCounts = {
    clients: 150,
    projects: 300,
    growth: 85,
    years: 8
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const stepValue = {
        clients: targetCounts.clients / steps,
        projects: targetCounts.projects / steps,
        growth: targetCounts.growth / steps,
        years: targetCounts.years / steps
      };

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setCounter({
          clients: Math.min(Math.floor(stepValue.clients * currentStep), targetCounts.clients),
          projects: Math.min(Math.floor(stepValue.projects * currentStep), targetCounts.projects),
          growth: Math.min(Math.floor(stepValue.growth * currentStep), targetCounts.growth),
          years: Math.min(Math.floor(stepValue.years * currentStep), targetCounts.years)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    });

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web & App Development",
      description: "Custom websites and mobile apps that drive conversions and user engagement.",
      color: "from-blue-500 to-blue-600",
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO & Content Marketing",
      description: "Data-driven SEO strategies and compelling content that ranks and converts.",
      color: "from-green-500 to-green-600",
      bgImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Marketing",
      description: "Strategic SMM campaigns that build brand awareness and drive engagement.",
      color: "from-purple-500 to-purple-600",
      bgImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Solutions",
      description: "Cutting-edge AI integration for automation and intelligent decision-making.",
      color: "from-orange-500 to-orange-600",
      bgImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Podcast Production",
      description: "Professional podcast creation and distribution to amplify your brand voice.",
      color: "from-red-500 to-red-600",
      bgImage: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&h=400&fit=crop"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Financial Consulting",
      description: "Strategic financial planning and investment guidance for business growth.",
      color: "from-indigo-500 to-indigo-600",
      bgImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Business Consultation",
      description: "Expert guidance to optimize your business operations, strategy, and growth potential for long-term success.",
      color: "from-amber-500 to-orange-500",
      bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
    },
    {
      icon: <Landmark className="w-8 h-8" />,
      title: "Business Loans",
      description: "Flexible financing solutions including term loans, working capital, and equipment financing to fuel your growth.",
      color: "from-indigo-500 to-blue-500",
      bgImage: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Business Insurance",
      description: "Comprehensive protection for your business assets, liability, and employees with tailored insurance plans.",
      color: "from-emerald-500 to-green-500",
      bgImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discover",
      description: "We analyze your business, competitors, and market opportunities to create a strategic foundation."
    },
    {
      step: "02",
      title: "Define",
      description: "Clear objectives, target audience, and success metrics are established for measurable results."
    },
    {
      step: "03",
      title: "Design",
      description: "Creative solutions and user experiences that align with your brand and business goals."
    },
    {
      step: "04",
      title: "Develop",
      description: "Agile development process with regular updates and quality assurance at every stage."
    },
    {
      step: "05",
      title: "Deploy",
      description: "Strategic launch with comprehensive testing, optimization, and performance monitoring."
    },
    {
      step: "06",
      title: "Deliver",
      description: "Ongoing support, analytics, and optimization to ensure sustained growth and ROI."
    }
  ];

  // const testimonials = [
  //   {
  //     name: "Priya Sharma",
  //     position: "CEO, TechStart India",
  //     content: "Avani Enterprises transformed our digital presence completely. Our website traffic increased by 300% and conversions by 150% within 6 months.",
  //     rating: 5,
  //     image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
  //   },
  //   {
  //     name: "Rajesh Kumar",
  //     position: "Founder, EcoSolutions",
  //     content: "The team's expertise in SEO and content marketing helped us rank #1 for our target keywords. ROI exceeded our expectations by 200%.",
  //     rating: 5,
  //     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  //   },
  //   {
  //     name: "Anita Patel",
  //     position: "Marketing Director, HealthTech",
  //     content: "Their AI solutions automated 70% of our customer service, saving us ₹50L annually while improving customer satisfaction.",
  //     rating: 5,
  //     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  //   }
  // ];

  const testimonials = [
    {
      name: "Abhishek Parashar",
      position: "Founder, Training and Placement Cell",
      content:
        "The team delivered exactly what we needed — a clean, professional, and easy-to-manage website. The entire process was smooth, timely, and well-communicated. We’re very satisfied with both the quality and support.",
      rating: 5,
      image:
        "/review1.png"
    },
    {
      name: "Mohit Bazzad",
      position: "Founder, Kings pet Hospital",
      content:
        "We are extremely pleased with the website design and functionality delivered by the team. It’s user-friendly, professional, and perfectly showcases our services. The entire process was efficient and stress-free.",
      rating: 5,
      image:
        "/review2.png"
    },
    {
      name: "Aman Sharma",
      position: "CEO, Hi Tech Luxury Homes",
      content:
        "We’re thrilled with the website — it’s elegant, responsive, and beautifully represents our brand. The design perfectly highlights our property offerings. The team delivered on time with excellent communication.",
      rating: 5,
      image:
        "/review3.png"
    }
  ];

  const clientLogos = [
    {
      name: "Indus group of Institution",
      logo: "./indus.jpeg",
      link: "/projects/indus"
    },
    {
      name: "Policicue",
      logo: "./policucue.jpeg",
      link: "/projects/policicue"
    },
    {
      name: "Frd Nutrition",
      logo: "./frd.jpeg",
      link: "/projects/frd-nutrition"
    },
    {
      name: "Hi-tech Homes",
      logo: "./hitech.jpeg",
      link: "/projects/hitech-homes"
    },
    {
      name: "Sanjeevni Hospital",
      logo: "./sanjeevni.jpeg",
      link: "/projects/sanjeevni-hospital"
    },
    {
      name: "Rohtak Shoe co.",
      logo: "./shoes.jpeg",
      link: "/projects/rohtak-shoe"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/50 to-purple-900/50 z-0"></div>
          <motion.div
            animate={{
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-blue-600/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] bg-purple-600/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  Transform Your Brand with
                </div>

                <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 pb-1">
                    Strategic Digital Solutions
                  </span>
                </div>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                We help entrepreneurs and businesses achieve exponential growth through
                data-driven digital marketing, innovative technology solutions, and
                strategic brand transformation.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center group"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/courses"
                  className="relative overflow-hidden border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center group"
                >
                  <span className="relative z-10 flex items-center">
                    <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                    Explore Courses
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Content / Visual */}
            <div
              className="hidden lg:block relative"
            >
              <div
                className="relative z-10"
              >
                <div className="bg-gradient-to-tr from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
                  {/* Fake UI Elements */}
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                          <Globe className="text-blue-400 w-5 h-5" />
                        </div>
                        <div>
                          <div className="h-2 w-24 bg-white/20 rounded mb-1" />
                          <div className="h-2 w-16 bg-white/10 rounded" />
                        </div>
                      </div>
                      <div className="h-8 w-16 bg-blue-500/20 rounded-full" />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                          <Brain className="text-purple-400 w-5 h-5" />
                        </div>
                        <div>
                          <div className="h-2 w-28 bg-white/20 rounded mb-1" />
                          <div className="h-2 w-20 bg-white/10 rounded" />
                        </div>
                      </div>
                      <div className="h-8 w-16 bg-purple-500/20 rounded-full" />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                          <Search className="text-green-400 w-5 h-5" />
                        </div>
                        <div>
                          <div className="h-2 w-24 bg-white/20 rounded mb-1" />
                          <div className="h-2 w-12 bg-white/10 rounded" />
                        </div>
                      </div>
                      <div className="h-8 w-16 bg-green-500/20 rounded-full" />
                    </div>
                  </div>

                  {/* Floating Stats */}
                  <div
                    className="absolute -right-8 top-20 bg-white p-4 rounded-xl shadow-xl z-20"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <TrendingUp className="text-green-600 w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-gray-500 text-xs font-semibold">Growth</div>
                        <div className="text-gray-900 font-bold">+150%</div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute -left-8 bottom-20 bg-white p-4 rounded-xl shadow-xl z-20"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <Users className="text-blue-600 w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-gray-500 text-xs font-semibold">Clients</div>
                        <div className="text-gray-900 font-bold">500+</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedSection animation="scaleIn" delay={0.1}>
              <div className="text-center">
                <AnimatedCounter
                  target={150}
                  className="text-3xl md:text-4xl font-bold text-blue-600 mb-2"
                  suffix="+"
                />
                <div className="text-gray-600">Happy Clients</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="scaleIn" delay={0.2}>
              <div className="text-center">
                <AnimatedCounter
                  target={300}
                  className="text-3xl md:text-4xl font-bold text-purple-600 mb-2"
                  suffix="+"
                />
                <div className="text-gray-600">Projects Completed</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="scaleIn" delay={0.3}>
              <div className="text-center">
                <AnimatedCounter
                  target={85}
                  className="text-3xl md:text-4xl font-bold text-green-600 mb-2"
                  suffix="%"
                />
                <div className="text-gray-600">Average Growth</div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="scaleIn" delay={0.4}>
              <div className="text-center">
                <AnimatedCounter
                  target={8}
                  className="text-3xl md:text-4xl font-bold text-orange-600 mb-2"
                  suffix="+"
                />
                <div className="text-gray-600">Years Experience</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section >

      {/* Services Section */}
      < section className="py-20 bg-white" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Digital Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From web development to AI integration, we provide end-to-end digital solutions
                that drive growth and deliver measurable results.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <AnimatedSection
                key={index}
                animation="fadeInUp"
                delay={0.1 * (index + 1)}
              >
                <div
                  className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full"
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.bgImage})` }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:from-black/95 group-hover:via-black/70 transition-all duration-300" />

                  {/* Content */}
                  <div className="relative z-10 p-4 sm:p-6 lg:p-8 flex flex-col h-full min-h-[200px] sm:min-h-[260px]">
                    <div className={`w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center text-white mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <span className="scale-75 sm:scale-90 lg:scale-100">{service.icon}</span>
                    </div>
                    <h3 className="text-sm sm:text-lg lg:text-xl font-semibold text-white mb-2 sm:mb-3 lg:mb-4">{service.title}</h3>
                    <p className="text-gray-300 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 lg:mb-6 flex-grow line-clamp-3 sm:line-clamp-none">{service.description}</p>
                    <Link
                      to="/services"
                      className="inline-flex items-center text-blue-400 hover:text-blue-500 font-medium group-hover:translate-x-1 transition-transform duration-300 text-xs sm:text-sm lg:text-base"
                    >
                      Learn More
                      <ChevronRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section >




      {/* Work Process Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our 6-D Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                  <div className="text-4xl font-bold text-blue-600 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section> */}


      <section className="py-16 bg-gradient-to-b from-slate-50 via-white to-gray-100">

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Our 6-D Process
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and measurable results.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">

                {/* CARD */}
                <div className="
            bg-white 
            rounded-2xl 
            p-4 sm:p-6 lg:p-8
            shadow-md 
            border border-gray-100
            h-full
          ">
                  <div className="text-2xl sm:text-4xl font-bold text-blue-600 mb-2 sm:mb-3">
                    {step.step}
                  </div>

                  <h3 className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* ARROW (Desktop only) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-400" />
                  </div>
                )}

              </div>
            ))}
          </div>

        </div>
      </section>



      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real businesses. Here's how we've helped our clients achieve their goals.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 md:p-12">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg ${testimonials[currentTestimonial].image.includes('review2') || testimonials[currentTestimonial].image.includes('review1')
                    ? 'object-contain bg-white'
                    : 'object-cover object-top'
                    }`}
                />
                <div className="text-center sm:text-left">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base break-words">{testimonials[currentTestimonial].position}</p>
                  <div className="flex items-center justify-center sm:justify-start mt-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-base sm:text-lg text-gray-700 italic text-center sm:text-left">"{testimonials[currentTestimonial].content}"</p>
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Trusted By Industry Leaders</h3>
            <p className="text-gray-600">Companies that trust us with their digital transformation</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="bg-white rounded-lg px-6 py-4 shadow-sm border border-gray-200">
                  <span className="text-gray-700 font-medium text-sm">{logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-8 sm:mb-14">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Project Showcase
            </h3>
            <p className="text-lg text-slate-600">
              Companies that trust us with their digital transformation
            </p>
          </div>

          {/* Logo Grid Layout */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="
                  group
                  flex flex-col items-center justify-between
                  rounded-2xl
                  border-2 border-dashed border-blue-300
                  bg-white/80 backdrop-blur-sm
                  shadow-sm
                  hover:shadow-lg hover:border-blue-500 hover:scale-105
                  hover:bg-white
                  transition-all duration-300 ease-in-out
                  p-3 sm:p-5
                  min-h-[180px] sm:min-h-[220px]
                  relative
                "
              >
                {/* Logo Container */}
                <div className="
                  relative
                  w-full
                  h-24 sm:h-32
                  mb-3 sm:mb-4
                  flex items-center justify-center
                  bg-gray-50
                  rounded-xl
                  overflow-hidden
                  group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-purple-50
                  transition-all duration-300
                ">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="
                      max-w-full
                      max-h-full
                      object-contain
                      p-2 sm:p-3
                      group-hover:scale-110
                      transition-transform duration-300
                    "
                  />
                </div>

                {/* Company Name */}
                <h4 className="
                  text-slate-800
                  font-semibold
                  text-sm sm:text-base
                  text-center
                  mb-3 sm:mb-4
                  group-hover:text-blue-600
                  transition-colors duration-300
                ">
                  {client.name}
                </h4>

                {/* View Our Work Button - Always Visible */}
                <Link
                  to={client.link}
                  className="
                    bg-gradient-to-r from-blue-600 to-purple-600
                    text-white
                    px-4 py-1.5 sm:px-6 sm:py-2
                    rounded-lg
                    font-medium
                    hover:shadow-lg
                    transition-all duration-200
                    hover:scale-105
                    text-[10px] sm:text-sm
                    w-full
                    text-center
                  "
                >
                  View Our Work
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>






      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how we can help you achieve your growth goals and build a powerful digital presence.
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
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div >
  );
};

export default Home; 