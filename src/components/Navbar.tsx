import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    {
      name: "Resources",
      dropdown: [
        { name: "Blog", path: "/blog" },
        { name: "Courses", path: "/courses" },
        { name: "Case Studies", path: "/case-studies" },
      ],
    },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const isActiveDropdown = (dropdown: any[]) => {
    return dropdown.some((item) => location.pathname === item.path);
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out font-sans
        ${isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-sm py-2"
          : "bg-transparent py-4"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

          {/* LEFT: Logo Section */}
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
              <span className="text-[22px] font-black tracking-tight truncate transition-colors duration-300 text-amber-500">
                Avani Enterprises
              </span>
            </Link>
          </div>

          {/* CENTER: Navigation Links with Dropdowns */}
          <div className="hidden lg:flex items-center justify-center flex-shrink-0" ref={dropdownRef}>
            <div className="flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => {
                if (item.dropdown) {
                  const isActive = isActiveDropdown(item.dropdown);
                  return (
                    <div key={item.name} className="relative">
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="relative px-3 xl:px-5 py-2 group whitespace-nowrap flex items-center gap-1"
                      >
                        <motion.span
                          className={`text-[14.5px] font-bold tracking-wide transition-all duration-300
                            ${isActive || openDropdown === item.name
                              ? "text-amber-600"
                              : "text-amber-500 hover:text-amber-600"
                            }
                          `}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                          {item.name}
                        </motion.span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            openDropdown === item.name ? "rotate-180" : ""
                          } ${isActive || openDropdown === item.name ? "text-amber-600" : "text-amber-500"}`}
                        />

                        {/* Animated Underline */}
                        <motion.div
                          className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 bg-amber-600 rounded-full"
                          initial={{ width: isActive ? "4px" : 0 }}
                          animate={{ width: openDropdown === item.name ? "100%" : isActive ? "4px" : 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                          >
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                onClick={() => setOpenDropdown(null)}
                                className={`block px-4 py-3 text-sm font-semibold transition-colors ${
                                  location.pathname === subItem.path
                                    ? "bg-amber-50 text-amber-600"
                                    : "text-gray-700 hover:bg-gray-50"
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="relative px-3 xl:px-5 py-2 group whitespace-nowrap"
                  >
                    <motion.span
                      className={`text-[14.5px] font-bold tracking-wide transition-all duration-300
                        ${isActive
                          ? "text-amber-600"
                          : "text-amber-500 hover:text-amber-600"
                        }
                      `}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {item.name}
                    </motion.span>

                    {/* Animated Underline */}
                    <motion.div
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 bg-amber-600 rounded-full"
                      initial={{ width: isActive ? "4px" : 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Actions Section */}
          <div className="hidden lg:flex flex-1 items-center justify-end space-x-6 min-w-0">
            <motion.a
              href="tel:+919253625099"
              className="p-2.5 bg-amber-50 text-amber-600 rounded-full hover:bg-amber-100 transition-all duration-300 shadow-sm border border-amber-100"
              title="Call Us"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Phone size={18} />
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to="/get-consultation"
                className="bg-gradient-to-r from-amber-400 to-orange-500 
                text-white px-7 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap
                shadow-[0_4px_12px_rgba(245,158,11,0.15)] hover:shadow-[0_8px_20px_rgba(245,158,11,0.3)]
                transition-all duration-300 inline-block"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="lg:hidden flex items-center ml-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl transition-all duration-300 bg-slate-100 text-slate-900 shadow-sm"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE OVERLAY */}
        {isOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[70px] mx-4 bg-white shadow-2xl rounded-3xl border border-slate-100 overflow-hidden animate-fadeInDown max-h-[80vh] overflow-y-auto">
            <div className="p-5 space-y-1">
              {navItems.map((item) => {
                if (item.dropdown) {
                  const isDropdownActive = isActiveDropdown(item.dropdown);
                  return (
                    <div key={item.name}>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl text-[15px] font-semibold transition-all ${
                          isDropdownActive || openDropdown === item.name
                            ? "bg-amber-50 text-amber-600"
                            : "text-slate-500 hover:bg-slate-50"
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            openDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-4 mt-1 space-y-1 pb-2">
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.path}
                                  to={subItem.path}
                                  onClick={() => {
                                    setIsOpen(false);
                                    setOpenDropdown(null);
                                  }}
                                  className={`block px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                                    location.pathname === subItem.path
                                      ? "bg-amber-100 text-amber-700"
                                      : "text-slate-400 hover:bg-slate-50 hover:text-slate-700"
                                  }`}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-6 py-4 rounded-2xl text-[15px] font-semibold transition-all
                      ${location.pathname === item.path
                        ? "bg-amber-50 text-amber-600"
                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                      }
                    `}
                  >
                    {item.name}
                    {location.pathname === item.path && <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />}
                  </Link>
                );
              })}

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
