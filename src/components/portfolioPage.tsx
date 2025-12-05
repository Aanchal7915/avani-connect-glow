import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/**
 * PortfolioGallerySection.jsx
 *
 * - Single-file gallery section styled with Tailwind
 * - Add your images to the IMAGES array (local imports, public folder paths or external URLs)
 * - Click thumbnails to open a lightbox with Prev/Next
 *
 * Usage:
 * import PortfolioGallerySection from "./components/PortfolioGallerySection";
 * <PortfolioGallerySection />
 */

// ---------- ADD YOUR IMAGES HERE ----------
/*
  Examples:
  - Local import: import img1 from "../assets/img1.jpg"; then use img1 in array
  - Public folder: "/images/img1.jpg" (place file in public/images/)
  - External URL: "https://example.com/image.jpg"
*/
const IMAGES = [
  // Replace these with your images
  "/images/sample1.jpg",
  "/images/sample2.jpg",
  "/images/sample3.jpg",
  "/images/sample4.jpg",
  "/images/sample5.jpg",
  "/images/sample6.jpg",
];

const Card = ({ src, title, index, onView }) => {
  const delay = 0.06 * index;
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ scale: 1.02 }}
      className="relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group"
    >
      <div className="w-full h-52 sm:h-48 md:h-56 lg:h-44 overflow-hidden">
        <img
          src={src}
          alt={title || `Portfolio ${index + 1}`}
          onClick={() => onView(index)}
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105 cursor-pointer"
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-sm font-semibold text-foreground truncate">{title || `Project ${index + 1}`}</h3>
            <p className="text-xs text-muted-foreground mt-1">Click to preview</p>
          </div>

          <button
            onClick={() => onView(index)}
            className="inline-flex items-center gap-2 text-primary text-sm font-medium"
          >
            View <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default function PortfolioGallerySection({ images = IMAGES }) {
  const [items] = useState(images);
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  function openLightbox(i) {
    setLightbox({ open: true, index: i });
  }

  function closeLightbox() {
    setLightbox({ open: false, index: 0 });
  }

  function prev() {
    setLightbox((s) => ({ ...s, index: Math.max(0, s.index - 1) }));
  }
  function next() {
    setLightbox((s) => ({ ...s, index: Math.min(items.length - 1, s.index + 1) }));
  }

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-white border border-gray-100 text-sm font-medium text-primary mb-4">
            Portfolio
          </span>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Our work — visuals you can attach easily
          </h2>

          <p className="mt-4 text-muted-foreground text-lg">
            Add image URLs or import local images and push them into the <code>IMAGES</code> array. The gallery and lightbox will handle the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((src, i) => (
            <div key={src + i} className="group">
              <Card src={src} index={i} onView={openLightbox} />
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a href="#contact" className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-white font-semibold shadow-md hover:shadow-lg transition-all">
            Let's discuss
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a href="#services" className="text-sm text-muted-foreground hover:underline">
            See services
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
          <div className="max-w-5xl w-full bg-white rounded-lg overflow-hidden">
            <div className="flex items-center justify-between p-3 border-b">
              <div className="text-sm text-gray-700 truncate">{`Image ${lightbox.index + 1}`}</div>
              <div className="flex items-center gap-2">
                <button onClick={prev} disabled={lightbox.index === 0} className="px-3 py-1 border rounded disabled:opacity-50">Prev</button>
                <button onClick={next} disabled={lightbox.index === items.length - 1} className="px-3 py-1 border rounded disabled:opacity-50">Next</button>
                <button onClick={closeLightbox} className="px-3 py-1 border rounded">Close</button>
              </div>
            </div>

            <div className="p-4 bg-gray-50 flex items-center justify-center">
              <img src={items[lightbox.index]} alt={`Preview ${lightbox.index + 1}`} className="max-h-[75vh] object-contain" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
