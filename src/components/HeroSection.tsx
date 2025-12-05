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
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white"
    >
      {/* background white, no image */}
      <div className="absolute inset-0 bg-white z-0" aria-hidden />

      {/* soft blur effects – still visible but subtle */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left max-w-2xl"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm shadow-sm mb-6">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-medium text-slate-600">Transforming Brands Since 2016</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 mb-6">
              Smart digital growth through websites, social media <br />
              <span className="block text-slate-900"> AI automation, Google Ads & Meta Ads. </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-xl mb-8">
              We guide business owners and organizations toward strong, accelerated progress with research-backed marketing, creative tech innovations, and impactful brand renewal.
            </p>

            {/* Stats: HIDDEN on very small screens so the form on the right doesn't feel too long */}
            <div className="mt-8 hidden sm:grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <div key={s.label} className="text-left">
                  <div className={`text-3xl md:text-4xl font-bold mb-1 ${["text-sky-600","text-emerald-600","text-amber-500","text-violet-600"][i]}`}>
                    {s.value}
                  </div>
                  <div className="text-sm text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Only adjust mobile — keep laptop/desktop exactly as before */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            {/*
              Mobile: show the RegistrationForm wrapped in a compact, scrollable card so it doesn't make the page too long.
              Desktop (md and up): render the original RegistrationForm directly so laptop view remains unchanged.
            */}

            {/* Mobile-only wrapped card */}
            <div className="md:hidden w-full">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 max-h-[80vh] overflow-auto">
                <RegistrationForm />
              </div>

              <div className="mt-3 text-center">
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
              <RegistrationForm />
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}