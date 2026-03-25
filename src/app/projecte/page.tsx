"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Mountain, Users } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const pillars = [
  {
    icon: Leaf,
    title: "Respecte per la natura",
    text: "Tot el projecte neix de la voluntat de preservar l'entorn natural. Les instal·lacions són ecològiques: vàters secs, energia solar i materials locals. L'objectiu és deixar la menor empremta possible.",
  },
  {
    icon: Mountain,
    title: "Història megalítica",
    text: "L'Albera és una terra rica en patrimoni megalític. Dòlmens i menhirs puntegen el paisatge i connecten els visitants amb milers d'anys d'història humana. El terreny és un punt de partida ideal per explorar-los.",
  },
  {
    icon: Users,
    title: "Escoltisme i educació",
    text: "Els Vilars de l'Albera és un espai pensat per a agrupaments escoltes i grups educatius. Creiem que la natura és la millor aula i que l'experiència a l'aire lliure forma persones més responsables i lliures.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12 },
  }),
};

export default function Projecte() {
  return (
    <PageTransition>
      {/* Header */}
      <section className="relative flex min-h-[45vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/terreny-aeri.jpg"
          alt="Vista aèria del terreny Els Vilars de l'Albera"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-forest-900/60" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            El Projecte
          </h1>
          <p className="mt-3 text-lg text-sand-200">
            La filosofia i els valors que fan d&apos;Els Vilars un lloc
            únic.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="prose prose-stone max-w-none text-bark-700"
        >
          <p className="text-lg leading-relaxed">
            Els Vilars de l&apos;Albera és un terreny d&apos;acampada de
            12.000 m² situat al terme d&apos;Espolla, al cor de la serra de
            l&apos;Albera. Neix de la passió per la muntanya, l&apos;escoltisme
            i la voluntat de crear un espai on els joves puguin connectar amb
            la natura d&apos;una manera respectuosa i educativa.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            El terreny està envoltat d&apos;alzines sureres, roures i matolls
            mediterranis. A pocs minuts a peu es troben dòlmens, menhirs i
            camins ancestrals com el GR-11, que connecta el Mediterrani amb
            l&apos;Atlàntic.
          </p>
        </motion.div>
      </section>

      {/* Pillars */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold text-bark-800">
            Els nostres pilars
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-xl border border-sand-200 p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-forest-700/10">
                  <p.icon className="h-5 w-5 text-forest-700" />
                </div>
                <h3 className="text-lg font-semibold text-bark-800">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-bark-700">
                  {p.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner quote */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border-l-4 border-forest-700 bg-white p-8 shadow-sm"
        >
          <p className="text-lg italic leading-relaxed text-bark-700">
            &ldquo;Aquest terreny ha passat de generació en generació a la
            nostra família. L&apos;hem conservat amb la il·lusió de crear un
            lloc on els joves puguin viure la natura tal com ho fèiem de
            petits. Un racó de món on el temps s&apos;atura i la muntanya
            t&apos;ensenya tot el que necessites saber.&rdquo;
          </p>
          <footer className="mt-4 text-sm font-medium text-forest-700">
            — Propietaris d&apos;Els Vilars de l&apos;Albera
          </footer>
        </motion.blockquote>
      </section>
    </PageTransition>
  );
}
