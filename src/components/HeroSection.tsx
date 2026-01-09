// src/components/HeroSection.tsx
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Globe, Search, Share2, Brain, TrendingUp, Zap } from "lucide-react";
import RegistrationForm from "@/components/RegistrationForm";

const stats = [
  { value: "150+", label: "Happy Clients", color: "text-blue-400" },
  { value: "300+", label: "Projects Completed", color: "text-purple-400" },
  { value: "85%", label: "Average Growth", color: "text-green-400" },
  { value: "8+", label: "Years Experience", color: "text-orange-400" },
];

const highlights = [
  "High-converting websites",
  "Strategic social media",
  "AI-driven automation",
  "Google & Meta Ads",
];

const serviceCards = [
  { icon: Globe, label: "Web Development", color: "from-blue-400 to-cyan-400" },
  { icon: Share2, label: "Social Media", color: "from-pink-400 to-rose-400" },
  { icon: Search, label: "SEO & Content", color: "from-green-400 to-emerald-400" },
  { icon: TrendingUp, label: "Ads & Analytics", color: "from-orange-400 to-amber-400" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Decorative Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-gray-200">
                Transforming Brands Since 2016
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Transform Your Brand with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Strategic Digital Solutions
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              We help entrepreneurs and businesses achieve exponential growth through data-driven digital marketing, innovative technology, and strategic brand transformation.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-3 mb-8 max-w-md mx-auto lg:mx-0">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              {stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className={`text-2xl sm:text-3xl font-bold mb-1 ${s.color}`}>
                    {s.value}
                  </div>
                  <div className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Visual Dashboard + Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full"
          >
            {/* Decorative Glass Panel with Service Cards */}
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-white/10">

              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Our Services</h3>
                  <p className="text-gray-400 text-sm">Complete digital solutions</p>
                </div>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {serviceCards.map((service, index) => (
                  <motion.div
                    key={service.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/5 hover:bg-white/15 transition-colors group"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-white font-medium text-sm">{service.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Stats Bar */}
              <div className="flex items-center justify-between bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-400">98%</div>
                  <div className="text-xs text-gray-400">Client Satisfaction</div>
                </div>
                <div className="h-8 w-px bg-white/20" />
                <div className="text-center">
                  <div className="text-xl font-bold text-purple-400">24/7</div>
                  <div className="text-xs text-gray-400">Support</div>
                </div>
                <div className="h-8 w-px bg-white/20" />
                <div className="text-center">
                  <div className="text-xl font-bold text-green-400">3x</div>
                  <div className="text-xs text-gray-400">Avg ROI</div>
                </div>
              </div>

            </div>

            {/* Registration Form Below - Mobile & Desktop */}
            <div className="mt-6">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <RegistrationForm uniqueConsentId={"registrationFormHero"} />
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}