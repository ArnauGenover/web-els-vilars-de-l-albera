"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Navigation,
  Loader2,
  CheckCircle2,
  XCircle,
  Send,
} from "lucide-react";
import PageTransition from "@/components/PageTransition";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contacte() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const formData = new FormData(e.currentTarget);
      formData.append(
        "access_key",
        process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? ""
      );
      formData.append("subject", "Nou missatge des del web Els Vilars");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        formRef.current?.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-sand-300 bg-white px-4 py-3 text-sm text-bark-800 placeholder:text-sand-400 transition-colors focus:border-forest-700 focus:ring-2 focus:ring-forest-700/20 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60";

  return (
    <PageTransition>
      {/* Header */}
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/terreny-tenda-panoramica.jpg"
          alt="Tenda d'acampada amb vista panoràmica de l'Albera"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-forest-900/60" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Contacte
          </h1>
          <p className="mt-3 text-lg text-sand-200">
            Tens dubtes o vols reservar? Escriu-nos i et respondrem al més
            aviat possible.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-bark-800">
              Envia&apos;ns un missatge
            </h2>

            <form
              ref={formRef}
              onSubmit={onSubmit}
              className="mt-6 space-y-5"
            >
              {/* Honeypot for spam bots */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label
                  htmlFor="nom"
                  className="mb-1 block text-sm font-medium text-bark-800"
                >
                  Nom <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nom"
                  name="name"
                  required
                  disabled={status === "submitting"}
                  className={inputClasses}
                  placeholder="El teu nom"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-bark-800"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={status === "submitting"}
                  className={inputClasses}
                  placeholder="correu@exemple.cat"
                />
              </div>

              <div>
                <label
                  htmlFor="entitat"
                  className="mb-1 block text-sm font-medium text-bark-800"
                >
                  Entitat / Agrupament
                </label>
                <input
                  type="text"
                  id="entitat"
                  name="entitat"
                  disabled={status === "submitting"}
                  className={inputClasses}
                  placeholder="Nom de l'agrupament o entitat"
                />
              </div>

              <div>
                <label
                  htmlFor="missatge"
                  className="mb-1 block text-sm font-medium text-bark-800"
                >
                  Missatge <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="missatge"
                  name="message"
                  required
                  rows={5}
                  disabled={status === "submitting"}
                  className={`${inputClasses} resize-none`}
                  placeholder="Explica'ns què necessites..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-forest-700 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-forest-600 focus:ring-2 focus:ring-forest-700/20 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Enviant...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Enviar missatge
                  </>
                )}
              </button>

              {/* Status message */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    Missatge enviat correctament! Et respondrem aviat.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                  >
                    <XCircle className="h-5 w-5 shrink-0" />
                    Hi ha hagut un error. Torna-ho a provar o escriu-nos
                    directament per email.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-bark-800">
                Informació de contacte
              </h2>

              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-forest-700/10">
                    <MapPin className="h-5 w-5 text-forest-700" />
                  </div>
                  <div>
                    <p className="font-medium text-bark-800">Ubicació</p>
                    <p className="text-sm text-bark-700">
                      Espolla, Alt Empordà, Girona
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-forest-700/10">
                    <Navigation className="h-5 w-5 text-forest-700" />
                  </div>
                  <div>
                    <p className="font-medium text-bark-800">Coordenades GPS</p>
                    <p className="text-sm text-bark-700">
                      42°24&apos;47.06&quot;N 2°59&apos;45.89&quot;E
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-forest-700/10">
                    <Mail className="h-5 w-5 text-forest-700" />
                  </div>
                  <div>
                    <p className="font-medium text-bark-800">Email</p>
                    <p className="text-sm text-bark-700">
                      <a
                        href="mailto:info@elsvilarsdelalbera.cat"
                        className="text-forest-700 hover:underline"
                      >
                        info@elsvilarsdelalbera.cat
                      </a>
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-forest-700/10">
                    <Phone className="h-5 w-5 text-forest-700" />
                  </div>
                  <div>
                    <p className="font-medium text-bark-800">Telèfon</p>
                    <p className="text-sm text-bark-700">+34 600 000 000</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-bark-800">
                Com arribar-hi
              </h3>
              <div className="flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-sand-200 bg-sand-100">
                <iframe
                  title="Ubicació d'Els Vilars de l'Albera"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5858.68!2d2.9961!3d42.4131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sca!2ses!4v1700000000000"
                  className="h-full w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="mt-2 text-xs text-bark-700">
                Coordenades: 42°24&apos;47.06&quot;N 2°59&apos;45.89&quot;E
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
