import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  ChevronUp
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
  const whatsappNumber = '919253625099';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: [],
    message: ''
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceToggle = (service) => {
    setFormData(prev => {
      const services = prev.service.includes(service)
        ? prev.service.filter(s => s !== service)
        : [...prev.service, service];
      return { ...prev, service: services };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

    setIsLoading(true);

    // prepare payload to match backend expectations
    const payload = {
      fullName: formData.name,
      email: formData.email,
      phoneNu: formData.phone,
      service: formData.service.length > 0 ? (formData.service.length === 1 ? formData.service[0] : formData.service.join(', ')) : '',
      companyName: formData.company,
      projectDetails: formData.message,
    };

    // send to backend endpoint expected: POST /api/forms/submit
    (async () => {
      try {
        const res = await fetch(`${API_BASE.replace(/\/$/, '')}/avani-form`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          const text = await res.text().catch(() => '');
          console.error('Backend error submitting form', res.status, text);
          alert('Unable to submit form to server. Please try again later.');
          return;
        }

        setIsSubmitted(true);
      } catch (err) {
        console.error('Submit error:', err);
        alert('There was an error submitting the form. Please try again.');
      } finally {
        setIsLoading(false);
      }
    })();
  };

  const services = [
    "Web & App Development",
    "SEO and Content Marketing",
    "Social Media Marketing",
    "AI Solutions",
    "Podcast Production",
    "Financial Consulting"
  ];

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on scope and complexity. Web development projects typically take 4-12 weeks, while marketing campaigns are ongoing. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer various support and maintenance packages to ensure your digital assets continue to perform optimally. We also provide training and documentation for your team."
    },
    {
      question: "What makes Avani Enterprises different from other agencies?",
      answer: "We combine technical expertise with strategic business understanding. Our team includes IIT/IIM alumni with proven track records in digital transformation. We focus on measurable ROI and long-term partnerships."
    },
    {
      question: "How do you measure success for marketing campaigns?",
      answer: "We establish clear KPIs at the beginning of each project, including traffic growth, conversion rates, lead generation, and ROI. We provide regular reports and optimize based on performance data."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section - Corporate Geometric Design */}
      <section className="relative pt-32 pb-44 overflow-hidden bg-[#0f172a]">
        {/* Background Geometric Elements inspired by reference */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large Diagonal Navy/Blue Shape */}
          <div className="absolute -top-24 -right-20 w-[120%] h-full bg-[#1e293b] -rotate-12 transform origin-top-right shadow-2xl" />

          {/* Yellow Diagonal Strip */}
          <div className="absolute top-0 right-1/4 w-32 h-[150%] bg-[#FFD700] rotate-[35deg] transform origin-top opacity-90 shadow-2xl" />

          {/* White Diagonal Accent */}
          <div className="absolute top-0 right-[28%] w-8 h-[150%] bg-white/20 rotate-[35deg] transform origin-top blur-sm" />

          {/* Subtle Stardust Texture */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="max-w-3xl">
              <div className="w-20 h-2 bg-[#FFD700] mb-8" />
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                Let's Start a <br />
                <span className="text-[#FFD700]">Project.</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl font-medium">
                We combine strategic business understanding with technical excellence
                to deliver solutions that don't just work—they win.
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

      {/* Main Content Section */}
      <section className="relative -mt-24 z-20 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Column: Business Card Inspired Info */}
            <div className="lg:col-span-5 space-y-6">
              <AnimatedSection animation="fadeInLeft" delay={0.3}>
                <div className="bg-white p-1 rounded-3xl shadow-2xl overflow-hidden group">
                  <div className="bg-slate-900 p-10 rounded-[1.4rem] relative overflow-hidden">
                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700] -translate-x-1/2 -translate-y-1/2 rotate-45" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-10">
                        <div className="w-10 h-10 border-2 border-[#FFD700] rotate-45 flex items-center justify-center">
                          <div className="w-6 h-6 bg-[#FFD700] -rotate-45" />
                        </div>
                        <span className="text-white font-black uppercase tracking-[0.3em] text-sm">Avani Enterprises</span>
                      </div>

                      <h2 className="text-3xl font-black text-white mb-2 tracking-tight">Direct Support</h2>
                      <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-10">Available 24/7 for you</p>

                      <div className="space-y-6">
                        <a href="tel:+919253625099" className="flex items-center gap-4 group/item">
                          <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-[#FFD700] group-hover/item:bg-[#FFD700] group-hover/item:text-slate-900 transition-all">
                            <Phone className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Phone</p>
                            <p className="text-white font-bold text-lg">+91 9253625099</p>
                          </div>
                        </a>

                        <a href="mailto:kp@avanienterprises.in" className="flex items-center gap-4 group/item">
                          <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-[#FFD700] group-hover/item:bg-[#FFD700] group-hover/item:text-slate-900 transition-all">
                            <Mail className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Email</p>
                            <p className="text-white font-bold text-lg">kp@avanienterprises.in</p>
                          </div>
                        </a>

                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-[#FFD700]">
                            <MapPin className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Office</p>
                            <p className="text-white font-bold leading-tight">Gurugram, Haryana</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-12 flex gap-4">
                        <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex-1 py-4 bg-[#FFD700] text-slate-900 rounded-xl font-black text-[10px] uppercase tracking-widest text-center hover:bg-white transition-all">
                          WhatsApp
                        </a>
                        <a href="tel:+919253625099" className="flex-1 py-4 border border-slate-700 text-white rounded-xl font-black text-[10px] uppercase tracking-widest text-center hover:bg-slate-800 transition-all">
                          Call Expert
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Business Values */}
              <AnimatedSection animation="fadeInUp" delay={0.4}>
                <div className="bg-slate-100 p-8 rounded-3xl border border-slate-200">
                  <h4 className="text-slate-900 font-black text-lg mb-4">Why connect?</h4>
                  <ul className="space-y-3">
                    {['Free Consultation', 'Expert Strategy Session', 'Custom Tech Roadmap', 'Dedicated Account Manager'].map((text, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-600 text-sm font-bold uppercase tracking-tight">
                        <div className="w-1.5 h-1.5 bg-[#FFD700] rounded-full" /> {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column: Premium Compact Form */}
            <div className="lg:col-span-7">
              <AnimatedSection animation="fadeInRight" delay={0.2}>
                <div className="bg-white rounded-[1.5rem] shadow-2xl p-6 md:p-10 border border-slate-100 max-w-xl mx-auto lg:ml-auto lg:mr-0">
                  <div className="mb-8">
                    <span className="text-[#FFD700] font-black text-[10px] uppercase tracking-[0.3em] mb-2 block">Inquiry Form</span>
                    <h3 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">Send a Proposal</h3>
                    <div className="w-12 h-1 bg-[#FFD700]" />
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 block mb-1 transition-colors group-focus-within:text-[#FFD700]">Full Name *</label>
                        <input
                          type="text" name="name" required value={formData.name} onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-50 border-b border-slate-200 focus:border-[#FFD700] text-slate-900 font-bold transition-all outline-none text-sm"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="group">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 block mb-1 group-focus-within:text-[#FFD700]">Work Email *</label>
                        <input
                          type="email" name="email" required value={formData.email} onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-50 border-b border-slate-200 focus:border-[#FFD700] text-slate-900 font-bold transition-all outline-none text-sm"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 block mb-1 group-focus-within:text-[#FFD700]">Mobile Phone</label>
                        <input
                          type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-50 border-b border-slate-200 focus:border-[#FFD700] text-slate-900 font-bold transition-all outline-none text-sm"
                          placeholder="+91"
                        />
                      </div>
                      <div className="group">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 block mb-1 group-focus-within:text-[#FFD700]">Organization</label>
                        <input
                          type="text" name="company" value={formData.company} onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-50 border-b border-slate-200 focus:border-[#FFD700] text-slate-900 font-bold transition-all outline-none text-sm"
                          placeholder="Company Name"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 block mb-1 group-focus-within:text-[#FFD700]">Project Category</label>
                      <div className="relative">
                        <button
                          type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="w-full px-4 py-3 bg-slate-50 border-b border-slate-200 text-left flex justify-between items-center outline-none transition-all focus:border-[#FFD700]"
                        >
                          <span className={`font-bold text-sm ${formData.service.length === 0 ? 'text-slate-400' : 'text-slate-900'}`}>
                            {formData.service.length === 0 ? "Select Services" : `${formData.service.length} Selected`}
                          </span>
                          <ChevronUp className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? '' : 'rotate-180'}`} />
                        </button>
                        {isDropdownOpen && (
                          <div className="absolute z-50 mt-2 w-full bg-white shadow-2xl rounded-xl py-2 border border-slate-100 max-h-48 overflow-auto">
                            {services.map((service) => (
                              <div key={service} onClick={() => handleServiceToggle(service)} className="px-4 py-2 hover:bg-slate-50 cursor-pointer flex items-center gap-3">
                                <input type="checkbox" checked={formData.service.includes(service)} readOnly className="w-3.5 h-3.5 text-[#FFD700] focus:ring-[#FFD700] border-slate-300 rounded" />
                                <span className="text-xs font-bold text-slate-700">{service}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="group">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 block mb-1 group-focus-within:text-[#FFD700]">Message *</label>
                      <textarea
                        name="message" required value={formData.message} onChange={handleInputChange} rows={2}
                        className="w-full px-4 py-3 bg-slate-50 border-b border-slate-200 focus:border-[#FFD700] text-slate-900 font-bold transition-all outline-none resize-none text-sm"
                        placeholder="Detail your requirements..."
                      />
                    </div>

                    <button
                      type="submit" disabled={isLoading}
                      className="w-full py-4 bg-[#FFD700] text-slate-900 rounded-xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-slate-900 hover:text-[#FFD700] transition-all flex items-center justify-center gap-2 shadow-lg shadow-yellow-200/50"
                    >
                      {isLoading ? (
                        <div className="w-4 h-4 border-2 border-slate-900/10 border-t-slate-900 rounded-full animate-spin" />
                      ) : (
                        <>Send Proposal <Send className="w-3.5 h-3.5" /></>
                      )}
                    </button>

                    {isSubmitted && (
                      <div className="p-3 bg-emerald-50 text-emerald-700 rounded-lg font-bold text-center text-[11px] border border-emerald-100 uppercase tracking-wider">
                        Proposal sent successfully!
                      </div>
                    )}
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Immersive Map Section */}
      <section className="relative h-[550px] w-full mt-24">
        <div className="absolute inset-0 grayscale contrast-125 brightness-95">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.0893143!3d28.4594965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18f5c5c5c5c5%3A0x5c5c5c5c5c5c5c5!2sBusiness+Park%2C+Sector+15%2C+Gurgaon%2C+Haryana+122001!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full"
          />
        </div>

        {/* Floating Location Card */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-start">
          <AnimatedSection animation="fadeInLeft">
            <div className="bg-white/90 backdrop-blur-md p-10 rounded-[2rem] shadow-2xl border border-white/50 max-w-sm hidden md:block">
              <div className="w-12 h-12 bg-slate-900 text-[#FFD700] rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Visit our Studio</h3>
              <p className="text-slate-600 font-bold text-sm leading-relaxed mb-8">
                Unitech Cyber Park, Tower B,<br />
                Gurugram, Haryana 122002
              </p>
              <div className="pt-6 border-t border-slate-100 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#FFD700] shadow-sm"><Phone className="w-4 h-4" /></div>
                <span className="text-slate-900 font-black text-sm tracking-tight">+91 9253625099</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section - Refined Light Grid Accordion */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        {/* Subtle Light Background Pattern */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

        {/* Decorative Light Geometric Accents */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-slate-200/40 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#FFD700]/5 rounded-full translate-x-1/4 translate-y-1/4 blur-[80px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-slate-200 mb-6 shadow-sm">
              <span className="w-2 h-2 bg-[#FFD700] rounded-full" />
              <span className="text-slate-400 font-black text-[10px] uppercase tracking-[0.3em]">Knowledge Base</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Common Queries</h2>
            <div className="w-20 h-1 bg-[#FFD700] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.1}>
                <div
                  className={`group rounded-[2rem] transition-all duration-500 border ${openFaq === index
                      ? 'bg-white border-[#FFD700] shadow-2xl shadow-slate-200/50'
                      : 'bg-white border-slate-100 font-medium hover:border-slate-200 shadow-sm'
                    }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-8 text-left"
                  >
                    <span className={`text-lg font-bold transition-colors ${openFaq === index ? 'text-slate-900' : 'text-slate-600'}`}>
                      {faq.question}
                    </span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${openFaq === index ? 'bg-[#FFD700] text-slate-900 shadow-lg shadow-yellow-100' : 'bg-slate-50 text-slate-400 group-hover:bg-white group-hover:shadow-md'}`}>
                      <ChevronUp className={`w-5 h-5 transition-transform duration-300 ${openFaq === index ? 'rotate-0' : 'rotate-180'}`} />
                    </div>
                  </button>
                  <div
                    className={`transition-all duration-500 ease-in-out px-8 overflow-hidden ${openFaq === index ? 'max-h-60 pb-8 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <p className="text-slate-500 font-medium text-sm leading-relaxed pt-5 border-t border-slate-50 text-justify">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* FAQ Footer CTA */}
          <div className="mt-20 text-center">
            <p className="text-slate-400 font-bold mb-6">Still have questions?</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-8 py-4 rounded-xl border-2 border-slate-900 text-slate-900 font-black uppercase text-xs tracking-[0.2em] hover:bg-slate-900 hover:text-white transition-all shadow-xl shadow-slate-200"
            >
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
