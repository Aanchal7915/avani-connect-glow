import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Home, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import avaniLogo from "@/assets/avani-logo.jpg";

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, service } = (location.state as { name?: string; service?: string }) || {};

  useEffect(() => {
    if (!name) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [name, navigate]);

  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden pb-3">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center glow">
              <CheckCircle className="w-12 h-12 text-accent-foreground" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-3xl p-8 md:p-12 card-shadow"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            >
              Thank You{name ? `, ${name}` : ""}!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto"
            >
              {service ? (
                <>
                  Your inquiry for <span className="text-accent font-semibold">{service}</span> has been
                  received. Our team will contact you within 24 hours to discuss how we can help
                  transform your business.
                </>
              ) : (
                <>
                  Your submission has been received successfully. Our team will reach out to you
                  shortly with the next steps.
                </>
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-secondary/50 rounded-2xl p-6 mb-8"
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                What Happens Next?
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { step: "1", title: "Review", desc: "We analyze your requirements" },
                  { step: "2", title: "Contact", desc: "Expert reaches out within 24hrs" },
                  { step: "3", title: "Strategy", desc: "Free consultation call" },
                ].map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="w-10 h-10 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-2">
                      <span className="text-accent font-bold">{item.step}</span>
                    </div>
                    <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row justify-center gap-6 mb-8"
            >
              <a
                href="mailto:contact@avanienterprises.com"
                className="flex items-center justify-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>kp@avanienterprises.in</span>
              </a>
              <a
                href="tel:+919253625099"
                className="flex items-center justify-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+91 9253625099</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            ></motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12"
          >
            {/* ✅ ADDED LOGO + WHATSAPP BUTTON */}
            <div className="flex items-center justify-center gap-6 mb-4">
              <img
                src={avaniLogo}
                alt="Avani Enterprises Logo"
                className="w-20 h-20 object-contain rounded-md shadow-sm"
              />

              <a
                href="https://wa.me/919253625099"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-600/10 hover:bg-green-600/20 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-600"
                >
                  <path d="M21.05 2.95a11 11 0 0 0-15.56 15.56L2 22l3.49-1.49A11 11 0 1 0 21.05 2.95z" />
                  <path d="M17.5 14.5c-.3-.15-1.73-.85-2-.95-.27-.1-.47-.15-.67.15s-.77.95-.95 1.15c-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.77-1.49-1.72-1.66-2.02-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.28.3-.47.1-.18.05-.35-.02-.5-.07-.15-.67-1.6-.92-2.2-.24-.57-.48-.5-.67-.51-.17-.01-.36-.01-.55-.01s-.5.07-.76.35c-.26.28-1 1-1 2.43s1.03 2.83 1.17 3.03c.14.2 2.02 3.08 4.9 4.31 2.88 1.24 3.3.87 3.89.82.59-.05 1.9-.77 2.17-1.52.27-.75.27-1.39.19-1.52-.08-.13-.27-.18-.57-.33z" />
                </svg>

                <div className="text-left">
                  <div className="text-sm font-semibold">Chat on WhatsApp</div>
                  <div className="text-xs text-muted-foreground">+91 9253625099</div>
                </div>
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Avani Enterprises. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default ThankYou;
