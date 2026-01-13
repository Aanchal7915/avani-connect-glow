import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ChevronUp
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const GetConsultation = () => {
  const whatsappNumber = '919253625099';
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: [],
    message: ""
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPaying, setIsPaying] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    setIsPaying(true);

    // Redirect to payment link
    setTimeout(() => {
      window.location.href = 'https://razorpay.com/payment-link/plink_Qj3KCQT62VWolN';
    }, 500);
  };

  const services = [
    "Web & App Development",
    "SEO and Content Marketing",
    "Social Media Marketing",
    "AI Solutions",
    "Podcast Production",
    "Financial Consulting"
  ];

  const amount = 4999;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center py-20 overflow-hidden bg-[#0f172a]">
        {/* Background Geometric Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large Diagonal Navy/Blue Shape */}
          <div className="absolute -top-24 -right-20 w-[120%] h-full bg-[#1e293b] -rotate-12 transform origin-top-right shadow-2xl" />

          {/* Yellow Diagonal Strip */}
          <div className="absolute top-0 right-1/4 w-32 h-[150%] bg-[#FFD700] rotate-[35deg] transform origin-top opacity-40 shadow-2xl" />

          {/* Subtle Stardust Texture */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="max-w-3xl relative">
              <div className="w-20 h-2 bg-[#FFD700] mb-8" />
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                Book Expert <br />
                <span className="text-[#FFD700]">Consultation.</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl font-medium">
                Unlock business growth with a 1:1 session with our senior consultants.
                Get strategic guidance tailored for your business.
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
      <section className="relative -mt-24 z-20 pb-24 bg-gradient-to-b from-transparent via-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Column: Info Card */}
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
                        <span className="text-white font-black uppercase tracking-[0.3em] text-sm">EXPERT SUPPORT</span>
                      </div>

                      <h2 className="text-3xl font-black text-white mb-2 tracking-tight">Get in Touch</h2>
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

                        <a
                          href="https://maps.app.goo.gl/h4wX8BCPpE3BCsg56?g_st=ipc"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 group/item"
                        >
                          <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-[#FFD700] group-hover/item:bg-[#FFD700] group-hover/item:text-slate-900 transition-all">
                            <MapPin className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Office</p>
                            <p className="text-white font-bold leading-tight text-xs">
                              Tower B, 3rd Floor, Unitech Cyber Park, <br />
                              Sector 39, Gurugram, Haryana 122002
                            </p>
                          </div>
                        </a>
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

              {/* Consultation Benefits */}
              <AnimatedSection animation="fadeInUp" delay={0.4}>
                <div className="bg-slate-100 p-8 rounded-3xl border border-slate-200">
                  <h4 className="text-slate-900 font-black text-lg mb-4">What You Get</h4>
                  <ul className="space-y-3">
                    {['60-Min Strategy Session', '1:1 Expert Consultation', 'Custom Growth Roadmap', 'Actionable Insights'].map((text, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-600 text-sm font-bold uppercase tracking-tight">
                        <div className="w-1.5 h-1.5 bg-[#FFD700] rounded-full" /> {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column: Booking Form */}
            <div className="lg:col-span-7">
              <AnimatedSection animation="fadeInRight" delay={0.2}>
                <div className="bg-white rounded-[1.5rem] shadow-2xl p-6 md:p-10 border border-slate-100 max-w-xl mx-auto lg:ml-auto lg:mr-0">
                  <div className="mb-8">
                    <span className="text-[#FFD700] font-black text-[10px] uppercase tracking-[0.3em] mb-2 block">BOOKING FORM</span>
                    <h3 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">Reserve Your Slot</h3>
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
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 block mb-1 group-focus-within:text-[#FFD700]">Mobile Phone *</label>
                        <input
                          type="tel" name="phone" required value={formData.phone} onChange={handleInputChange}
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
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 block mb-1 group-focus-within:text-[#FFD700]">Interested Services</label>
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
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 block mb-1 group-focus-within:text-[#FFD700]">Message</label>
                      <textarea
                        name="message" value={formData.message} onChange={handleInputChange} rows={2}
                        className="w-full px-4 py-3 bg-slate-50 border-b border-slate-200 focus:border-[#FFD700] text-slate-900 font-bold transition-all outline-none resize-none text-sm"
                        placeholder="Brief description of your needs..."
                      />
                    </div>

                    {/* Price Display */}
                    <div className="bg-[#FFD700]/10 rounded-xl p-6 text-center border border-[#FFD700]/20">
                      <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-1">Consultation Fee</div>
                      <div className="text-3xl font-bold text-slate-900">₹{(amount).toLocaleString("en-IN")}</div>
                      <div className="text-xs text-slate-500 mt-1">One-time payment • 60 min session</div>
                    </div>

                    <button
                      type="submit"
                      disabled={isPaying}
                      className="w-full py-4 bg-[#FFD700] text-slate-900 rounded-xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-slate-900 hover:text-[#FFD700] transition-all flex items-center justify-center gap-2 shadow-lg shadow-yellow-200/50"
                    >
                      {isPaying ? (
                        <div className="w-4 h-4 border-2 border-slate-900/10 border-t-slate-900 rounded-full animate-spin" />
                      ) : (
                        <>Pay ₹{(amount).toLocaleString("en-IN")} & Book <Send className="w-3.5 h-3.5" /></>
                      )}
                    </button>

                    {isSubmitted && (
                      <div className="p-3 bg-emerald-50 text-emerald-700 rounded-lg font-bold text-center text-[11px] border border-emerald-100 uppercase tracking-wider">
                        Redirecting to payment...
                      </div>
                    )}

                    <div className="text-center text-slate-500 text-xs">
                      100% secure payment via Razorpay. You'll receive a confirmation email after booking.
                    </div>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetConsultation;
