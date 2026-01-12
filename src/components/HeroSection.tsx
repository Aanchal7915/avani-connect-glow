// src/components/HeroSection.jsx
import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import html2canvas from "html2canvas";
import { Button } from "@/components/ui/button";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";
import RegistrationForm from "@/components/RegistrationForm"; // ADDED: registration form import

const stats = [
  { value: "150+", label: "Happy Clients" },
  { value: "300+", label: "Projects Completed" },
  { value: "85%", label: "Average Growth" },
  { value: "8+", label: "Years Experience" },
];

export default function HeroSection() {
  const heroRef = useRef(null);

  const exportAsImage = async () => {
    if (!heroRef.current) return;
    const canvas = await html2canvas(heroRef.current, { useCORS: true, scale: 2, backgroundColor: "#0b1220" });
    const dataURL = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = dataURL;
    a.download = "hero-snapshot.png";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[95vh] flex items-center pt-24 sm:pt-28 md:pt-24 overflow-hidden bg-[#0b1220]"
    >
      {/* BACKGROUND: Corporate Geometric Theme */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Main Navy Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220] via-[#0f172a] to-[#0b1220]" />

        {/* Geometric Architectural Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-full bg-[#FFD700] skew-x-12 transform origin-top-right transition-transform duration-1000" />
        </div>

        {/* Diagonal Stripes Accent */}
        <div className="absolute -left-20 top-0 w-40 h-[200%] bg-white/5 -rotate-45 blur-2xl font-sans" />

        {/* Stardust Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] animate-pulse-slow delay-700" />

        {/* Bottom Fade Transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start lg:items-center">

          {/* Left Side: Content Bundle */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0 w-full"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl mb-8">
              <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-amber-500/80">Transforming Brands Since 2016</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-white mb-6 tracking-tight">
              Build high-performing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-amber-400 font-sans">Websites</span> & accelerate growth
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
              We create high-converting websites and amplify them with strategic social media management, AI-driven automation, and high-ROI Google & Meta ad campaigns.
            </p>

            {/* Stats Bundles */}
            <div className="mt-8 hidden sm:grid grid-cols-2 md:grid-cols-4 gap-8 font-sans">
              {stats.map((s, i) => (
                <div key={s.label} className="text-center lg:text-left group cursor-default">
                  <div className={`text-3xl md:text-4xl lg:text-5xl font-black mb-2 transition-transform duration-300 group-hover:scale-110 ${["text-sky-400", "text-emerald-400", "text-amber-400", "text-violet-400"][i]}`}>
                    {s.value}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-slate-300 transition-colors">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Visual/Form Bundle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative w-full"
          >
            {/* Form Container with High-End Styling */}
            <div className="w-full relative group">
              {/* Animated Glow Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-amber-500/20 to-purple-500/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

              <div className="relative bg-white/[0.03] backdrop-blur-2xl rounded-[2.5rem] border border-white/10 shadow-3xl overflow-hidden font-sans">
                <div className="p-1 sm:p-2">
                  <RegistrationForm uniqueConsentId={"registrationForm1"} />
                </div>
              </div>

              {/* Utility Action */}
              <div className="mt-6 text-center">
                <button
                  onClick={exportAsImage}
                  className="inline-flex items-center gap-2.5 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-white transition-all duration-300 group/btn"
                >
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  Download Business Brief
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
