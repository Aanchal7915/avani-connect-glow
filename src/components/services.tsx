// import { motion } from "framer-motion";
// import { 
//   Code, 
//   Search, 
//   Share2, 
//   BrainCircuit, 
//   Mic, 
//   TrendingUp,
//   ArrowUpRight
// } from "lucide-react";

// const services = [
//   {
//     icon: Code,
//     title: "Web & App Development",
//     description: "Custom websites and mobile apps that drive conversions and user engagement with cutting-edge technology.",
//     color: "from-blue-500 to-cyan-500",
//   },
//   {
//     icon: Search,
//     title: "SEO & Content Marketing",
//     description: "Data-driven SEO strategies and compelling content that ranks higher and converts visitors into customers.",
//     color: "from-green-500 to-emerald-500",
//   },
//   {
//     icon: Share2,
//     title: "Social Media Marketing",
//     description: "Strategic SMM campaigns that build brand awareness, drive engagement, and grow your online presence.",
//     color: "from-pink-500 to-rose-500",
//   },
//   {
//     icon: BrainCircuit,
//     title: "AI Solutions",
//     description: "Cutting-edge AI integration for automation, analytics, and intelligent decision-making systems.",
//     color: "from-violet-500 to-purple-500",
//   },
//   {
//     icon: Mic,
//     title: "Podcast Production",
//     description: "Professional podcast creation and distribution to amplify your brand voice and reach new audiences.",
//     color: "from-orange-500 to-amber-500",
//   },
//   {
//     icon: TrendingUp,
//     title: "Financial Consulting",
//     description: "Strategic financial planning and investment guidance to fuel sustainable business growth.",
//     color: "from-teal-500 to-cyan-500",
//   },
// ];

// const ServicesSection = () => {
//   return (
//     <section id="services" className="py-24 relative">
//       <div className="container mx-auto px-4 lg:px-8">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-3xl mx-auto mb-16"
//         >
//           <span className="inline-block px-4 py-2 rounded-full glass text-accent text-sm font-medium mb-4">
//             Our Services
//           </span>
//           <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
//             Comprehensive Digital{" "}
//             <span className="text-gradient">Solutions</span>
//           </h2>
//           <p className="text-muted-foreground text-lg">
//             From web development to AI integration, we provide end-to-end digital 
//             solutions that drive growth and deliver measurable results.
//           </p>
//         </motion.div>

//         {/* Services Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <motion.div
//               key={service.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ y: -8, transition: { duration: 0.3 } }}
//               className="group relative p-8 rounded-2xl bg-card/80 border border-border/50 hover:border-primary/50 transition-all duration-300"
//             >
//               {/* Icon */}
//               <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-[2px] mb-6 group-hover:scale-110 transition-transform duration-300`}>
//                 <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
//                   <service.icon className="w-6 h-6 text-primary" />
//                 </div>
//               </div>

//               {/* Content */}
//               <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
//                 {service.title}
//               </h3>
//               <p className="text-muted-foreground leading-relaxed mb-4">
//                 {service.description}
//               </p>

//               {/* Link */}
//               <a
//                 href="#contact"
//                 className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all"
//               >
//                 Learn More
//                 <ArrowUpRight className="w-4 h-4" />
//               </a>

//               {/* Hover Glow Effect */}
//               <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;




















