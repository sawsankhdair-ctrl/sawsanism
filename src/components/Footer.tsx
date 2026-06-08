"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="border-t border-[var(--card-border)] py-12 px-6"
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-[family-name:var(--font-playfair)] text-lg text-[var(--foreground)] mb-2">
          Sawsanism Blog
        </p>
        <p className="text-sm text-[var(--muted)] italic mb-6">
          &ldquo;Where creativity meets intention.&rdquo;
        </p>
        <p className="text-xs text-[var(--muted)]">
          &copy; 2026 Sawsanism Blog. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
