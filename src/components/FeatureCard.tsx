"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="rounded-xl border border-sand-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-forest-700/10">
        <Icon className="h-5 w-5 text-forest-700" />
      </div>
      <h3 className="text-base font-semibold text-bark-800">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-bark-700">{description}</p>
    </motion.div>
  );
}
