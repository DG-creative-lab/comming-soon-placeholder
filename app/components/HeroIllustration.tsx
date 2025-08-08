"use client";

import { motion } from "framer-motion";

export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 960 420"
      className="w-full h-full"
      aria-hidden
      role="img"
    >
      <defs>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#000" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* floating shelves */}
      <g stroke="#000" strokeWidth="6" fill="none" opacity="0.9">
        <motion.g
          initial={{ y: -4 }}
          animate={{ y: [ -4, 0, -4 ] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <path d="M380 100h120" />
          <path d="M395 116h90" />
          <path d="M415 132h50" />
        </motion.g>

        <motion.g
          initial={{ y: 2 }}
          animate={{ y: [ 2, -2, 2 ] }}
          transition={{ repeat: Infinity, duration: 4, delay: 1 }}
        >
          <path d="M620 120h120" />
          <path d="M640 136h80" />
        </motion.g>
      </g>

      {/* plant on shelf */}
      <motion.g
        initial={{ y: -6 }}
        animate={{ y: [ -6, 0, -6 ] }}
        transition={{ repeat: Infinity, duration: 3.6, delay: 0.5 }}
        filter="url(#soft)"
      >
        <g transform="translate(645, 88)">
          <rect x="-26" y="20" width="52" height="14" rx="7" fill="#eab308" stroke="#000" strokeWidth="6" />
          <path d="M0,20 C-8,8 -6,0 0,-10 C6,0 8,8 0,20Z" fill="#22c55e" stroke="#000" strokeWidth="6" />
          <path d="M-10,14 C-18,2 -16,-6 -10,-14" fill="#16a34a" stroke="#000" strokeWidth="6" />
          <path d="M10,14 C18,2 16,-6 10,-14" fill="#16a34a" stroke="#000" strokeWidth="6" />
        </g>
      </motion.g>

      {/* person + laptop table */}
      <g transform="translate(0,15)">
        {/* head/hat */}
        <g transform="translate(450,145)" filter="url(#soft)">
          <circle cx="30" cy="25" r="38" fill="#60a5fa" stroke="#000" strokeWidth="6" />
          <rect x="2" y="10" width="56" height="18" rx="4" fill="#1f2937" stroke="#000" strokeWidth="6" />
          <circle cx="20" cy="35" r="8" fill="#f59e0b" stroke="#000" strokeWidth="6" />
          <circle cx="40" cy="35" r="8" fill="#f59e0b" stroke="#000" strokeWidth="6" />
        </g>

        {/* laptop */}
        <g transform="translate(382,200)" filter="url(#soft)">
          <rect width="196" height="110" rx="12" fill="#c7d2fe" stroke="#000" strokeWidth="6" />
          <circle cx="98" cy="56" r="8" fill="#f59e0b" stroke="#000" strokeWidth="6" />
        </g>

        {/* desk line */}
        <path d="M240 312 H720" stroke="#000" strokeWidth="8" />

        {/* coffee cup */}
        <motion.g
          initial={{ y: 0 }}
          animate={{ y: [0,-3,0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          transform="translate(300,260)"
          filter="url(#soft)"
        >
          <rect x="-10" y="-20" width="28" height="42" rx="6" fill="#fff" stroke="#000" strokeWidth="6" />
          <rect x="-14" y="-26" width="36" height="10" rx="4" fill="#1f2937" stroke="#000" strokeWidth="6" />
          <circle cx="4" cy="0" r="6" fill="#22c55e" stroke="#000" strokeWidth="6" />
        </motion.g>

        {/* cat */}
        <motion.g
          initial={{ y: 0 }}
          animate={{ y: [0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 3.4, delay: 0.8 }}
          transform="translate(660,275)"
          filter="url(#soft)"
        >
          <rect x="-32" y="-20" width="64" height="32" rx="10" fill="#e5e7eb" stroke="#000" strokeWidth="6" />
          <path d="M-20,-20 l10,-12 l10,12" fill="#e5e7eb" stroke="#000" strokeWidth="6" />
          <circle cx="-10" cy="-5" r="3" fill="#000" />
          <circle cx="10"  cy="-5" r="3" fill="#000" />
          <path d="M-4,2 q4,4 8,0" stroke="#ef4444" strokeWidth="4" fill="none" />
        </motion.g>

        {/* love bubble */}
        <motion.g
          initial={{ scale: 0.9 }}
          animate={{ scale: [0.9, 1.05, 0.9] }}
          transition={{ repeat: Infinity, duration: 2.6 }}
          transform="translate(420,150)"
          filter="url(#soft)"
        >
          <circle r="16" fill="#fff" stroke="#000" strokeWidth="6" />
          <path d="M-4,-2 c-3,-4 -10,1 -5,6 l9,8 l9,-8 c5,-5 -2,-10 -5,-6 c-1,1 -2,2 -4,3 c-2,-1 -3,-2 -4,-3z" fill="#ef4444" />
        </motion.g>
      </g>
    </svg>
  );
}