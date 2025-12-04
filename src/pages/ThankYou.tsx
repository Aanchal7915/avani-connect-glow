import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Home, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, service } = (location.state as { name?: string; service?: string }) || {};

  useEffect(() => {
    // If no state (direct access), redirect to home after delay
    if (!name) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [name, navigate]);

  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
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
          {/* Success Icon */}
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

          {/* Content Card */}
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

            {/* What's Next */}
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

            {/* Contact Info */}
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
                <span>contact@avanienterprises.com</span>
              </a>
              <a
                href="tel:+919253625099"
                className="flex items-center justify-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+91 9253625099</span>
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {/* <Button variant="hero" size="lg" asChild>
                <Link to="/" className="group">
                  <Home className="w-5 h-5" />
                  Back to Home
                </Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/#portfolio" className="group">
                  Explore Portfolio
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button> */}
            </motion.div>
          </motion.div>

          {/* Decorative Elements */}
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
