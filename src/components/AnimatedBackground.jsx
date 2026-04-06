import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

      {/* Grupo 1 */}
      <motion.div
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 h-40 w-40 rounded-full bg-green-200/40 blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -25, 25, 0], y: [0, 20, -15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-10 h-32 w-32 rounded-full bg-green-300/35 blur-3xl"
      />

      <motion.div
        animate={{ x: [0, 20, -20, 0], y: [0, 15, -10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-1/4 h-36 w-36 rounded-full bg-emerald-300/35 blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -30, 30, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-20 h-44 w-44 rounded-full bg-green-400/30 blur-3xl"
      />

      <motion.div
        animate={{ x: [0, 15, -15, 0], y: [0, -10, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-10 h-28 w-28 rounded-full bg-green-100/50 blur-2xl"
      />

      <motion.div
        animate={{ x: [0, -20, 20, 0], y: [0, 10, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-1/3 h-30 w-30 rounded-full bg-emerald-400/25 blur-3xl"
      />

      <motion.div
        animate={{ x: [0, 25, -25, 0], y: [0, -15, 15, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-1/2 h-32 w-32 rounded-full bg-green-500/20 blur-3xl"
      />

    </div>
  );
}
