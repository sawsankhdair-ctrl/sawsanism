"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";

const images = [
  { src: "/images/fb-post.png",        alt: "Facebook Post Design" },
  { src: "/images/billboard.png",      alt: "Billboard Design" },
  { src: "/images/fb-story.png",       alt: "Facebook Story Design" },
  { src: "/images/magazine.png",       alt: "Magazine Design" },
  { src: "/images/poster.png",         alt: "Poster Design" },
  { src: "/images/outdoor-poster.png", alt: "Outdoor Poster Design" },
  { src: "/images/photo-1.jpg",        alt: "Photography" },
  { src: "/images/photo-2.jpg",        alt: "Photography" },
  { src: "/images/photo-3.jpg",        alt: "Photography" },
  { src: "/images/img-0011.jpg",       alt: "Photo" },
  { src: "/images/img-0418.jpg",       alt: "Photo" },
  { src: "/images/img-1544.jpg",       alt: "Photo" },
  { src: "/images/img-9729.jpg",       alt: "Photo" },
];

export default function Portfolio() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const amount = dir === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-[var(--muted)] mb-4">
            Selected Work
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[var(--foreground)]">
            Portfolio
          </h2>
          <div className="w-16 h-[2px] bg-[var(--accent)] mx-auto mt-6" />
        </motion.div>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[var(--card-bg)]/90 backdrop-blur-sm border border-[var(--card-border)] flex items-center justify-center hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition-all shadow-lg"
          aria-label="Scroll left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[var(--card-bg)]/90 backdrop-blur-sm border border-[var(--card-border)] flex items-center justify-center hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition-all shadow-lg"
          aria-label="Scroll right"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        <div
          ref={scrollRef}
          className="portfolio-scroll flex gap-6 overflow-x-auto px-6 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "thin" }}
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="flex-shrink-0 snap-center"
            >
              <button
                onClick={() => setLightbox(i)}
                className="group relative block w-[300px] sm:w-[350px] lg:w-[400px] aspect-[3/4] rounded-2xl overflow-hidden bg-[var(--card-bg)] border border-[var(--card-border)] hover:shadow-xl transition-all duration-500"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-sm font-medium">{img.alt}</p>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              aria-label="Close lightbox"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(lightbox > 0 ? lightbox - 1 : images.length - 1);
              }}
              className="absolute left-4 text-white/70 hover:text-white transition-colors"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(lightbox < images.length - 1 ? lightbox + 1 : 0);
              }}
              className="absolute right-4 text-white/70 hover:text-white transition-colors"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[85vh] w-full aspect-[3/4]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 80vw"
                unoptimized
              />
            </motion.div>

            <p className="absolute bottom-6 text-white/70 text-sm">
              {images[lightbox].alt} — {lightbox + 1} / {images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
