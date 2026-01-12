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
  Sparkles,
  Briefcase,
  Landmark,
  ShieldCheck,
  TrendingUp,
  Award,
  Users,
  Mail
} from 'lucide-react';
import { motion } from "framer-motion";
import AnimatedSection from '../components/AnimatedSection';
import AnimatedCounter from '../components/AnimatedCounter';
import StatsSection from './StatsSection';

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

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070",
      title: "Elevate Your Business with",
      highlight: "Next-Gen AI Solutions",
      description: "Empower your enterprise with state-of-the-art artificial intelligence that automates workflows, provides deep data insights, and drives strategic digital transformation for the modern age. We help you stay ahead by integrating smart tech that scales with your ambition."
    },
    {
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070",
      title: "Transforming Ideas into",
      highlight: "Digital Reality",
      description: "From custom-built software architectures to stunning, immersive web and mobile experiences, we build robust technology solutions that fuel global growth and user engagement. Our expert team ensures every line of code translates into measurable business success."
    },
    {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070",
      title: "Strategic Growth through",
      highlight: "Inbound Marketing",
      description: "Dominate your industry landscape with data-driven SEO strategies, expert content marketing, and precision-targeted social media campaigns. We don't just drive traffic; we build authority and convert leads into loyal customers through proven marketing funnels."
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(slideTimer);
  }, []);

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
      {/* Hero Section - Restored Content with Indian Visuals & Data Graphs */}
      <section className="relative min-h-[95vh] flex items-center pt-24 pb-20 overflow-hidden bg-[#fefaf6]">
        {/* Curved Background Split */}
        <div className="absolute top-0 right-0 w-[55%] h-full pointer-events-none hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100/40 via-orange-50/30 to-transparent rounded-l-[20rem] transform scale-x-110 translate-x-20" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Column: Restored Original Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-amber-600 font-bold text-sm tracking-wide mb-4 block">
                Transforming Brands Since 2016!
              </span>

              <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                Build high-performing <span className="text-amber-500">Websites</span> & accelerate <span className="text-amber-500">Growth.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium max-w-xl">
                We're more than just a digital agency. We have stories to tell, and passions to share, and results to deliver that are more exciting than the competition.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 mb-16">
                <Link
                  to="/get-consultation"
                  className="w-full sm:w-auto px-10 py-5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-amber-500/20 active:scale-95 transition-all duration-300 flex items-center justify-center"
                >
                  Explore Work
                </Link>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-slate-400">Trusted by 150+ Companies</span>
                </div>
              </div>

              {/* Stats Row - Updated for Single Line Mobile View */}
              <div className="flex flex-nowrap items-center gap-6 sm:gap-10 md:gap-16 overflow-x-visible">
                <div className="group cursor-default flex-shrink-0">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-1 transition-transform group-hover:scale-105">150+</div>
                  <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest">Happy Clients</div>
                </div>
                <div className="group cursor-default flex-shrink-0">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-1 transition-transform group-hover:scale-105">300+</div>
                  <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest">Projects</div>
                </div>
                <div className="group cursor-default flex-shrink-0">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-1 transition-transform group-hover:scale-105">85%</div>
                  <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest">Growth Rate</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Visuals with Indian Professionals & Data Graphs */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block h-[600px]"
            >
              {/* NEW: Background Design for Right Side */}
              <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-amber-200/20 rounded-full blur-[80px] animate-pulse-slow" />
                <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-sky-200/20 rounded-full blur-[80px] animate-pulse-slow delay-700" />
                {/* Geometric Rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-amber-500/5 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] border border-amber-500/5 rounded-full" />
              </div>

              {/* Main Dashboard UI */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[75%] bg-white/90 backdrop-blur-md rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.06)] border border-white overflow-hidden z-10">
                <div className="p-8 h-full flex flex-col">
                  {/* Top Header Mockup */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-amber-500 rounded-xl" />
                      <div>
                        <div className="w-32 h-3 bg-slate-100 rounded-full mb-2" />
                        <div className="w-20 h-2 bg-slate-50 rounded-full" />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-lg bg-slate-50" />
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-100">
                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>

                  {/* Graph Data Section - SQUARE & MULTI-COLOR */}
                  <div className="flex-1 grid grid-cols-12 gap-6">
                    <div className="col-span-8 bg-slate-50/50 rounded-3xl p-6 border border-slate-50">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Revenue Growth</span>
                        <span className="text-xs font-bold text-emerald-500">+24.5%</span>
                      </div>

                      {/* Bar Graph UI - Square & Colorful */}
                      <div className="flex items-end justify-between h-32 gap-3 px-2">
                        {[
                          { h: 40, c: "bg-blue-500" },
                          { h: 70, c: "bg-amber-500" },
                          { h: 55, c: "bg-violet-500" },
                          { h: 90, c: "bg-emerald-500" },
                          { h: 65, c: "bg-orange-500" },
                          { h: 80, c: "bg-indigo-500" },
                          { h: 100, c: "bg-rose-500" }
                        ].map((bar, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${bar.h}%` }}
                            transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                            className={`flex-1 ${bar.c} rounded-none shadow-sm opacity-90 hover:opacity-100 transition-opacity`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="col-span-4 flex flex-col gap-4">
                      <div className="flex-1 bg-amber-50/50 rounded-3xl p-5 border border-amber-100/50 text-center flex flex-col justify-center">
                        <div className="text-[10px] font-black text-amber-600 uppercase mb-2">Projects</div>
                        <div className="text-2xl font-black text-slate-800">300+</div>
                      </div>
                      <div className="flex-1 bg-sky-50/50 rounded-3xl p-5 border border-sky-100/50 text-center flex flex-col justify-center">
                        <div className="text-[10px] font-black text-sky-600 uppercase mb-2">Clients</div>
                        <div className="text-2xl font-black text-slate-800">150+</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Indian Avatars */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[15%] right-[5%] w-24 h-24 rounded-full border-8 border-white shadow-2xl overflow-hidden z-20"
              >
                <img src="https://images.unsplash.com/photo-1589386417686-0d34b5903d23?q=80&w=800&auto=format&fit=crop" alt="Indian Businessman" className="w-full h-full object-cover" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[50%] -left-[5%] w-20 h-20 rounded-full border-8 border-white shadow-2xl overflow-hidden z-20"
              >
                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop" alt="Indian Businesswoman" className="w-full h-full object-cover" />
              </motion.div>

              {/* ROI Badge (Moved Lower) */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-[7%] right-[0%] bg-white p-5 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-4 z-30"
              >
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900 line-clamp-1">Client Growth</div>
                  <div className="text-[10px] font-bold text-emerald-500">+85% Avg. ROI</div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section Removed as per request */}
      {/* <StatsSection /> */}

      {/* Services Section */}
      {/* Comprehensive Digital Solutions Section */}
      <section className="py-24 bg-[#333333] relative overflow-hidden">
        {/* Yellow Background Strip */}
        <div className="absolute top-1/2 left-0 w-full h-[400px] -translate-y-1/2 bg-[#FFD700] z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wide font-sans">
                Comprehensive Digital Solutions
              </h2>
              <p className="text-lg text-gray-300 italic max-w-3xl mx-auto font-light">
                From web development to AI integration, we provide end-to-end digital solutions that drive growth.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {services.slice(0, 8).map((service, index) => (
              <AnimatedSection
                key={index}
                animation="fadeInUp"
                delay={0.1 * (index % 4)}
              >
                <div className="bg-white rounded-2xl p-3 shadow-2xl h-full flex flex-col items-center text-center group cursor-pointer hover:-translate-y-2 transition-transform duration-300 min-h-[290px]">
                  {/* Card Image */}
                  <div
                    className="w-full h-28 rounded-xl bg-cover bg-center mb-4 shadow-sm overflow-hidden shrink-0"
                  >
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${service.bgImage})` }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-bold text-gray-800 mb-1 px-1">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-[11px] leading-snug mb-3 flex-grow px-1">
                    {service.description}
                  </p>

                  {/* MORE Link */}
                  <div className="mt-auto pb-2">
                    <Link
                      to="/services"
                      className="inline-flex items-center justify-center px-6 py-2 text-xs font-bold text-gray-900 uppercase tracking-widest border border-gray-900 rounded hover:bg-[#FFD700] hover:border-[#FFD700] hover:text-black transition-all duration-300"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>




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


      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Creative Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Abstract Process Line */}
          <svg className="absolute top-1/2 left-0 w-full h-[500px] -translate-y-1/2 opacity-20 hidden lg:block" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              fill="none"
              stroke="url(#gradient-line)"
              strokeWidth="8"
              strokeDasharray="20 20"
              d="M0,160 C320,300, 420,20, 740,160 C1060,300, 1120,20, 1440,160"
              className="animate-pulse"
            />
            <defs>
              <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </svg>

          {/* Glowing Orbs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4"></div>
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-indigo-100/30 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 font-sans tracking-tight">
              Our 6-D Process
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and measurable results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {processSteps.map((step, index) => {
              // Gradients resembling the reference image
              const gradients = [
                "from-cyan-100 to-blue-200 border-blue-200",      // 01 Discover - Blue/Cyan
                "from-purple-100 to-fuchsia-200 border-purple-200", // 02 Define - Purple
                "from-amber-100 to-orange-200 border-orange-200",   // 03 Design - Orange
                "from-emerald-100 to-teal-200 border-teal-200",     // 04 Develop - Teal
                "from-lime-100 to-green-200 border-green-200",      // 05 Deploy - Light Green
                "from-blue-100 to-indigo-200 border-indigo-200"     // 06 Deliver - Indigo
              ];

              const icons = [
                <Search className="w-5 h-5 text-blue-600" />,
                <TrendingUp className="w-5 h-5 text-purple-600" />,
                <Brain className="w-5 h-5 text-orange-600" />,
                <Globe className="w-5 h-5 text-teal-600" />,
                <Play className="w-5 h-5 text-green-600" />,
                <ShieldCheck className="w-5 h-5 text-indigo-600" />
              ];

              return (
                <AnimatedSection
                  key={index}
                  animation="fadeInUp"
                  delay={0.1 * index}
                >
                  <div className={`relative h-full p-4 rounded-2xl bg-gradient-to-br ${gradients[index]} border shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden group min-h-[180px]`}>
                    {/* Glossy Overlay */}
                    <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px] pointer-events-none"></div>

                    {/* Content Container */}
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-3">
                        {/* Number Badge */}
                        <div className="w-10 h-10 rounded-full bg-white border-2 border-white/50 shadow-sm flex items-center justify-center text-sm font-black text-slate-700">
                          {step.step}
                        </div>

                        {/* Icon Bubble */}
                        <div className="p-2 bg-white/60 rounded-xl shadow-sm backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                          {icons[index] || <Star className="w-5 h-5 text-gray-500" />}
                        </div>
                      </div>

                      <h3 className="text-sm font-bold text-slate-800 mb-1 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-slate-700 text-[11px] font-semibold leading-snug">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      {/* Testimonials Section */}
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
              Real results from real businesses. Here's how we've helped our clients achieve their goals.
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
              {testimonials.map((testimonial, index) => {
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
                            className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full border-4 border-white shadow-sm ${testimonial.image.includes('review2') || testimonial.image.includes('review1') ? 'object-contain bg-white' : 'object-cover object-top'}`}
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
              {testimonials.map((_, index) => (
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
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
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
      <section className="relative py-24 overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm scale-110"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?q=80&w=2070&auto=format&fit=crop")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-purple-600/40 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-sans">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Let's discuss how we can help you achieve your growth goals and build a powerful digital presence.
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
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div >
  );
};

export default Home; 