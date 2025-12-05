// src/components/HeroSection.jsx
import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import html2canvas from "html2canvas";
import { Button } from "@/components/ui/button";
import profilePlaceholder from "@/assets/profile-placeholder.jpg"; 

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
              Boost your brand’s using customized<br />
              <span className="block text-slate-900"> digital approaches </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-xl mb-8">
              We guide business owners and organizations toward strong, accelerated progress with research-backed marketing, creative tech innovations, and impactful brand renewal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact" className="group inline-flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <Button variant="glass" size="xl" asChild>
                <a href="#services" className="inline-flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Explore Services
                </a>
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
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

          {/* Right Side Card */}
      <motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.15 }}
  className="relative"
>
  {/* Desktop Card */}
  <div className="hidden lg:block w-full h-[500px] relative">
    <div
      className="absolute right-0 top-8 w-[420px] h-[500px] rounded-3xl bg-white shadow-xl p-8 flex flex-col items-center border border-slate-100"
      style={{ boxShadow: "0 8px 25px rgba(0,0,0,0.07)" }}
    >
      {/* Top Heading */}
      <div className="text-center mb-6">
        <p className="text-xl font-semibold text-slate-800 tracking-wide">
          Meet Your Guide
        </p>
        <p className="text-sm text-slate-500 mt-1">
          Helping you make the right decisions.
        </p>
      </div>

      {/* Profile Image */}
      <div
        className="w-40 h-40 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden mb-6"
        style={{ boxShadow: "0 6px 18px rgba(0,0,0,0.08)" }}
      >
        <img src={profilePlaceholder} alt="profile" className="w-full h-full object-cover" />
      </div>

      {/* Name + Role */}
      <h3 className="text-2xl font-bold text-slate-900 mb-1">Kapil Khandelwal</h3>
      <p className="text-sm text-slate-500 text-center max-w-[260px]">
        Co-founder of Avani Enterprises
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-slate-200 my-6"></div>

      {/* Contact Button ONLY */}
      <a
        href="#contact"
        className="w-full py-3.5 rounded-lg bg-slate-900 text-white font-medium tracking-wide
                  text-center block hover:bg-slate-800 transition"
      >
        Contact Now
      </a>
    </div>
  </div>

  {/* Mobile Card */}
  <div className="block lg:hidden">
    <div className="w-full rounded-2xl bg-white p-5 shadow-md border border-slate-100">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-slate-100 overflow-hidden shadow">
          <img src={profilePlaceholder} alt="profile" className="w-full h-full object-cover" />
        </div>

        <div>
          <div className="font-semibold text-lg">Kapil Khandelwal</div>
          <div className="text-xs text-slate-500">
            Co-founder of Avani Enterprises
          </div>
        </div>
      </div>

      <a
        href="#contact"
        className="mt-4 w-full inline-block py-3 rounded bg-slate-900 text-white text-sm font-medium text-center hover:bg-slate-800 transition"
      >
        Contact Now
      </a>
    </div>
  </div>
</motion.div>


        </div>
      </div>
    </section>
  );
}
