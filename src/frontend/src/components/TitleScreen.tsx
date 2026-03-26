import { motion } from "motion/react";

interface TitleScreenProps {
  onStart: () => void;
}

export function TitleScreen({ onStart }: TitleScreenProps) {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 30%, oklch(0.18 0.035 255) 0%, oklch(0.10 0.018 255) 60%, oklch(0.07 0.010 255) 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-banner.dim_1400x600.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, oklch(0.08 0.010 255 / 0.85) 100%)",
        }}
      />

      <div
        className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 opacity-40"
        style={{ borderColor: "#C89A3C" }}
      />
      <div
        className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 opacity-40"
        style={{ borderColor: "#C89A3C" }}
      />
      <div
        className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 opacity-40"
        style={{ borderColor: "#C89A3C" }}
      />
      <div
        className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 opacity-40"
        style={{ borderColor: "#C89A3C" }}
      />

      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.p
          className="font-cinzel text-xs tracking-[0.4em] uppercase mb-6"
          style={{ color: "#C89A3C", opacity: 0.7 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          A Narrative Chronicle
        </motion.p>

        <motion.h1
          className="font-cinzel font-black uppercase leading-none mb-2"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            background:
              "linear-gradient(180deg, #F0CB6A 0%, #C89A3C 40%, #9B7128 70%, #C89A3C 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 30px rgba(200,154,60,0.4))",
            letterSpacing: "0.08em",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.0, ease: "easeOut" }}
        >
          Chronicles
        </motion.h1>

        <motion.p
          className="font-cinzel font-light uppercase"
          style={{
            fontSize: "clamp(0.9rem, 3vw, 1.4rem)",
            color: "#E6E8EE",
            letterSpacing: "0.35em",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          of the Fallen
        </motion.p>

        <motion.div
          className="ornate-divider w-64 my-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <span className="font-cinzel text-sm" style={{ color: "#C89A3C" }}>
            ✦
          </span>
        </motion.div>

        <motion.p
          className="font-crimson italic text-lg max-w-lg mb-12"
          style={{ color: "oklch(0.70 0.01 255)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          Four lives. Four wars. Four truths that history tried to silence.
        </motion.p>

        <motion.button
          className="gold-button px-10 py-4"
          data-ocid="title.primary_button"
          onClick={onStart}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          style={{ borderRadius: "2px" }}
        >
          ✦ &nbsp; Begin the Chronicle &nbsp; ✦
        </motion.button>

        <motion.p
          className="font-cinzel text-xs tracking-widest mt-6"
          style={{ color: "#E6E8EE", opacity: 0.3 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          Use headphones for the best experience
        </motion.p>
      </motion.div>
    </div>
  );
}
