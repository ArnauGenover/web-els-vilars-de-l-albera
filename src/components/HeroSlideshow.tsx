"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    src: "/images/hero-panoramica.jpg",
    alt: "Vista panoràmica del terreny amb les muntanyes de l'Albera",
  },
  {
    src: "/images/terreny-aeri.jpg",
    alt: "Vista aèria del terreny Els Vilars de l'Albera",
  },
  {
    src: "/images/terreny-tenda-panoramica.jpg",
    alt: "Tenda d'acampada amb vista panoràmica de muntanya",
  },
  {
    src: "/images/cim-albera.jpg",
    alt: "Excursionista al cim de l'Albera contemplant l'Empordà",
  },
  {
    src: "/images/terreny-tendes-pins.jpg",
    alt: "Tendes sota els pins al capvespre",
  },
  {
    src: "/images/zona-cuinar.jpg",
    alt: "Zona coberta per cuinar amb vistes a la muntanya",
  },
];

const INTERVAL = 6000;
const ZOOM_DURATION = INTERVAL / 1000 + 1.2;

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, INTERVAL);
    return () => clearInterval(timer);
  }, [advance]);

  return (
    <>
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Single image with Ken Burns zoom */}
          <motion.div
            initial={{ scale: 1.01 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: ZOOM_DURATION, ease: "linear" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              className="object-cover"
              priority={current < 2}
              sizes="100vw"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-forest-900/50 via-forest-900/25 to-forest-900/70" />

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 z-[2] flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Imatge ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current
                ? "w-8 bg-white"
                : "w-3 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </>
  );
}
