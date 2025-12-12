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
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Avani Enterprises
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We are a team of passionate professionals dedicated to transforming businesses 
                through strategic digital solutions and innovative technology.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600 mb-1">10+</div>
                        <div className="text-sm text-gray-600">Years Experience</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600 mb-1">50+</div>
                        <div className="text-sm text-gray-600">Businesses Transformed</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600 mb-1">3</div>
                        <div className="text-sm text-gray-600">Active Investments</div>
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeInLeft" delay={0.2}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  To empower businesses with cutting-edge digital solutions that drive growth, 
                  enhance brand presence, and deliver measurable ROI. We believe in building 
                  long-term partnerships based on trust, innovation, and results.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our approach combines data-driven insights with creative excellence to create 
                  digital experiences that not only look great but also perform exceptionally well.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeInRight" delay={0.4}>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg leading-relaxed">
                  To be the leading digital transformation partner for businesses across India, 
                  known for our innovative solutions, exceptional service, and proven results.
                </p>
                <div className="mt-6 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3" />
                  <span className="text-lg">Data-Driven Decisions</span>
                </div>
                <div className="mt-4 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3" />
                  <span className="text-lg">Innovation at Core</span>
                </div>
                <div className="mt-4 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3" />
                  <span className="text-lg">Client Success Focus</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Numbers that speak for themselves and demonstrate our commitment to excellence.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-4">
                  {achievement.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {achievement.number}
                </div>
                <div className="text-blue-100">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Avani Enterprises?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Track Record</h3>
              <p className="text-gray-600">
                With 8+ years of experience and 300+ successful projects, we have the expertise 
                to handle any digital challenge.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation-Driven</h3>
              <p className="text-gray-600">
                We stay ahead of industry trends and leverage cutting-edge technologies to 
                deliver innovative solutions.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Client-Centric Approach</h3>
              <p className="text-gray-600">
                Your success is our priority. We build long-term partnerships based on trust, 
                transparency, and results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help transform your business and achieve your growth goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              Get Started Today
            </a>
            <a
              href="tel:+919253625099"
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
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