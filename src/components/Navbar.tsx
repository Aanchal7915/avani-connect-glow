import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Courses", path: "/courses" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out font-sans
        ${isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-sm py-3"
          : "bg-transparent py-6"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

          {/* LEFT: Logo Section (Balanced) */}
          <div className="flex-1 flex items-center justify-start min-w-0">
            <Link to="/" className="flex items-center space-x-3 group min-w-0">
              <div className="relative flex-shrink-0">
                <img
                  src="/logo0.jpg"
                  alt="Avani Enterprises"
                  className="h-10 w-10 md:h-11 md:w-11 rounded-xl shadow-md transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-amber-500 rounded-full border-2 border-white shadow-sm" />
              </div>
              <span className={`text-[22px] font-black tracking-tight truncate transition-colors duration-300 text-amber-500`}>
                Avani Enterprises
              </span>
            </Link>
          </div>

          {/* CENTER: Navigation Links (Robust Layout) */}
          <div className="hidden lg:flex items-center justify-center flex-shrink-0">
            <div className="flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="relative px-3 xl:px-5 py-2 group whitespace-nowrap"
                  >
                    <span className={`text-[14.5px] font-bold tracking-wide transition-all duration-300
                      ${isActive
                        ? "text-amber-600"
                        : "text-amber-500 hover:text-amber-600"
                      }
                    `}>
                      {link.name}
                    </span>

                    {/* Minimalist Active Indicator */}
                    {isActive && (
                      <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-600 rounded-full" />
                    )}

                    {/* Subtle Hover Reveal */}
                    {!isActive && (
                      <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-500/0 rounded-full transition-all duration-300 group-hover:bg-amber-600" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Actions Section (Updated) */}
          <div className="hidden lg:flex flex-1 items-center justify-end space-x-6 min-w-0">
            <a
              href="tel:+919253625099"
              className="p-2.5 bg-amber-50 text-amber-600 rounded-full hover:bg-amber-100 transition-all duration-300 shadow-sm border border-amber-100"
              title="Call Us"
            >
              <Phone size={18} />
            </a>

            <Link
              to="/get-consultation"
              className="bg-gradient-to-r from-amber-400 to-orange-500 
              text-white px-7 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap
              shadow-[0_4px_12px_rgba(245,158,11,0.15)] hover:shadow-[0_8px_20px_rgba(245,158,11,0.3)]
              hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="lg:hidden flex items-center ml-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-all duration-300 ${isScrolled ? "bg-slate-100 text-slate-900 shadow-sm" : "bg-slate-100 text-slate-900 shadow-sm"
                }`}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE OVERLAY (Enhanced) */}
        {isOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[76px] mx-4 bg-white shadow-2xl rounded-3xl border border-slate-100 overflow-hidden animate-fadeInDown">
            <div className="p-5 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-6 py-4 rounded-2xl text-[15px] font-semibold transition-all
                    ${location.pathname === link.path
                      ? "bg-amber-50 text-amber-600"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                    }
                  `}
                >
                  {link.name}
                  {location.pathname === link.path && <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />}
                </Link>
              ))}

              <div className="pt-4 mt-2 flex flex-col gap-3">
                <a
                  href="tel:+919253625099"
                  className="flex items-center justify-center space-x-3 text-slate-500 font-medium text-sm py-4 border-t border-slate-50"
                >
                  <Phone size={16} className="text-amber-500" />
                  <span>Talk to Experts</span>
                </a>

                <Link
                  to="/get-consultation"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-gradient-to-r from-amber-400 to-orange-500 
                  text-white py-4 rounded-2xl font-bold text-center shadow-lg shadow-amber-100"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;















