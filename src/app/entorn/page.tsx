"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Waves,
  Pill,
  Landmark,
  TrainFront,
  Bus,
  TreePine,
} from "lucide-react";
import PageTransition from "@/components/PageTransition";

interface Spot {
  icon: React.ElementType;
  name: string;
  detail: string;
}

const sections: { title: string; spots: Spot[] }[] = [
  {
    title: "Zones de bany",
    spots: [
      {
        icon: Waves,
        name: "Piscina d'Espolla",
        detail: "A 1,2 km del terreny. Piscina municipal oberta a l'estiu.",
      },
      {
        icon: TreePine,
        name: "Riera de Sant Genís",
        detail:
          "A 1,5 km. Un racó natural per refrescar-se envoltat de vegetació de ribera.",
      },
    ],
  },
  {
    title: "Serveis bàsics",
    spots: [
      {
        icon: Pill,
        name: "Farmàcia",
        detail: "Sant Climent Sescebes, a uns 6 km.",
      },
      {
        icon: Landmark,
        name: "Bancs i caixers",
        detail: "Garriguella, a uns 11,5 km.",
      },
    ],
  },
  {
    title: "Transport",
    spots: [
      {
        icon: TrainFront,
        name: "Estació de tren de Llançà",
        detail:
          "Línia Rodalies R1 / Regional. Connexió directa amb Barcelona i Portbou.",
      },
      {
        icon: Bus,
        name: "Ampurdan Bus",
        detail:
          "Línia de bus comarcal amb parades a Espolla i pobles propers.",
      },
    ],
  },
];

export default function Entorn() {
  return (
    <PageTransition>
      {/* Header */}
      <section className="relative flex min-h-[45vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/panoramica-albera.jpg"
          alt="Panoràmica de la serra de l'Albera i l'Empordà"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-forest-900/60" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Espais d&apos;interès
          </h1>
          <p className="mt-3 text-lg text-sand-200">
            Tot el que necessiteu saber sobre els serveis i llocs propers al
            terreny.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="space-y-12">
          {sections.map((section, si) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: si * 0.1 }}
            >
              <h2 className="text-2xl font-bold text-bark-800">
                {section.title}
              </h2>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {section.spots.map((spot) => (
                  <div
                    key={spot.name}
                    className="flex gap-4 rounded-xl border border-sand-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-forest-700/10">
                      <spot.icon className="h-5 w-5 text-forest-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-bark-800">
                        {spot.name}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-bark-700">
                        {spot.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
