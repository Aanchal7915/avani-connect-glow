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
    const canvas = await html2canvas(heroRef.current, { useCORS: true, scale: 2, backgroundColor: null });
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
      className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden bg-white"
    >
      {/* background white, no image */}
      <div className="absolute inset-0 bg-white z-0" aria-hidden />

      {/* soft blur effects – still visible but subtle */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-left max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-sm shadow-sm mb-4">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-xs sm:text-sm font-medium text-slate-600">Transforming Brands Since 2016</span>
            </div>

            <h1 className="font-display text-base sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-900 mb-4">
              Build high-performing websites & accelerate digital
              <span className="block text-slate-900">growth with smart marketing</span>
            </h1>

            <p className="text-xs sm:text-base md:text-lg text-slate-600 max-w-xl mb-6">
              We create high-converting websites and amplify them with strategic social media management, AI-driven automation, and high-ROI Google & Meta ad campaigns.
            </p>

            {/* Stats: HIDDEN on very small screens so the form on the right doesn't feel too long */}
            <div className="mt-6 hidden sm:grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <div key={s.label} className="text-left">
                  <div className={`text-2xl md:text-3xl font-bold mb-0 ${["text-sky-600","text-emerald-600","text-amber-500","text-violet-600"][i]}`}>
                    {s.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Only adjust mobile — keep laptop/desktop exactly as before */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="relative"
          >
            {/*
              Mobile: show the RegistrationForm wrapped in a compact, scrollable card so it doesn't make the page too long.
              Desktop (md and up): render the original RegistrationForm directly so laptop view remains unchanged.
            */}

            {/* Mobile-only wrapped card */}
            <div className="md:hidden w-full">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-3 sm:p-4 max-h-[70vh] overflow-auto touch-auto">
                <RegistrationForm />
              </div>

              <div className="mt-2 text-center">
                <button
                  onClick={exportAsImage}
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-700"
                >
                  <ArrowRight className="w-4 h-4" /> Download snapshot
                </button>
              </div>
            </div>

            {/* Desktop/laptop: exact original render (no wrapper) */}
            <div className="hidden md:block w-full">
              <div className="p-0">{/* keep spacing identical to original desktop layout */}
                <RegistrationForm />
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}