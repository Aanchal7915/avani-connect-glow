import React from 'react';
import {
  Target,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  Globe,
  Lightbulb,
  Heart,
  Shield,
  Zap
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results-Driven",
      description: "We focus on measurable outcomes and ROI for every project we undertake."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client-Centric",
      description: "Your success is our success. We build long-term partnerships based on trust."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation-First",
      description: "We stay ahead of industry trends and leverage cutting-edge technologies."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion for Excellence",
      description: "We're passionate about delivering exceptional quality in everything we do."
    }
  ];

  const achievements = [
    {
      number: "150+",
      label: "Happy Clients",
      icon: <Users className="w-6 h-6" />
    },
    {
      number: "300+",
      label: "Projects Completed",
      icon: <Award className="w-6 h-6" />
    },
    {
      number: "85%",
      label: "Average Growth",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      number: "8+",
      label: "Years Experience",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1553632168-eb4237620881?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Avani Enterprises
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                We are a team of passionate professionals dedicated to transforming businesses
                through strategic digital solutions and innovative technology.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Dreamy Background Accents */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-50/50 blur-[100px] rounded-full -translate-x-1/2" />
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-50/50 blur-[100px] rounded-full translate-x-1/2" />
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
              Experienced professional with proven track record in business transformation and startup consulting.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src="/kapil_khandelwal.jpg"
                      alt="Kapil Khandelwal"
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Kapil Khandelwal
                    </h3>
                    <p className="text-blue-600 font-medium text-lg mb-4">
                      CEO - Avani Enterprises
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Kapil Khandelwal is a distinguished Business and Startup Consultant with over a decade of experience
                      in transforming businesses and nurturing startups to success. As the CEO of Avani Enterprises,
                      he leads a team of professionals dedicated to delivering innovative digital solutions and strategic
                      growth strategies.
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Business & Startup Consultant</h4>
                          <p className="text-gray-600 text-sm">
                            Expert guidance for businesses and startups in scaling operations, market expansion, and strategic planning.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Active Investor</h4>
                          <p className="text-gray-600 text-sm">
                            Strategic investments in Gyan Ganga Marketing Co and 2 promising startups, contributing to their growth and success.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Author & Thought Leader</h4>
                          <p className="text-gray-600 text-sm">
                            Writer of "The Startup Summary Book" 📚, sharing insights and strategies for startup success and business growth.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-4 mb-6">
                      <div className="text-center p-2 md:p-4 bg-gray-50 rounded-lg">
                        <div className="text-xl md:text-2xl font-bold text-blue-600 mb-1">10+</div>
                        <div className="text-[10px] md:text-sm text-gray-600">Years Exp.</div>
                      </div>
                      <div className="text-center p-2 md:p-4 bg-gray-50 rounded-lg">
                        <div className="text-xl md:text-2xl font-bold text-purple-600 mb-1">50+</div>
                        <div className="text-[10px] md:text-sm text-gray-600">Businesses</div>
                      </div>
                      <div className="text-center p-2 md:p-4 bg-gray-50 rounded-lg">
                        <div className="text-xl md:text-2xl font-bold text-green-600 mb-1">3</div>
                        <div className="text-[10px] md:text-sm text-gray-600">Investments</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        Business Strategy
                      </span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                        Startup Consulting
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        Investment
                      </span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                        Author
                      </span>
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                        Digital Marketing
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Mission Card */}
            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <div className="relative h-full min-h-[450px] rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-center p-8 sm:p-12 group">
                <div className="absolute inset-0 z-0">
                  <img
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
                    alt="Our Mission"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-950/60 backdrop-blur-[2px]" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-900/40 to-transparent" />
                </div>
                <div className="relative z-10 text-white text-center">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center mb-8 border border-white/20 mx-auto shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight drop-shadow-lg">
                    Our Mission
                  </h2>
                  <div className="max-w-md mx-auto">
                    <p className="text-lg text-blue-50 mb-6 leading-relaxed font-medium">
                      To empower businesses with cutting-edge digital solutions that drive growth,
                      enhance brand presence, and deliver measurable ROI.
                    </p>
                    <div className="w-12 h-1 bg-white/30 mx-auto mb-6 rounded-full" />
                    <p className="text-base text-blue-100/80 leading-relaxed italic">
                      "Building long-term partnerships through trust, innovation, and results."
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Vision Card */}
            <AnimatedSection animation="fadeInUp" delay={0.4}>
              <div className="relative h-full min-h-[450px] rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-center p-8 sm:p-12 group">
                <div className="absolute inset-0 z-0">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                    alt="Our Vision"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-purple-950/60 backdrop-blur-[2px]" />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-purple-900/40 to-transparent" />
                </div>
                <div className="relative z-10 text-white text-center">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center mb-8 border border-white/20 mx-auto shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight drop-shadow-lg">Our Vision</h3>
                  <div className="max-w-md mx-auto">
                    <p className="text-lg text-purple-50 mb-8 leading-relaxed font-medium">
                      To be the leading digital transformation partner for businesses across India,
                      known for our innovative solutions and exceptional service.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                      <div className="flex items-center bg-white/15 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-sm font-semibold">
                        <CheckCircle className="w-4 h-4 mr-2 text-purple-200" />
                        Data-Driven
                      </div>
                      <div className="flex items-center bg-white/15 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-sm font-semibold">
                        <CheckCircle className="w-4 h-4 mr-2 text-purple-200" />
                        Innovation
                      </div>
                      <div className="flex items-center bg-white/15 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-sm font-semibold">
                        <CheckCircle className="w-4 h-4 mr-2 text-purple-200" />
                        Client Success
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Dreamy Pastel Background */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2070&auto=format&fit=crop")',
              opacity: 0.15
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-purple-50/50 to-pink-50/50" />

          {/* Animated Blobs for "Wavy" effect */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/30 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/30 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

          {/* Stars/Dots Pattern Overlay */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 font-sans tracking-tight">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Results Driven",
                description: "We focus on measurable outcomes and strive to deliver the very best in every project we undertake.",
                icon: <Target className="w-5 h-5 md:w-6 h-6 text-white" />
              },
              {
                title: "Client-Centric",
                description: "Our client's success is our success. We prioritize their needs, personalize based on trust.",
                icon: <Users className="w-5 h-5 md:w-6 h-6 text-white" />
              },
              {
                title: "Innovation First",
                description: "We stay ahead of the curve by continuously exploring new ideas and digital technologies.",
                icon: <Lightbulb className="w-5 h-5 md:w-6 h-6 text-white" />
              },
              {
                title: "Passion for Excellence",
                description: "We set high standards in everything we do, striving for quality and continuous improvement.",
                icon: <Heart className="w-5 h-5 md:w-7 h-7 text-white" />
              }
            ].map((value, index) => (
              <AnimatedSection
                key={index}
                animation="fadeInUp"
                delay={0.1 * index}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-[1.5rem] md:rounded-[2.5rem] p-4 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-300 border border-white/50 h-full group flex flex-col">
                  <div className="flex flex-col md:flex-row items-center md:items-center gap-3 md:gap-5 mb-3 md:mb-5 text-center md:text-left">
                    <div className="w-10 h-10 md:w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-purple-200 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {value.icon}
                    </div>
                    <h3 className="text-base md:text-2xl font-bold text-slate-800 tracking-tight leading-tight">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-xs md:text-lg font-medium text-center md:text-left">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}


      {/* Achievements Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Night-Dream Starry Background */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2070&auto=format&fit=crop")',
              opacity: 0.2
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900" />
          <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">
              Our Achievements
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto font-medium">
              Numbers that speak for themselves and demonstrate our commitment to excellence.
            </p>
          </div>
          <div className="flex flex-nowrap items-center justify-between gap-2 overflow-x-visible">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center flex-shrink-0 min-w-0 flex-1">
                <div className="flex items-center justify-center mb-2 scale-75 md:scale-100">
                  {achievement.icon}
                </div>
                <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1">
                  {achievement.number}
                </div>
                <div className="text-[10px] sm:text-xs md:text-blue-100 line-clamp-1">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 overflow-hidden bg-slate-50">
        {/* Advanced Background Design */}
        <div className="absolute inset-0 z-0">
          {/* Subtle Mesh Gradient */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.05)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.05)_0%,transparent_50%)]" />

          {/* Tech Blueprint Grid */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'radial-gradient(#3b82f6 0.5px, transparent 0.5px), radial-gradient(#3b82f6 0.5px, #f8fafc 0.5px)', backgroundSize: '40px 40px' }} />

          {/* Floating Decorative Shapes */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-100/30 blur-[100px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-100/30 blur-[100px] rounded-full animate-pulse delay-700" />

          {/* Subtle SVG Wave at bottom */}
          <div className="absolute bottom-0 left-0 w-full leading-none z-0 opacity-[0.05]">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24 text-blue-600 fill-current">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,1022.62,118.42V120H0V0C48.1,6,95.66,15.71,144.14,24.52,217.43,37.89,286.79,47.3,321.39,56.44Z"></path>
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="fadeInUp">
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
                The Avani Advantage
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 font-sans tracking-tight">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Avani Enterprises?</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
                Empowering your digital journey with strategic excellence and innovative solutions.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection animation="fadeInUp" delay={0.1}>
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-white hover:border-blue-200 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop"
                    alt="Proven Track Record"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-8 flex-grow">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-200 -mt-16 relative z-10 group-hover:rotate-6 transition-transform">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Proven Track Record</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    With 8+ years of experience and 300+ successful projects, we have the strategic depth and technical expertise
                    to handle any digital challenge.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-white hover:border-green-200 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
                    alt="Innovation-Driven"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-8 flex-grow">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-green-200 -mt-16 relative z-10 group-hover:rotate-6 transition-transform">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Innovation-Driven</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    We stay ahead of industry trends and leverage cutting-edge technologies to
                    deliver innovative solutions that give you a competitive edge.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={0.3}>
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-white hover:border-purple-200 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                    alt="Client-Centric"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-8 flex-grow">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-purple-200 -mt-16 relative z-10 group-hover:rotate-6 transition-transform">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Client-Centric</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Your success is our priority. We build long-term partnerships based on trust,
                    transparency, and delivering high-impact results.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm scale-110"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-purple-600/40 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-sans">
            Ready to Work with Us?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Let's discuss how we can help transform your business and achieve your growth goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-[#FDB931] transition-all duration-200 shadow-lg hover:transform hover:-translate-y-1 hover:shadow-xl"
            >
              Get Started Today
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

export default About; 