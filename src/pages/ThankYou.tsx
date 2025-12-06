import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Mail, Phone } from "lucide-react";

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, service } =
    (location.state as { name?: string; service?: string | string[] }) || {};

  const formattedService = Array.isArray(service) ? service.join(", ") : service;

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
            className="mb-5"
          >
            <div className="h-[20px]"></div>
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

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12"
            >
              {/* Logo + Get Consultation Button */}
              <div className="flex items-center justify-center gap-6 mb-4">
                <img
                  src="./avani-logo.jpg"
                  alt="Avani Enterprises Logo"
                  className="w-20 h-20 object-contain rounded-md shadow-sm"
                />

                {/* ✅ UPDATED STYLING ONLY – same functionality */}
                <a
                  href="https://wa.me/919311967319"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get consultation on WhatsApp"
                  className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full
                             bg-primary text-primary-foreground
                             shadow-lg shadow-primary/30
                             hover:bg-primary/90 hover:shadow-primary/50
                             backdrop-blur-sm border border-primary/60
                             text-sm font-semibold tracking-wide transition-all"
                >
                  <span>Get Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto"
            >
              {formattedService ? (
                <>
                  Your inquiry for{" "}
                  <span className="text-accent font-semibold">
                    {formattedService}
                  </span>{" "}
                  has been received. Our team will contact you within 24 hours
                  to discuss how we can help transform your business.
                </>
              ) : (
                <>
                  Your submission has been received successfully. Our team will
                  reach out to you shortly with the next steps.
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
                    <h4 className="font-semibold text-foreground text-sm">
                      {item.title}
                    </h4>
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
                href="mailto:kp@avanienterprises.in"
                className="flex items-center justify-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>kp@avanienterprises.in</span>
              </a>
              {/* ✅ PHONE NUMBER UNIFIED TO +919311967319 */}
              <a
                href="tel:+919311967319"
                className="flex items-center justify-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+919311967319</span>
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
