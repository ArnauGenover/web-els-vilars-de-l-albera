"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  TreePine,
  Droplets,
  Bath,
  ShowerHead,
  UtensilsCrossed,
  Flame,
  ArrowRight,
} from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import PageTransition from "@/components/PageTransition";
import HeroSlideshow from "@/components/HeroSlideshow";

const features = [
  {
    icon: TreePine,
    title: "Terreny de 12.000 m²",
    description:
      "Un espai ampli envoltat de boscos d'alzines i sureres, ideal per a acampar amb grups grans.",
  },
  {
    icon: Droplets,
    title: "Aigua potable",
    description:
      "Accés a aigua potable provinent de la font natural del terreny.",
  },
  {
    icon: Bath,
    title: "2 vàters secs",
    description:
      "Instal·lacions ecològiques que respecten el medi ambient i funcionen sense aigua corrent.",
  },
  {
    icon: ShowerHead,
    title: "2 dutxes",
    description:
      "Dutxes exteriors integrades a l'entorn per refrescar-se després de les excursions.",
  },
  {
    icon: UtensilsCrossed,
    title: "Zona coberta per cuinar",
    description:
      "Espai cobert amb taules i bancs per preparar els àpats protegits del sol i la pluja.",
  },
  {
    icon: Flame,
    title: "Barraca de 9 m² amb llar de foc",
    description:
      "Un petit refugi amb llar de foc per a vetllades nocturnes o dies de mal temps.",
  },
];

const galleryImages = [
  { src: "/images/terreny-tendes-grup.jpg", alt: "Acampada en grup al terreny" },
  { src: "/images/barraca-interior.jpg", alt: "Interior de la barraca amb llar de foc" },
  { src: "/images/collita-olives.jpg", alt: "Collita d'olives al terreny" },
  { src: "/images/vaters-secs-exterior.jpg", alt: "Vàters secs ecològics" },
  { src: "/images/terreny-tenda-arbre.jpg", alt: "Tenda sota l'alzina" },
  { src: "/images/instal-lacions-vista.jpg", alt: "Vista general de les instal·lacions" },
];

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Slideshow */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        <HeroSlideshow />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mb-6 flex justify-center"
          >
            <Image
              src="/images/logo.png"
              alt="Logo Els Vilars de l'Albera"
              width={80}
              height={80}
              className="h-20 w-20 drop-shadow-lg sm:h-24 sm:w-24"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Benvinguts a{" "}
            <span className="text-sand-200">
              Els Vilars de l&apos;Albera
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-sand-100/90 sm:text-xl"
          >
            Terreny d&apos;acampada i natura a l&apos;Alt Empordà. Un espai
            de 12.000 m² pensat per a l&apos;escoltisme, la descoberta i el
            respecte pel medi natural.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4"
          >
            <Link
              href="/contacte"
              className="inline-flex items-center gap-2 rounded-xl bg-forest-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-forest-600 hover:shadow-xl"
            >
              Reserva el teu espai
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/projecte"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
            >
              Coneix el projecte
            </Link>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-16 left-1/2 z-10 -translate-x-1/2 sm:bottom-14"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-5 rounded-full border-2 border-white/40 p-1"
          >
            <div className="mx-auto h-2 w-1 rounded-full bg-white/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-forest-700/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-forest-700">
            Instal·lacions
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-bark-800 sm:text-4xl">
            Què hi trobareu
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-bark-700">
            El terreny disposa de les instal·lacions bàsiques per gaudir
            d&apos;una experiència confortable enmig de la natura.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </section>

      {/* Photo Gallery Mosaic */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-block rounded-full bg-forest-700/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-forest-700">
              Galeria
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-bark-800 sm:text-4xl">
              Descobreix l&apos;espai
            </h2>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative overflow-hidden rounded-xl ${
                  i === 0 || i === 5 ? "row-span-2 aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <p className="absolute bottom-3 left-3 right-3 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {img.alt}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/excursionistes-costa.jpg"
          alt="Excursionistes a l'Albera"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest-900/75" />
        <div className="relative z-10 py-20">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Vols portar el teu agrupament?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-sand-200">
                Posa&apos;t en contacte amb nosaltres per consultar
                disponibilitat i condicions.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
                <Link
                  href="/contacte"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-forest-800 shadow-lg transition-all hover:bg-sand-100 hover:shadow-xl"
                >
                  Contacta&apos;ns
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/excursions"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
                >
                  Veure excursions
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
