"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const excursions = [
  {
    title: "Excursió a Baussitges",
    description:
      "Ruta a l'antic poble abandonat de Baussitges, enmig de boscos de sureres centenàries. Un passeig que transporta al passat rural de l'Albera.",
    image: "/images/excursionistes-prat.jpg",
  },
  {
    title: "Excursió al Menhir de la Murtra",
    description:
      "Visita al menhir de la Murtra, un monòlit prehistòric de més de 4.000 anys d'antiguitat. Un testimoni silenciós de les cultures megalítiques de la zona.",
    image: "/images/senyalitzacio-gr.jpg",
  },
  {
    title: "Excursió a Sant Quirze de Colera",
    description:
      "Caminada fins al monestir benedictí de Sant Quirze de Colera (s. IX), un dels monuments romànics més impressionants de l'Alt Empordà.",
    image: "/images/sant-quirze-colera.jpg",
  },
  {
    title: "Excursió a la Font del Roure",
    description:
      "Passejada tranquil·la fins a la Font del Roure, un indret idíl·lic per descansar i gaudir de l'aigua fresca que brolla de la muntanya.",
    image: "/images/riera.jpg",
  },
  {
    title: "El pas del GR-11",
    description:
      "El terreny es troba a tocar del sender de gran recorregut GR-11, que travessa els Pirineus del Mediterrani a l'Atlàntic. Un punt de partida perfecte per a etapes de llarg recorregut.",
    image: "/images/excursionistes-costa.jpg",
  },
];

export default function Excursions() {
  return (
    <PageTransition>
      {/* Header */}
      <section className="relative flex min-h-[45vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/cim-albera.jpg"
          alt="Excursionista al cim de l'Albera amb vista a l'Empordà"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-forest-900/60" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Excursions
          </h1>
          <p className="mt-3 text-lg text-sand-200">
            Rutes i camins per descobrir la riquesa natural i patrimonial de
            l&apos;Albera.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {excursions.map((exc, i) => (
            <motion.article
              key={exc.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group overflow-hidden rounded-xl border border-sand-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={exc.image}
                  alt={exc.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-bark-800">
                  {exc.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-bark-700">
                  {exc.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
