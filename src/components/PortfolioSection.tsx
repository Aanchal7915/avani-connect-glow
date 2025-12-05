// import { motion } from "framer-motion";
// import { ExternalLink, ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const portfolioItems = [
//   {
//     title: "E-Commerce Platform",
//     category: "Web Development",
//     description: "Modern e-commerce solution with AI-powered recommendations",
//     image: "src/assets/s4.jpg",
//     stats: { growth: "+180%", metric: "Sales Growth" },
//   },
//   {
//     title: "Balaji Shakewala",
//     category: "Web Development",
//     description: "Listing of each menu items",
//     image: "src/assets/s4.jpg",
//     stats: { growth: "+250%", metric: "User Engagement" },
//   },
//   {
//     title: "Hospital Website",
//     category: "Web Development",
//     description: "User-friendly hospital website designed to provide information and services",
//     image: "src/assets/s2.jpg",
//     stats: { growth: "+320%", metric: "Lead Generation" },
//   },
//   {
//     title: "Shoe website",
//     category: "Web Development",
//     description: "A stylish and easy-to-use website offering the all cateogies of footwear.",
//     image: "src/assets/s4.jpg",
//     stats: { growth: "+95%", metric: "App Downloads" },
//   },
//   {
//     title: "Hi-tech property",
//     category: "Web Developemnt",
//     description: "A professional and efficient website built to manage operations related property",
//     image: "src/assets/s5.jpg",
//     stats: { growth: "-60%", metric: "Support Tickets" },
//   },
//   {
//     title: "Insurance Website",
//     category: "Web Developemnt",
//     description: "A reliable and easy-to-navigate insurance website offering clear plans and quick support",
//     image: "src/assets/s6.jpg",
//     stats: { growth: "+500K", metric: "Monthly Listeners" },
//   },
// ];

// const PortfolioSection = () => {
//   return (
//     <section id="portfolio" className="py-24 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
//       </div>

//       <div className="container mx-auto px-4 lg:px-8 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-3xl mx-auto mb-16"
//         >
//           <span className="inline-block px-4 py-2 rounded-full glass text-accent text-sm font-medium mb-4">
//             Our Work
//           </span>
//           <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
//             Featured <span className="text-gradient">Portfolio</span>
//           </h2>
//           <p className="text-muted-foreground text-lg">
//             Discover how we've helped businesses transform their digital presence 
//             and achieve remarkable growth.
//           </p>
//         </motion.div>

//         {/* Portfolio Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {portfolioItems.map((item, index) => (
//             <motion.div
//               key={item.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="group relative rounded-2xl overflow-hidden glass card-shadow"
//             >
//               {/* Image */}
//               <div className="relative h-56 overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
//                 {/* Category Badge */}
//                 <div className="absolute top-4 left-4">
//                   <span className="px-3 py-1 rounded-full bg-accent/90 text-accent-foreground text-xs font-medium">
//                     {item.category}
//                   </span>
//                 </div>

//                 {/* Stats Badge */}
//                 <div className="absolute top-4 right-4 glass rounded-lg px-3 py-2 text-center">
//                   <div className="text-accent font-bold text-lg">{item.stats.growth}</div>
//                   <div className="text-xs text-muted-foreground">{item.stats.metric}</div>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
//                   {item.title}
//                 </h3>
//                 <p className="text-muted-foreground text-sm mb-4">
//                   {item.description}
//                 </p>
//                 <a
//                   href="#contact"
//                   className="inline-flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all"
//                 >
//                   View Case Study
//                   <ExternalLink className="w-4 h-4" />
//                 </a>
//               </div>

//               {/* Hover Overlay */}
//               <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4 }}
//           className="text-center mt-12"
//         >
//           <Button variant="glass" size="lg" asChild>
//             <a href="#contact" className="group">
//               Start Your Project
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </a>
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default PortfolioSection;






















import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "Scalable e-commerce platform with AI product recommendations, speedy checkout, and a conversion-focused UI.",
    image: "./s4.jpg",
    stats: { growth: "+180%", metric: "Sales Growth" },
  },
  {
    title: "Balaji Shakewala",
    category: "Web Development",
    description:
      "Menu-first restaurant site featuring clear item listings, easy ordering flow, and appetizing visuals to drive sales.",
    image: "./s1.jpg",
    stats: { growth: "+250%", metric: "User Engagement" },
  },
  {
    title: "Hospital Website",
    category: "Web Development",
    description:
      "Accessible hospital site with services overview, doctor profiles, appointment booking and patient resources.",
    image: "./s2.jpg",
    stats: { growth: "+320%", metric: "Lead Generation" },
  },
  {
    title: "Shoe Website",
    category: "Web Development",
    description:
      "Responsive footwear catalogue with category filters, size guides, and a streamlined purchase experience.",
    image: "./s3.jpg",
    stats: { growth: "+95%", metric: "App Downloads" },
  },
  {
    title: "Hi-tech Property",
    category: "Web Development",
    description:
      "Professional property management portal with listings, lead capture, and admin tools for efficient operations.",
    image: "./s6.jpg",
    stats: { growth: "-60%", metric: "Support Tickets" },
  },
  {
    title: "Insurance Website",
    category: "Web Development",
    description:
      "Clear plan comparison, quick quote requests, and secure policy management designed for trust and clarity.",
    image: "./s5.jpg",
    stats: { growth: "+500K", metric: "Monthly Leads" },
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-accent text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover how we've helped businesses transform their digital presence 
            and achieve remarkable growth.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden glass card-shadow"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-accent/90 text-accent-foreground text-xs font-medium">
                    {item.category}
                  </span>
                </div>

                {/* NOTE: removed the top-right stats badge as requested */}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {item.description}
                </p>

                {/* 'View Case Study' removed as requested */}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          {/* <Button variant="glass" size="lg" asChild>
            <a href="#contact" className="group">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;

