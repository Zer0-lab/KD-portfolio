import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="h-screen flex flex-col items-center justify-center text-center bg-cover bg-fixed bg-center relative"
      style={{ backgroundImage: "url('/images/landscape.png')" }}
    >
      <motion.img
        src="/images/fox.png"
        alt="Futuristic Fox"
        className="absolute bottom-10 w-48 md:w-64"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.h1 className="text-5xl font-bold relative z-10" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }}>
        Full-Stack Web Developer
      </motion.h1>
      <motion.p className="text-lg mt-2 relative z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        Crafting Interactive Experiences
      </motion.p>
    </section>
  );
}